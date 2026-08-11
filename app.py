"""Public, demo-only server for the Expanded Child Tax Credit research demo.

It serves no participant, study, survey, logging, or administration routes.
"""
from __future__ import annotations

import json
import os
from pathlib import Path

import requests
from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

ROOT = Path(__file__).resolve().parent
FRONTEND = ROOT / "frontend"
DATA = ROOT / "demo_data"
POLICY_KEY = "usa/chi_ctc"

app = FastAPI(title="Policy Pathway Research Demo", docs_url=None, redoc_url=None)
app.mount("/assets", StaticFiles(directory=str(FRONTEND / "assets")), name="assets")


class PersonaChatRequest(BaseModel):
    policy_key: str = POLICY_KEY
    persona_name: str = Field(..., min_length=1)
    question: str = Field(..., min_length=1, max_length=4000)
    history: list[dict] = Field(default_factory=list)


def _read_json(filename: str) -> dict | list:
    return json.loads((DATA / filename).read_text(encoding="utf-8"))


def _phase_payload(raw: dict | None) -> dict | None:
    if not raw:
        return None
    posts = raw.get("revised_posts") or raw.get("initial_posts") or []
    document_grounded = raw.get("state_type") == "document_grounded"
    return {
        "phase": raw.get("phase"),
        "direction": raw.get("direction"),
        "posting_order": raw.get("posting_order") or [],
        "phase_summary": "Policy inputs shown below were verified against the source policy document." if document_grounded else raw.get("phase_summary"),
        "state_type": raw.get("state_type"),
        "grounded_values": raw.get("grounded_values") if document_grounded else {},
        "grounded_evidence": raw.get("grounded_evidence") if document_grounded else [],
        "posts": posts,
    }


def _tree_payload() -> dict:
    raw = _read_json("pathway_tree.json")
    nodes = [{
        "node_id": node["node_id"],
        "parent_id": node.get("parent_id"),
        "transition_mode": node.get("transition_mode"),
        "phase_index": node["phase_index"],
        "parent_context_hash": node.get("parent_context_hash"),
        "phase": _phase_payload(node.get("phase_result")),
    } for node in raw["nodes"].values()]
    phases = raw.get("phases") or []
    available = [phase for phase in phases if any(node.get("phase", {}).get("phase") == phase for node in nodes if node.get("phase"))]
    return {
        "policy": {
            "key": POLICY_KEY,
            "label": "Expanded Child Tax Credit",
            "short_label": "CTC",
            "title": "Child Tax Credit Pathway Explorer",
            "description": "Explore how administrative capacity, payment delivery, and access barriers shape child poverty and longer-term well-being.",
            "roles": [
                {"key": "irs_administrator", "label": "IRS administrator"},
                {"key": "payment_operator", "label": "Payment operator"},
                {"key": "recipient_parent", "label": "Recipient parent"},
                {"key": "nonfiler_parent", "label": "Non-filer parent"},
                {"key": "outreach_navigator", "label": "Outreach navigator"},
            ],
        },
        "format_version": raw.get("format_version"),
        "generation_mode": raw.get("generation_mode"),
        "scenario_id": raw.get("scenario_id"),
        "simulation_target": raw.get("simulation_target"),
        "branch_inputs": raw.get("branch_inputs", False),
        "mechanism_planner_enabled": bool(raw.get("mechanism_planner_enabled", False)),
        "transitions": raw.get("transitions", []),
        "phases": phases,
        "available_phases": available,
        "complete": True,
        "nodes": nodes,
    }


def _graph_payload() -> dict:
    raw = _read_json("policy_graph.json")
    nodes = [{key: node.get(key) for key in ("id", "name", "type", "iad_category", "node_family", "is_actor", "persona_eligible", "summary")} for node in raw.get("nodes", [])]
    edges = [{key: edge.get(key) for key in ("id", "type", "source", "target", "deontic", "fact", "activation_condition", "execution_constraint")} for edge in raw.get("edges", [])]
    return {"key": POLICY_KEY, "label": "Expanded Child Tax Credit", "kg": {"stats": {"nodes": len(nodes), "edges": len(edges)}, "nodes": nodes, "edges": edges}}


