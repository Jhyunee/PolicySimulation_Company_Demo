let TREE_PHASES = ["Inputs","Activities","Outputs","Outcomes","Impact"];
const TREE_PHASE_KO = {Inputs:"Inputs",Activities:"Activities",Outputs:"Outputs",Outcomes:"Outcomes",Impact:"Impact"};
const TREE_PHASE_FOCUS = {
  Inputs:"실행에 필요한 자원, 역량과 전제 조건을 살펴봅니다.",
  Activities:"투입된 자원을 활용해 어떤 활동을 수행하는지 살펴봅니다.",
  Outputs:"활동을 통해 직접 발생하는 결과를 살펴봅니다.",
  Outcomes:"활동 결과가 단기·중기적으로 어떤 변화를 만드는지 살펴봅니다.",
  Impact:"사람, 제도, 사회에 미치는 장기적이고 폭넓은 영향을 살펴봅니다.",
};
let TREE_PHASE_SCHEMA = {
  Inputs:[
    ["federal_enforcement_budget_usd","Enforcement budget"],
    ["certified_idr_entity_count","IDR entities"],
    ["qpa_ready_plan_pct","QPA readiness"],
  ],
  Activities:[
    ["qpa_calculations_completed","QPA calculations"],
    ["timely_initial_payment_or_denial_rate","Timely payments / denials"],
    ["idr_cases_initiated","IDR cases"],
  ],
  Outputs:[
    ["protected_claims_correctly_processed_rate","Correctly processed claims"],
    ["notice_compliance_rate","Notice compliance"],
    ["timely_idr_determination_rate","Timely IDR"],
  ],
  Outcomes:[
    ["emergency_oon_bill_prevalence_reduction_pp","Emergency OON reduction"],
    ["nonemergency_oon_bill_prevalence_reduction_pp","Non-emergency OON reduction"],
    ["patient_savings_per_protected_claim_usd","Patient savings"],
  ],
  Impact:[
    ["systemic_oon_billing_prevalence_pct","OON billing prevalence"],
    ["network_adequacy_rate_pct","Network adequacy"],
    ["premium_change_attributable_to_nsa_pct","Premium change"],
  ],
};
const TREE_FIELD_LABELS = {
  monthly_cost_sharing_cap:"Monthly insulin cost-sharing cap",
  reimbursement_deadline_days:"Reimbursement deadline",
  effective_date:"Policy effective date",
  transition_period_end:"Transition period end",
  deductible_not_applicable:"Deductible requirement",
  out_of_network_differential_cap:"Out-of-network total cap",
  lis_category_4_threshold:"LIS Category 4 threshold",
  total_stabilization_funding:"Child-care stabilization funding",
  tribal_base_amount:"Base amount per tribal lead agency",
  state_minimum_subgrant_percentage:"Minimum state subgrant share",
  additional_compliance_burden_for_business:"Additional business compliance burden",
  one_time_transition_cost_for_business:"One-time business transition cost",
  additional_administrative_compliance_cost:"Additional administrative cost",
  annual_program_budget_million_krw:"Annual program budget",
  future_talent_participating_graduate_students_count:"Future-talent graduate participants",
  innovative_talent_participating_graduate_students_count:"Innovative-talent graduate participants",
  max_co_funding_per_project_sgd:"Maximum co-funding per project",
  federal_enforcement_budget_usd:"Federal enforcement budget",
  certified_idr_entity_count:"Certified IDR entities",
  qpa_ready_plan_pct:"QPA-ready plans",
  qpa_calculations_completed:"QPA calculations completed",
  timely_initial_payment_or_denial_rate:"Timely payment or denial rate",
  idr_cases_initiated:"IDR cases initiated",
  protected_claims_correctly_processed_rate:"Protected claims correctly processed",
  notice_compliance_rate:"Notice compliance rate",
  timely_idr_determination_rate:"Timely IDR determination rate",
  emergency_oon_bill_prevalence_reduction_pp:"Emergency OON bill reduction",
  nonemergency_oon_bill_prevalence_reduction_pp:"Non-emergency OON bill reduction",
  patient_savings_per_protected_claim_usd:"Patient savings per protected claim",
  systemic_oon_billing_prevalence_pct:"Systemic OON billing prevalence",
  network_adequacy_rate_pct:"Network adequacy rate",
  premium_change_attributable_to_nsa_pct:"NSA-attributable premium change",
  irs_administrative_budget_usd:"IRS administrative budget",
  irs_staff_allocated_ftes:"IRS staff allocated",
  non_filer_outreach_budget_usd:"Non-filer outreach budget",
  irs_advance_payment_administration_funding:"IRS implementation funding",
  maximum_advance_payment_share:"Maximum advance-payment share",
  maximum_credit_per_child_under_age_6:"Maximum credit for children under 6",
  maximum_credit_per_child_age_6_to_17:"Maximum credit for children ages 6–17",
  bureau_of_fiscal_service_implementation_funding:"Fiscal Service implementation funding",
  advance_payment_period:"Advance-payment period",
  tribal_minimum_subgrant_percentage:"Minimum tribal subgrant share",
  obligation_deadline:"Fund obligation deadline",
  liquidation_deadline:"Fund liquidation deadline",
  advance_payment_disbursements_count:"Advance payments disbursed",
  portal_account_updates_processed:"Portal updates processed",
  non_filer_sign_up_tool_submissions_processed:"Non-filer registrations processed",
  average_monthly_payment_per_child_dollars:"Average monthly payment per child",
  eligible_families_receiving_at_least_one_payment:"Eligible families reached",
  non_filer_households_receiving_payments:"Non-filer households reached",
  spm_child_poverty_rate_2021_pct:"2021 child poverty rate",
  spm_child_poverty_relative_reduction_2020_2021_pct:"Child poverty reduction",
  low_income_food_insufficiency_relative_reduction_pct:"Food insufficiency reduction",
  spm_black_child_poverty_rate_2021_pct:"Black child poverty rate",
  spm_hispanic_child_poverty_rate_2021_pct:"Hispanic child poverty rate",
  intergenerational_income_mobility_index:"Intergenerational mobility",
  child_health_outcome_composite_score:"Child health outcomes",
  long_term_healthcare_cost_savings_usd:"Long-term healthcare savings",
  dealer_registration_count:"Registered dealers",
  manufacturer_certification_count:"Manufacturer certifications",
  advance_payment_claims_processed:"Advance payment claims",
  dealer_training_sessions_conducted:"Dealer training sessions",
  manufacturer_compliance_reports_submitted:"Compliance reports",
  dealer_participation_rate_pct:"Dealer participation rate",
  eligible_vehicle_models_count:"Eligible vehicle models",
  pos_transfer_transaction_count:"Point-of-sale transfers",
  section30d_return_count:"Section 30D returns",
  average_section30d_credit_per_return_usd:"Average credit per return",
  pos_credit_transfer_rate_pct:"Point-of-sale transfer rate",
  critical_mineral_import_dependency_pct:"Critical mineral import dependency",
  ev_market_share_pct:"EV market share",
  transportation_emissions_reduction_mtco2e:"Transportation emissions reduction",
  national_local_refund_budget_krw:"National and local refund budget",
  participating_local_governments_count:"Participating local governments",
  card_issuer_partners_count:"Card issuer partners",
  membership_applications_processed_count:"Membership applications processed",
  transit_usage_records_processed_count:"Transit usage records processed",
  refund_transactions_processed_count:"Refund transactions processed",
  active_members_monthly_count:"Monthly active members",
  total_refund_disbursement_krw:"Total refunds disbursed",
  average_rides_per_eligible_user_per_month:"Average monthly rides",
  cumulative_registered_kpass_users_count:"Cumulative registered users",
  avg_monthly_refund_per_user_krw:"Average monthly refund",
  avg_refund_share_of_transit_spending_pct:"Refund share of transit spending",
  low_income_avg_monthly_refund_per_user_krw:"Low-income monthly refund",
  annual_budget_krw:"연간 예산",
  annual_fellowship_slots:"선발 정원",
  regional_quota_percent:"지역 할당",
  applications_received:"지원서 접수",
  eligible_applicants:"적격 지원자 수",
  fellows_selected:"최종 선발 인원",
  fellows_starting_research:"연구 착수 인원",
  regional_fellows_count:"지역 펠로우",
  fellows_passing_stage_evaluation:"단계평가 통과 인원",
  number_of_sci_e_publications_in_2021_2022:"SCI(E) 논문",
  tenure_track_or_research_continuable_transition_rate:"경력 전환",
  regional_publication_share:"지역 논문 비중",
  young_researcher_retention_rate:"신진 연구자 유지율",
  independent_lab_or_faculty_headcount:"독립 연구자/교원",
  regional_research_gap_reduction:"지역 격차 완화",
};
const TREE_STANCES = {
  enabling:{label:"촉진적 전개", short:"촉진적", color:"#37A48A"},
  baseline:{label:"기준 전개", short:"기준", color:"#745BD6"},
  constraining:{label:"제약적 전개", short:"제약적", color:"#5A94DC"},
  // Legacy whole-run stance keys remain readable for comparison output.
  optimistic:{label:"촉진적 전개", short:"촉진적", color:"#37A48A"},
  neutral:{label:"기준 전개", short:"기준", color:"#745BD6"},
  conservative:{label:"제약적 전개", short:"제약적", color:"#5A94DC"},
};
const TREE_STANCE_ORDER = ["optimistic","neutral","conservative"];
const PRECOMPUTED_TRANSITION_ORDER = ["enabling","baseline","constraining"];
/* ⚠️ baseline 조건에서 전이 라벨 차단.
   경로가 하나뿐인데 "Baseline pathway"라고 표시하면 다른 선택지가 존재한다는 것을
   알려주는 셈이 되어 조작이 새어나간다. 중립 표현으로 대체한다. */
function stanceShortTree(node){
  if(node.col === 0) return "배경 정보";
  if(window.TREE_BASELINE_MODE === true) return "Projected";
  return (TREE_STANCES[node.stance] || TREE_STANCES.neutral).short;
}
function stanceLabelTree(node, fallback="selected pathway"){
  if(node.col === 0) return "policy input";
  if(window.TREE_BASELINE_MODE === true) return "projected development";
  return TREE_STANCES[node.stance]?.label || node.stance || fallback;
}
const TREE_NODE_WIDTH = 172;
const TREE_COMPACT_NODE_WIDTH = 172;
const TREE_COL_GAP = 310;
const PIXEL_COLORS = ["#9FA1FF","#B5BAFF","#8FCFDD","#7DB7F0","#6F6B78"];
let STAKEHOLDER_SEATS = [
  {role:"patient", color:"#9FA1FF", avatar:"ssf_p1_phd_avatar.png"},
  {role:"provider", color:"#B5BAFF", avatar:"ssf_p2_evalpanel_avatar.png"},
  {role:"payer", color:"#8FCFDD", avatar:"ssf_p3_nrf_avatar.png"},
  {role:"regulator", color:"#7DB7F0", avatar:"ssf_p4_ministry_avatar.png"},
  {role:"mediator", color:"#6F6B78", avatar:"ssf_p5_hostinst_avatar.png"},
];
let STAKEHOLDER_VIEWPOINTS = {
  patient:"patient",
  provider:"nonparticipating provider",
  payer:"health plan manager",
  regulator:"policy regulator",
  mediator:"IDR entity",
};
let CONSTRAINT_PATTERNS = [
  ["IDR backlog", /\bIDR\b.{0,35}\b(backlog|bottleneck|capacity|overload|delay)/i],
  ["Notice compliance gaps", /\bnotice\b.{0,35}\b(failure|gap|incomplete|noncompliance|compliance)/i],
  ["Waiver misuse", /\bwaiver\b.{0,30}\b(misuse|exploit|pressure|circumvent|unknow)/i],
  ["Claim reclassification", /\breclassif/i],
  ["QPA readiness gaps", /\bQPA\b.{0,35}\b(readiness|accuracy|error|dispute|limitation)/i],
  ["Processing errors", /\b(processing error|incorrectly processed|calculation error)/i],
  ["Payment delays", /\b(payment|denial).{0,25}\b(delay|late|timely)/i],
  ["Enforcement capacity", /\b(enforcement|audit).{0,35}\b(limited|insufficient|budget|capacity|gap)/i],
  ["Rural access gaps", /\brural\b.{0,35}\b(access|gap|limited|exposed|underserved)/i],
  ["Provider resistance", /\bprovider\b.{0,35}\b(resistance|confidence|incentive|participation|pushback)/i],
  ["Data and system limitations", /\b(data|system|infrastructure|legacy).{0,35}\b(limit|gap|delay|error|readiness)/i],
  ["High-cost service disputes", /\b(high-cost|air ambulance|anesthesia|radiology|specialized service)/i],
  ["Network adequacy pressure", /\bnetwork adequacy\b/i],
  ["Premium pressure", /\bpremium\b.{0,30}\b(increase|pressure|cost|change)/i],
];
let IMPACT_CONSTRAINT_PATTERNS = [
  ["Network adequacy pressure", /\b(network adequacy|narrow(?:er)? networks?|network gaps?|thin(?:ner)? networks?)\b/i],
  ["Premium pass-through risk", /\b(premium(?:s)? (?:increase|rise)|cost-shifting|costs? (?:are |being )?passed (?:on|through)|pass-through)\b/i],
  ["Persistent rural access gaps", /\brural\b.{0,45}\b(access|gap|underserved|shortage|network|exposed|scarcity)/i],
  ["Waiver loophole persistence", /\b(notice-and-consent waiver|waiver loophole|waivers? (?:persist|remain|exploit|strategic))/i],
  ["Provider consolidation risk", /\b(provider|market) consolidation\b/i],
  ["Long-term enforcement gaps", /\b(limited|reactive|insufficient|uneven) enforcement\b|\benforcement gaps?\b/i],
];

let treeData = null;
let precomputedTreeNodes = null;
let expandedPaths = new Set();
let treeNodes = new Map();
let focusedNode = null;
let focusedPath = "root";
let discussionNodeKey = "";
let savedPathways = [];
let comparisonPaths = [];
let comparisonOpen = false;
let comparisonResult = null;
let comparisonLoading = false;
let comparisonError = "";
let comparisonRequestKey = "";
let discussionOpen = false;
let expandedRationaleIndex = null;
let reportPath = "";
let pathwayChatOpen = false;
let pathwayChatPath = "";
let pathwayChatPersona = "";
let pathwayChatTurns = [];
let newlyAddedPaths = new Set();
let completedPathSet = new Set();
let completionNotice = "";
let discussionOpenedAt = null;
let reportOpenedAt = null;
let chatOpenedAt = null;
let activeElapsedMs = 0;
let activeSegmentStartedAt = document.hidden ? null : performance.now();
const treeQuery = new URLSearchParams(window.location.search);
const treePreviewMode = treeQuery.get("previewStudy") === "1";
const treeDemoMode = treeQuery.get("demo") === "1" || window.TREE_DEMO_MODE === true;
const treePracticeMode = treeQuery.get("practice") === "1";
const PATHWAY_COMPARISON_ENABLED = false;
let currentPolicyKey = treePracticeMode ? "usa/chi_ctc" : (treeQuery.get("policy") || "usa/chi_nsa");
const currentPolicyIndex = Math.max(0, Math.min(1, Number(treeQuery.get("policyIndex") || 0)));
const frameworkGuideStorageKey = `policy-framework-guide:${PolicyStudy.participantId || treeQuery.get("variant") || "preview"}`;
const baselineGuideStorageKey = `policy-baseline-guide:${PolicyStudy.participantId || treeQuery.get("variant") || "preview"}`;
const threePathGuideStorageKey = `policy-3path-guide:${PolicyStudy.participantId || treeQuery.get("variant") || "preview"}`;
let frameworkGuideStep = treeQuery.get("guide") === "1" ? 0 : -1;
let frameworkContextGuide = "";
const frameworkGuideIdentity = PolicyStudy.participantId || treeQuery.get("variant") || "preview";
const frameworkContextGuideKey = kind => `policy-${TREE_BASELINE_MODE ? "baseline" : TREE_THREE_PATH_MODE ? "3path" : "framework"}-feature-guide:${kind}:${frameworkGuideIdentity}`;

/* ── Baseline 조건 ───────────────────────────────────────────────────────────
   유저스터디 baseline은 동일한 ToC 구조를 "단일 경로"로만 제시한다.
   유지: 5단계 stage view · pathway canvas 추적 · 노드별 stakeholder discussion  (DR2)
   제거: 분기 생성/선택 · 복수 경로 비교 · persona chat                          (DR3, DR4)
   대체: chat 버튼 → final report 버튼
   ⚠️ 선택되지 않은 분기의 존재를 어떤 방식으로도 노출하지 않는다.               */
const TREE_BASELINE_MODE = window.TREE_BASELINE_MODE === true
  || treeQuery.get("condition") === "baseline";
const TREE_THREE_PATH_MODE = window.TREE_THREE_PATH_MODE === true
  || treeQuery.get("condition") === "3path";
const BASELINE_TRANSITION = "baseline";
const THREE_PATH_TRANSITIONS = ["enabling", "baseline", "constraining"];
const FRAMEWORK_CHAT_LIMIT = 5;
let frameworkChatUsage = {
  enabled: true,
  used: 0,
  limit: FRAMEWORK_CHAT_LIMIT,
  remaining: FRAMEWORK_CHAT_LIMIT,
};
let TREE_VIEW_SCALE = TREE_THREE_PATH_MODE ? 0.84 : 0.68;
const TREE_VIEW_SCALE_MIN = 0.44;
const TREE_VIEW_SCALE_MAX = 0.92;
const TREE_VIEW_SCALE_STEP = 0.08;
let currentPolicyMeta = {
  key:"usa/chi_nsa",
  label:"No Surprises Act",
  short_label:"NSA",
  title:"No Surprises Act Pathway Explorer",
  description:"Explore alternative implementation pathways.",
};

const TREE_PRACTICE_ROUTE = [
  "root/baseline",
  "root/baseline/constraining",
  "root/baseline/constraining/enabling",
  "root/baseline/constraining/enabling/baseline",
];
let treePracticeStep = 0;
document.body.classList.toggle("tree-practice-mode", treePracticeMode);

const TREE_PRACTICE_GUIDES = [
  {
    target:".tree-phase-inspector",
    title:"Begin with the policy inputs",
    copy:"The Input card starts the pathway. The panel on the left summarizes the selected phase, its role, conditions, and available values.",
    action:"Start practice",
  },
  {
    target:'.tree-node[data-path="root/baseline"]',
    title:"Select the next branch",
    copy:"Select the highlighted branch to continue the practice pathway.",
  },
  {
    target:".node-discussion-button",
    title:"Open the stakeholder discussion",
    copy:"Each explored phase can include stakeholder reasoning. Open the highlighted discussion to inspect how the selected development is interpreted.",
  },
  {
    target:'.tree-discussion-modal [data-close-discussion="1"]',
    title:"Review the discussion, then close it",
    copy:"This is the same stakeholder discussion used in the study. Review the perspectives, then select Close to continue the practice pathway.",
  },
  {
    target:'.tree-node[data-path="root/baseline/constraining"]',
    title:"Select the next branch",
    copy:"Select the highlighted branch to continue the practice pathway.",
  },
  {
    target:'.tree-node[data-path="root/baseline/constraining/enabling"]',
    title:"Select the next branch",
    copy:"Select the highlighted branch to continue the practice pathway.",
  },
  {
    target:'.tree-node[data-path="root/baseline/constraining/enabling/baseline"]',
    title:"Complete the pathway to Impact",
    copy:"Select the highlighted Baseline Impact card to complete this illustrative pathway and open its Final Report.",
  },
  {
    target:'.report-document-actions [data-close-report="1"]',
    title:"Review the Final Report",
    copy:"The report brings the selected phases together and summarizes their projected outcomes, mechanisms, constraints, and uncertainty. Review it, then close the report.",
  },
  {
    target:".pathway-chat-button",
    title:"Preview the stakeholder chat",
    copy:"Open Chat to preview the stakeholder conversation interface for the completed pathway.",
  },
  {
    target:'.tree-chat-modal [data-close-path-chat="1"]',
    title:"Review the chat, then close it",
    copy:"This is the same stakeholder chat available in the study. Review the interface, then select Close to finish the practice. You do not need to ask a question during practice.",
  },
  {
    target:".practice-completion-link",
    title:"Practice complete",
    copy:"You have used the same pathway interface, stakeholder discussion, Final Report, and stakeholder chat that appear in the study. Continue to your first policy case.",
  },
];

function practiceExpectedPathTree(){
  return ({1:TREE_PRACTICE_ROUTE[0],4:TREE_PRACTICE_ROUTE[1],5:TREE_PRACTICE_ROUTE[2],6:TREE_PRACTICE_ROUTE[3]})[treePracticeStep] || "";
}

async function practiceFirstPolicyHrefTree(){
  const variantId = treeQuery.get("variant") || "";
  const participantId = treeQuery.get("participant") || PolicyStudy.participantId || "";
  let firstPolicy = "";

  if(treePreviewMode){
    if(!variantId) throw new Error("A study variant is required for preview.");
    const response = await fetch(`/api/study/variants/${encodeURIComponent(variantId)}`);
    if(!response.ok) throw new Error(`Variant HTTP ${response.status}`);
    const variant = await response.json();
    firstPolicy = variant.policy_keys?.[0] || "";
  }else{
    if(!participantId) throw new Error("A participant session is required.");
    const response = await fetch(`/api/study/participants/${encodeURIComponent(participantId)}`);
    if(!response.ok) throw new Error(`Participant HTTP ${response.status}`);
    const participant = await response.json();
    firstPolicy = participant.assigned_policies?.[0] || "";
  }

  if(!firstPolicy) throw new Error("The first assigned policy is unavailable.");
  const query = new URLSearchParams({
    stage:"policy_intro",
    policy:firstPolicy,
    policyIndex:"0",
  });
  if(treePreviewMode){
    query.set("previewStudy", "1");
    query.set("variant", variantId);
  }else{
    query.set("participant", participantId);
  }
  return `survey.html?${query.toString()}`;
}

