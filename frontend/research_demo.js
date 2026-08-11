const DEMO_POLICY = {key:"usa/chi_ctc", country:"usa", program:"chi_ctc", label:"Expanded Child Tax Credit"};
const CATEGORY_COLORS = {
  Participants:"#745bd6", Positions:"#c079d8", Costs_and_Benefits:"#e98950",
  Information:"#37a48a", Actions:"#e0a83e", Rules:"#5a94dc"
};
const PERSONA_ICONS = ["landmark","wallet-cards","house","users-round","megaphone"];
const PERSONA_COLORS = ["#7055d8","#2f9d84","#df824a","#4f8dc8","#b560bd"];
const PERSONA_ROLE_TITLES = {
  irs_administrator:"IRS Administrator",
  payment_operator:"Payment Operations",
  recipient_parent:"Recipient Parent",
  nonfiler_parent:"Non-filer Parent",
  outreach_navigator:"Outreach Navigator"
};
const DEMO_NODE_SUMMARIES = {
  QualifyingChild:"For the 2021 Child Tax Credit, a qualifying child generally is under age 18 and meets the relationship, support, residency, and citizenship requirements. The increased credit distinguishes children under age 6 from those ages 6-17; Puerto Rico uses an age limit of 18. Eligibility is determined for the reference taxable year, and changes in qualifying-child status can affect advance payments.",
  TaxpayerWithQualifyingChild:"An individual or joint filer with a qualifying child who is eligible for the expanded 2021 Child Tax Credit. The available credit amount is determined by the child's age and the taxpayer's income, with benefits reduced above applicable phaseout thresholds. Eligible taxpayers may receive advance payments based on prior return information and later reconcile them on their tax return."
};
const PREPARED_FILE = "ARPA_Sec9611_plus_IRS_2021_Child_Tax_Credit_Toolkit.pdf";
let demoState = {stage:"source", graph:null, tree:null, personas:[], network:null, fileName:PREPARED_FILE, documentInput:null};