def _chat_context(persona_name: str) -> dict:
    raw_tree = _read_json("pathway_tree.json")
    scenario = _read_json("scenario_1.json")
    persona = next((item for item in scenario.get("participants", []) if item.get("name") == persona_name), None)
    if not persona:
        raise KeyError(persona_name)
    root_phase = _phase_payload(raw_tree["nodes"]["root"].get("phase_result")) or {}
    root_post = next((post for post in root_phase.get("posts", []) if post.get("persona_name") == persona_name), {})
    return {
        "persona": persona,
        "target": raw_tree.get("simulation_target"),
        "inputs": root_phase.get("grounded_values") or root_post.get("prediction_values") or {},
        "memory": {"phase": root_phase.get("phase"), "narrative": root_post.get("narrative") or "", "evidence": (root_post.get("evidence") or [])[:3]},
    }


def _send_chat(context: dict, question: str, history: list[dict]) -> tuple[str, dict]:
    api_key = os.getenv("DEEPSEEK_API_KEY")
    if not api_key:
        raise HTTPException(503, "Persona chat is not configured. Set DEEPSEEK_API_KEY in Railway Variables.")
    messages = [
        {"role": "system", "content": "You are one stakeholder persona in an exploratory policy simulation. Respond naturally in English from a first-person perspective. Ground your answer in the supplied persona and selected pathway, name one key mechanism or constraint, and state uncertainty where appropriate. Use at most two short paragraphs and 3-5 complete sentences."},
        {"role": "user", "content": json.dumps({"persona_profile": context["persona"], "simulation_target": context["target"], "policy_inputs": context["inputs"], "simulation_memory": context["memory"], "recent_dialogue": history[-4:], "user_question": question}, ensure_ascii=False)},
    ]
    response = requests.post(
        "https://api.deepseek.com/v1/chat/completions",
        headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
        json={"model": "deepseek-chat", "messages": messages, "temperature": 0.65, "max_tokens": 450},
        timeout=90,
    )
    if not response.ok:
        raise HTTPException(502, "The persona-chat provider could not complete this request.")
    payload = response.json()
    answer = (((payload.get("choices") or [{}])[0].get("message") or {}).get("content") or "").strip()
    if not answer:
        raise HTTPException(502, "The persona-chat provider returned an empty response.")
    return answer, payload.get("usage") or {}


@app.get("/", include_in_schema=False)
def root():
    return RedirectResponse("/research_demo.html")


@app.get("/research_demo.html", include_in_schema=False)
def research_demo_page():
    return FileResponse(FRONTEND / "research_demo.html")


@app.get("/api/policies/usa/chi_ctc/graph")
def ctc_graph():
    return _graph_payload()


@app.get("/api/pathway/usa/chi_ctc/precomputed")
def ctc_pathway_tree():
    return _tree_payload()


@app.get("/api/pathway/usa/chi_ctc/personas")
def ctc_personas():
    return {"policy": POLICY_KEY, "personas": _read_json("constructed_personas.json")}


@app.post("/api/pathway/persona-chat")
def persona_chat(req: PersonaChatRequest):
    if req.policy_key != POLICY_KEY:
        raise HTTPException(404, "Only the prepared CTC demonstration is available.")
    try:
        context = _chat_context(req.persona_name)
    except KeyError as exc:
        raise HTTPException(404, f"Persona not found: {req.persona_name}") from exc
    answer, usage = _send_chat(context, req.question.strip(), req.history)
    return {"persona_name": req.persona_name, "answer": answer, "usage": usage}


@app.get("/{asset_name}", include_in_schema=False)
def demo_asset(asset_name: str):
    allowed = {"research_demo.css", "research_demo.js", "pathway_demo.html", "pathway_tree.js", "styles.css", "demo_runtime.js"}
    if asset_name not in allowed:
        raise HTTPException(404, "This deployment contains only the public research demo.")
    return FileResponse(FRONTEND / asset_name)