const TREE_ROLE_COLORS = ["#9FA1FF", "#B5BAFF", "#8FCFDD", "#7DB7F0", "#6F6B78"];
const NSA_AVATARS = {
  patient:"ssf_p1_phd_avatar.png",
  provider:"ssf_p2_evalpanel_avatar.png",
  payer:"ssf_p3_nrf_avatar.png",
  regulator:"ssf_p4_ministry_avatar.png",
  mediator:"ssf_p5_hostinst_avatar.png",
};
const CTC_PERSONA_AVATARS = {
  "Maria Gonzalez":"assets/persona_avatars/persona-1.svg",
  "Marlene K. Ashford":"assets/persona_avatars/persona-2.svg",
  "James Thompson":"assets/persona_avatars/persona-3.svg",
  "Linda Chen":"assets/persona_avatars/persona-4.svg",
  "James Thompson (iq3h88)":"assets/persona_avatars/persona-5.svg",
};
function displayPersonaNameTree(name){
  const raw = String(name || "");
  if(currentPolicyKey === "usa/chi_ctc" && raw === "James Thompson (iq3h88)") return "James Thompson";
  return raw;
}
const PROFILE_AVATARS = [
  "assets/persona_avatars/persona-1.svg",
  "assets/persona_avatars/persona-2.svg",
  "assets/persona_avatars/persona-3.svg",
  "assets/persona_avatars/persona-4.svg",
  "assets/persona_avatars/persona-5.svg",
];
const CTC_CONSTRAINT_PATTERNS = [
  ["Administrative capacity", /\b(IRS|administrative|staff|capacity)\b.{0,45}\b(limit|constraint|shortage|insufficient|delay|burden)/i],
  ["Non-filer access barriers", /\b(non[- ]?filer|registration|sign[- ]?up)\b.{0,45}\b(barrier|access|documentation|identity|trust|language|digital)/i],
  ["Payment delivery risk", /\b(payment|disbursement|deposit)\b.{0,40}\b(delay|error|incorrect|missing|interruption|timing)/i],
  ["Portal and data errors", /\b(portal|data|record|address|bank account)\b.{0,40}\b(error|outdated|mismatch|access|failure)/i],
  ["Uneven outreach", /\b(outreach|community partner|awareness)\b.{0,40}\b(uneven|limited|gap|capacity|trust|reach)/i],
  ["Reconciliation burden", /\b(reconciliation|overpayment|tax filing)\b.{0,40}\b(risk|burden|repay|uncertainty|error)/i],
  ["Temporary policy horizon", /\b(temporary|one[- ]year|expiration|expires|not renewed|short[- ]term)/i],
  ["Unequal subgroup reach", /\b(Black|Hispanic|racial|subgroup|equity)\b.{0,45}\b(gap|unequal|disparity|barrier|reach)/i],
];
const CTC_IMPACT_CONSTRAINT_PATTERNS = [
  ["Temporary policy horizon", /\b(temporary|one[- ]year|expiration|not renewed|short[- ]term)/i],
  ["Long-term attribution uncertainty", /\b(long[- ]term|5[- ]year|10[- ]year|intergenerational)\b.{0,55}\b(uncertain|assumption|attribution|estimate|project)/i],
  ["Unequal access persistence", /\b(non[- ]?filer|racial|Black|Hispanic|underserved)\b.{0,55}\b(gap|barrier|unequal|persist|limited)/i],
  ["Health pathway uncertainty", /\b(health|healthcare|nutrition)\b.{0,55}\b(uncertain|indirect|lag|assumption|persist)/i],
];
const CV_CONSTRAINT_PATTERNS = [
  ["Dealer readiness", /\b(dealer|registration|training)\b.{0,45}\b(capacity|delay|burden|readiness|participation|constraint)/i],
  ["Vehicle eligibility", /\b(vehicle|model|eligib|qualification)\b.{0,45}\b(limit|uncertain|change|constraint|exclude)/i],
  ["Supply-chain compliance", /\b(battery|critical mineral|component|supply chain)\b.{0,50}\b(requirement|compliance|shortage|dependency|constraint)/i],
  ["Point-of-sale transfer", /\b(point.of.sale|POS|credit transfer|advance payment)\b.{0,45}\b(delay|error|uptake|processing|constraint)/i],
  ["Consumer affordability", /\b(buyer|consumer|income|price|affordability)\b.{0,45}\b(limit|barrier|uncertain|constraint|cost)/i],
];
const CV_IMPACT_CONSTRAINT_PATTERNS = [
  ["Critical-mineral dependency", /\bcritical mineral\b.{0,55}\b(import|dependency|supply|constraint|shortage)/i],
  ["Market adoption uncertainty", /\b(EV|electric vehicle|market share|adoption)\b.{0,55}\b(uncertain|slow|limit|constraint|price)/i],
  ["Emissions attribution", /\b(emission|CO2|carbon)\b.{0,55}\b(attribution|uncertain|grid|lifecycle|assumption)/i],
];
const KPASS_CONSTRAINT_PATTERNS = [
  ["Enrollment friction", /\b(enrollment|registration|membership|conversion|회원|가입|전환)\b.{0,45}\b(barrier|delay|friction|failure|제약|어려움|지연)/i],
  ["Usage-data processing", /\b(usage|record|data|이용.{0,6}기록|데이터)\b.{0,45}\b(delay|mismatch|error|latency|지연|오류|불일치)/i],
  ["Refund delivery", /\b(refund|settlement|환급|정산)\b.{0,45}\b(delay|error|failure|bottleneck|지연|오류|병목)/i],
  ["Minimum-use threshold", /\b(15 rides|15회|minimum.use|최소.{0,8}이용)\b/i],
  ["Regional coverage", /\b(local government|region|지역|지자체)\b.{0,45}\b(gap|uneven|capacity|budget|격차|불균형|재정)/i],
  ["Digital access", /\b(app|website|digital|앱|누리집|디지털)\b.{0,45}\b(access|barrier|literacy|접근|장벽)/i],
];

function practicePhaseSummaryTree(phaseName, stance){
  const summaries = {
    Inputs:"The example policy begins with an implementation budget, trained staff, and an outreach plan. These inputs define the capacity available for delivery.",
    Activities:{
      enabling:"Coordination and early outreach strengthen implementation and reduce access barriers.",
      baseline:"Implementation proceeds under expected staffing, participation, and administrative conditions.",
      constraining:"Staffing delays and fragmented coordination weaken implementation capacity.",
    },
    Outputs:{
      enabling:"Broad service delivery increases the number of eligible households reached.",
      baseline:"Service delivery reaches the expected share of eligible households.",
      constraining:"Processing delays reduce service delivery and leave eligible households unreached.",
    },
    Outcomes:{
      enabling:"Targeted corrective outreach helps participation recover after earlier delivery delays.",
      baseline:"Near-term outcomes improve at the expected rate under ordinary participation conditions.",
      constraining:"Uneven access limits near-term improvements among harder-to-reach households.",
    },
    Impact:{
      enabling:"Expanded access supports broader and more durable long-term gains.",
      baseline:"Benefits persist over time, although they remain below the policy's full potential.",
      constraining:"Persistent access barriers limit durable change and widen differences in who benefits.",
    },
  };
  const value = summaries[phaseName];
  return typeof value === "string" ? value : (value?.[stance] || value?.baseline || "");
}

function preparePracticePrecomputedTree(source){
  const data = JSON.parse(JSON.stringify(source));
  data.policy = {
    ...data.policy,
    label:"Illustrative Family Support Program",
    short_label:"Practice case",
    title:"Practice Policy Pathway Explorer",
    description:"Practice how implementation conditions shape an illustrative policy from Inputs to Impact.",
  };
  (data.nodes || []).forEach(node=>{
    const phase = node.phase || {};
    const stance = node.transition_mode || "baseline";
    const summary = practicePhaseSummaryTree(phase.phase, stance);
    phase.phase_summary = summary;
    phase.panel_summary = summary;
    phase.panel_key_constraints = phase.phase === "Inputs"
      ? ["Implementation capacity"]
      : stance === "enabling"
        ? ["Corrective outreach"]
        : stance === "constraining"
          ? ["Processing capacity"]
          : ["Expected participation"];
    phase.grounded_evidence = [];
    phase.grounded_policy_parameters = [];
    if(phase.phase === "Inputs") phase.state_type = "practice_example";
    (phase.posts || []).forEach((post,index)=>{
      const role = data.policy.roles?.find(item=>item.key === post.stakeholder_type)?.label || "stakeholder";
      const narrative = `As a ${role}, I interpret this ${String(phase.phase || "phase").toLowerCase()} development through its implementation capacity and access conditions. ${summary} The projected values are illustrative and should be read as conditional results rather than definitive forecasts.`;
      post.narrative = narrative;
      post.rationale_summary = {narrative_rationale:narrative};
    });
  });
  return data;
}

function configurePolicyTree(precomputed){
  currentPolicyMeta = precomputed.policy || currentPolicyMeta;
  currentPolicyKey = currentPolicyMeta.key || currentPolicyKey;
  if(currentPolicyKey === "company/starbucks"){
    // Explicit units for the reviewed runs; leave genuine sub-1% estimates untouched.
    const sharePercent={
      "root/enabling/enabling":{program_operator:[0.045,4.5]},
      "root/constraining/constraining":{program_operator:[0.09,9],store_partner:[0.045,4.5],customer:[0.062,6.2]}
    };
    (precomputed.nodes || []).forEach(node=>phasePostsTree(node.phase).forEach(post=>{
      const pair=sharePercent[node.node_id]?.[post.stakeholder_type];
      if(pair && post.prediction_values?.personal_cup_order_share===pair[0]) post.prediction_values.personal_cup_order_share=pair[1];
    }));
  }
  TREE_PHASES = precomputed.available_phases?.length
    ? [...precomputed.available_phases]
    : [...(precomputed.phases || TREE_PHASES)];
  document.title = TREE_THREE_PATH_MODE
    ? "3Path Policy Analysis"
    : currentPolicyMeta.title || "Policy Pathway Explorer";
  Object.assign(TREE_FIELD_LABELS, {"travel_campaign_linked_stores_2024": "여행 캠페인 연계 매장", "campaign_activity_intensity": "활동 강도", "digital_channel_activation_frequency": "디지털 활성화 빈도", "personal_cup_order_share": "개인컵 주문 비중", "campaign_reach_estimate": "캠페인 도달 범위", "annual_personal_cup_uses_2024": "2024년 개인컵 이용 건수", "customer_behavior_change": "고객 행동 변화", "environmental_impact_qualitative": "환경 영향"});
  const roles = currentPolicyMeta.roles || [];
  STAKEHOLDER_SEATS = roles.map((role, index)=>({
    role:role.key,
    color:currentPolicyKey === "company/starbucks" ? ({program_operator:"#7055d8",store_manager:"#2f9d84",store_partner:"#df824a",customer:"#4f8dc8"}[role.key] || TREE_ROLE_COLORS[index % TREE_ROLE_COLORS.length]) : TREE_ROLE_COLORS[index % TREE_ROLE_COLORS.length],
    avatar:currentPolicyKey === "usa/chi_nsa" ? NSA_AVATARS[role.key] : null,
  }));
  STAKEHOLDER_VIEWPOINTS = Object.fromEntries(roles.map(role=>[role.key, role.label]));
  const schema = {};
  (precomputed.phases || TREE_PHASES).forEach(phaseName=>{
    const node = (precomputed.nodes || []).find(item=>item.phase?.phase === phaseName);
    const post = node?.phase?.posts?.[0];
    schema[phaseName] = Object.keys(post?.prediction_values || {}).map(key=>[
      key,
      TREE_FIELD_LABELS[key] || key.replaceAll("_", " "),
    ]);
  });
  TREE_PHASE_SCHEMA = schema;
  if(currentPolicyKey === "usa/chi_ctc"){
    CONSTRAINT_PATTERNS = CTC_CONSTRAINT_PATTERNS;
    IMPACT_CONSTRAINT_PATTERNS = CTC_IMPACT_CONSTRAINT_PATTERNS;
  }else if(currentPolicyKey === "usa/chi_clean_vehicle"){
    CONSTRAINT_PATTERNS = CV_CONSTRAINT_PATTERNS;
    IMPACT_CONSTRAINT_PATTERNS = CV_IMPACT_CONSTRAINT_PATTERNS;
  }else if(currentPolicyKey === "kor/chi_kpass"){
    CONSTRAINT_PATTERNS = KPASS_CONSTRAINT_PATTERNS;
    IMPACT_CONSTRAINT_PATTERNS = KPASS_CONSTRAINT_PATTERNS;
  }
}

function dashboardHrefTree(markComplete=false){
  if(treePreviewMode) return "study.html";
  const query = new URLSearchParams();
  ["participant", "policies", "order"].forEach(key=>{
    const value = treeQuery.get(key);
    if(value) query.set(key, value);
  });
  if(markComplete) query.set("completed", currentPolicyKey);
  return `dashboard.html${query.toString() ? `?${query.toString()}` : ""}`;
}
function policySurveyHrefTree(){
  const query = new URLSearchParams({
    stage:"policy",
    participant:treeQuery.get("participant") || "",
    policy:currentPolicyKey,
    policyIndex:treeQuery.get("policyIndex") || "0",
  });
  if(treePreviewMode) query.set("previewStudy","1");
  if(treePreviewMode && treeQuery.get("variant")) query.set("variant",treeQuery.get("variant"));
  return `survey.html?${query.toString()}`;
}
function markPolicyCompleteTree(){
  // The standalone research demo is a free exploration surface, not a study task.
  if(treeDemoMode) return true;
  if(treePreviewMode) return true;
  const answeredChats = pathwayChatTurns.filter(turn=>turn.answers.some(answer=>!answer.pending && !answer.error && answer.answer));
  const pendingChats = pathwayChatTurns.some(turn=>turn.answers.some(answer=>answer.pending));
  const failedChats = pathwayChatTurns.some(turn=>turn.answers.some(answer=>answer.error));
  const blockCompletion = (reason, message)=>{
    completionNotice = message;
    logTreeEvent("policy_completion_blocked", {
      reason,
      completed_paths:[...completedPathSet],
      completed_path_count:completedPathSet.size,
      answered_chat_count:answeredChats.length,
      pending_chat:pendingChats,
      failed_chat:failedChats,
    });
    renderTree();
    return false;
  };
  // Baseline presents one fixed path, but keeps the common stakeholder-chat task.
  if(TREE_BASELINE_MODE){
    if(!answeredChats.length){
      if(pendingChats) return blockCompletion("chat_pending", "Please wait until the stakeholder response is complete before continuing.");
      if(failedChats) return blockCompletion("chat_failed", "The stakeholder response could not be generated. Please retry the question before continuing.");
      return blockCompletion("chat_required", "Please ask at least one stakeholder persona a question before continuing.");
    }
    PolicyStudy.exitEvent("policy_exploration_finished", {
      completed_paths:[...completedPathSet],
      completed_path_count:completedPathSet.size,
      visible_node_count:treeNodes.size,
      chat_turn_count:answeredChats.length,
      active_elapsed_ms:Math.round(activePolicyElapsedTree()),
    });
    return true;
  }
  if(TREE_THREE_PATH_MODE){
    if(completedPathSet.size < 2){
      return blockCompletion("paths_required", `Please review at least two of the three complete pathways before continuing. ${completedPathSet.size} of 2 pathways reviewed.`);
    }
    if(!answeredChats.length){
      if(pendingChats) return blockCompletion("chat_pending", "Please wait until the stakeholder response is complete before continuing.");
      if(failedChats) return blockCompletion("chat_failed", "The stakeholder response could not be generated. Please retry the question before continuing.");
      return blockCompletion("chat_required", "Please ask at least one stakeholder persona a question before continuing.");
    }
    completionNotice = "";
    PolicyStudy.exitEvent("policy_exploration_finished", {
      completed_paths:[...completedPathSet],
      completed_path_count:completedPathSet.size,
      visible_node_count:treeNodes.size,
      chat_turn_count:answeredChats.length,
      active_elapsed_ms:Math.round(activePolicyElapsedTree()),
    });
    return true;
  }
  if(completedPathSet.size < 2){
    return blockCompletion("paths_required", `Please explore at least two different complete pathways through the Impact phase before continuing. ${completedPathSet.size} of 2 pathways completed.`);
  }
  if(!answeredChats.length){
    if(pendingChats) return blockCompletion("chat_pending", "Please wait until the stakeholder response is complete before continuing.");
    if(failedChats) return blockCompletion("chat_failed", "The stakeholder response could not be generated. Please retry the question before continuing.");
    return blockCompletion("chat_required", "Please open a completed pathway and ask at least one stakeholder persona a question before continuing.");
  }
  completionNotice = "";
  PolicyStudy.exitEvent("policy_exploration_finished", {
    completed_paths:[...completedPathSet],
    completed_path_count:completedPathSet.size,
    visible_node_count:treeNodes.size,
    chat_turn_count:answeredChats.length,
    active_elapsed_ms:Math.round(activePolicyElapsedTree()),
  });
  return true;
}

function logTreeEvent(eventType, payload={}, elapsedMs=null){
  return PolicyStudy.event(eventType, payload, elapsedMs);
}

function activePolicyElapsedTree(){
  return activeElapsedMs + (activeSegmentStartedAt == null ? 0 : performance.now() - activeSegmentStartedAt);
}

function updateTreeZoom(nextScale){
  if(TREE_THREE_PATH_MODE) return;
  const canvas = document.querySelector(".tree-canvas");
  const stage = document.querySelector(".tree-canvas-stage");
  const content = document.querySelector(".tree-canvas-content");
  if(!canvas || !stage || !content) return;
  const oldScale = TREE_VIEW_SCALE;
  const centerX = (canvas.scrollLeft + canvas.clientWidth / 2) / oldScale;
  const centerY = (canvas.scrollTop + canvas.clientHeight / 2) / oldScale;
  TREE_VIEW_SCALE = Math.max(TREE_VIEW_SCALE_MIN, Math.min(TREE_VIEW_SCALE_MAX, Number(nextScale.toFixed(2))));
  const width = Number.parseFloat(content.style.width) || 0;
  const height = Number.parseFloat(content.style.height) || 0;
  content.style.setProperty("--tree-view-scale", TREE_VIEW_SCALE);
  stage.style.width = `${Math.ceil(width * TREE_VIEW_SCALE)}px`;
  stage.style.height = `${Math.ceil(height * TREE_VIEW_SCALE)}px`;
  const label = document.querySelector("[data-tree-zoom-label]");
  if(label) label.textContent = `${Math.round(TREE_VIEW_SCALE * 100)}%`;
  const zoomOut = document.querySelector("[data-tree-zoom-out]");
  const zoomIn = document.querySelector("[data-tree-zoom-in]");
  if(zoomOut) zoomOut.disabled = TREE_VIEW_SCALE <= TREE_VIEW_SCALE_MIN;
  if(zoomIn) zoomIn.disabled = TREE_VIEW_SCALE >= TREE_VIEW_SCALE_MAX;
  requestAnimationFrame(()=>{
    canvas.scrollLeft = Math.max(0, centerX * TREE_VIEW_SCALE - canvas.clientWidth / 2);
    canvas.scrollTop = Math.max(0, centerY * TREE_VIEW_SCALE - canvas.clientHeight / 2);
    updateMiniMapViewport();
  });
  logTreeEvent("tree_zoom_changed", {scale:TREE_VIEW_SCALE});
}

function renderTreeZoomControls(){
  if(TREE_BASELINE_MODE || TREE_THREE_PATH_MODE) return "";
  return `<div class="tree-zoom-controls" aria-label="Pathway zoom controls">
    <button type="button" data-tree-zoom-out title="Zoom out" aria-label="Zoom out"><i data-lucide="minus"></i></button>
    <span data-tree-zoom-label>${Math.round(TREE_VIEW_SCALE * 100)}%</span>
    <button type="button" data-tree-zoom-in title="Zoom in" aria-label="Zoom in"><i data-lucide="plus"></i></button>
  </div>`;
}

function closeTimedPanel(kind){
  const openedAt = kind === "discussion" ? discussionOpenedAt : kind === "report" ? reportOpenedAt : chatOpenedAt;
  if(openedAt == null) return;
  logTreeEvent(`${kind}_closed`, {
    path:kind === "chat" ? pathwayChatPath : kind === "report" ? reportPath : discussionNodeKey,
  }, performance.now() - openedAt);
  if(kind === "discussion") discussionOpenedAt = null;
  if(kind === "report") reportOpenedAt = null;
  if(kind === "chat") chatOpenedAt = null;
}