function escDemo(value){
  return String(value ?? "").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function sentenceDemo(value){
  const text = String(value || "").replace(/\s+/g," ").trim();
  const match = text.match(/^.*?[.!?](?:\s|$)/);
  return match ? match[0].trim() : text;
}
function conciseNodeSummary(value,maxSentences=6){
  const sentences=String(value||"").replace(/\s+/g," ").trim().match(/[^.!?]+[.!?]+|[^.!?]+$/g)||[];
  const seen=new Set();
  return sentences.map(sentence=>sentence.trim()).filter(sentence=>{
    const key=sentence.toLowerCase().replace(/\d+/g,"#").replace(/[^a-z# ]/g,"").replace(/\s+/g," ").trim();
    if(!key||seen.has(key))return false;
    seen.add(key); return true;
  }).slice(0,maxSentences).map(sentence=>sentence.length>180?`${sentence.slice(0,177).trim()}...`:sentence).join(" ");
}
function rootPosts(){
  const root = (demoState.tree?.nodes || []).find(node=>node.node_id === "root");
  const phase = root?.phase || {};
  return phase.posts || [];
}
function startStageTransition(nextStage){
  const messages={
    graph:"Constructing policy graph...",
    personas:"Generating stakeholder personas...",
    pathways:"Initializing branching simulation..."
  };
  const app=document.getElementById("demoApp");
  app.innerHTML=`<section class="loading-panel stage-transition"><div><i data-lucide="loader-circle"></i><p>${messages[nextStage]||"Preparing policy simulation..."}</p><span>This may take a moment.</span></div></section>`;
  if(window.lucide) lucide.createIcons();
  window.scrollTo({top:0,behavior:"smooth"});
  window.setTimeout(()=>{
    demoState.stage=nextStage;
    renderStage();
  },2400);
}
function renderStage(){
  document.querySelectorAll(".demo-step").forEach(button=>button.classList.toggle("active",button.dataset.stage===demoState.stage));
  const app = document.getElementById("demoApp");
  if(demoState.stage === "source") app.innerHTML = renderSource();
  if(demoState.stage === "graph") app.innerHTML = renderGraphStage();
  if(demoState.stage === "personas") app.innerHTML = renderPersonaStage();
  if(demoState.stage === "pathways") app.innerHTML = renderPathwayStage();
  bindStage();
  if(window.lucide) lucide.createIcons();
  if(demoState.stage === "graph") requestAnimationFrame(renderKg);
}
function renderSource(){
  const documentInput = demoState.documentInput;
  return `<div class="demo-page">
    <div class="source-grid">
      <section class="demo-panel"><div class="panel-head"><div><div class="panel-kicker">01 · Document input</div><h2>Policy PDF</h2></div><p>Prepared case artifact</p></div>
        <label class="pdf-drop ${documentInput ? "has-file" : ""}" id="pdfDrop">
          <div class="drop-prompt"><i data-lucide="file-up"></i><b>Drop your Policy Plan here</b><span>or choose a file from your computer</span></div>
          <div class="dropped-document" ${documentInput ? "" : "hidden"}>
            <div class="document-accepted"><i data-lucide="circle-check-big"></i><span>Document input accepted</span></div>
            <div class="uploaded-file"><i data-lucide="file-text"></i><div><b id="uploadedFileName">${escDemo(documentInput?.name || "")}</b><span id="uploadedFileMeta">${escDemo(documentInput?.meta || "")}</span></div><i class="replace-icon" data-lucide="replace"></i></div>
            <small>Drop or select another PDF to replace</small>
          </div>
          <input id="pdfInput" type="file" accept="application/pdf" />
        </label>
        <div class="source-file prepared-source" id="preparedSource" draggable="true"><i data-lucide="grip-vertical"></i><i data-lucide="file-text"></i><div><b>${escDemo(PREPARED_FILE)}</b><span>Example policy plan · PDF</span></div><small>Drag example</small></div>
      </section>
      <section class="demo-panel"><div class="panel-head"><div><div class="panel-kicker">Processing pipeline</div><h2>From policy plan to simulation</h2></div></div>
        <ol class="pipeline-list">
          <li><i><i data-lucide="scan-text"></i></i><div><b>Parse policy plan</b><span>Extract policy goals, implementation rules, and actor-relevant facts</span></div><em>READY</em></li>
          <li><i><i data-lucide="network"></i></i><div><b>Construct policy graph</b><span>Structure IAD-oriented concepts and deontic relationships</span></div><em>READY</em></li>
          <li><i><i data-lucide="users-round"></i></i><div><b>Generate stakeholder personas</b><span>Model stakeholder roles, goals, constraints, and positions</span></div><em>READY</em></li>
          <li><i><i data-lucide="git-branch"></i></i><div><b>Simulate branching pathways</b><span>Explore enabling, baseline, and constraining transitions</span></div><em>READY</em></li>
        </ol>
        <button class="demo-action panel-action" data-go="graph">Construct Policy Graph <i data-lucide="arrow-right"></i></button>
      </section>
    </div>
  </div>`;
}
function renderGraphStage(){
  return `<div class="demo-page">
    <section class="graph-layout"><div id="demoGraph" class="demo-graph"></div><aside class="graph-sidebar"><div class="panel-kicker">Policy graph construction</div><h2>Inspect a mechanism</h2><div id="demoGraphDetail" class="node-detail"><p>Select a node in the graph to see its description and connected relations.</p></div><button class="demo-action light graph-next" data-go="personas">Generate Stakeholder Personas <i data-lucide="arrow-right"></i></button></aside></section>
  </div>`;
}
function renderPersonaStage(){
  const profiles = demoState.personas;
  return `<div class="demo-page">
    <section class="persona-grid">${profiles.map((persona,index)=>{
      const color = PERSONA_COLORS[index % PERSONA_COLORS.length];
      const context = persona.policy_role_context || {};
      const displayName = String(persona.name || "Stakeholder").replace(/\s*\([^)]*\)\s*$/, "");
      const demographic = [persona.age ? `Age ${persona.age}` : "", persona.sex, persona.marital_status].filter(Boolean).join(" · ");
      const location = [...new Set([persona.province, persona.district].filter(Boolean))].join(" · ");
      const roleTitle = PERSONA_ROLE_TITLES[persona.stakeholder_type] || "Policy Stakeholder";
      return `<article class="persona-card" style="--accent:${color};--accent-soft:${color}18">
        <header class="persona-card-head">
          <div class="persona-avatar"><img src="assets/persona_avatars/persona-${index+1}.svg" alt="Generated profile illustration for ${escDemo(displayName)}" /></div>
          <div><h3>${escDemo(displayName)}</h3><span class="persona-role">${escDemo(roleTitle)}</span></div>
        </header>
        <dl class="persona-profile">
          <div><dt>Background</dt><dd>${escDemo(demographic || "Profile attributes")}</dd></div>
          <div><dt>Occupation</dt><dd>${escDemo(persona.occupation || "Not specified")}</dd></div>
          <div><dt>Location</dt><dd>${escDemo(location || "Not specified")}</dd></div>
          <div class="persona-objective"><dt>Policy objective</dt><dd>${escDemo(sentenceDemo(context.objectives?.[0] || ""))}</dd></div>
        </dl>
        <section class="persona-constraint"><span>Key constraint</span><p>${escDemo(sentenceDemo(context.constraints?.[0] || "Not specified"))}</p></section>
      </article>`;
    }).join("")}</section>
    <div class="persona-footer"><span>These profile attributes ground later pathway-specific responses in the simulation.</span><button class="demo-action" data-go="pathways">Run Branching Simulation <i data-lucide="arrow-right"></i></button></div>
  </div>`;
}
function renderPathwayStage(){
  return `<div class="demo-page">
    <section class="pathway-demo">
      <iframe class="pathway-frame" title="Expanded Child Tax Credit branching simulation" src="pathway_demo.html?policy=usa%2Fchi_ctc&demo=1&view=demo-public-20260811a"></iframe>
    </section>
  </div>`;
}
function bindStage(){
  document.querySelectorAll("[data-go]").forEach(button=>button.addEventListener("click",()=>startStageTransition(button.dataset.go)));
  if(demoState.stage === "source"){
    const drop = document.getElementById("pdfDrop"); const input = document.getElementById("pdfInput");
    const updateDocument = (name,meta) => {
      demoState.fileName=name;
      demoState.documentInput={name,meta};
      renderStage();
    };
    const setFile = file => { if(!file) return; updateDocument(file.name,`${Math.max(1,Math.round(file.size/1024)).toLocaleString()} KB · local PDF input`); };
    const selectPrepared = () => updateDocument(PREPARED_FILE,"Prepared CTC policy document · PDF");
    input.addEventListener("change",()=>setFile(input.files?.[0]));
    ["dragenter","dragover"].forEach(type=>drop.addEventListener(type,event=>{event.preventDefault();drop.classList.add("dragging");}));
    ["dragleave","drop"].forEach(type=>drop.addEventListener(type,event=>{event.preventDefault();drop.classList.remove("dragging");}));
    drop.addEventListener("drop",event=>event.dataTransfer.files?.[0] ? setFile(event.dataTransfer.files[0]) : selectPrepared());
    const prepared = document.getElementById("preparedSource");
    prepared.addEventListener("dragstart",event=>{event.dataTransfer.effectAllowed="copy";event.dataTransfer.setData("text/plain","prepared-ctc-source");});
    prepared.addEventListener("click",selectPrepared);
  }
  if(demoState.stage === "pathways"){
    const frame = document.querySelector(".pathway-frame");
    frame.addEventListener("load",()=> {
      const doc = frame.contentDocument;
      if(!doc) return;
      doc.body.classList.add("research-demo-embed");
      const style = doc.createElement("style");
      doc.getElementById("studyProgressChrome")?.remove();
      style.textContent=".research-demo-embed{height:100vh;overflow:hidden;background:#fff}.research-demo-embed .study-progress-chrome,.research-demo-embed .tree-top,.research-demo-embed .tree-schema-chain{display:none}.research-demo-embed .tree-shell{width:100%;height:100%;min-height:0;margin:0;padding:0}.research-demo-embed .tree-workspace{grid-template-columns:360px minmax(0,1fr);height:100%;min-height:0;gap:0}.research-demo-embed .tree-phase-inspector{height:100%;max-height:none;border-radius:0;box-shadow:none}.research-demo-embed .tree-phase-inspector .storage-summary{padding:18px 20px}.research-demo-embed .tree-phase-inspector .tree-minimap{display:none}.research-demo-embed .tree-layout{height:100%;min-height:0;overflow:hidden}.research-demo-embed .tree-canvas{height:100%;min-height:0;border-radius:0;border-top:0;border-right:0;border-bottom:0;box-shadow:none;zoom:.84}.research-demo-embed .tree-modal-backdrop{position:fixed;inset:0;padding:24px;overflow:hidden}.research-demo-embed .tree-report-modal{width:min(1020px,calc(100vw - 48px));height:auto;max-height:min(1080px,calc(100vh - 48px))}.research-demo-embed .tree-chat-modal{align-self:flex-start;margin-top:28px;max-height:calc(100vh - 56px)}.research-demo-embed .path-chat-list{max-height:min(46vh,440px)}";
      doc.head.appendChild(style);
    },{once:true});
  }
}
function renderKg(){
  const kg = demoState.graph?.kg;
  const container = document.getElementById("demoGraph");
  const categories=[...new Set(kg.nodes.map(node=>node.iad_category).filter(Boolean))];
  const degreeById=new Map(kg.nodes.map(node=>[node.id,0]));
  kg.edges.forEach(edge=>{
    degreeById.set(edge.source,(degreeById.get(edge.source)||0)+1);
    degreeById.set(edge.target,(degreeById.get(edge.target)||0)+1);
  });
  const positioned = new Map();
  const width=1280, height=780;
  const visibleNodes=[];
  const categoryAnchors=[];
  categories.forEach((category,index)=>{
    const group=kg.nodes.filter(node=>node.iad_category===category).sort((a,b)=>(degreeById.get(b.id)||0)-(degreeById.get(a.id)||0));
    const categoryAngle=-Math.PI/2+(index/categories.length)*Math.PI*2;
    const anchor={
      x:width/2+Math.cos(categoryAngle)*330,
      y:height/2+Math.sin(categoryAngle)*230,
      color:CATEGORY_COLORS[category]||"#8c91a0"
    };
    categoryAnchors.push(anchor);
    group.forEach((node,nodeIndex)=>{
      const localAngle=categoryAngle+nodeIndex*2.3999632297;
      const radius=24+Math.sqrt(nodeIndex+1)*34;
      const x=anchor.x+Math.cos(localAngle)*radius;
      const y=anchor.y+Math.sin(localAngle)*radius*.72;
      positioned.set(node.id,{x,y}); visibleNodes.push(node);
    });
  });
  const highDegree=[...visibleNodes].sort((a,b)=>(degreeById.get(b.id)||0)-(degreeById.get(a.id)||0)).slice(0,5);
  highDegree.forEach((node,index)=>{
    const angle=-Math.PI/2+index*(Math.PI*2/highDegree.length);
    positioned.set(node.id,{x:width/2+Math.cos(angle)*68,y:height/2+Math.sin(angle)*48});
  });
  const centralNode=highDegree[0];
  const adjacency=new Map(visibleNodes.map(node=>[node.id,[]]));
  kg.edges.forEach(edge=>{
    if(adjacency.has(edge.source)&&adjacency.has(edge.target)){
      adjacency.get(edge.source).push(edge.target);
      adjacency.get(edge.target).push(edge.source);
    }
  });
  const distanceById=new Map(centralNode ? [[centralNode.id,0]] : []);
  const queue=centralNode ? [centralNode.id] : [];
  while(queue.length){
    const current=queue.shift();
    adjacency.get(current).forEach(next=>{
      if(distanceById.has(next)) return;
      distanceById.set(next,(distanceById.get(current)||0)+1);
      queue.push(next);
    });
  }
  const maxDistance=Math.max(1,...distanceById.values());
  const nodeDelay=new Map([...visibleNodes].sort((a,b)=>{
    const distanceA=distanceById.get(a.id) ?? maxDistance+2;
    const distanceB=distanceById.get(b.id) ?? maxDistance+2;
    return distanceA-distanceB || (degreeById.get(b.id)||0)-(degreeById.get(a.id)||0);
  }).map((node,index)=>[node.id,0.35+(index/Math.max(1,visibleNodes.length-1))*6.1]));
  const clusterMarkup=categoryAnchors.map((anchor,index)=>`<ellipse cx="${anchor.x}" cy="${anchor.y}" rx="128" ry="88" fill="${anchor.color}" class="kg-cluster kg-build-cluster" style="--appear-delay:${(0.55+index*.13).toFixed(2)}s"></ellipse>`).join("");
  const lineMarkup=kg.edges.filter(edge=>positioned.has(edge.source)&&positioned.has(edge.target)).map(edge=>{
    const from=positioned.get(edge.source),to=positioned.get(edge.target);
    const delay=Math.max(nodeDelay.get(edge.source)||0,nodeDelay.get(edge.target)||0)+.08;
    return `<line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" class="kg-edge kg-build-edge" style="--appear-delay:${delay.toFixed(2)}s"></line>`;
  }).join("");
  const nodeMarkup=visibleNodes.map(node=>{
    const point=positioned.get(node.id), color=CATEGORY_COLORS[node.iad_category]||"#8c91a0";
    const label=String(node.name||"Policy concept").replace(/([a-z])([A-Z])/g,"$1 $2").slice(0,18);
    const radius=highDegree.some(item=>item.id===node.id)?14:node.persona_eligible?10:7;
    return `<g class="kg-node kg-build-node" style="--appear-delay:${(nodeDelay.get(node.id)||0).toFixed(2)}s" data-node-id="${escDemo(node.id)}" tabindex="0"><circle cx="${point.x}" cy="${point.y}" r="${radius}" fill="${color}"></circle><text x="${point.x+radius+5}" y="${point.y+4}">${escDemo(label)}</text></g>`;
  }).join("");
  const legendMarkup=`<div class="kg-overlay-legend"><span class="kg-overlay-title">IAD categories</span><div>${categories.map(category=>`<span class="kg-overlay-item"><i style="background:${CATEGORY_COLORS[category]||"#8c91a0"}"></i>${escDemo(category)}</span>`).join("")}</div></div>`;
  container.innerHTML=`<div class="kg-summary"><span id="kgBuildStatus">Constructing policy graph...</span><b>${kg.nodes.length} concepts · ${kg.edges.length} relationships</b></div><svg class="kg-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Policy graph">${clusterMarkup}${lineMarkup}${nodeMarkup}</svg>${legendMarkup}`;
  container.classList.add("kg-is-building");
  container.querySelectorAll("[data-node-id]").forEach(node=>node.addEventListener("click",()=>renderNodeDetail(node.dataset.nodeId)));
  requestAnimationFrame(()=>requestAnimationFrame(()=>container.classList.add("kg-build-active")));
  window.setTimeout(()=>{
    const status=document.getElementById("kgBuildStatus");
    if(status) status.textContent="Policy graph constructed";
  },7100);
}
function renderNodeDetail(id){
  const kg=demoState.graph?.kg; const node=kg?.nodes.find(item=>item.id===id); if(!node)return;
  const connected=kg.edges.filter(edge=>edge.source===id||edge.target===id);
  const summary=DEMO_NODE_SUMMARIES[node.name] || conciseNodeSummary(node.summary) || "No additional node summary is available.";
  document.getElementById("demoGraphDetail").innerHTML=`<b>${escDemo(node.name)}</b><p>${escDemo(summary)}</p><p><strong>${connected.length}</strong> connected institutional or causal relations<br><span class="panel-kicker">${escDemo(node.iad_category||"Policy concept")}</span></p>`;
}
async function loadArtifacts(){
  const [graphResponse,treeResponse,personasResponse]=await Promise.all([
    fetch(`/api/policies/${DEMO_POLICY.country}/${DEMO_POLICY.program}/graph`),
    fetch(`/api/pathway/${DEMO_POLICY.country}/${DEMO_POLICY.program}/precomputed`),
    fetch(`/api/pathway/${DEMO_POLICY.country}/${DEMO_POLICY.program}/personas`)
  ]);
  if(!graphResponse.ok||!treeResponse.ok||!personasResponse.ok)throw new Error("Prepared policy artifacts could not be loaded.");
  demoState.graph=await graphResponse.json(); demoState.tree=await treeResponse.json(); demoState.personas=(await personasResponse.json()).personas||[];
  renderStage();
}
document.querySelectorAll(".demo-step").forEach(button=>button.addEventListener("click",()=>{demoState.stage=button.dataset.stage;renderStage();window.scrollTo({top:0,behavior:"smooth"});}));
document.getElementById("demoApp").innerHTML='<section class="loading-panel"><div><i data-lucide="loader-circle"></i><p>Preparing policy simulation pipeline…</p></div></section>';
if(window.lucide)lucide.createIcons();
window.addEventListener("message",event=>{
  if(event.origin !== window.location.origin || event.data?.type !== "policy-demo-report-open") return;
  const frame=document.querySelector(".pathway-frame");
  if(frame) requestAnimationFrame(()=>frame.scrollIntoView({block:"center",behavior:"smooth"}));
});
loadArtifacts().catch(error=>{document.getElementById("demoApp").innerHTML=`<section class="loading-panel"><div><p>${escDemo(error.message)}</p></div></section>`;});