function captureTreeViewport(){
  const canvas = document.querySelector(".tree-canvas");
  return {
    canvasLeft: canvas?.scrollLeft || 0,
    canvasTop: canvas?.scrollTop || 0,
    pageX: window.scrollX || 0,
    pageY: window.scrollY || 0,
  };
}
function captureTreeAnchor(path){
  const canvas = document.querySelector(".tree-canvas");
  const node = [...document.querySelectorAll(".tree-node")]
    .find(element=>element.dataset.path === path);
  if(!canvas || !node) return null;
  const canvasRect = canvas.getBoundingClientRect();
  const nodeRect = node.getBoundingClientRect();
  return {
    path,
    left:nodeRect.left - canvasRect.left,
    top:nodeRect.top - canvasRect.top,
  };
}
function restoreTreeViewport(viewport, anchor=null){
  if(!viewport) return;
  const apply = () => {
    const canvas = document.querySelector(".tree-canvas");
    if(canvas){
      canvas.scrollLeft = viewport.canvasLeft;
      canvas.scrollTop = viewport.canvasTop;
      if(anchor){
        const node = [...canvas.querySelectorAll(".tree-node")]
          .find(element=>element.dataset.path === anchor.path);
        if(node){
          const canvasRect = canvas.getBoundingClientRect();
          const nodeRect = node.getBoundingClientRect();
          canvas.scrollLeft += (nodeRect.left - canvasRect.left) - anchor.left;
          canvas.scrollTop += (nodeRect.top - canvasRect.top) - anchor.top;
        }
      }
    }
    window.scrollTo(viewport.pageX, viewport.pageY);
  };
  apply();
}
function updateMiniMapViewport(){
  const canvas = document.querySelector(".tree-canvas");
  const svg = document.querySelector(".minimap-frame svg");
  const viewport = document.querySelector(".minimap-view");
  if(!canvas || !svg || !viewport) return;
  const mapWidth = Number(svg.dataset.mapWidth || 0);
  const mapHeight = Number(svg.dataset.mapHeight || 0);
  if(!mapWidth || !mapHeight) return;
  viewport.setAttribute("x", String(Math.max(0, canvas.scrollLeft / TREE_VIEW_SCALE)));
  viewport.setAttribute("y", String(Math.max(0, canvas.scrollTop / TREE_VIEW_SCALE)));
  viewport.setAttribute("width", String(Math.min(mapWidth, canvas.clientWidth / TREE_VIEW_SCALE)));
  viewport.setAttribute("height", String(Math.min(mapHeight, canvas.clientHeight / TREE_VIEW_SCALE)));
}
function moveCanvasFromMiniMap(event){
  const canvas = document.querySelector(".tree-canvas");
  const svg = event.currentTarget.querySelector("svg");
  if(!canvas || !svg || !svg.getScreenCTM()) return;
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  const mapped = point.matrixTransform(svg.getScreenCTM().inverse());
  canvas.scrollLeft = Math.max(0, mapped.x * TREE_VIEW_SCALE - canvas.clientWidth / 2);
  canvas.scrollTop = Math.max(0, mapped.y * TREE_VIEW_SCALE - canvas.clientHeight / 2);
  updateMiniMapViewport();
}

function bindTreeCanvasPan(canvas){
  if(!canvas || TREE_THREE_PATH_MODE) return;
  let drag = null;
  canvas.addEventListener("pointerdown", event=>{
    if(event.button !== 0 || event.target.closest("button, a, input, textarea, select")) return;
    drag = {
      pointerId:event.pointerId,
      x:event.clientX,
      y:event.clientY,
      left:canvas.scrollLeft,
      top:canvas.scrollTop,
    };
    canvas.classList.add("is-panning");
    canvas.setPointerCapture(event.pointerId);
    event.preventDefault();
  });
  canvas.addEventListener("pointermove", event=>{
    if(!drag || event.pointerId !== drag.pointerId) return;
    canvas.scrollLeft = drag.left - (event.clientX - drag.x);
    canvas.scrollTop = drag.top - (event.clientY - drag.y);
    updateMiniMapViewport();
  });
  const endPan = event=>{
    if(!drag || event.pointerId !== drag.pointerId) return;
    drag = null;
    canvas.classList.remove("is-panning");
    if(canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
  };
  canvas.addEventListener("pointerup", endPan);
  canvas.addEventListener("pointercancel", endPan);
}

function escTree(s){ return String(s ?? "").replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m])); }
function fmtTree(x){ if(x==null||isNaN(x)) return "-"; return (Math.abs(x)>=100?Math.round(x):Math.round(x*10)/10).toLocaleString(); }
function stanceTree(key){ return treeData.stances.find(s=>s.key===key); }
function phasePostsTree(phase){ return phase?.posts || phase?.revised_posts || phase?.initial_posts || []; }
function phaseValuesTree(phase){
  const out = {};
  Object.entries(phase?.grounded_values || {}).forEach(([k,v])=>{
    if(typeof v === "number" && !Number.isNaN(v)) out[k] = [v];
  });
  phasePostsTree(phase).forEach(p=>{
    Object.entries(p.prediction_values || {}).forEach(([k,v])=>{
      if(typeof v === "number" && !Number.isNaN(v)) (out[k] ||= []).push(v);
    });
  });
  return Object.fromEntries(Object.entries(out).map(([k,arr])=>[k, arr.reduce((a,b)=>a+b,0)/arr.length]));
}
function fieldTree(k){ return TREE_FIELD_LABELS[k] || String(k || "").replaceAll("_"," "); }
const TREE_SOURCE_LABELS = {
  "ARPA_Sec9611_plus_IRS_2021_Child_Tax_Credit_Toolkit.pdf":"American Rescue Plan Act Section 9611: Child Tax Credit Improvements for 2021; IRS Toolkit #2 for Partners: 2021 Child Tax Credit",
  "us_ccdf.pdf":"ARP Act Child Care Stabilization Funds (CCDF-ACF-IM-2021-02)",
  "IRA_InsulinVaccines_Memo_09262022-2.pdf":"Contract Year 2023 Program Guidance Related to Inflation Reduction Act Changes to Part D Coverage of Vaccines and Insulin",
  "nsa_core_L56-1771.md":"Requirements Related to Surprise Billing; Part I - Interim Final Rules",
  "section30d_clean_vehicle_credit_2024.pdf":"Clean Vehicle Credits Under Sections 25E and 30D; Transfer of Credits; Critical Minerals and Battery Components; Foreign Entities of Concern",
  "VerpackG_policy_input_excerpt.pdf":"Draft Act to Advance Household-Side Separate Collection of Recyclable Waste (Bundestag Printed Paper 18/11274)",
  "bk21_2022_plan.pdf":"2022 Basic Plan for the Operation and Management of the Fourth-Stage Brain Korea 21 Program",
  "nais2023.pdf":"Singapore National AI Strategy 2.0 - AI for the Public Good, for Singapore and the World",
  "chi_kpass_core_p1-4.pdf":"K-Pass Public Transit Fare Refund Policy - Official Government Press Release",
  "scot_bus_appended.pdf":"Scotland Young Persons Free Bus Travel Scheme - Policy Note and Amendment BRIA",
};
function groundedSourcesTree(phase){
  const parameterEvidence = (phase?.grounded_policy_parameters || []).flatMap(item=>item?.evidence || []);
  return [...new Set([...(phase?.grounded_evidence || []), ...parameterEvidence]
    .map(item=>String(item?.source || "").trim())
    .filter(Boolean))]
    .map(source=>TREE_SOURCE_LABELS[source] || source.replace(/\.pdf$/i, "").replaceAll("_", " "));
}
function sentenceTree(s, n=1){
  return summarySentencesTree(s).slice(0,n).join(" ");
}
function nodeId(node){ return node.path; }
function rootNode(){
  if(precomputedTreeNodes?.has("root")) return precomputedTreeNodes.get("root");
  return {path:"root", parent:null, stance:"neutral", col:0, phase:stanceTree("neutral").phases[0], x:82, y:260};
}
function nodeFromPath(path){
  if(path === "root") return rootNode();
  if(precomputedTreeNodes?.has(path)) return precomputedTreeNodes.get(path);
  const parts = path.split("/").slice(1);
  const stance = parts[parts.length - 1];
  const col = parts.length;
  return {path, parent:parts.length === 1 ? "root" : `root/${parts.slice(0,-1).join("/")}`, stance, col, phase:stanceTree(stance).phases[col]};
}
function childPaths(path){
  if(precomputedTreeNodes){
    if(TREE_THREE_PATH_MODE){
      const transitions = path === "root"
        ? THREE_PATH_TRANSITIONS
        : [path.split("/")[1]];
      return transitions
        .map(transition=>`${path}/${transition}`)
        .filter(childPath=>precomputedTreeNodes.has(childPath));
    }
    // baseline 조건: all-baseline 경로의 다음 노드 하나만 노출 (형제 분기 비노출)
    const transitions = TREE_BASELINE_MODE ? [BASELINE_TRANSITION] : PRECOMPUTED_TRANSITION_ORDER;
    return transitions
      .map(transition=>`${path}/${transition}`)
      .filter(childPath=>precomputedTreeNodes.has(childPath));
  }
  const node = nodeFromPath(path);
  if(node.col >= TREE_PHASES.length - 1) return [];
  if(TREE_THREE_PATH_MODE){
    if(path === "root") return THREE_PATH_TRANSITIONS.map(transition=>`${path}/${transition}`);
    return [`${path}/${path.split("/")[1]}`];
  }
  if(TREE_BASELINE_MODE) return [`${path}/${BASELINE_TRANSITION}`];
  return TREE_STANCE_ORDER.map(stance=>`${path}/${stance}`);
}
/* baseline 경로 전체(root → Impact)를 한 번에 펼친다.
   Ours는 사용자가 조건을 골라가며 확장하지만, baseline은 선택 행위가 없으므로
   단일 궤적을 처음부터 전부 제시한다. */
function expandBaselineChain(){
  let path = "root";
  let guard = 0;
  while(guard < TREE_PHASES.length + 2){
    const children = childPaths(path);
    if(!children.length) break;
    addChildren(path);
    path = children[0];
    guard += 1;
  }
  return path;
}
function expandThreePathChains(){
  THREE_PATH_TRANSITIONS.forEach(transition=>{
    let path = "root";
    for(let phaseIndex=1; phaseIndex<TREE_PHASES.length; phaseIndex+=1){
      const childPath = `${path}/${transition}`;
      if(precomputedTreeNodes && !precomputedTreeNodes.has(childPath)) break;
      if(!treeNodes.has(childPath)) treeNodes.set(childPath, nodeFromPath(childPath));
      expandedPaths.add(path);
      path = childPath;
    }
  });
  return "root/baseline/baseline/baseline/baseline";
}
function addChildren(path){
  const parent = treeNodes.get(path) || nodeFromPath(path);
  // 114px-tall cards with 146px center spacing leave a 32px visual gap,
  // approximately half of the previous 66px gap.
  const siblingGap = 146;
  const groupGap = 160;
  const offsets = [-siblingGap, 0, siblingGap];
  const childCol = parent.col + 1;
  const existing = [...treeNodes.values()]
    .filter(n => n.col === childCol && n.parent !== path)
    .map(n => n.y);
  let groupTop = Math.max(116, parent.y + offsets[0]);
  let guard = 0;
  const groupConflicts = top => offsets.some(offset =>
    existing.some(otherY => Math.abs(otherY - (top - offsets[0] + offset)) < groupGap)
  );
  while(groupConflicts(groupTop) && guard < 80){
    groupTop += groupGap;
    guard += 1;
  }
  const baseY = groupTop - offsets[0];
  childPaths(path).forEach((childPath, i)=>{
    if(treeNodes.has(childPath)) return;
    const child = nodeFromPath(childPath);
    treeNodes.set(childPath, {
      ...child,
      x:parent.x + 245,
      y:baseY + offsets[i],
    });
    newlyAddedPaths.add(childPath);
  });
  expandedPaths.add(path);
}
function visibleNodes(){
  return [...treeNodes.values()].sort((a,b)=>a.col-b.col || a.y-b.y || a.path.localeCompare(b.path));
}
function layoutNodes(nodes){
  const nodeMap = new Map(nodes.map(n=>[n.path,n]));
  const positions = new Map();
  if(TREE_THREE_PATH_MODE){
    const laneY = {enabling:84, baseline:224, constraining:364};
    const rootY = laneY.baseline;
    positions.set("root", {x:38, y:rootY});
    nodes.forEach(node=>{
      if(node.path === "root") return;
      const lane = node.path.split("/")[1] || "baseline";
      positions.set(node.path, {
        x:38 + node.col * 252,
        y:laneY[lane] || rootY,
      });
    });
    return {
      positions,
      height:476,
      width:38 + (TREE_PHASES.length - 1) * 252 + 386,
      minY:60,
    };
  }
  let cursorY = 132;
  // Keep 114px cards separated by a compact 32px unscaled visual gap.
  // This gives E/B/C siblings roughly half the previous whitespace without
  // allowing card borders or shadows to overlap.
  const leafGap = currentPolicyKey === "usa/chi_ctc" ? 160 : 146;
  const colX = col => 82 + col * TREE_COL_GAP;
  const childOrder = precomputedTreeNodes
    ? PRECOMPUTED_TRANSITION_ORDER
    : TREE_STANCE_ORDER;
  const orderedVisibleChildren = path => childOrder
    .map(stance=>`${path}/${stance}`)
    .filter(childPath=>nodeMap.has(childPath));
  const place = path => {
    const node = nodeMap.get(path);
    if(!node) return {top:cursorY, bottom:cursorY, y:cursorY};
    const children = orderedVisibleChildren(path);
    if(!children.length){
      const y = cursorY;
      positions.set(path, {x:colX(node.col), y});
      cursorY += leafGap;
      return {top:y, bottom:y, y};
    }
    const ranges = children.map(place);
    const first = ranges[0];
    const last = ranges[ranges.length - 1];
    const y = (first.y + last.y) / 2;
    positions.set(path, {x:colX(node.col), y});
    return {
      top:Math.min(y, first.top),
      bottom:Math.max(y, last.bottom),
      y,
    };
  };
  place("root");
  nodes.forEach(n=>{
    if(!positions.has(n.path)){
      const y = cursorY;
      positions.set(n.path, {x:colX(n.col), y});
      cursorY += leafGap;
    }
  });
  const minY = Math.min(...[...positions.values()].map(p=>p.y), 80);
  const shiftY = Math.max(0, 88 - minY);
  if(shiftY){
    positions.forEach((pos, path)=>positions.set(path, {...pos, y:pos.y + shiftY}));
  }
  const maxX = Math.max(...[...positions.values()].map(p=>p.x), 1040);
  if(TREE_BASELINE_MODE){
    const nodeHalfHeight = 64;
    const verticalPadding = 72;
    const nodeTop = Math.min(...[...positions.values()].map(p=>p.y)) - nodeHalfHeight;
    const nodeBottom = Math.max(...[...positions.values()].map(p=>p.y)) + nodeHalfHeight;
    const baselineShift = verticalPadding - nodeTop;
    positions.forEach((pos, path)=>positions.set(path, {...pos, y:pos.y + baselineShift}));
    return {
      positions,
      height:nodeBottom + baselineShift + verticalPadding,
      width:maxX + 280,
      minY:verticalPadding,
    };
  }
  const maxY = Math.max(...[...positions.values()].map(p=>p.y), 720);
  // Keep enough scrollable space below the tree for viewport anchoring when
  // an expanded subtree recenters its ancestors.
  return {positions, height:maxY + 520, width:maxX + 280, minY:minY + shiftY};
}
function focusedTreeNode(){
  return treeNodes.get(focusedPath) || nodeFromPath(focusedPath || "root");
}
function nodeFieldLabelTree(label, maxWords=3){
  const words = String(label || "").trim().split(/\s+/).filter(Boolean);
  return words.length > maxWords ? `${words.slice(0, maxWords).join(" ")}…` : words.join(" ");
}
const TREE_NODE_METRIC_PRIORITIES = {
  "kor/chi_kpass": {
    Outcomes:["avg_monthly_refund_per_user_krw", "avg_refund_share_of_transit_spending_pct"],
  },
  "scot/bus": {
    Outcomes:["travel_affordability_positive_response_rate_pct", "bus_cost_barrier_response_rate_pct"],
  },
};
function nodeMetricEntriesTree(phase){
  const entries = Object.entries(phaseValuesTree(phase));
  const priority = TREE_NODE_METRIC_PRIORITIES[currentPolicyKey]?.[phase?.phase];
  if(!priority?.length) return entries;
  const byKey = new Map(entries);
  const preferred = priority.filter(key=>byKey.has(key)).map(key=>[key, byKey.get(key)]);
  const preferredKeys = new Set(priority);
  return [...preferred, ...entries.filter(([key])=>!preferredKeys.has(key))];
}
function metricRowsTree(phase, limit=3, compactInput=false, compactNodeLabel=false){
  const useFullLabel = phase?.phase === "Outcomes";
  return nodeMetricEntriesTree(phase).slice(0, limit).map(([k,v])=>{
    const fullLabel = useFullLabel ? fieldTree(k) : (COMPACT_PREDICTION_LABELS[k] || fieldTree(k));
    const label = compactNodeLabel ? nodeFieldLabelTree(fullLabel) : fullLabel;
    return `<span class="tree-metric"><small title="${escTree(fieldTree(k))}">${escTree(label)}</small><b>${compactInput ? compactInputValueTree(k, v) : escTree(predictionValueTree(k, v))}</b></span>`;
  }).join("");
}
function verifiedInputRowsTree(phase, limit=6){
  if(currentPolicyKey === "company/starbucks"){
    const confirmed=["여행 캠페인 연계 334개 매장", "탄소중립 포인트 제도: 2023년 2월부터 운영", "STAR★LIGHT: 2024년 1월 출시, 사이렌 오더 연계", "Reuse I can!: 2024년 4월 한 달, 개인컵·매장컵 포함"];
    const unknown=["전용 예산", "인력", "실제 도달", "실행 품질"];
    return `<div class="input-condition-columns" style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px;width:100%;align-items:start">${[["확인 사항",confirmed],["미확인 사항",unknown]].map(([title,items])=>`<section class="phase-prediction-field input-condition-card"><div class="tree-metric"><h4>${title}</h4></div><ul>${items.map(item=>`<li>${escTree(item)}</li>`).join("")}</ul></section>`).join("")}</div>`;
  }

  const fields = Object.entries(phase?.grounded_values || {}).map(([key,value])=>({key,value}));
  const seen = new Set(fields.map(item=>item.key));
  (phase?.grounded_policy_parameters || [])
    .filter(item=>item?.validation_status === "validated" && !seen.has(item.name))
    .slice(0, Math.max(0, limit - fields.length))
    .forEach(item=>{
      seen.add(item.name);
      fields.push({key:item.name, value:item.value});
    });
  const capacityFields = new Set([
    "irs_advance_payment_administration_funding",
    "bureau_of_fiscal_service_implementation_funding",
    "total_stabilization_funding",
    "tribal_base_amount",
  ]);
  const timelineFields = new Set([
    "advance_payment_period",
    "arp_act_enactment_date",
    "obligation_deadline",
    "liquidation_deadline",
    "effective_date",
    "transition_period_end",
  ]);
  const implementationRequirementFields = new Set([
    "reimbursement_deadline_days",
  ]);
  const groups = currentPolicyKey === "usa/chi_ira"
    ? [
        {label:"Policy design", items:[]},
        {label:"Implementation requirements", items:[]},
        {label:"Implementation timeline", items:[]},
      ]
    : [
        {label:"Implementation capacity", items:[]},
        {label:"Policy design", items:[]},
        {label:"Implementation timeline", items:[]},
      ];
  fields.slice(0, limit).forEach(item=>{
    const group = currentPolicyKey === "usa/chi_ira"
      ? (timelineFields.has(item.key) ? groups[2] : implementationRequirementFields.has(item.key) ? groups[1] : groups[0])
      : (capacityFields.has(item.key) ? groups[0] : timelineFields.has(item.key) ? groups[2] : groups[1]);
    group.items.push(item);
  });
  return groups.filter(group=>group.items.length).map(group=>`<section class="verified-input-group">
    <h4>${escTree(group.label)}</h4>
    ${group.items.map(({key,value})=>`<span class="tree-metric"><small title="${escTree(fieldTree(key))}">${escTree(fieldTree(key))}</small><b>${escTree(predictionValueTree(key, value))}</b></span>`).join("")}
  </section>`).join("");
}
function hideNodeMetricsTree(phase){
  return ["Activities","Outputs"].includes(String(phase?.phase || ""));
}
function nodeWidthTree(nodeOrPhase){
  const phase = nodeOrPhase?.phase ? nodeOrPhase.phase : nodeOrPhase;
  return hideNodeMetricsTree(phase) ? TREE_COMPACT_NODE_WIDTH : TREE_NODE_WIDTH;
}
function constraintTagsTree(phase, limit=2){
  const counts = new Map();
  phasePostsTree(phase).forEach(p=>{
    (p.rationale_summary?.key_constraints || []).forEach(x=>{
      const key = String(x || "").trim();
      if(key) counts.set(key, (counts.get(key) || 0) + 1);
    });
  });
  return [...counts.entries()].sort((a,b)=>b[1]-a[1]).slice(0, limit).map(([tag])=>`<em>${escTree(tag)}</em>`).join("");
}
function compactInputValueTree(key, value){
  if(key === "annual_budget_krw" && Number.isFinite(Number(value))) return `${fmtTree(Number(value) / 100000000)}억`;
  if(key === "regional_quota_percent" && Number.isFinite(Number(value))) return `${fmtTree(value)}%`;
  if(key.endsWith("_usd") && Number.isFinite(Number(value))){
    const amount = Number(value);
    if(Math.abs(amount) >= 1000000) return `$${fmtTree(amount / 1000000)}M`;
    if(Math.abs(amount) >= 1000) return `$${fmtTree(amount / 1000)}K`;
  }
  return escTree(predictionValueTree(key, value));
}
function dominantConstraintsTree(phase, limit=2){
  const constraintCounts = new Map();
  phasePostsTree(phase).forEach(post=>{
    cleanConstraintTagsTree(post, 2).forEach(tag=>
      constraintCounts.set(tag, (constraintCounts.get(tag) || 0) + 1)
    );
  });
  return [...constraintCounts.entries()]
    .sort((a,b)=>b[1]-a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([tag])=>tag);
}
function companyQualitativeTagsTree(phase){
  const keys = phase.phase === "Activities" ? ["campaign_activity_intensity", "digital_channel_activation_frequency"] : phase.phase === "Outputs" ? ["campaign_reach_estimate"] : ["environmental_impact_qualitative"];
  const words = {high:"높음",medium:"중간",low:"낮음",frequent:"빈번",periodic:"주기적",infrequent:"드묾",moderate:"보통",limited:"제한적",broad:"넓음",modest:"제한적 환경 영향",negligible:"미미한 환경 영향",significant:"상당한 환경 영향"};
  return `<span class="tree-node-constraint-list">${keys.map(key=>{const vals=[...new Set(phasePostsTree(phase).map(p=>p.prediction_values?.[key]).filter(v=>v!=null))];return `<em title="${escTree(fieldTree(key))}">${escTree(vals.map(v=>words[v]||v).join(" / "))}</em>`}).join("")}</span>`;
}
function processPhaseContentTree(phase){
  if(currentPolicyKey === "company/starbucks") return companyQualitativeTagsTree(phase);
  const constraints = dominantConstraintsTree(phase, 2);
  const fallbacks = phase.phase === "Activities"
    ? ["Operational capacity", "Implementation readiness"]
    : ["Delivery reliability", "Implementation gaps"];
  return `<span class="tree-node-constraint-list">${(constraints.length ? constraints : fallbacks).map(tag=>
    `<em title="${escTree(tag)}">${escTree(tag)}</em>`
  ).join("")}</span>`;
}
function impactConstraintsTree(phase, limit=2){
  const documents = [phase.phase_summary || "", ...phasePostsTree(phase).map(stakeholderTakeTree)];
  return IMPACT_CONSTRAINT_PATTERNS.map(([tag, pattern], order)=>({
    tag,
    order,
    count:documents.reduce((total, document)=>total + (pattern.test(String(document || "")) ? 1 : 0), 0),
  }))
    .filter(item=>item.count > 0)
    .sort((a,b)=>b.count-a.count || a.order-b.order)
    .slice(0, limit)
    .map(item=>item.tag);
}
function impactPhaseContentTree(phase){
  if(currentPolicyKey === "company/starbucks") return companyQualitativeTagsTree(phase);
  const constraints = impactConstraintsTree(phase, 2);
  const fallbacks = currentPolicyKey === "usa/chi_ctc"
    ? ["Long-term attribution uncertainty", "Temporary policy horizon"]
    : ["Long-term enforcement gaps", "Persistent rural access gaps"];
  return `<span class="tree-node-constraint-list">${(constraints.length ? constraints : fallbacks).map(tag=>
    `<em title="${escTree(tag)}">${escTree(tag)}</em>`
  ).join("")}</span>`;
}
function topPredictionTree(p){
  const entries = Object.entries(p.prediction_values || {}).filter(([,v])=>typeof v === "number" && !Number.isNaN(v));
  if(!entries.length) return null;
  const preferred = entries.find(([k])=>k.includes("sci_e") || k.includes("transition") || k.includes("fellows")) || entries[0];
  return {field:fieldTree(preferred[0]), value:fmtTree(preferred[1])};
}
function stakeholderTakeTree(p){
  return p.rationale_summary?.narrative_rationale || p.narrative || "";
}
function stakeholderViewpointTree(p){
  return STAKEHOLDER_VIEWPOINTS[String(p.stakeholder_type || "").toLowerCase()]
    || String(p.stakeholder_type || "stakeholder").replaceAll("_", " ");
}
function summarySentencesTree(text){
  const decimalMark = "\uE000";
  const protectedText = String(text || "")
    .replace(/\s+/g," ")
    .replace(/(\d)\.\s*(?=\d)/g, `$1${decimalMark}`);
  return (protectedText.match(/[^.!?。]+[.!?。]+|[^.!?。]+$/g) || [])
    .map(sentence=>sentence.replaceAll(decimalMark, ".").trim());
}
function stakeholderSummaryTree(p){
  return sentenceTree(stakeholderTakeTree(p), 4);
}
function stakeholderOpinionTree(p){
  return stakeholderSummaryTree(p);
}
function stakeholderBriefOpinionTree(p){
  return sentenceTree(stakeholderTakeTree(p), 1);
}
function cleanConstraintTagsTree(p, limit=2){
  const blocked = /^(explicit|implicit|none|n\/a|na)$/i;
  const seen = new Set();
  const explicit = (p.rationale_summary?.key_constraints || [])
    .map(x=>String(x || "").trim())
    .filter(x=>x && !blocked.test(x) && !/explicit/i.test(x))
    .filter(x=>{
      const key = x.toLowerCase();
      if(seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  const narrative = stakeholderTakeTree(p);
  const derived = CONSTRAINT_PATTERNS
    .filter(([, pattern])=>pattern.test(narrative))
    .map(([tag])=>tag)
    .filter(tag=>{
      const key = tag.toLowerCase();
      if(seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  return [...explicit, ...derived].slice(0, limit);
}
function constraintPillsForPostTree(p, preparedTags=null){
  const tags = preparedTags || cleanConstraintTagsTree(p, 1);
  if(!tags.length) return "";
  return `<section class="discussion-constraints">
    <b>Key constraints</b>
    <span class="speech-tags">${tags.map(t=>`<i>${escTree(t)}</i>`).join("")}</span>
  </section>`;
}
function predictionValueTree(key, value){
  if(key === "annual_personal_cup_uses_2024") return `${fmtTree(Number(value)/10000)}만 건`;
  if(key === "travel_campaign_linked_stores_2024") return `${fmtTree(value)}개`;
  if(key === "personal_cup_order_share") return `${Number(value).toLocaleString("ko-KR",{maximumFractionDigits:2})}%`;
  if(key === "deductible_not_applicable") return value === true ? "Does not apply" : "Applies";
  if(["effective_date","transition_period_end"].includes(key) && /^\d{4}-\d{2}-\d{2}$/.test(String(value || ""))){
    const [year, month, day] = String(value).split("-").map(Number);
    return new Intl.DateTimeFormat("en-US", {year:"numeric", month:"short", day:"numeric", timeZone:"UTC"})
      .format(new Date(Date.UTC(year, month - 1, day)));
  }
  if(!Number.isFinite(Number(value))) return String(value ?? "-");
  const numeric = fmtTree(Number(value));
  if(["monthly_cost_sharing_cap","total_stabilization_funding","tribal_base_amount","irs_advance_payment_administration_funding","maximum_credit_per_child_under_age_6","maximum_credit_per_child_age_6_to_17","bureau_of_fiscal_service_implementation_funding"].includes(key)) return `$${numeric}`;
  if(["avg_monthly_refund_per_user_krw","low_income_avg_monthly_refund_per_user_krw"].includes(key)) return `₩${numeric}`;
  if(key === "maximum_advance_payment_share") return `${numeric}%`;
  if(["additional_compliance_burden_for_business","one_time_transition_cost_for_business","additional_administrative_compliance_cost"].includes(key)) return `€${numeric}`;
  if(key === "annual_program_budget_million_krw") return `${numeric} million KRW`;
  if(key === "max_co_funding_per_project_sgd") return `S$${numeric}`;
  if(key === "reimbursement_deadline_days") return `${numeric} days`;
  if(["out_of_network_differential_cap","lis_category_4_threshold"].includes(key)) return `$${numeric}`;
  if(key.endsWith("_pp")) return `${numeric} pp`;
  if(key.includes("_usd")) return `$${numeric}`;
  if(key.endsWith("_pct") || key.endsWith("_rate") || key.endsWith("_percent") || key.endsWith("_percentage")) return `${numeric}%`;
  return numeric;
}
const COMPACT_PREDICTION_LABELS = {
  federal_enforcement_budget_usd:"Budget",
  certified_idr_entities:"IDR entities",
  certified_idr_entity_count:"IDR entities",
  qpa_ready_plan_pct:"QPA ready",
  qpa_calculations_completed:"QPA completed",
  idr_cases_initiated:"IDR cases",
  timely_initial_payment_or_denial_rate:"Timely decisions",
  protected_claims_correctly_processed_rate:"Correct claims",
  notice_compliance_rate:"Notice compliance",
  timely_idr_determination_rate:"Timely IDR",
  emergency_oon_bill_prevalence_reduction_pp:"Emergency reduction",
  nonemergency_oon_bill_prevalence_reduction_pp:"Non-emergency reduction",
  patient_savings_per_protected_claim_usd:"Patient savings",
  network_adequacy_rate_pct:"Network adequacy",
  systemic_oon_billing_prevalence_pct:"OON prevalence",
  premium_change_attributable_to_nsa_pct:"Premium change",
  irs_administrative_budget_usd:"IRS budget",
  irs_staff_allocated_ftes:"IRS staff",
  non_filer_outreach_budget_usd:"Outreach budget",
  advance_payment_disbursements_count:"Payments",
  portal_account_updates_processed:"Portal updates",
  non_filer_sign_up_tool_submissions_processed:"Non-filer sign-ups",
  average_monthly_payment_per_child_dollars:"Payment / child",
  eligible_families_receiving_at_least_one_payment:"Families reached",
  non_filer_households_receiving_payments:"Non-filers reached",
  spm_child_poverty_rate_2021_pct:"Child poverty",
  spm_child_poverty_relative_reduction_2020_2021_pct:"Poverty reduction",
  low_income_food_insufficiency_relative_reduction_pct:"Food reduction",
  spm_black_child_poverty_rate_2021_pct:"Black children",
  spm_hispanic_child_poverty_rate_2021_pct:"Hispanic children",
  intergenerational_income_mobility_index:"Mobility",
  child_health_outcome_composite_score:"Child health",
  long_term_healthcare_cost_savings_usd:"Health savings"
};
function discussionPredictionsTree(p){
  const entries = Object.entries(p.prediction_values || {});
  if(!entries.length) return "";
  return `<section class="discussion-predictions">
    <b>Predictions</b>
    <dl>${entries.map(([key, value])=>`
      <div>
        <dt title="${escTree(fieldTree(key))}">${escTree(COMPACT_PREDICTION_LABELS[key] || fieldTree(key))}</dt>
        <dd>${escTree(predictionValueTree(key, value))}</dd>
      </div>
    `).join("")}</dl>
  </section>`;
}
function isPathAncestorTree(path, target=focusedPath){
  if(path === "root") return true;
  return target === path || target.startsWith(`${path}/`);
}
function pathStancesTree(path){
  return path === "root" ? [] : path.split("/").slice(1);
}
function pathLabelTree(path){
  const node = treeNodes.get(path) || nodeFromPath(path);
  if(path === "root") return "배경 정보";
  const parts = pathStancesTree(path).map(k=>TREE_STANCES[k]?.short || k);
  return `${node.col+1}. ${TREE_PHASE_KO[node.phase?.phase] || node.phase?.phase} · ${parts.join(" → ")}`;
}
function miniPathTree(path){
  const parts = pathStancesTree(path);
  return `<span class="mini-path">
    <i style="--dot:#C079D8">1</i>
    ${parts.map((k,i)=>`<i style="--dot:${TREE_STANCES[k]?.color || "#999"}">${i+2}</i>`).join("")}
  </span>`;
}
function pathMetricPreviewTree(path){
  const node = treeNodes.get(path) || nodeFromPath(path);
  const values = Object.entries(phaseValuesTree(node.phase || {})).slice(0,2);
  if(!values.length) return "No predictions yet";
  return values.map(([k,v])=>`${fieldTree(k)} ${fmtTree(v)}`).join(" · ");
}
function pathNodesTree(path){
  const parts = pathStancesTree(path);
  const paths = ["root"];
  parts.forEach((_, i)=>paths.push(`root/${parts.slice(0, i + 1).join("/")}`));
  return paths.map(p=>treeNodes.get(p) || nodeFromPath(p));
}
function comparisonCodeTree(path){
  const codes = {
    enabling:"E", baseline:"B", constraining:"C",
    optimistic:"E", neutral:"B", conservative:"C",
  };
  return pathStancesTree(path).map(stance=>codes[stance] || String(stance || "?").slice(0,1).toUpperCase()).join(" → ");
}
function comparisonConstraintTextTree(node){
  const constraints = phaseConstraintDataTree(node?.phase || {}, 2).map(({tag})=>tag);
  return constraints.length ? constraints.join(" · ") : "No distinct constraint identified";
}
function comparisonSelectionKeyTree(){
  return comparisonPaths.length === 2 ? `${currentPolicyKey}::${comparisonPaths.join("::")}` : "";
}
function comparisonDeltaTree(field, row){
  const delta = row?.delta_b_minus_a;
  if(delta == null || !Number.isFinite(Number(delta))) return "Not comparable";
  const numeric = Number(delta);
  const sign = numeric > 0 ? "+" : "";
  const formatted = predictionValueTree(field, Math.abs(numeric));
  const value = numeric < 0 ? `−${formatted}` : `${sign}${formatted}`;
  const relative = Number.isFinite(Number(row.relative_delta_pct))
    ? ` (${Number(row.relative_delta_pct) > 0 ? "+" : ""}${fmtTree(Number(row.relative_delta_pct))}%)`
    : "";
  return `${value}${relative}`;
}
function comparisonMetricsTableTree(phaseName){
  const phase = (comparisonResult?.metrics || []).find(item=>item.phase === phaseName);
  const rows = phase?.metrics || [];
  if(!rows.length) return `<p class="comparison-no-metrics">No quantitative estimate was recorded for this phase.</p>`;
  return `<div class="comparison-metric-table" role="table" aria-label="${escTree(phaseName)} quantitative comparison">
    <div class="comparison-metric-head" role="row"><span>Metric</span><span>Path A</span><span>Path B</span><span>Difference (B − A)</span></div>
    ${rows.map(row=>`<div class="comparison-metric-row" role="row">
      <b title="${escTree(fieldTree(row.field))}">${escTree(fieldTree(row.field))}</b>
      <span>${row.value_a == null ? "—" : escTree(predictionValueTree(row.field, row.value_a))}</span>
      <span>${row.value_b == null ? "—" : escTree(predictionValueTree(row.field, row.value_b))}</span>
      <strong>${escTree(comparisonDeltaTree(row.field, row))}</strong>
    </div>`).join("")}
  </div>`;
}
function comparisonProfileTree(label, profile={}){
  return `<article class="comparison-profile">
    <header><span>${label}</span><b>${escTree(comparisonCodeTree(comparisonPaths[label === "A" ? 0 : 1]))}</b></header>
    <dl>
      <div><dt>Primary bottleneck</dt><dd>${escTree(profile.primary_bottleneck || "Not identified")}</dd></div>
      <div><dt>Enabling condition</dt><dd>${escTree(profile.enabling_condition || "Not identified")}</dd></div>
      <div><dt>Limiting condition</dt><dd>${escTree(profile.limiting_condition || "Not identified")}</dd></div>
    </dl>
  </article>`;
}
function comparisonAnalysisTree(nodesA, nodesB){
  if(comparisonLoading) return `<section class="comparison-generating" aria-live="polite"><i data-lucide="loader-circle"></i><div><b>Preparing a comparison report...</b><p>Comparing the selected pathways phase by phase.</p></div></section>`;
  if(comparisonError) return `<section class="comparison-generating error" aria-live="polite"><i data-lucide="circle-alert"></i><div><b>Comparison could not be generated</b><p>${escTree(comparisonError)}</p><button type="button" data-retry-comparison="1">Try again</button></div></section>`;
  const analysis = comparisonResult?.analysis;
  if(!analysis) return "";
  const executive = analysis.executive_summary || {};
  const phaseMap = new Map((analysis.phase_comparisons || []).map(item=>[item.phase, item]));
  const firstDivergence = nodesA.findIndex((node, index)=>index > 0 && node.stance !== nodesB[index]?.stance);
  const phases = TREE_PHASES.map((phaseName, index)=>{
    const item = phaseMap.get(phaseName) || {};
    const nodeA = nodesA[index] || {};
    const nodeB = nodesB[index] || {};
    const shared = index === 0 || nodeA.stance === nodeB.stance;
    const beforeDivergence = firstDivergence > index;
    const expanded = firstDivergence < 0 ? index === TREE_PHASES.length - 1 : index >= firstDivergence;
    const phaseState = beforeDivergence
      ? "Shared before divergence"
      : shared ? "Shared stance after divergence" : "Different development conditions";
    return `<details class="comparison-synthesis-phase ${shared ? "shared" : "different"}" ${expanded ? "open" : ""}>
      <summary><span>${index + 1}</span><div><b>${escTree(phaseName)}</b><em>${phaseState}</em></div></summary>
      <div class="comparison-synthesis-phase-body">
        <div class="comparison-condition-pair"><span>A · ${escTree(index === 0 ? "Policy input" : stanceShortTree(nodeA))}</span><span>B · ${escTree(index === 0 ? "Policy input" : stanceShortTree(nodeB))}</span></div>
        <div class="comparison-phase-interpretation">
          <section><b>What changes</b><p>${escTree(item.key_difference || "No grounded difference was identified.")}</p></section>
          <section><b>Why it matters</b><p>${escTree(item.downstream_implication || "No distinct downstream implication was identified.")}</p></section>
        </div>
        <div class="comparison-bottleneck-pair"><p><b>A · Bottleneck</b>${escTree(item.bottleneck_a || "Not identified")}</p><p><b>B · Bottleneck</b>${escTree(item.bottleneck_b || "Not identified")}</p></div>
        <details class="comparison-metrics-details" ${shared ? "" : "open"}>
          <summary>Quantitative estimates</summary>
          ${comparisonMetricsTableTree(phaseName)}
        </details>
      </div>
    </details>`;
  }).join("");
  const divergenceFactors = analysis.divergence_factors || [];
  const uncertainties = analysis.uncertainties || [];
  return `<section class="comparison-executive-grid">
      <article><span>Where the pathways diverge</span><p>${escTree(executive.critical_divergence || "Not identified")}</p></article>
      <article><span>Overall contrast</span><p>${escTree(executive.overall_contrast || "Not identified")}</p></article>
    </section>
    <p class="comparison-decision-note"><b>Scope of comparison:</b> ${escTree(executive.comparison_scope || "The comparison is limited to the supplied pathway reports and simulation estimates.")}</p>
    <section class="comparison-closing-grid">
      <article><span>Conditions shaping the divergence</span>${divergenceFactors.length ? `<ol>${divergenceFactors.map(item=>`<li><b>${escTree(item.phase || "Pathway")}</b><p>${escTree(item.condition || "")}</p><small class="comparison-factor-roles"><span><strong>A</strong>${escTree(item.role_in_pathway_a || "Not identified")}</span><span><strong>B</strong>${escTree(item.role_in_pathway_b || "Not identified")}</span></small></li>`).join("")}</ol>` : "<p>None identified.</p>"}</article>
      <article><span>Uncertainty and verification needs</span>${uncertainties.length ? `<ul>${uncertainties.map(item=>`<li>${escTree(item)}</li>`).join("")}</ul>` : "<p>No additional uncertainty was identified.</p>"}</article>
    </section>
    <section class="comparison-synthesis-list"><header><span>Phase-by-phase comparison</span><p>Shared phases before the first divergence are collapsed. Open any phase to review its details.</p></header>${phases}</section>
    <footer class="comparison-ai-note"><p>Interpretive summary based on the selected pathway reports. Quantitative differences are calculated directly from the simulation outputs.</p></footer>`;
}
function renderComparisonModalTree(){
  if(!PATHWAY_COMPARISON_ENABLED) return "";
  if(!comparisonOpen || comparisonPaths.length !== 2) return "";
  const [pathA, pathB] = comparisonPaths;
  const nodesA = pathNodesTree(pathA);
  const nodesB = pathNodesTree(pathB);
  const firstDivergence = nodesA.findIndex((node, index)=>index > 0 && node.stance !== nodesB[index]?.stance);
  const divergenceLabel = firstDivergence > 0
    ? `${firstDivergence + 1}. ${TREE_PHASE_KO[nodesA[firstDivergence]?.phase?.phase] || nodesA[firstDivergence]?.phase?.phase}`
    : "No stance divergence identified";
  return `<div class="tree-modal-backdrop" data-close-comparison="1">
    <section class="tree-comparison-modal" role="dialog" aria-modal="true" aria-label="Pathway comparison">
      <header class="tree-modal-head comparison-modal-head">
        <div><span>Pathway comparison</span><h2>Compare selected pathways</h2><p>Review where the selected routes diverge and how their conditions lead to different downstream results.</p></div>
        <button data-close-comparison="1" type="button">Close</button>
      </header>
      <section class="comparison-route-summary">
        <div><span>A</span><b>${escTree(comparisonCodeTree(pathA))}</b></div>
        <div><span>B</span><b>${escTree(comparisonCodeTree(pathB))}</b></div>
        <aside><span>First divergence</span><b>${escTree(divergenceLabel)}</b></aside>
      </section>
      ${comparisonAnalysisTree(nodesA, nodesB)}
    </section>
  </div>`;
}
function renderComparisonDockTree(){
  if(!PATHWAY_COMPARISON_ENABLED) return "";
  if(TREE_BASELINE_MODE || treeDemoMode) return "";
  const slots = [0,1].map(index=>{
    const path = comparisonPaths[index];
    if(!path){
      const isNextSlot = index === comparisonPaths.length;
      return `<div class="comparison-path-slot empty ${isNextSlot ? "drop-ready" : "waiting"}" ${isNextSlot ? `data-comparison-drop="${index}"` : ""}>
        ${isNextSlot && frameworkContextGuide === "comparison" ? '<i class="comparison-drop-arrow" data-lucide="corner-down-right" aria-hidden="true"></i>' : ""}
        <span>${index === 0 ? "A" : "B"}</span>
        <p>${isNextSlot ? "Drag a completed Impact card here" : "Add Path A first"}</p>
      </div>`;
    }
    return `<div class="comparison-path-slot">
      <span>${index === 0 ? "A" : "B"}</span>
      <strong title="${escTree(pathLabelTree(path))}">${escTree(comparisonCodeTree(path))}</strong>
      <button type="button" data-remove-comparison="${path}" aria-label="Remove pathway ${index === 0 ? "A" : "B"}"><i data-lucide="x"></i></button>
    </div>`;
  }).join("");
  return `<section class="tree-comparison-dock" aria-label="Pathways selected for comparison">
    <div class="comparison-dock-label"><span>Selected for comparison</span><small>${comparisonPaths.length} of 2 pathways</small></div>
    <div class="comparison-path-slots">${slots}</div>
    <button type="button" data-open-comparison="1" ${comparisonPaths.length === 2 ? "" : "disabled"}>Compare Pathways <i data-lucide="columns-2"></i></button>
  </section>`;
}
async function loadComparisonSynthesisTree(force=false){
  const requestKey = comparisonSelectionKeyTree();
  if(!requestKey || comparisonPaths.length !== 2) return;
  if(!force && comparisonResult && comparisonRequestKey === requestKey) return;
  comparisonRequestKey = requestKey;
  comparisonLoading = true;
  comparisonError = "";
  comparisonResult = null;
  renderTree();
  const requestedPaths = [...comparisonPaths];
  const startedAt = performance.now();
  logTreeEvent("pathway_comparison_generation_started", {paths:requestedPaths});
  try{
    const response = await fetch("/api/pathway/compare", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        policy_key:currentPolicyKey,
        path_a:requestedPaths[0],
        path_b:requestedPaths[1],
        participant_id:PolicyStudy.participantId || null,
      }),
    });
    const payload = await response.json().catch(()=>({}));
    if(!response.ok){
      const detail = typeof payload.detail === "string" ? payload.detail : payload.detail?.message;
      throw new Error(detail || `Comparison request failed (${response.status})`);
    }
    if(comparisonSelectionKeyTree() !== requestKey) return;
    comparisonResult = payload;
    comparisonLoading = false;
    comparisonError = "";
    logTreeEvent("pathway_comparison_generated", {
      paths:requestedPaths,
      latency_ms:payload.latency_ms || Math.round(performance.now() - startedAt),
      usage:payload.usage || {},
    });
  }catch(error){
    if(comparisonSelectionKeyTree() !== requestKey) return;
    comparisonResult = null;
    comparisonLoading = false;
    comparisonError = error?.message || "The comparison service is unavailable.";
    logTreeEvent("pathway_comparison_generation_failed", {paths:requestedPaths, error:comparisonError});
  }
  renderTree();
}
function phaseMetricListTree(phase, limit=3){
  const values = Object.entries(phaseValuesTree(phase || {})).slice(0, limit);
  if(!values.length) return "";
  return `<dl class="report-metrics">${values.map(([k,v])=>`
    <div class="${currentPolicyKey === "usa/chi_ctc" && k === "long_term_healthcare_cost_savings_usd" ? "report-metric-compact-value" : ""}"><dt>${escTree(fieldTree(k))}</dt><dd>${escTree(predictionValueTree(k,v))}</dd></div>
  `).join("")}</dl>`;
}
function phaseConstraintDataTree(phase, limit=3){
  const counts = new Map();
  phasePostsTree(phase || {}).forEach(post=>{
    cleanConstraintTagsTree(post, limit).forEach(tag=>{
      const key = tag.toLowerCase();
      const current = counts.get(key) || {tag, count:0};
      counts.set(key, {...current, count:current.count + 1});
    });
  });
  return [...counts.values()]
    .sort((a,b)=>b.count - a.count || a.tag.localeCompare(b.tag, "ko"))
    .slice(0, limit);
}
function reportConstraintSummaryTree(phase, constraints){
  const summary = String(phase?.phase_summary || "").replace(/\s+/g, " ").trim();
  const sentences = summarySentencesTree(summary);
  const constraintSentence = sentences.find(sentence=>/constraint|bottleneck|insufficient|shortage|delay|gap|limit|risk/i.test(sentence));
  if(constraintSentence) return constraintSentence.trim();
  if(constraints.length) return `Key constraints identified at this phase: ${constraints.map(({tag})=>tag).join(", ")}.`;
  return "No shared constraint was explicitly identified at this phase.";
}
function reportConstraintsTree(phase, limit=3){
  const constraints = phaseConstraintDataTree(phase, limit);
  return `<section class="report-constraints" aria-label="Key constraints">
    <div class="report-subhead">Key constraints</div>
    <p>${escTree(reportConstraintSummaryTree(phase, constraints))}</p>
    ${constraints.length ? `<div class="report-constraint-tags">${constraints.map(({tag, count})=>
      `<span>#${escTree(tag)}${count > 1 ? ` <b>${count}</b>` : ""}</span>`
    ).join("")}</div>` : ""}
  </section>`;
}
function reportPhaseTextTree(nodes, index){
  const node = nodes[index];
  const phase = node.phase || {};
  const stance = stanceLabelTree(node);
  const originalSummary = sentenceTree(phase.phase_summary || "", 2);
  const lead = [
    "The pathway begins with the policy resources and implementation capacity available at launch.",
    "These inputs shape the actions taken by implementing organizations and affected stakeholders.",
    "Implementation activity produces direct delivery, coverage, and reach outputs.",
    "These outputs shape the policy's near-term target outcomes.",
    "The final phase considers whether near-term outcomes extend into durable systemic effects.",
  ][index] || "";
  if(phase.phase !== "Inputs" && phase.panel_summary){
    return phase.panel_summary;
  }
  return `${lead} Under the ${stance}, ${originalSummary}`;
}
function reportFinalPredictionTextTree(nodes){
  const finalNode = nodes[nodes.length - 1] || {};
  const values = phaseValuesTree(finalNode.phase || {});
  const stance = stanceLabelTree(finalNode);
  const metrics = Object.entries(values).slice(0,3).map(([key,value])=>`${fieldTree(key)} ${predictionValueTree(key,value)}`);
  const closing = window.TREE_BASELINE_MODE === true
    ? "These are exploratory estimates rather than definitive forecasts."
    : "These are exploratory results conditioned on the selected pathway rather than definitive forecasts.";
  if(metrics.length){
    return `The ${stance} projects ${metrics.join(", ")}. ${closing}`;
  }
  return window.TREE_BASELINE_MODE === true
    ? "The final estimates describe whether near-term policy outcomes persist over time."
    : "The final estimates describe whether near-term policy outcomes persist under the selected exploratory pathway.";
}
function reportNodeByPhaseTree(nodes, phaseName){
  return nodes.find(node=>String(node?.phase?.phase || "").toLowerCase() === phaseName.toLowerCase()) || null;
}
function reportPhaseSentencesTree(node){
  const phase = node?.phase || {};
  return summarySentencesTree(phase.panel_summary || phase.phase_summary || "");
}
function reportInsightTextTree(nodes, kind){
  const outcomes = reportNodeByPhaseTree(nodes, "Outcomes");
  const impact = reportNodeByPhaseTree(nodes, "Impact");
  const ordered = kind === "mechanism" ? [outcomes, impact] : [impact, outcomes];
  const sentences = ordered.flatMap(reportPhaseSentencesTree);
  const patterns = {
    bottleneck:/constraint|bottleneck|insufficient|shortage|delay|gap|barrier|limit|risk|uneven|temporary/i,
    mechanism:/mechanism|translate|lead|result|produce|improve|reduce|increase|support|shape|convert/i,
  };
  const selected = sentences.find(sentence=>{
    if(!patterns[kind]?.test(sentence)) return false;
    return true;
  }) || sentences.find(sentence=>patterns[kind]?.test(sentence)) || sentences[0];
  if(selected) return selected;
  if(kind === "bottleneck") return "No single dominant bottleneck was identified in the available phase summaries.";
  return "The pathway links implementation activity to near-term outcomes and longer-term effects.";
}
function reportUncertaintiesTree(nodes, limit=2){
  const impact = reportNodeByPhaseTree(nodes, "Impact");
  const outcomes = reportNodeByPhaseTree(nodes, "Outcomes");
  const uncertaintyPattern = /uncertain|verify|attribut|temporary|depend|risk|assum|persist|durable|potential|\bmay\b/i;
  const candidates = [impact, outcomes].flatMap(reportPhaseSentencesTree)
    .filter(sentence=>uncertaintyPattern.test(sentence));
  const unique = [...new Set(candidates)].slice(0, limit);
  return unique.length ? unique : [
    "Long-term estimates depend on whether the selected pathway's conditions persist beyond the simulated period.",
  ];
}
// Editorial summaries of the stored scenario discussions; values come from the selected path.
const COMPANY_REPORT_SUMMARIES = {
 baseline:{
  Activities:[['여행 캠페인의 지역 범위와 4월 캠페인의 한시성을 지속 실행의 제약으로 해석합니다.','전용 예산·인력은 미확인이나, 발화에서는 이를 실행 강도 제한의 근거로 사용합니다.'],['STAR★LIGHT의 사이렌오더 연동과 캠페인 기간의 집중 안내가 참여를 유도합니다.'],['중간 수준의 활동과 주기적 디지털 안내가 완만한 사용 증가로 이어질 것으로 봅니다.']],
  Outputs:[['고객 인지 부족과 매장별 실행 편차를 주문 전환의 장벽으로 가정합니다.'],['디지털 안내와 캠페인 기간의 집중 노출이 고객의 개인컵 선택을 돕는다고 봅니다.'],['도달 범위는 보통 수준이며, 개인컵 주문은 소폭 증가할 것으로 예상합니다.']],
  Outcomes:[['캠페인 종료 후 지속성, 매장별 편차와 고객 인지를 사용 증가의 제약으로 봅니다.'],['400원 할인 등 상시 혜택과 디지털 리워드가 반복 사용을 유도한다고 봅니다.'],['2023년 대비 사용량은 증가하지만, 과거 증가세보다는 완만할 것으로 예상합니다.']],
  Impact:[['사용량을 컵·탄소 감축량으로 바꾸는 계수와 프로그램별 기여 구분이 부족합니다.'],['상시 인센티브와 반복 사용이 환경 편익을 유지하는 요인으로 제시됩니다.'],['일회용 컵 감소에 기여하되 환경 효과는 제한적 수준으로 평가합니다.']]
 },
 enabling:{
  Activities:[['예산·인력 정보 미공개와 매장별 편차로 실행의 균일성·지속성이 불확실합니다.'],['사이렌오더의 개인컵 옵션과 지속적 인센티브가 디지털·매장 활동을 강화한다고 봅니다.'],['높은 활동 강도와 빈번한 디지털 안내가 개인컵 참여를 늘릴 것으로 예상합니다.']],
  Outputs:[['디지털 노출이 실제 주문으로 이어지는 정도와 캠페인 종료 후 지속성이 불확실합니다.'],['사이렌오더 연동과 할인·에코스탬프가 주문 선택을 돕는다고 봅니다.'],['활동이 강화되어도 도달 범위는 보통으로 평가하며, 주문 비중 추정은 참여자별 차이가 큽니다.']],
  Outcomes:[['매장별 실행 편차와 캠페인 이후 노출 감소가 반복 사용을 약화시킬 수 있습니다.'],['주문 편의성과 할인·리워드·탄소중립 포인트의 지속이 재사용을 유도한다고 봅니다.'],['2023년 대비 약 14%의 사용량 증가와 고객 행동 개선을 예상합니다.']],
  Impact:[['개인컵 증가분의 환경 효과를 다른 재사용 활동과 분리해 검증하기 어렵습니다.'],['디지털 접점과 리워드가 재방문·반복 사용을 뒷받침한다고 봅니다.'],['사용량 증가에도 환경 효과는 제한적으로 평가하며, 실제 감축량은 별도 확인이 필요합니다.']]
 },
 constraining:{
  Activities:[['활동이 캠페인 기간에 집중되고 이후 평상 수준으로 돌아간다고 가정합니다.','예산·인력 미확인과 개인컵·매장컵 혼합 메시지를 지속 실행의 제약으로 해석합니다.'],['STAR★LIGHT와 4월 캠페인의 디지털 접점·집중 활동은 유지됩니다.'],['활동은 중간, 디지털 안내는 주기적 수준에 머물 것으로 예상합니다.']],
  Outputs:[['고객 인지, 매장 실행 편차와 캠페인 종료 후 노출 감소가 주문 전환을 약화시킨다고 봅니다.'],['과거 사용 증가 추세와 캠페인 월의 일시적 참여 상승을 긍정적 요인으로 봅니다.'],['도달은 제한적~보통으로 예상하며, 주문 비중에 대한 참여자 간 편차가 큽니다.']],
  Outcomes:[['단기 캠페인 참여가 연중 반복 사용으로 이어지는 연결이 약하다고 봅니다.'],['기존 인센티브와 캠페인 참여가 사용량의 소폭 증가를 지지한다고 봅니다.'],['2023년 대비 약 3~6% 증가에 머물며, 고객 행동 변화에는 유지 의견도 포함됩니다.']],
  Impact:[['비캠페인 기간의 참여 유지와 환경 효과 환산·기여 분리가 병목입니다.'],['400원 할인 등 상시 인센티브의 잔존 효과를 긍정적으로 봅니다.'],['환경 기여는 제한적으로 평가하며, 장기 목표 달성 여부는 확정하지 못합니다.']]
 }
};
function reportPredictionBulletsTree(phase, pills=false){
 const words={high:"높음",medium:"중간",low:"낮음",frequent:"빈번",periodic:"주기적",infrequent:"드묾",limited:"제한적",moderate:"보통",broad:"넓음",increased:"증가",stable:"유지",decreased:"감소",negligible:"미미함",modest:"제한적",significant:"상당함"};
 const fields=new Map();
 phasePostsTree(phase).forEach(p=>Object.entries(p.prediction_values||{}).forEach(([k,v])=>{if(!fields.has(k))fields.set(k,[]);fields.get(k).push(v);}));
 return [...fields].map(([k,values])=>{
  let result;
  if(values.every(v=>typeof v==="number"&&Number.isFinite(v))){
   result=predictionValueTree(k,values.reduce((a,v)=>a+v,0)/values.length)+" · 평균";
   if(Math.min(...values)!==Math.max(...values))result+=` (범위 ${predictionValueTree(k,Math.min(...values))}~${predictionValueTree(k,Math.max(...values))})`;
  }else{
   const counts=new Map();values.forEach(v=>{const label=words[v]||predictionValueTree(k,v);counts.set(label,(counts.get(label)||0)+1);});
   result=[...counts].map(([v,n])=>`${v} ${n}명`).join(" · ");
  }
  if(pills) return `<span class="report-prediction-pill" title="${escTree(result)}"><span>${escTree(fieldTree(k))}</span><b>${escTree(result.split(" (범위")[0])}</b></span>`;
  return `<li><b>${escTree(fieldTree(k))}</b><span>${escTree(result)}</span></li>`;
 }).join("");
}
function renderPathReportModal(){
 if(!reportPath)return "";
 const nodes=pathNodesTree(reportPath);
 const finalNode=nodes[nodes.length-1]||focusedTreeNode();
 const tone=TREE_STANCES[finalNode.stance]||TREE_STANCES.baseline;
 const summaries=COMPANY_REPORT_SUMMARIES[finalNode.stance]||COMPANY_REPORT_SUMMARIES.baseline;
 const bullets=items=>`<ul>${items.map(item=>`<li>${escTree(item)}</li>`).join("")}</ul>`;
 const sections=nodes.map((node,i)=>{
  const phase=node.phase||{};
  if(phase.phase==="Inputs")return `<details class="company-report-phase report-phase-toggle"><summary><h3><span>01</span> Inputs</h3><div class="report-prediction-pills"><span class="report-prediction-pill"><span>문서 기반 입력</span><b>여행 캠페인 334개 매장</b></span></div><span class="report-toggle-chevron" aria-hidden="true"></span></summary><div class="company-report-inputs">
   <div><h4>확인 사항</h4>${bullets(['여행 캠페인 연계 매장 334개','탄소중립 포인트 제도: 2023년 2월부터 운영','STAR★LIGHT: 2024년 1월 출시, 사이렌오더 연계','Reuse I can!: 2024년 4월 한 달 운영, 개인컵·매장컵 포함'])}</div>
   <div><h4>미확인 사항</h4>${bullets(['전용 예산·인력','실제 도달 범위·실행 품질'])}</div></div></details>`;
  const groups=summaries[phase.phase]||[[],[],[]];
  return `<details class="company-report-phase report-phase-toggle"><summary><h3><span>${String(i+1).padStart(2,"0")}</span> ${escTree(phase.phase)}</h3><div class="report-prediction-pills">${reportPredictionBulletsTree(phase,true)}</div><span class="report-toggle-chevron" aria-hidden="true"></span></summary>
   <div class="company-report-insights">${['핵심 병목','강화 요인','예측 사항'].map((label,j)=>`<div><h4><span class="discussion-highlight highlight-${['bottleneck','enabler','prediction'][j]}">${label}</span></h4>${bullets(groups[j])}</div>`).join('')}</div>
  </details>`;
 }).join('');
 const outcomes=reportNodeByPhaseTree(nodes,'Outcomes');
 const amount=outcomes?phaseValuesTree(outcomes.phase).annual_personal_cup_uses_2024:null;
 const esg=[
  {letter:'E',title:'환경',items:[`개인컵 이용 ${amount?predictionValueTree('annual_personal_cup_uses_2024',amount):'증가'} 예측은 일회용 컵 사용을 줄이는 경로와 연결됩니다.`, '세 경로 모두 최종 환경 효과를 제한적 수준으로 평가합니다.','컵 대체율·세척·재사용 횟수 및 다른 프로그램의 기여를 확인해야 실제 폐기물·탄소 감축량을 판단할 수 있습니다.']},
  {letter:'S',title:'사회',items:[finalNode.stance==='enabling'?'주문 편의성과 경제적 혜택이 고객의 반복 참여를 돕는다는 추론입니다.':finalNode.stance==='constraining'?'고객 인지 부족과 참여의 번거로움이 지속 사용을 제한한다는 추론입니다.':'상시 혜택이 참여를 유도하지만, 고객 인지와 사용 편의성이 행동 변화의 조건으로 남습니다.','매장 파트너의 안내·혜택 처리와 점장의 실행 관리가 고객 경험을 좌우하는 요인으로 제시됩니다.','디지털 채널·지역·매장별 참여 격차는 검토 대상이며, 노동·포용성 성과를 직접 측정한 결과는 아닙니다.']},
  {letter:'G',title:'거버넌스',items:['예산·인력의 미공개를 자원 부재로 단정하지 않고, 확인된 조건과 실행 가정을 구분해야 합니다.','여행 캠페인 334개 매장의 범위를 전체 프로그램에 일반화하지 않고, 프로그램별 책임·성과를 구분해 관리할 필요가 있습니다.','개인컵 이용량과 환경 감축량을 구분하고, 중복 기여와 추정 근거를 검증하는 성과 관리가 필요합니다.']}
 ];
 return `<div class="tree-modal-backdrop" data-close-report="1"><section class="tree-report-modal report-document company-final-report" style="--lane:${tone.color}" role="dialog" aria-modal="true" aria-label="Final Report">
  <header class="report-document-head"><div><span>FINAL REPORT · ${escTree(tone.label)}</span><h2>Starbucks Korea Simulation Report</h2></div><div class="report-document-actions"><button data-close-report="1" type="button">닫기</button></div></header>
  <section class="company-report-section"><h2>단계별 예측 요약</h2><p class="company-report-caption">단계별 예측값과 주요 요인을 살펴봅니다.</p>${sections}</section>
  <section class="company-report-section company-report-esg"><h2>기업의 ESG 요인 분석</h2><p class="company-report-caption">이 시뮬레이션에서 드러난 ESG 관점의 해석과 확인 과제입니다.</p><div class="company-esg-grid">${esg.map(item=>`<article><h3><span>${item.letter}</span>${item.title}</h3>${bullets(item.items)}</article>`).join('')}</div></section>
 </section></div>`;
}
function rememberCompletedPath(path){
  const node = treeNodes.get(path) || nodeFromPath(path);
  if(node.col !== TREE_PHASES.length - 1) return;
  savedPathways = [path, ...savedPathways.filter(p=>p !== path)].slice(0, 4);
}
function phasePredictionRowsTree(phase){
  const words={high:"높음",medium:"중간",low:"낮음",frequent:"빈번",periodic:"주기적",infrequent:"드묾",limited:"제한적",moderate:"보통",broad:"넓음",increased:"증가",stable:"유지",decreased:"감소",negligible:"미미함",modest:"제한적",significant:"상당함"};
  const fields=new Map();
  phasePostsTree(phase).forEach(post=>Object.entries(post.prediction_values || {}).forEach(([key,value])=>{
    if(!fields.has(key)) fields.set(key,[]);
    fields.get(key).push({role:STAKEHOLDER_VIEWPOINTS[post.stakeholder_type] || post.stakeholder_type,value});
  }));
  return [...fields].map(([key,entries])=>{
    const numeric=entries.every(item=>typeof item.value==="number" && Number.isFinite(item.value));
    const display=value=>words[value] || predictionValueTree(key,value);
    let summary;
    if(numeric) summary=predictionValueTree(key,entries.reduce((sum,item)=>sum+item.value,0)/entries.length)+" · 평균";
    else {
      const counts=new Map(); entries.forEach(item=>counts.set(display(item.value),(counts.get(display(item.value)) || 0)+1));
      summary=[...counts].map(([value,count])=>`${value} ${count}명`).join(" · ");
    }
    return `<section class="phase-prediction-field"><div class="tree-metric"><small>${escTree(fieldTree(key))}</small><b>${escTree(summary)}</b></div><details><summary>페르소나별 예측값</summary><dl>${entries.map(item=>`<div><dt>${escTree(item.role)}</dt><dd>${escTree(display(item.value))}</dd></div>`).join("")}</dl></details></section>`;
  }).join("");
}
function renderSelectedSummaryTree(){
  const node = focusedTreeNode();
  const phase = node.phase || {};
  const tone = TREE_STANCES[node.stance] || TREE_STANCES.neutral;
  const verifiedInput = phase.phase === "Inputs" && phase.state_type === "document_grounded";
  const groundedSources = groundedSourcesTree(phase);
  const panelConstraints = phase.panel_key_constraints || [];
  const panelMetrics = verifiedInput ? verifiedInputRowsTree(phase, 6) : phasePredictionRowsTree(phase);
  return `<section class="storage-summary" style="--lane:${tone.color}">
    <span>${node.col === 0 ? "Selected phase" : tone.label}</span>
    <h3>${node.col+1}. ${escTree(TREE_PHASE_KO[phase.phase] || phase.phase)}</h3>
    <div class="toc-phase-focus"><b>이 단계에서 살펴볼 내용</b><p>${escTree(TREE_PHASE_FOCUS[phase.phase] || "")}</p></div>
    ${verifiedInput
      ? `<div class="verified-input-heading input-use-heading"><b>입력 조건의 활용</b><p>문서에서 확인된 조건과 미확인 사항을 바탕으로, 이후 단계에서 활동과 결과가 어떻게 전개되는지 살펴봅니다.</p></div>`
      : `<p>${escTree(phase.panel_summary || phase.phase_summary || "")}</p>
        ${panelConstraints.length ? `<div class="storage-summary-section-label">Key constraints</div><div class="storage-summary-constraints">${panelConstraints.map(item=>`<span>${escTree(item)}</span>`).join("")}</div>` : ""}`}
    ${!verifiedInput && panelMetrics ? `<div class="storage-summary-section-label storage-summary-values-label">예측 결과</div>` : ""}
    <div class="storage-summary-values ${verifiedInput ? "verified-input-slots" : ""}" ${!verifiedInput ? `style="display:grid;grid-template-columns:${(panelMetrics.match(/class="phase-prediction-field"/g) || []).length > 1 ? "repeat(2,minmax(0,1fr))" : "minmax(0,1fr)"};gap:10px;align-items:start"` : ""}>${panelMetrics}</div>
    ${verifiedInput ? `<div class="verified-input-heading verified-input-evidence"><p class="verified-input-source"><b>Source:</b> Starbucks Korea_Impact Report_2024.pdf</p></div>` : ""}
  </section>`;
}
function renderPhaseInspector(nodes, layout){
  return `<aside class="tree-phase-inspector ${treePracticeMode && treePracticeStep === 0 ? "practice-target" : ""}" aria-label="Selected phase details">
    ${renderSelectedSummaryTree()}
  </aside>`;
}
function renderMiniMapTree(nodes, layout){
  const miniLines = [];
  nodes.forEach(n=>{
    if(!n.parent) return;
    const a = layout.positions.get(n.parent);
    const b = layout.positions.get(n.path);
    if(!a || !b) return;
    const selected = isPathAncestorTree(n.parent) && isPathAncestorTree(n.path) ? "selected" : "";
    const parentWidth = nodeWidthTree(treeNodes.get(n.parent) || nodeFromPath(n.parent));
    const bend = Math.max(0,(b.x-a.x-parentWidth)/2);
    miniLines.push(`<path class="${n.stance} ${selected}" d="M${a.x+parentWidth} ${a.y} C${a.x+parentWidth+bend} ${a.y}, ${b.x-bend} ${b.y}, ${b.x} ${b.y}"></path>`);
  });
  const miniNodes = nodes.map(n=>{
    const pos = layout.positions.get(n.path);
    const tone = TREE_STANCES[n.stance] || TREE_STANCES.neutral;
    const focused = n.path === focusedPath ? "focused" : "";
    const w = nodeWidthTree(n);
    return `<rect class="${focused}" x="${pos.x}" y="${pos.y-63}" width="${w}" height="126" rx="10" style="--lane:${tone.color}"></rect>`;
  }).join("");
  return `<section class="tree-minimap">
    <div class="minimap-head">
      <span>Tree overview</span>
      <b>${nodes.length} nodes</b>
    </div>
    <button class="minimap-frame" data-minimap="1" type="button" aria-label="Move around the pathway tree">
      <svg viewBox="0 0 ${layout.width} ${layout.height}" preserveAspectRatio="xMidYMid meet" data-map-width="${layout.width}" data-map-height="${layout.height}" aria-hidden="true">
        <g class="minimap-lines">${miniLines.join("")}</g>
        <g class="minimap-nodes">${miniNodes}</g>
        <rect class="minimap-view" x="0" y="0" width="0" height="0" rx="8"></rect>
      </svg>
    </button>
  </section>`;
}
function renderStoragePanel(nodes, layout){
  const candidates = savedPathways;
  const savedCards = candidates.length ? candidates.map(path=>`
    <div class="saved-path-card ${path===focusedPath?"active":""}">
      <button class="saved-path-main" data-focus-path="${path}" type="button">
        ${miniPathTree(path)}
        <strong>${escTree(pathLabelTree(path))}</strong>
        <span>${escTree(pathMetricPreviewTree(path))}</span>
      </button>
      <button class="saved-path-report" data-report-path="${path}" type="button" aria-label="Open final report">
        Final Report
      </button>
    </div>
  `).join("") : `<div class="saved-path-empty">Completed pathways will appear here for comparison.</div>`;
  return `<aside class="tree-storage">
    <div class="storage-head">
      <span>F3 Path storage</span>
      <h2>Compared pathways</h2>
    </div>
    <div class="storage-list">${savedCards}</div>
    ${renderSelectedSummaryTree()}
    ${renderMiniMapTree(nodes, layout)}
  </aside>`;
}
function renderTreeNode(node, pos){
  const phase = node.phase || {};
  const isFocused = focusedNode && nodeId(focusedNode) === nodeId(node);
  const isSelectedPath = isPathAncestorTree(node.path);
  const tone = TREE_STANCES[node.stance] || TREE_STANCES.neutral;
  const expanded = expandedPaths.has(node.path);
  const isNew = newlyAddedPaths.has(node.path);
  const hideMetrics = hideNodeMetricsTree(phase);
  const isImpact = phase.phase === "Impact";
  const nodeWidth = nodeWidthTree(node);
  const practiceExpected = practiceExpectedPathTree();
  const practiceTarget = treePracticeMode && (treePracticeStep === 0 ? node.path === "root" : node.path === practiceExpected);
  const practiceLocked = treePracticeMode && !practiceTarget && node.path !== practiceExpected;
  const practiceDisabled = practiceLocked || (treePracticeMode && treePracticeStep === 0 && node.path === "root");
  const comparisonDrag = PATHWAY_COMPARISON_ENABLED && !TREE_BASELINE_MODE && isImpact
    ? ` draggable="true" data-comparison-drag="${node.path}" title="Drag this completed Impact card to the comparison area"`
    : "";
  return `<button class="tree-node ${hideMetrics||isImpact?"process-node":""} ${phase.phase==="Outcomes"?"outcome-node":""} ${isImpact?"impact-node":""} ${expanded?"expanded":""} ${isSelectedPath?"selected-path":""} ${isFocused?"focused":""} ${isNew?"is-new":""} ${practiceTarget?"practice-target":""} ${practiceLocked?"practice-locked":""}"
    data-path="${node.path}" data-phase-index="${node.col}"${comparisonDrag}${practiceDisabled?' disabled aria-disabled="true"':""} style="--x:${pos.x}px;--y:${pos.y}px;--lane:${tone.color};--node-width:${nodeWidth}px;">
    <span class="tree-node-head">
      <em>${stanceShortTree(node)}</em>
    </span>
    <strong>${escTree(TREE_PHASE_KO[phase.phase] || phase.phase)}</strong>
    <span class="tree-phase-caption">${escTree({Inputs:"실행 자원과 조건",Activities:"자원을 통한 활동",Outputs:"활동의 직접 결과",Outcomes:"행동과 이용 변화",Impact:"장기적 파급효과"}[phase.phase] || "")}</span>
    ${phase.phase === "Outcomes" ? `<span class="tree-node-values" aria-label="개인컵 이용 예측"><span class="outcome-result-label">개인컵 이용 예측</span>${metricRowsTree(phase, 2, false, true)}</span>` : ""}
  </button>`;
}
function renderTreeLines(nodes, positions, height, width){
  const lines = [];
  nodes.forEach(n=>{
    if(!n.parent) return;
    const a = positions.get(n.parent);
    const b = positions.get(n.path);
    if(!a || !b) return;
    const focused = isPathAncestorTree(n.parent) && isPathAncestorTree(n.path) ? "selected" : "";
    const isNew = newlyAddedPaths.has(n.path) ? "is-new" : "";
    const parentWidth = nodeWidthTree(treeNodes.get(n.parent) || nodeFromPath(n.parent));
    const bend = Math.max(0,(b.x-a.x-parentWidth)/2);
    lines.push(`<path class="${n.stance} ${focused} ${isNew}" d="M${a.x+parentWidth} ${a.y} C${a.x+parentWidth+bend} ${a.y}, ${b.x-bend} ${b.y}, ${b.x} ${b.y}"></path>`);
  });
  return `<svg class="tree-link-layer" viewBox="0 0 ${width} ${height}" aria-hidden="true">${lines.join("")}</svg>`;
}
function pixelPerson(name, i, active=false){
  const variant = i % 5;
  return `<i class="pixel-person sprite-${variant} ${active?"active":""}" style="--px:${PIXEL_COLORS[i % PIXEL_COLORS.length]}">
    <i class="hair"></i><i class="head"></i><i class="body"></i><i class="arm left"></i><i class="arm right"></i><i class="leg left"></i><i class="leg right"></i>
    <b>${escTree(String(name || "?").slice(0,1))}</b>
  </i>`;
}
function stakeholderSeatTree(post){
  const role = String(post?.stakeholder_type || "");
  return STAKEHOLDER_SEATS.find(seat=>new RegExp(seat.role, "i").test(role));
}
function orderedStakeholderPostsTree(posts){
  const used = new Set();
  const ordered = STAKEHOLDER_SEATS.map(seat=>{
    const index = posts.findIndex((p, idx)=>!used.has(idx) && new RegExp(seat.role, "i").test(String(p.stakeholder_type || "")));
    if(index < 0) return null;
    used.add(index);
    return {post:posts[index], seat};
  }).filter(Boolean);
  posts.forEach((post, idx)=>{
    if(!used.has(idx)) ordered.push({post, seat:null});
  });
  return ordered.slice(0,5);
}
function stakeholderAvatarTree(post, i){
  const seat = stakeholderSeatTree(post);
  const ctcAvatar = currentPolicyKey === "usa/chi_ctc" ? CTC_PERSONA_AVATARS[post?.persona_name] : null;
  const avatar = ctcAvatar || PROFILE_AVATARS[i % PROFILE_AVATARS.length];
  return `<img class="persona-image profile-avatar" src="${avatar}" alt="${escTree(displayPersonaNameTree(post?.persona_name) || seat?.role || "Stakeholder")}" />`;
}
function answerParagraphsTree(text){
  return String(text || "")
    .split(/\n{2,}|\n/)
    .map(x=>x.trim())
    .filter(Boolean)
    .map(x=>`<p>${escTree(x)}</p>`)
    .join("");
}
function pathwayContextText(path){
  return pathNodesTree(path).map((node, i)=>{
    const phase = node.phase || {};
    const stance = stanceLabelTree(node);
    const metrics = Object.entries(phaseValuesTree(phase)).slice(0,3)
      .map(([k,v])=>`${fieldTree(k)}=${fmtTree(v)}`)
      .join(", ");
    return `${i+1}. ${TREE_PHASE_KO[phase.phase] || phase.phase} (${stance}): ${phase.phase_summary || ""} ${metrics ? `Prediction values: ${metrics}` : ""}`;
  }).join("\n");
}
function personaPathwayContextText(post){
  if(!post) return "";
  const prediction = Object.entries(post.prediction_values || {})
    .map(([k,v])=>`${fieldTree(k)}=${fmtTree(v)}`)
    .join(", ");
  const constraints = cleanConstraintTagsTree(post, 3).join(", ");
  const rationale = post.rationale_summary?.narrative_rationale || post.narrative || "";
  return [
    `Persona: ${post.persona_name || ""} (${post.stakeholder_type || ""})`,
    prediction ? `Persona prediction values: ${prediction}` : "",
    constraints ? `Key constraints identified by this persona: ${constraints}` : "",
    rationale ? `Prior rationale from this persona: ${rationale}` : "",
  ].filter(Boolean).join("\n");
}
function renderDiscussionButton(positions){
  const node = focusedNode || focusedTreeNode();
  const pos = positions.get(nodeId(node));
  const postCount = phasePostsTree(node.phase || {}).length;
  if(!pos || !postCount || node.col === 0) return "";
  const w = nodeWidthTree(node);
  const practiceTarget = treePracticeMode && treePracticeStep === 2;
  const practiceLocked = treePracticeMode && !practiceTarget;
  return `<button class="node-discussion-button ${practiceTarget?"practice-target":""} ${practiceLocked?"practice-locked":""}" data-open-discussion="1" type="button"${practiceLocked?' disabled aria-disabled="true"':""}
    style="--x:${pos.x + w / 2}px;--y:${pos.y - 70}px;">
    <i data-lucide="messages-square" aria-hidden="true"></i><span>이해관계자 의견 확인</span>
  </button>`;
}
function renderPathwayChatButton(positions){
  if(treePracticeMode && treePracticeStep < 8) return "";
  const node = TREE_BASELINE_MODE
    ? [...treeNodes.values()].find(n=>n.col === TREE_PHASES.length - 1)
    : (focusedNode || focusedTreeNode());
  if(!node) return "";
  const pos = positions.get(nodeId(node));
  const postCount = phasePostsTree(node.phase || {}).length;
  if(!pos || !postCount || node.col !== TREE_PHASES.length - 1) return "";
  const w = nodeWidthTree(node);
  const yOffset = 46;
  const practiceTarget = treePracticeMode && treePracticeStep === 8;
  const practiceLocked = treePracticeMode && !practiceTarget;
  return `<button class="pathway-chat-button ${practiceTarget?"practice-target":""} ${practiceLocked?"practice-locked":""}" data-open-path-chat="1" type="button"${practiceLocked?' disabled aria-disabled="true"':""}
    style="--x:${pos.x + w / 2 - 29}px;--y:${pos.y + yOffset}px;">
    Chat!
  </button>`;
}
// Baseline keeps both report and persona chat available for the presented path.
// Keep the report button anchored to the actual Impact node regardless of focus.
function renderFinalReportButtonTree(positions){
  return [...treeNodes.values()].filter(n=>n.col === TREE_PHASES.length - 1).map(node=>{
    const pos=positions.get(node.path);
    if(!pos || !phasePostsTree(node.phase || {}).length) return "";
    const x=pos.x+nodeWidthTree(node), color=(TREE_STANCES[node.stance]||TREE_STANCES.baseline).color;
    return `<svg class="report-node-connector" style="left:${x}px;top:${pos.y-8}px;color:${color}" width="68" height="16" aria-hidden="true"><path d="M4 8 H57" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="0.1 7"/><path d="M53 3 L59 8 L53 13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    <button class="report-node-action" data-open-final-report="1" data-report-node-path="${node.path}" type="button" aria-label="${node.stance} Final Report" style="left:${x+70}px;top:${pos.y}px;--lane:${color}"><i data-lucide="file-chart-column" aria-hidden="true"></i><b>Final Report ${{enabling:1,baseline:2,constraining:3}[node.stance] || 1}</b></button>`;
  }).join("");
}
function renderPathwayChatModal(embedded=false){
 if(!embedded) return "";
 const node=treeNodes.get(pathwayChatPath)||focusedTreeNode();
 const posts=orderedStakeholderPostsTree(phasePostsTree(node.phase||{})).map(x=>x.post);
 const selected=posts.find(p=>p.persona_name===pathwayChatPersona)||posts[0]||{};
 const role=p=>({program_operator:"기업 캠페인 담당자",store_manager:"점장",store_partner:"매장 파트너",customer:"리워드 고객"}[p.stakeholder_type]||stakeholderViewpointTree(p));
 const limited=frameworkChatUsage.enabled && frameworkChatUsage.used>=frameworkChatUsage.limit;
 const turns=pathwayChatTurns.filter(t=>t.path===node.path && t.personaName===selected.persona_name);
 return `<aside class="discussion-chat-panel" aria-label="이해관계자와 대화">
  <header><h3>이해관계자와 대화</h3><p>대화할 에이전트를 선택하고 현재 단계의 의견에 대해 질문하세요.</p></header>
  <div class="split-persona-picker">${posts.map(post=>`<button type="button" data-path-chat-persona="${escTree(post.persona_name)}" style="--agent-color:${stakeholderSeatTree(post)?.color || "#7055d8"}" aria-pressed="${post===selected}" class="${post===selected?'active':''}">${escTree(role(post))}</button>`).join('')}</div>
  <div class="path-chat-list">${turns.length?turns.map(turn=>`<section class="path-chat-turn"><div class="path-chat-message user"><div class="path-chat-bubble">${answerParagraphsTree(turn.question)}</div></div>${turn.answers.map(answer=>`<div class="path-chat-message persona"><div class="path-chat-stack"><div class="path-chat-meta"><b>${escTree(role(posts.find(p=>p.persona_name===answer.personaName)||selected))}</b></div><div class="path-chat-bubble">${answer.pending?'<p>답변을 작성하고 있습니다…</p>':answerParagraphsTree(answer.error?'답변을 불러오지 못했습니다. '+answer.error:answer.answer)}</div></div></div>`).join('')}</section>`).join(''):`<div class="path-chat-empty">${escTree(role(selected))}에게 궁금한 내용을 질문해 보세요.</div>`}</div>
  <div class="path-chat-starters">${['이 예측에서 가장 중요한 가정은 무엇인가요?','핵심 병목을 줄이려면 무엇이 필요한가요?'].map(q=>`<button type="button" data-path-chat-q="${q}" ${limited?'disabled':''}>${q}</button>`).join('')}</div>
  <form id="pathwayChatForm" class="path-chat-compose"><input name="question" autocomplete="off" aria-label="질문" placeholder="${limited?'질문 한도에 도달했습니다.':role(selected)+'에게 질문하기'}" ${limited?'disabled':''}/><button type="submit" ${limited?'disabled':''}>전송</button></form>
 </aside>`;
}
function highlightedDiscussionTextTree(text){
  // Keep the original text intact; mark only clauses carrying an explicit signal.
  const labels={bottleneck:"핵심 병목",enabler:"강화 요인",prediction:"예측 사항"};
  const classify=clause=>{
    const prediction=/(?:추정(?:됩니다|된다|되며|합니다|한다|하)|예측(?:됩니다|된다|되며|합니다|한다|하)|전망(?:됩니다|된다|되며|합니다|한다|하)|예상(?:됩니다|된다|되며|합니다|한다|하)|평가(?:됩니다|된다|합니다|한다)|것으로\s*(?:보|봅|판단)|가능성이\s*(?:높|크)|수준으로\s*(?:보|봅|판단)|머문다고\s*판단|그칠\s*가능성)/.test(clause);
    const bottleneck=/(?:병목|장벽|부족|부재|불확실|불명확|번거로|번거롭|제약|한계|편차|제한적|제한되|어렵|어려움|어려워|부담|미흡|확인되지|문서화되지)/.test(clause);
    const enabler=/(?:강화 요인|증가 요인|강화하|높이는|상승시키|적립|에코스탬프|촉진|유인|동기|접근성|편의성|참여를\s*(?:유도|높|확대)|사용을\s*(?:유도|장려|촉진)|활성화|인센티브|할인|보상|혜택|리워드|습관화|반복 참여)/.test(clause);
    if(prediction && (!bottleneck || /(?:주문 비중|사용 이벤트|이용 건수|사용 건수|도달 범위|감축|감소량)/.test(clause))) return "prediction";
    if(bottleneck) return "bottleneck";
    if(enabler && !/(?:없|않|못|불확실|미확인)/.test(clause)) return "enabler";
    return null;
  };
  return String(text || "").split(/\n+/).filter(p=>p.trim()).map(paragraph=>{
    // Decimal points and thousands separators are not clause boundaries.
    const clauses=paragraph.split(/(?<=[.。?])\s+/u);
    const parts=clauses.flatMap(sentence=>sentence.split(/(?<!\d),(?!\d)\s*|(?<=지만|으나|반면)\s*/u));
    let offset=0;
    return `<p>${parts.map(part=>{
      const start=paragraph.indexOf(part,offset);
      const gap=start>=offset ? paragraph.slice(offset,start) : "";
      offset=(start>=0?start:offset)+part.length;
      const kind=classify(part);
      return escTree(gap)+(kind ? `<mark class="discussion-highlight highlight-${kind}" title="${labels[kind]}">${escTree(part)}</mark>` : escTree(part));
    }).join("")}${escTree(paragraph.slice(offset))}</p>`;
  }).join("");
}
function renderDiscussionModal(){
  if(!discussionOpen) return "";
  const node = focusedNode || focusedTreeNode();
  discussionNodeKey = nodeId(node);
  const phase = node.phase || {};
  const tone = TREE_STANCES[node.stance] || TREE_STANCES.baseline;
  const roles = {program_operator:"기업 캠페인 담당자",store_manager:"점장",store_partner:"매장 파트너",customer:"리워드 고객"};
  const entries = orderedStakeholderPostsTree(phasePostsTree(phase));
  const messages = entries.map(({post,seat},i)=>{
    const role = roles[post.stakeholder_type] || stakeholderViewpointTree(post);
    const color = seat?.color || PIXEL_COLORS[i % PIXEL_COLORS.length];
    return `<article class="discussion-message" style="--speaker:${color}">
      <div class="discussion-message-avatar" aria-hidden="true">${stakeholderAvatarTree(post,i)}</div>
      <div class="discussion-message-content"><h3>${escTree(role)}</h3>
        <div class="discussion-message-bubble">${highlightedDiscussionTextTree(stakeholderTakeTree(post))}</div>
      </div>
    </article>`;
  }).join("");
  return `<div class="tree-modal-backdrop" data-close-discussion="1">
    <section class="tree-discussion-modal discussion-chat-modal" style="--lane:${tone.color}" role="dialog" aria-modal="true" aria-label="이해관계자 토론">
      <div class="tree-modal-head"><div><span>이해관계자 토론 · ${entries.length}명</span>
        <h2>${escTree(TREE_PHASE_KO[phase.phase] || phase.phase)} · ${escTree(tone.label)}</h2></div>
        <button data-close-discussion="1" type="button">닫기</button>
      </div>
      <div class="discussion-split-body"><section class="discussion-reading-panel" aria-label="단계별 발화"><header class="discussion-reading-head"><h3>이해관계자 의견</h3><p>현재 단계에 대한 에이전트별 의견과 주요 판단 근거를 살펴보세요.</p></header><div class="discussion-highlight-legend" aria-label="발화 하이라이트 범례">
        <span class="discussion-highlight highlight-bottleneck">핵심 병목</span>
        <span class="discussion-highlight highlight-enabler">강화 요인</span>
        <span class="discussion-highlight highlight-prediction">예측 사항</span>
      </div>
      <div class="discussion-chat-messages">${messages}</div></section>${renderPathwayChatModal(true)}</div>
    </section>
  </div>`;
}
function syncDiscussionNetwork(){
  const roundtable=document.querySelector(".tree-roundtable");
  const network=roundtable?.querySelector(".discussion-network");
  if(!roundtable||!network) return;
  const frame=roundtable.getBoundingClientRect();
  const avatars=[...roundtable.querySelectorAll(".round-person .persona-image.profile-avatar")].slice(0,5);
  if(avatars.length !== 5 || !frame.width || !frame.height) return;
  const points=avatars.map(avatar=>{
    const rect=avatar.getBoundingClientRect();
    return {x:rect.left-frame.left+rect.width/2,y:rect.top-frame.top+rect.height/2};
  });
  network.setAttribute("viewBox",`0 0 ${frame.width} ${frame.height}`);
  const profileRadius=33;
  const segments=points.map((from,index)=>{
    const to=points[(index+1)%points.length];
    const length=Math.hypot(to.x-from.x,to.y-from.y)||1;
    const dx=(to.x-from.x)/length, dy=(to.y-from.y)/length;
    return `M${from.x+dx*profileRadius} ${from.y+dy*profileRadius} L${to.x-dx*profileRadius} ${to.y-dy*profileRadius}`;
  }).join(" ");
  network.querySelector("path")?.setAttribute("d",segments);
}
function renderProgress(){
  const maxCol = Math.max(...visibleNodes().map(n=>n.col));
  const steps = TREE_PHASES.map((p,i)=>{
    const selected = i <= maxCol;
    const current = focusedTreeNode().col === i;
    return `<span class="${selected?"done":""} ${current?"current":""}">${i+1}. ${TREE_PHASE_KO[p]}</span>`;
  }).join("");
  return `<div class="tree-progress">${steps}</div>`;
}
const FRAMEWORK_GUIDE_STEPS = [
  {
    target:'.tree-node[data-phase-index="1"]',
    title:"Choose a development condition",
    copy:"At each phase, choose one of three conditions to determine how the policy develops next. Your selection reveals the available developments in the following phase; continue until the pathway reaches Impact.",
    details:[
      ["Enabling", "Positive development or recovery from a bottleneck."],
      ["Baseline", "Continuation under typical or expected conditions."],
      ["Constraining", "Stronger bottlenecks and possible failure to meet the policy goal."],
    ],
  },
  {
    target:'.tree-phase-inspector',
    title:"Review the selected node summary",
    copy:"The panel on the left summarizes the node you selected, including its causal mechanism, key constraints, and quantitative estimates.",
  },
];

const BASELINE_GUIDE_STEPS = [
  {
    target:'.tree-node[data-phase-index="0"]',
    title:"Follow one projected policy development",
    copy:"This view presents one fixed development from Inputs through Impact. Select any phase node to examine what happens at that point in the policy process.",
  },
  {
    target:'.tree-phase-inspector',
    title:"Review the selected phase summary",
    copy:"The summary panel below the pathway explains the selected node's role, assumptions, constraints, quantitative values, and supporting details. It updates whenever you select another phase.",
  },
];

const THREE_PATH_GUIDE_STEPS = [
  {
    target:'.tree-node[data-phase-index="1"]',
    title:"Compare three different policy developments",
    copy:"This view presents Enabling-only, Baseline-only, and Constraining-only developments side by side. Select a phase card in any row to review that point in the policy process.",
    details:[
      ["Enabling", "Positive development and recovery from bottlenecks."],
      ["Baseline", "Continuation under typical conditions."],
      ["Constraining", "Intensified bottlenecks and possible failure to meet policy goals."],
    ],
  },
  {
    target:'.tree-phase-inspector',
    title:"Review the selected phase summary",
    copy:"The panel below the pathways explains the selected phase, including its mechanism, key constraints, and quantitative estimates. It updates whenever you select another phase card.",
  },
  {
    target:'.tree-node[data-path="root/baseline/baseline/baseline/baseline"]',
    title:"Open the Baseline Impact report",
    copy:"Select the highlighted Baseline Impact card to review the Final Report for this complete policy development.",
    interactive:true,
  },
  {
    target:'.report-document-actions [data-close-report="1"]',
    title:"Review the Final Report",
    copy:"The report summarizes the Baseline development's projected results, mechanism, constraints, and uncertainty. Review it, then select Close.",
    interactive:true,
  },
  {
    target:'.pathway-chat-button',
    title:"Open stakeholder chat",
    copy:"Select Chat to preview the stakeholder conversation interface for the Baseline development.",
    interactive:true,
  },
  {
    target:'.tree-chat-modal [data-close-path-chat="1"]',
    title:"Review the chat, then close it",
    copy:"Review the stakeholder chat interface, then select Close to finish the guide. You do not need to ask a question during the guide.",
    interactive:true,
  },
];

const FRAMEWORK_CONTEXT_GUIDES = {
  discussion:{
    target:".node-discussion-button",
    title:"Examine stakeholder reasoning",
    copy:"Stakeholder discussion appears above an explored node. Open it to compare how different personas interpret the selected phase, its predicted values, and its key constraints.",
  },
  report:{
    target:".report-document-head",
    title:"Review the completed pathway",
    copy:"This report summarizes the completed pathway's projected results, bottleneck, causal mechanism, and uncertainties. Review it, then close the report to continue.",
  },
  chat:{
    target:".pathway-chat-button",
    title:"Question a stakeholder about this route",
    copy:"Use Chat to ask a persona about the evidence, risks, or practical implications of this completed pathway. You can choose an example question or write your own.",
  },
};

const BASELINE_CONTEXT_GUIDES = {
  discussion:{
    target:".node-discussion-button",
    title:"Examine stakeholder reasoning",
    copy:"Stakeholder discussion is available for each phase after Inputs. Open it to compare how different personas interpret the projected values, mechanisms, and constraints at the selected node.",
  },
  chat:{
    target:".pathway-chat-button",
    title:"Question a stakeholder about the pathway",
    copy:"Use Chat to ask a persona about the complete projected pathway. The persona responds from its represented stakeholder perspective using the pathway context.",
  },
};

function activeGuideSteps(){
  return TREE_BASELINE_MODE
    ? BASELINE_GUIDE_STEPS
    : TREE_THREE_PATH_MODE
      ? THREE_PATH_GUIDE_STEPS
      : FRAMEWORK_GUIDE_STEPS;
}

function activeContextGuides(){
  return TREE_BASELINE_MODE ? BASELINE_CONTEXT_GUIDES : FRAMEWORK_CONTEXT_GUIDES;
}

function activeGuideStorageKey(){
  return TREE_BASELINE_MODE
    ? baselineGuideStorageKey
    : TREE_THREE_PATH_MODE
      ? threePathGuideStorageKey
      : frameworkGuideStorageKey;
}

function activeFrameworkGuide(){
  if(treePracticeMode){
    const step = TREE_PRACTICE_GUIDES[treePracticeStep];
    return step ? {
      ...step,
      kind:"practice",
      label:`Practice ${treePracticeStep + 1} of ${TREE_PRACTICE_GUIDES.length}`,
    } : null;
  }
  const steps = activeGuideSteps();
  if(frameworkGuideStep >= 0){
    const step = steps[frameworkGuideStep];
    return {
      ...step,
      kind:"initial",
      label:`Guide ${frameworkGuideStep + 1} of ${steps.length}`,
      action:step.interactive
        ? null
        : frameworkGuideStep === steps.length - 1
          ? (TREE_BASELINE_MODE ? "Start reviewing" : TREE_THREE_PATH_MODE ? "Start comparing" : "Start exploring")
          : "Next",
    };
  }
  const guide = activeContextGuides()[frameworkContextGuide];
  return guide ? {...guide, kind:"context", label:"Feature guide", action:"Got it"} : null;
}

function renderFrameworkGuide(){
  const step = activeFrameworkGuide();
  if(treeDemoMode || !step) return "";
  return `<div class="framework-guide-layer" data-guide-layer="1">
    <div class="framework-guide-focus" aria-hidden="true"></div>
    <article class="framework-guide-bubble" role="dialog" aria-modal="true" aria-label="Policy analysis guide">
      <span>${escTree(step.label)}</span>
      <h2>${escTree(step.title)}</h2>
      ${step.emphasis ? `<strong class="framework-guide-emphasis">${escTree(step.emphasis)}</strong>` : ""}
      <p>${escTree(step.copy)}</p>
      ${step.details ? `<dl class="framework-guide-conditions">${step.details.map(([label,copy])=>`<div><dt>${escTree(label)}</dt><dd>${escTree(copy)}</dd></div>`).join("")}</dl>` : ""}
      <footer>${step.kind === "initial" ? '<button type="button" data-guide-skip="1">Skip guide</button>' : '<span></span>'}${step.action ? `<button type="button" data-guide-next="1">${escTree(step.action)} <i data-lucide="arrow-right"></i></button>` : '<span class="framework-guide-use-target">Use the highlighted control</span>'}</footer>
    </article>
  </div>`;
}

function guideTargetRect(){
  const step = activeFrameworkGuide();
  if(!step) return null;
  const targets = [...document.querySelectorAll(step.target)].filter(element=>{
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  });
  if(!targets.length) return null;
  const rects = targets.map(element=>element.getBoundingClientRect());
  return {
    left:Math.min(...rects.map(rect=>rect.left)),
    top:Math.min(...rects.map(rect=>rect.top)),
    right:Math.max(...rects.map(rect=>rect.right)),
    bottom:Math.max(...rects.map(rect=>rect.bottom)),
  };
}

function positionFrameworkGuide(){
  if(!activeFrameworkGuide()) return;
  const focus = document.querySelector(".framework-guide-focus");
  const bubble = document.querySelector(".framework-guide-bubble");
  const target = guideTargetRect();
  if(!focus || !bubble || !target) return;
  const padding = 8;
  const focusLeft = Math.max(8, target.left - padding);
  const focusTop = Math.max(8, target.top - padding);
  const focusRight = Math.min(innerWidth - 8, target.right + padding);
  const focusBottom = Math.min(innerHeight - 8, target.bottom + padding);
  focus.style.left = `${focusLeft}px`;
  focus.style.top = `${focusTop}px`;
  focus.style.width = `${Math.max(0, focusRight - focusLeft)}px`;
  focus.style.height = `${Math.max(0, focusBottom - focusTop)}px`;
  const bubbleRect = bubble.getBoundingClientRect();
  const below = target.bottom + 18;
  const top = below + bubbleRect.height <= innerHeight - 16
    ? below
    : Math.max(16, target.top - bubbleRect.height - 18);
  const left = Math.max(16, Math.min(innerWidth - bubbleRect.width - 16, target.left + (target.right - target.left - bubbleRect.width) / 2));
  bubble.style.left = `${left}px`;
  bubble.style.top = `${top}px`;
  bubble.classList.toggle("points-up", top >= target.bottom);
}

function closeFrameworkGuide(completed=false){
  if(frameworkContextGuide){
    const completedContext = frameworkContextGuide;
    localStorage.setItem(frameworkContextGuideKey(completedContext), "1");
    logTreeEvent("framework_feature_guide_completed", {feature:completedContext});
    frameworkContextGuide = "";
    renderTree();
    return;
  }
  if(!completed){
    Object.keys(activeContextGuides()).forEach(kind=>{
      localStorage.setItem(frameworkContextGuideKey(kind), "1");
    });
  }
  localStorage.setItem(activeGuideStorageKey(), "1");
  logTreeEvent(completed ? "policy_guide_completed" : "policy_guide_skipped", {
    condition:TREE_BASELINE_MODE ? "baseline" : TREE_THREE_PATH_MODE ? "3path" : "framework",
    step:frameworkGuideStep + 1,
  });
  frameworkGuideStep = -1;
  const cleanUrl = new URL(location.href);
  cleanUrl.searchParams.delete("guide");
  history.replaceState({}, "", cleanUrl);
  renderTree();
}
function renderTree(preserveViewport=true, viewportAnchor=null){
  const viewport = preserveViewport ? captureTreeViewport() : null;
  const root = document.getElementById("pathwayTreeApp");
  const nodes = visibleNodes();
  const layout = layoutNodes(nodes);
  const canvasSection = `<section class="tree-layout">
      ${renderTreeZoomControls()}
      <div class="tree-canvas"${(TREE_BASELINE_MODE || TREE_THREE_PATH_MODE) ? ` style="height:${Math.ceil(layout.height * TREE_VIEW_SCALE)}px;"` : ""}>
        <div class="tree-canvas-stage" style="width:${Math.ceil(layout.width * TREE_VIEW_SCALE)}px;height:${Math.ceil(layout.height * TREE_VIEW_SCALE)}px;--tree-scaled-width:${Math.ceil(layout.width * TREE_VIEW_SCALE)}px;">
          <div class="tree-canvas-content" style="--tree-height:${layout.height}px;--tree-width:${layout.width}px;width:${layout.width}px;height:${layout.height}px;--tree-view-scale:${TREE_VIEW_SCALE};">
            ${renderTreeLines(nodes, layout.positions, layout.height, layout.width)}
            ${nodes.map(n=>renderTreeNode(n, layout.positions.get(n.path))).join("")}
            ${renderDiscussionButton(layout.positions)}
            
            ${renderFinalReportButtonTree(layout.positions)}
          </div>
        </div>
      </div>
    </section>`;
  const comparisonDock = renderComparisonDockTree();
  const canvasColumn = comparisonDock
    ? `<div class="tree-canvas-column">${comparisonDock}${canvasSection}</div>`
    : canvasSection;
  // baseline 조건: 캔버스 → 하단 패널 순서. Ours(framework)는 원래의
  // 좌측 사이드바(인스펙터) → 캔버스 순서를 그대로 유지한다.
  const workspaceBody = TREE_BASELINE_MODE || TREE_THREE_PATH_MODE
    ? `${canvasSection}${renderPhaseInspector(nodes, layout)}`
    : `${renderPhaseInspector(nodes, layout)}${canvasColumn}`;
  const studyToolbar = TREE_THREE_PATH_MODE
    ? `<header class="baseline-report-toolbar tree-study-toolbar three-path-toolbar"><span><i data-lucide="git-branch"></i> 3PATH POLICY ANALYSIS</span><b>${escTree(currentPolicyMeta.label)} · 촉진적 전개 / 기준 전개 / 제약적 전개</b></header>`
    : treeDemoMode ? "" : treePracticeMode
    ? `<header class="baseline-report-toolbar tree-study-toolbar tree-practice-toolbar"><span><i data-lucide="mouse-pointer-click"></i> Interactive practice</span><b>Illustrative example data</b></header>`
    : `<header class="baseline-report-toolbar tree-study-toolbar"><a href="${dashboardHrefTree(false)}"><i data-lucide="layout-dashboard"></i><span>Policies</span></a><span>Policy ${currentPolicyIndex + 1} of 2</span></header>`;
  const studyCompletion = treeDemoMode ? "" : treePracticeMode
    ? (treePracticeStep === 10 ? `<section class="baseline-report-complete tree-exploration-complete practice-completion"><a class="finish-link practice-completion-link" data-finish-practice="1" href="#">Continue to first policy <i data-lucide="arrow-right"></i></a></section>` : "")
    : `<section class="baseline-report-complete tree-exploration-complete"><a class="finish-link" data-finish-policy="1" href="${policySurveyHrefTree()}">${TREE_BASELINE_MODE ? "Finish Reviewing" : TREE_THREE_PATH_MODE ? "Finish Comparing" : "Finish Exploring"} <i data-lucide="arrow-right"></i></a></section>`;
  const afterWorkspace = studyCompletion && !TREE_BASELINE_MODE
    ? `<div class="tree-after-workspace">${studyCompletion}</div>`
    : studyCompletion;
  const completionNoticeMarkup = completionNotice ? `<aside class="tree-completion-notice" role="status" aria-live="polite">
    <i data-lucide="circle-alert"></i>
    <p>${escTree(completionNotice)}</p>
    <button data-dismiss-completion-notice="1" type="button" aria-label="Dismiss message"><i data-lucide="x"></i></button>
  </aside>` : "";
  root.innerHTML = `${studyToolbar}
  <section class="tree-workspace">
    ${workspaceBody}
    ${renderDiscussionModal()}
    ${renderPathReportModal()}
    ${renderComparisonModalTree()}
    ${renderPathwayChatModal()}
  </section>
  ${afterWorkspace}
  ${completionNoticeMarkup}
  ${renderFrameworkGuide()}`;
  if(reportPath && window.parent !== window){
    window.parent.postMessage({type:"policy-demo-report-open"}, window.location.origin);
  }
  root.querySelectorAll(".tree-node").forEach(btn=>btn.onclick=()=>{
    if(discussionOpen) closeTimedPanel("discussion");
    if(pathwayChatOpen) closeTimedPanel("chat");
    if(reportPath) closeTimedPanel("report");
    const path = btn.dataset.path;
    if(treePracticeMode && path !== practiceExpectedPathTree()) return;
    const threePathGuideImpact = "root/baseline/baseline/baseline/baseline";
    if(TREE_THREE_PATH_MODE && frameworkGuideStep === 2 && path !== threePathGuideImpact) return;
    const anchor = captureTreeAnchor(path);
    const node = nodeFromPath(path);
    focusedNode = treeNodes.get(path) || node;
    focusedPath = path;
    discussionOpen = false;
    pathwayChatOpen = false;
    if(node.col < TREE_PHASES.length - 1) addChildren(path);
    rememberCompletedPath(path);
    const isCompletePath = node.col === TREE_PHASES.length - 1;
    logTreeEvent("node_selected", {
      path,
      parent_path:node.parent,
      phase:node.phase?.phase,
      phase_index:node.col,
      transition:node.stance,
      complete_path:isCompletePath,
      expanded_child_count:childPaths(path).length,
    }, PolicyStudy.pageElapsed());
    if(isCompletePath && !completedPathSet.has(path)){
      completedPathSet.add(path);
      logTreeEvent("complete_path_discovered", {
        path,
        transitions:pathStancesTree(path),
        final_phase:node.phase?.phase,
      }, PolicyStudy.pageElapsed());
    }
    reportPath = "";
    if(treePracticeMode){
      if(treePracticeStep === 1) treePracticeStep = 2;
      else if(treePracticeStep === 4) treePracticeStep = 5;
      else if(treePracticeStep === 5) treePracticeStep = 6;
      else if(treePracticeStep === 6) treePracticeStep = 7;
      logTreeEvent("practice_step_completed", {step:treePracticeStep, path});
    }else if(TREE_THREE_PATH_MODE && frameworkGuideStep === 2 && path === threePathGuideImpact){
      frameworkGuideStep = 3;
      logTreeEvent("framework_guide_advanced", {step:frameworkGuideStep + 1, path});
    }else if(frameworkGuideStep < 0 && !frameworkContextGuide){
      if(TREE_THREE_PATH_MODE){
        if(!isCompletePath && node.col > 0 && phasePostsTree(node.phase || {}).length > 0 && localStorage.getItem(frameworkContextGuideKey("discussion")) !== "1"){
          frameworkContextGuide = "discussion";
        }
      }else if(!TREE_BASELINE_MODE && isCompletePath && localStorage.getItem(frameworkContextGuideKey("report")) !== "1"){
        frameworkContextGuide = "report";
      }else if(node.col > 0 && phasePostsTree(node.phase || {}).length > 0 && localStorage.getItem(frameworkContextGuideKey("discussion")) !== "1"){
        frameworkContextGuide = "discussion";
      }
    }
    renderTree(true, anchor);
  });
  const reset = root.querySelector("[data-reset-tree]");
  if(reset) reset.onclick=()=>{
    logTreeEvent("tree_reset", {completed_paths_before_reset:[...completedPathSet]}, PolicyStudy.pageElapsed());
    expandedPaths = new Set(["root"]);
    treeNodes = new Map();
    savedPathways = [];
    comparisonPaths = [];
    comparisonOpen = false;
    comparisonResult = null;
    comparisonLoading = false;
    comparisonError = "";
    comparisonRequestKey = "";
    treeNodes.set("root", rootNode());
    addChildren("root");
    focusedPath = "root";
    focusedNode = rootNode();
    discussionOpen = false;
    reportPath = "";
    pathwayChatOpen = false;
    pathwayChatPath = "";
    pathwayChatPersona = "";
    pathwayChatTurns = [];
    completedPathSet = new Set();
    renderTree(false);
  };
  const finish = root.querySelector("[data-finish-policy]");
  if(finish) finish.onclick=event=>{
    event.preventDefault();
    if(markPolicyCompleteTree()) location.href = policySurveyHrefTree();
  };
  const dismissCompletionNotice = root.querySelector("[data-dismiss-completion-notice]");
  if(dismissCompletionNotice) dismissCompletionNotice.onclick=()=>{
    completionNotice = "";
    renderTree();
  };
  const finishPractice = root.querySelector("[data-finish-practice]");
  if(finishPractice) finishPractice.onclick=async event=>{
    event.preventDefault();
    finishPractice.setAttribute("aria-disabled", "true");
    localStorage.setItem(frameworkGuideStorageKey, "1");
    Object.keys(FRAMEWORK_CONTEXT_GUIDES).forEach(kind=>localStorage.setItem(frameworkContextGuideKey(kind), "1"));
    logTreeEvent("framework_practice_completed", {route:TREE_PRACTICE_ROUTE});
    try{
      location.href = await practiceFirstPolicyHrefTree();
    }catch(error){
      finishPractice.removeAttribute("aria-disabled");
      alert(`Unable to open the first policy case: ${error.message}`);
    }
  };
  const guideNext = root.querySelector("[data-guide-next]");
  if(guideNext) guideNext.onclick=()=>{
    if(treePracticeMode){
      if(treePracticeStep === 0){
        treePracticeStep = 1;
        logTreeEvent("practice_step_completed", {step:1});
        renderTree();
      }
      return;
    }
    if(frameworkContextGuide){
      closeFrameworkGuide(true);
      return;
    }
    if(frameworkGuideStep >= activeGuideSteps().length - 1){
      closeFrameworkGuide(true);
      return;
    }
    frameworkGuideStep += 1;
    logTreeEvent("framework_guide_advanced", {step:frameworkGuideStep + 1});
    renderTree();
  };
  const guideSkip = root.querySelector("[data-guide-skip]");
  if(guideSkip) guideSkip.onclick=()=>closeFrameworkGuide(false);
  const zoomOut = root.querySelector("[data-tree-zoom-out]");
  const zoomIn = root.querySelector("[data-tree-zoom-in]");
  if(zoomOut){
    zoomOut.disabled = TREE_VIEW_SCALE <= TREE_VIEW_SCALE_MIN;
    zoomOut.onclick=()=>updateTreeZoom(TREE_VIEW_SCALE - TREE_VIEW_SCALE_STEP);
  }
  if(zoomIn){
    zoomIn.disabled = TREE_VIEW_SCALE >= TREE_VIEW_SCALE_MAX;
    zoomIn.onclick=()=>updateTreeZoom(TREE_VIEW_SCALE + TREE_VIEW_SCALE_STEP);
  }
  // baseline 조건: final report 버튼 → 경로 보고서 모달
  root.querySelectorAll("[data-open-final-report]").forEach(button=>button.onclick=()=>{
    if(discussionOpen) closeTimedPanel("discussion");
    if(pathwayChatOpen) closeTimedPanel("chat");
    discussionOpen=false;
    pathwayChatOpen=false;
    reportPath=button.dataset.reportNodePath;
    reportOpenedAt=performance.now();
    logTreeEvent("report_opened", {path:reportPath});
    renderTree();
  });
  root.querySelectorAll("[data-focus-path]").forEach(btn=>btn.onclick=()=>{
    if(discussionOpen) closeTimedPanel("discussion");
    if(pathwayChatOpen) closeTimedPanel("chat");
    if(reportPath) closeTimedPanel("report");
    const path = btn.dataset.focusPath;
    if(!treeNodes.has(path)) return;
    focusedPath = path;
    focusedNode = treeNodes.get(path);
    discussionOpen = false;
    reportPath = "";
    pathwayChatOpen = false;
    renderTree();
  });
  root.querySelectorAll("[data-report-path]").forEach(btn=>btn.onclick=()=>{
    if(discussionOpen) closeTimedPanel("discussion");
    if(pathwayChatOpen) closeTimedPanel("chat");
    if(reportPath) closeTimedPanel("report");
    const path = btn.dataset.reportPath;
    if(!treeNodes.has(path)) return;
    focusedPath = path;
    focusedNode = treeNodes.get(path);
    discussionOpen = false;
    pathwayChatOpen = false;
    reportPath = path;
    reportOpenedAt = performance.now();
    logTreeEvent("report_opened", {path});
    renderTree();
  });
  root.querySelectorAll("[data-open-discussion]").forEach(btn=>btn.onclick=()=>{
    if(treePracticeMode && treePracticeStep !== 2) return;
    if(pathwayChatOpen) closeTimedPanel("chat");
    if(reportPath) closeTimedPanel("report");
    discussionOpen = true;
    expandedRationaleIndex = null;
    reportPath = "";
    pathwayChatOpen = true;
    pathwayChatPath = (focusedNode || focusedTreeNode()).path;
    const chatPosts = phasePostsTree((focusedNode || focusedTreeNode()).phase || {});
    if(!chatPosts.some(p=>p.persona_name===pathwayChatPersona)) pathwayChatPersona=chatPosts[0]?.persona_name || "";
    chatOpenedAt=performance.now();
    discussionOpenedAt = performance.now();
    logTreeEvent("discussion_opened", {
      path:focusedTreeNode().path,
      phase:focusedTreeNode().phase?.phase,
      phase_index:focusedTreeNode().col,
    });
    if(treePracticeMode) treePracticeStep = 3;
    renderTree();
  });
  root.querySelectorAll("[data-open-path-chat]").forEach(btn=>btn.onclick=()=>{
    if(treePracticeMode && treePracticeStep !== 8) return;
    if(discussionOpen) closeTimedPanel("discussion");
    if(reportPath) closeTimedPanel("report");
    const node = TREE_BASELINE_MODE
      ? [...treeNodes.values()].find(n=>n.col === TREE_PHASES.length - 1)
      : focusedTreeNode();
    if(!node) return;
    pathwayChatPath = node.path;
    const posts = orderedStakeholderPostsTree(phasePostsTree(node.phase || {}));
    pathwayChatPersona = posts[0]?.post?.persona_name || "";
    pathwayChatOpen = true;
    discussionOpen = false;
    reportPath = "";
    chatOpenedAt = performance.now();
    logTreeEvent("chat_opened", {path:pathwayChatPath, persona:pathwayChatPersona});
    if(treePracticeMode) treePracticeStep = 9;
    if(TREE_THREE_PATH_MODE && frameworkGuideStep === 4){
      frameworkGuideStep = 5;
      logTreeEvent("framework_guide_advanced", {step:frameworkGuideStep + 1, path:pathwayChatPath});
    }
    renderTree();
  });
  root.querySelectorAll("[data-close-discussion]").forEach(el=>el.onclick=(event)=>{
    if(event.target !== el && !el.matches("button")) return;
    closeTimedPanel("discussion");
    if(pathwayChatOpen) closeTimedPanel("chat");
    pathwayChatOpen=false;
    discussionOpen = false;
    expandedRationaleIndex = null;
    if(treePracticeMode && treePracticeStep === 3) treePracticeStep = 4;
    renderTree();
  });
  root.querySelectorAll("[data-rationale-index]").forEach(btn=>btn.onclick=()=>{
    expandedRationaleIndex = Number(btn.dataset.rationaleIndex);
    logTreeEvent("stakeholder_rationale_expanded", {
      path:discussionNodeKey,
      persona_index:expandedRationaleIndex,
    });
    renderTree();
  });
  root.querySelectorAll("[data-close-rationale]").forEach(btn=>btn.onclick=()=>{
    logTreeEvent("stakeholder_rationale_collapsed", {
      path:discussionNodeKey,
      persona_index:expandedRationaleIndex,
    });
    expandedRationaleIndex = null;
    renderTree();
  });
  root.querySelectorAll("[data-close-report]").forEach(el=>el.onclick=(event)=>{
    if(event.target !== el && !el.matches("button")) return;
    const completedNode = treeNodes.get(reportPath) || treeNodes.get(focusedPath) || focusedTreeNode();
    const chatAvailable = completedNode.col === TREE_PHASES.length - 1 && phasePostsTree(completedNode.phase || {}).length > 0;
    closeTimedPanel("report");
    reportPath = "";
    if(treePracticeMode && treePracticeStep === 7){
      treePracticeStep = 8;
    }else if(TREE_THREE_PATH_MODE && frameworkGuideStep === 3){
      frameworkGuideStep = 4;
      logTreeEvent("framework_guide_advanced", {step:frameworkGuideStep + 1, path:completedNode.path});
    }else if(TREE_THREE_PATH_MODE && frameworkGuideStep < 0 && !frameworkContextGuide && chatAvailable && localStorage.getItem(frameworkContextGuideKey("discussion")) !== "1"){
      frameworkContextGuide = "discussion";
    }else if(!TREE_BASELINE_MODE && !TREE_THREE_PATH_MODE && frameworkGuideStep < 0 && !frameworkContextGuide){
      if(chatAvailable && localStorage.getItem(frameworkContextGuideKey("chat")) !== "1"){
        frameworkContextGuide = "chat";
      }
    }
    renderTree();
  });
  root.querySelectorAll("[data-comparison-drag]").forEach(node=>{
    node.ondragstart=event=>{
      const path = node.dataset.comparisonDrag;
      if(!path || comparisonPaths.includes(path) || comparisonPaths.length >= 2){
        event.preventDefault();
        return;
      }
      event.dataTransfer.effectAllowed = "copy";
      event.dataTransfer.setData("application/x-policy-path", path);
      event.dataTransfer.setData("text/plain", path);
      const preview = node.cloneNode(true);
      preview.classList.add("comparison-drag-preview");
      preview.removeAttribute("data-comparison-drag");
      preview.removeAttribute("draggable");
      preview.querySelectorAll("[id]").forEach(element=>element.removeAttribute("id"));
      document.body.appendChild(preview);
      event.dataTransfer.setDragImage(preview, Math.min(72, preview.offsetWidth / 2), 34);
      node._comparisonDragPreview = preview;
      node.classList.add("comparison-dragging");
      logTreeEvent("comparison_path_drag_started", {path});
    };
    node.ondragend=()=>{
      node.classList.remove("comparison-dragging");
      node._comparisonDragPreview?.remove();
      node._comparisonDragPreview = null;
    };
  });
  root.querySelectorAll("[data-comparison-drop]").forEach(slot=>{
    slot.ondragover=event=>{
      event.preventDefault();
      event.dataTransfer.dropEffect = "copy";
      slot.classList.add("drag-over");
    };
    slot.ondragleave=event=>{
      if(!slot.contains(event.relatedTarget)) slot.classList.remove("drag-over");
    };
    slot.ondrop=event=>{
      event.preventDefault();
      slot.classList.remove("drag-over");
      document.querySelectorAll(".comparison-drag-preview").forEach(preview=>preview.remove());
      const path = event.dataTransfer.getData("application/x-policy-path") || event.dataTransfer.getData("text/plain");
      const node = treeNodes.get(path);
      if(!path || !node || node.col !== TREE_PHASES.length - 1 || comparisonPaths.includes(path) || comparisonPaths.length >= 2) return;
      comparisonPaths = [...comparisonPaths, path];
      comparisonResult = null;
      comparisonError = "";
      comparisonRequestKey = "";
      logTreeEvent("comparison_path_added", {
        path,
        source:"drag_and_drop",
        slot:comparisonPaths.length === 1 ? "A" : "B",
        transitions:pathStancesTree(path),
      });
      renderTree();
    };
  });
  root.querySelectorAll("[data-remove-comparison]").forEach(btn=>btn.onclick=()=>{
    const path = btn.dataset.removeComparison;
    comparisonPaths = comparisonPaths.filter(item=>item !== path);
    comparisonOpen = false;
    comparisonResult = null;
    comparisonLoading = false;
    comparisonError = "";
    comparisonRequestKey = "";
    logTreeEvent("comparison_path_removed", {path, remaining_paths:[...comparisonPaths]});
    renderTree();
  });
  const openComparison = root.querySelector("[data-open-comparison]");
  if(openComparison) openComparison.onclick=()=>{
    if(comparisonPaths.length !== 2) return;
    comparisonOpen = true;
    logTreeEvent("pathway_comparison_opened", {
      paths:[...comparisonPaths],
      transitions:comparisonPaths.map(path=>pathStancesTree(path)),
    });
    renderTree();
    loadComparisonSynthesisTree();
  };
  root.querySelectorAll("[data-retry-comparison]").forEach(btn=>btn.onclick=()=>loadComparisonSynthesisTree(true));
  root.querySelectorAll("[data-close-comparison]").forEach(el=>el.onclick=(event)=>{
    if(event.target !== el && !el.matches("button")) return;
    comparisonOpen = false;
    logTreeEvent("pathway_comparison_closed", {paths:[...comparisonPaths]});
    renderTree();
  });
  root.querySelectorAll("[data-close-path-chat]").forEach(el=>el.onclick=(event)=>{
    if(event.target !== el && !el.matches("button")) return;
    closeTimedPanel("chat");
    pathwayChatOpen = false;
    if(treePracticeMode && treePracticeStep === 9) treePracticeStep = 10;
    if(TREE_THREE_PATH_MODE && frameworkGuideStep === 5){
      closeFrameworkGuide(true);
      return;
    }
    renderTree();
  });
  root.querySelectorAll("[data-path-chat-q]").forEach(btn=>btn.onclick=()=>{
    submitPathwayChat(btn.dataset.pathChatQ);
  });
  root.querySelectorAll("[data-path-chat-persona]").forEach(btn=>btn.onclick=()=>{
    pathwayChatPersona = btn.dataset.pathChatPersona || "";
    logTreeEvent("chat_persona_selected", {path:pathwayChatPath, persona:pathwayChatPersona});
    renderTree();
  });
  const chatForm = root.querySelector("#pathwayChatForm");
  if(chatForm) chatForm.onsubmit=(event)=>{
    event.preventDefault();
    const input = chatForm.querySelector("input[name='question']");
    const question = input?.value?.trim();
    if(input) input.value = "";
    submitPathwayChat(question);
  };
  const canvas = root.querySelector(".tree-canvas");
  if(canvas){
    canvas.onscroll = updateMiniMapViewport;
    bindTreeCanvasPan(canvas);
  }
  root.querySelectorAll("[data-minimap]").forEach(btn=>btn.onclick=moveCanvasFromMiniMap);
  restoreTreeViewport(viewport, viewportAnchor);
  updateMiniMapViewport();
  if(window.lucide) lucide.createIcons();
  if(discussionOpen) requestAnimationFrame(syncDiscussionNetwork);
  if(activeFrameworkGuide()) requestAnimationFrame(positionFrameworkGuide);
  newlyAddedPaths = new Set();
}

async function submitPathwayChat(question){
  question = String(question || "").trim();
  if(!question || !pathwayChatOpen) return;
  if(frameworkChatUsage.enabled && frameworkChatUsage.used >= frameworkChatUsage.limit){
    logTreeEvent("chat_limit_reached", {
      policy_key:currentPolicyKey,
      used:frameworkChatUsage.used,
      limit:frameworkChatUsage.limit,
    });
    renderTree();
    return;
  }
  const node = treeNodes.get(pathwayChatPath) || focusedTreeNode();
  const posts = orderedStakeholderPostsTree(phasePostsTree(node.phase || {})).map(({post})=>post).filter(Boolean);
  if(!posts.length) return;
  const selectedPost = posts.find(p=>p.persona_name === pathwayChatPersona) || posts[0];
  pathwayChatPersona = selectedPost.persona_name || pathwayChatPersona;
  const id = `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const askedAt = performance.now();
  const turn = {
    id,
    path:pathwayChatPath || node.path,
    personaName:selectedPost.persona_name,
    question,
    answers:[{personaName:selectedPost.persona_name, pending:true, answer:"", error:""}],
  };
  pathwayChatTurns = [...pathwayChatTurns, turn].slice(-12);
  if(frameworkChatUsage.enabled){
    frameworkChatUsage.used += 1;
    frameworkChatUsage.remaining = Math.max(0, frameworkChatUsage.limit - frameworkChatUsage.used);
  }
  logTreeEvent("chat_question_submitted", {
    turn_id:id,
    path:turn.path,
    persona:turn.personaName,
    question,
  }, PolicyStudy.pageElapsed());
  renderTree();

  const context = pathwayContextText(turn.path);
  const personaContext = personaPathwayContextText(selectedPost);
  await Promise.all(turn.answers.map(async answer=>{
    const history = pathwayChatTurns
      .filter(t=>t.id !== id && t.path === turn.path && t.personaName === answer.personaName)
      .flatMap(t=>{
        const prior = t.answers.find(a=>a.personaName === answer.personaName && !a.pending && !a.error);
        return prior ? [
          {role:"user", content:t.question},
          {role:"assistant", content:prior.answer},
        ] : [];
      })
      .slice(-6);
    try{
      const res = await fetch("/api/pathway/persona-chat", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          persona_name:answer.personaName,
          policy_key:currentPolicyKey,
          question:`The user selected the following complete policy pathway:\n${context}\n\nYour prior position and rationale within this pathway are:\n${personaContext}\n\nUser question: ${question}\n\nRespond in English from your stakeholder perspective. Ground your response in the selected pathway and your prior predictions, rationale, and constraints. State your core position first, then explain only one key mechanism or constraint and one limitation. Use no more than two paragraphs and 3-5 concise sentences. Do not repeat the pathway description or numeric values at length.`,
          history,
          participant_id:PolicyStudy.participantId || null,
          pathway:turn.path,
          turn_id:id,
          user_question:question,
        }),
      });
      if(!res.ok){
        const errorPayload = await res.json().catch(()=>({}));
        if(res.status === 429 && errorPayload.detail){
          frameworkChatUsage.used = Number(errorPayload.detail.used ?? frameworkChatUsage.limit);
          frameworkChatUsage.remaining = 0;
        }
        throw new Error((typeof errorPayload.detail === "string" ? errorPayload.detail : errorPayload.detail?.message) || `답변 요청에 실패했습니다 (${res.status})`);
      }
      const data = await res.json();
      answer.answer = data.answer || "";
      logTreeEvent("chat_answer_received", {
        turn_id:id,
        path:turn.path,
        persona:answer.personaName,
        question,
        answer:answer.answer,
      }, performance.now() - askedAt);
    }catch(err){
      answer.error = err.message || "Failed to generate answer.";
      logTreeEvent("chat_answer_failed", {
        turn_id:id,
        path:turn.path,
        persona:answer.personaName,
        question,
        error:answer.error,
      }, performance.now() - askedAt);
    }finally{
      answer.pending = false;
      renderTree();
    }
  }));
}

async function refreshFrameworkChatUsage(){
  if(!PolicyStudy.participantId) return;
  try{
    const query = new URLSearchParams({
      participant_id:PolicyStudy.participantId,
      policy_key:currentPolicyKey,
    });
    const response = await fetch(`/api/study/chat-limit?${query.toString()}`);
    if(!response.ok) return;
    const status = await response.json();
    frameworkChatUsage = {
      enabled:Boolean(status.enabled),
      used:Number(status.used || 0),
      limit:Number(status.limit || FRAMEWORK_CHAT_LIMIT),
      remaining:status.remaining == null ? null : Number(status.remaining),
    };
    if(pathwayChatOpen) renderTree();
  }catch(error){
    console.warn("Unable to load stakeholder-chat usage", error);
  }
}

window.addEventListener("resize", ()=>{
  if(activeFrameworkGuide()) positionFrameworkGuide();
});

const [treeCountry, treeProgram] = currentPolicyKey.split("/");
fetch(`/api/pathway/${encodeURIComponent(treeCountry)}/${encodeURIComponent(treeProgram)}/precomputed`)
  .then(response=>{
    if(!response.ok) throw new Error(`precomputed pathway: ${response.status}`);
    return response.json();
  })
  .then(rawPrecomputed=>{
    const precomputed = treePracticeMode ? preparePracticePrecomputedTree(rawPrecomputed) : rawPrecomputed;
    configurePolicyTree(precomputed);
    treeData = {stances:[]};
    if(precomputed?.nodes?.length){
      precomputedTreeNodes = new Map(precomputed.nodes.map(node=>[
        node.node_id,
        {
          path:node.node_id,
          parent:node.parent_id,
          stance:node.transition_mode || "neutral",
          col:node.phase_index,
          phase:node.phase,
          parentContextHash:node.parent_context_hash,
          x:82 + node.phase_index * TREE_COL_GAP,
          y:260,
        },
      ]));
    }
    expandedPaths = new Set();
    treeNodes = new Map();
    treeNodes.set("root", rootNode());
    if(TREE_BASELINE_MODE){
      // baseline: 단일 궤적 전체를 처음부터 제시 (선택 행위가 없으므로 점진적 공개가 불필요)
      expandBaselineChain();
    }else if(TREE_THREE_PATH_MODE){
      // 3path: 같은 전개 조건만 유지하는 세 개의 고정 경로를 한 화면에 제시한다.
      expandThreePathChains();
    }else{
      addChildren("root");
    }
    newlyAddedPaths = new Set();
    focusedPath = "root";
    focusedNode = rootNode();
    logTreeEvent("policy_exploration_started", {
      policy_label:currentPolicyMeta.label,
      available_phases:TREE_PHASES,
      condition:TREE_BASELINE_MODE ? "baseline" : TREE_THREE_PATH_MODE ? "3path" : "framework",
      assigned_order_index:Number(treeQuery.get("policyIndex") || 0),
    });
    renderTree();
    refreshFrameworkChatUsage();
  })
  .catch(err=>{
    document.getElementById("pathwayTreeApp").innerHTML = `<div class="path-loading">Failed to load tree data: ${escTree(err.message)}</div>`;
  });

window.addEventListener("pagehide", ()=>{
  PolicyStudy.exitEvent("policy_page_exit", {
    completed_paths:[...completedPathSet],
    comparison_paths:[...comparisonPaths],
    visible_node_count:treeNodes.size,
    focused_path:focusedPath,
    discussion_open:discussionOpen,
    report_open:Boolean(reportPath),
    chat_open:pathwayChatOpen,
    active_elapsed_ms:Math.round(activePolicyElapsedTree()),
  });
});

document.addEventListener("visibilitychange", ()=>{
  if(document.hidden){
    if(activeSegmentStartedAt != null){
      activeElapsedMs += performance.now() - activeSegmentStartedAt;
      activeSegmentStartedAt = null;
    }
    logTreeEvent("page_hidden", {active_elapsed_ms:Math.round(activeElapsedMs)}, PolicyStudy.pageElapsed());
  }else{
    activeSegmentStartedAt = performance.now();
    logTreeEvent("page_visible", {active_elapsed_ms:Math.round(activeElapsedMs)}, PolicyStudy.pageElapsed());
  }
});
