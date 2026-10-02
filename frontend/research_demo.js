const DEMO_POLICY = {key:"company/starbucks", country:"company", program:"starbucks", label:"Starbucks Korea · 개인컵"};
const CATEGORY_COLORS = {
  Participants:"#745bd6", Positions:"#c079d8", Costs_and_Benefits:"#e98950",
  Information:"#37a48a", Actions:"#e0a83e", Rules:"#5a94dc"
};
const PERSONA_ICONS = ["landmark","wallet-cards","house","users-round","megaphone"];
const PERSONA_COLORS = ["#7055d8","#2f9d84","#df824a","#4f8dc8","#b560bd"];
const PERSONA_ROLE_TITLES = {program_operator:"기업 캠페인 담당자", store_manager:"점장", store_partner:"매장 파트너", customer:"리워드 고객"};
const DEMO_NODE_SUMMARIES = {};
const NODE_KO = {"StarbucksRewardCustomer": {"name": "스타벅스 리워드 고객", "summary": "스타벅스 리워드 회원은 개인컵으로 주문할 때 명시된 할인 또는 에코별 혜택을 선택할 수 있습니다."}, "StorePartner": {"name": "매장 파트너", "summary": "고객 요청에 대응하고 Reuse, I can! 영상 챌린지에 참여한 매장 직원입니다. 보고서에서 캠페인 참여를 의무로 규정하지는 않습니다."}, "StoreManager": {"name": "점장", "summary": "채용, 예방 교육, 안전 교육에 언급된 점장 역할입니다. 개인컵 캠페인에 대한 권한은 명시되지 않았습니다."}, "CorporateESGProgramOperator": {"name": "기업 ESG 프로그램 운영 조직", "summary": "보고서에 소개된 ESG 실무협의체로, 출범 시점은 2025년 2월입니다. 리워드 프로그램 운영 권한과 예산은 확인되지 않았습니다."}, "PersonalCupUseRecord": {"name": "개인컵 이용 기록", "summary": "연도별 개인컵 이용 실적입니다. 2021~2023년 수치는 제공되고 2024년 수치는 가려져 있습니다."}, "ReusableCupUseRate": {"name": "다회용 컵 이용률", "summary": "2024년 4월 Reuse 캠페인 최우수 매장의 개인컵·매장컵 합산 이용률은 84%입니다. 전국 개인컵 이용률을 뜻하지 않습니다."}, "PersonalCupRewardRule": {"name": "개인컵 리워드 규칙", "summary": "리워드 회원이 개인컵으로 주문하면 400원 할인 또는 에코별 1개 적립 중 하나를 선택할 수 있습니다."}, "CarbonNeutralPointIncentive": {"name": "탄소중립 포인트 혜택", "summary": "2023년 2월부터 운영된 제도로, 개인컵과 전자영수증 이용 혜택이 보고돼 있습니다. 다른 리워드와의 중복 적용 여부는 확인되지 않았습니다."}, "PersonalCupCampaign": {"name": "개인컵 관련 캠페인", "summary": "여러 개인컵 관련 캠페인의 묶음입니다. 관계별로 해당 캠페인을 구분해야 하며, 특정 캠페인의 조건을 전체에 적용할 수 없습니다."}, "StoreOperatingContext": {"name": "매장 운영 맥락", "summary": "국내 매장 운영의 전반적 맥락입니다. 특정 시점의 규모를 연초 또는 연평균 운영 역량으로 해석해서는 안 됩니다."}, "OrderingChannel": {"name": "주문 채널", "summary": "보고서에 소개된 앱·매장 주문 채널입니다. 개인컵 지원 여부는 각 채널의 근거를 통해 확인해야 합니다."}, "Starbucks Korea": {"name": "스타벅스 코리아", "summary": "매장 운영과 기업 프로그램을 수행하는 기업입니다. 개별 프로그램에 대한 책임은 각각의 근거로 확인해야 합니다."}, "Siren Order": {"name": "사이렌 오더", "summary": "앱에서 음료를 미리 주문하고 매장에서 수령하는 서비스입니다."}, "My DT Pass": {"name": "마이 DT 패스", "summary": "차량 번호와 결제 수단을 연동하여 드라이브스루에서 자동 결제하는 서비스입니다."}, "Domestic Store Network": {"name": "국내 매장 네트워크", "summary": "2024년 12월 31일 기준 국내 82개 도시에 2,009개 매장을 운영합니다."}, "Workforce Size": {"name": "직원 규모", "summary": "2024년 12월 31일 기준 매장과 지원센터 직원은 23,792명입니다."}, "Store Formats": {"name": "매장 유형", "summary": "일반, 드라이브스루, 리저브, 티바나, 특화 푸드 매장 등의 유형이 있습니다."}, "Online Store": {"name": "온라인 스토어", "summary": "전용 상품과 서비스를 제공하는 온라인 판매 채널입니다."}, "Quick Order": {"name": "퀵 오더", "summary": "자주 마시는 음료를 빠르게 재주문하는 디지털 서비스입니다."}, "NOW Brewing": {"name": "나우 브루잉", "summary": "일부 음료를 더 빠르게 제공하는 디지털 서비스입니다."}, "Starbucks Delivers": {"name": "스타벅스 딜리버스", "summary": "전용 메뉴와 단체 주문을 제공하는 배달 서비스입니다."}, "CumulativePersonalCupUses": {"name": "누적 개인컵 이용 건수", "summary": "2007년부터 2024년 12월까지의 누적 개인컵 이용 건수이며, 수치는 가려져 있습니다."}, "CumulativeRewardBenefits": {"name": "누적 고객 혜택", "summary": "2007년부터 2024년 12월까지 개인컵 이용으로 고객에게 제공된 누적 혜택은 약 759억 원입니다."}, "MonthlyDisposableCupFreeDay": {"name": "일회용 컵 없는 날", "summary": "매월 10일 특별 혜택으로 개인컵 이용을 장려하는 캠페인입니다."}, "Human Rights Impact Assessment": {"name": "인권영향평가", "summary": "2025년 상반기에 인권 위험을 파악하기 위해 8개 영역의 65개 지표로 평가했으며, 준수율은 96.9%입니다."}, "Sexual Harassment and Bullying Prevention Education": {"name": "성희롱·직장 내 괴롭힘 예방 교육", "summary": "리더, 팀장, 점장을 대상으로 한 예방 교육으로, 2024년 약 2,500명이 이수했습니다."}, "Foreign Employees": {"name": "외국인 직원", "summary": "별도 채용 체계를 통해 선발된 외국인 바리스타입니다. 2025년 기준 전국에서 외국인 파트너 74명이 근무합니다."}, "Starbucks Youth Leadership Program": {"name": "청년 리더십 프로그램", "summary": "커뮤니티 스토어 1·2호점의 기금으로 장학금, 캠프, 세미나, 인턴십, 멘토링 등을 제공하여 청년을 지원합니다."}, "Youth Employment Support Program": {"name": "청년 취업 지원 프로그램", "summary": "특성화고 학생에게 이력서 작성, 모의 면접, 멘토링 등을 제공하는 진로 교육입니다. 일부 참여자는 바리스타로 채용됩니다."}, "Jongno R Store": {"name": "종로 R점", "summary": "2024년 1월 커뮤니티 스토어 8호점으로 지정되어 청년 취업박람회와 진로 프로그램을 운영하는 매장입니다."}, "K-Heritage Protection Fund Donation": {"name": "국가유산 보호 기금", "summary": "2009년부터 국가유산청과 추진한 기금 사업으로, 유물 구입·전시와 미래 세대 지원 등을 통해 국가유산을 보호합니다."}, "Hero Support Program": {"name": "히어로 지원 프로그램", "summary": "2024년부터 군인, 소방관, 경찰관, 임산부 등에게 쿠폰, 푸드, 장학금 등을 제공하는 지원 프로그램입니다."}, "Small Business Win-Win Cooperation Program": {"name": "소상공인 상생 협력 프로그램", "summary": "2022년부터 동반성장위원회·전국카페사장협동조합과 함께 음료 레시피와 원재료를 무상 제공하여 소상공인 카페를 지원합니다."}, "Talent Donation Cafe": {"name": "재능기부 카페", "summary": "2012년부터 NGO가 운영하는 지역 카페에 환경 개선, 커피 교육, 운영 노하우를 지원하는 프로그램입니다."}, "Starbucks App Security Enhancement": {"name": "스타벅스 앱 보안 강화", "summary": "로그인 보안과 결제 인증을 도입하여 앱 보안을 강화합니다."}, "BSI Group Korea": {"name": "BSI 그룹 코리아", "summary": "스타벅스 코리아 2024~2025 임팩트 리포트를 검토하고 검증 의견을 제시한 독립적인 제3자 검증기관입니다."}, "SCK Company": {"name": "SCK컴퍼니", "summary": "스타벅스 코리아 운영사이자 보고 조직입니다. 2024~2025 임팩트 리포트의 검증 범위에 속하는 정보와 내부 통제 절차를 관리합니다."}, "GRI Standards 2021": {"name": "GRI 표준 2021", "summary": "스타벅스 코리아가 지속가능성 보고에 사용한 기준으로, GRI 1: Foundation 2021을 포함합니다."}, "2024-2025 Reporting Period": {"name": "2024~2025 보고 기간", "summary": "주요 보고 기간은 2024년이며, 일부 성과는 2025년 상반기까지 포함합니다."}, "AA1000 AccountAbility Principles (2018": {"name": "AA1000 원칙(2018)", "summary": "검증의 평가 기준으로 사용된 포괄성, 중요성, 대응성, 영향의 네 가지 원칙입니다."}, "2024-2025 Starbucks Korea Impact Report": {"name": "스타벅스 코리아 임팩트 리포트", "summary": "SCK컴퍼니가 발행한 지속가능성 보고서로, 2024년과 일부 2025년 상반기 성과를 다루며 제3자 검증을 받았습니다."}, "SCK Company ESG Team": {"name": "SCK컴퍼니 ESG팀", "summary": "임팩트 리포트 발행과 지속가능성 공시를 담당하는 내부 조직입니다."}, "Recommendations for Improvement": {"name": "개선 권고사항", "summary": "검증기관은 연간 지속가능성 목표 구체화, 이해관계자 식별 기준 명확화, 데이터 수집 범위 확대, 내부 통제 강화를 권고했습니다."}};
const CATEGORY_KO = {Participants:"참여자",Positions:"역할",Costs_and_Benefits:"비용과 혜택",Information:"정보",Actions:"행동",Rules:"규칙"};
const PREPARED_FILE = "Starbucks Korea_Impact Report_2024.pdf";
let demoState = {stage:"source", graph:null, tree:null, personas:[], network:null, fileName:PREPARED_FILE, documentInput:null, simulationPurpose:"스타벅스 2024년도 개인컵 이용 건수 예측"};

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
    const key=sentence.toLowerCase().replace(/\d+/g,"#").replace(/[^a-z가-힣# ]/g,"").replace(/\s+/g," ").trim();
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
    graph:"지식 그래프를 구축하고 있습니다…",
    personas:"페르소나를 모델링하고 있습니다…",
    pathways:"시뮬레이션을 실행하고 있습니다…"
  };
  const app=document.getElementById("demoApp");
  app.innerHTML=`<section class="loading-panel stage-transition"><div><i data-lucide="loader-circle"></i><p>${messages[nextStage]||"기업 프로그램 결과를 불러오고 있습니다…"}</p><span>프로세싱 중</span></div></section>`;
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
  return `<div class="demo-page"><div class="source-grid">
    <section class="demo-panel"><div class="panel-head"><div><h2>정책 파급효과 시뮬레이션 절차</h2></div></div>
      <ol class="pipeline-list">
        <li><i class="pipeline-number">01</i><div><b>정책 문서 및 시뮬레이션 목적 입력</b><span>정책 시행안, Impact Report 등의 보고서와 예측하고자 하는 목표·지표를 입력합니다.</span></div></li>
        <li><i class="pipeline-number">02</i><div><b>온톨로지 및 지식 그래프 구축</b><span>문서의 주요 개념과 관계를 구조화하여 정책의 실행 조건과 맥락을 연결합니다.</span></div></li>
        <li><i class="pipeline-number">03</i><div><b>이해관계자 추출 및 페르소나 생성</b><span>정책과 관련된 이해관계자를 선정하고 역할, 목표, 제약을 반영한 페르소나를 생성합니다.</span></div></li>
        <li><i class="pipeline-number">04</i><div><b>정책 파급효과 시뮬레이션 및 경로 비교</b><span>Inputs부터 Impact까지 단계별 전개를 추론하고 촉진·기준·제약 조건의 결과를 비교합니다.</span></div></li>
      </ol>
    </section>
    <div class="source-input-column">
    <section class="demo-panel source-input-panel"><div class="panel-head"><div><h2>정책 문서 및 목표 입력</h2></div></div>
      <label class="pdf-drop" id="pdfDrop" for="pdfInput" tabindex="0" role="button" aria-label="정책 PDF 문서 선택">
        <i data-lucide="file-up"></i><b id="dropFileName">${escDemo(demoState.documentInput ? demoState.fileName : "문서를 드래그 앤 드롭하세요")}</b><span id="dropFileStatus">${escDemo(demoState.documentInput ? "문서 선택 완료 · 클릭하여 변경" : "또는 클릭하여 PDF 파일 선택")}</span>
        <input id="pdfInput" type="file" accept=".pdf,application/pdf" tabindex="-1" />
      </label>
      <div class="source-file prepared-source" id="preparedSource" draggable="true" tabindex="0" role="button" aria-label="Starbucks 보고서 선택 또는 끌어서 입력"><i data-lucide="file-text"></i><div><b id="selectedFileName">${escDemo(PREPARED_FILE)}</b><span id="selectedFileMeta">끌어서 위 영역에 놓거나 클릭하여 선택</span></div></div>
      <p id="fileInputError" class="file-input-error" role="alert" hidden></p>
      <div class="simulation-purpose"><label for="simulationPurpose">시뮬레이션 목적</label><textarea id="simulationPurpose" rows="4" placeholder="예: 개인컵 사용을 촉진하는 프로그램이 2024년 개인컵 이용 건수에 미치는 영향을 추정합니다.">${escDemo(demoState.simulationPurpose)}</textarea></div>
    </section><button class="demo-action source-build-action" data-go="graph">지식 그래프 구축 <i data-lucide="arrow-right"></i></button></div></div></div>`;
}

function renderGraphStage(){
  return `<div class="demo-page">
    <section class="graph-layout"><div id="demoGraph" class="demo-graph"></div><aside class="graph-sidebar"><h2>정책 정보</h2><div id="demoGraphDetail" class="node-detail"><p>노드를 선택하면 설명과 연결 관계를 확인할 수 있습니다.</p></div></aside></section><div class="graph-stage-footer"><button class="demo-action graph-next" data-go="personas">페르소나 확인 <i data-lucide="arrow-right"></i></button></div>
  </div>`;
}
const PERSONA_TEXT_KO = {"program_operator": {"objective": "개인컵 리워드와 문서에 명시된 캠페인을 조율합니다.", "constraints": ["문서에 명시된 권한 범위 안에서 판단합니다.", "2024년 활동과 이후 또는 시점이 명시되지 않은 조치를 구분합니다."]}, "store_manager": {"objective": "매장 운영과 고객 서비스를 조율합니다.", "constraints": ["본사 리워드에 대한 통제 권한을 가정하지 않습니다.", "근거가 없는 캠페인 관리 책임을 부여하지 않습니다."]}, "store_partner": {"objective": "개인컵 주문과 문서에 명시된 매장 활동을 수행합니다.", "constraints": ["문서에 명시된 매장 운영 범위 안에서 활동합니다.", "인력과 업무 부담에 관한 추정은 가정으로 취급합니다."]}, "customer": {"objective": "개인컵을 지참할지, 적용 가능한 리워드를 이용할지 결정합니다.", "constraints": ["직업·나이·학력에 따른 참여 자격 제한은 문서에 명시되지 않았습니다.", "서비스직에 편중되지 않도록 다양한 고객 배경을 반영합니다."]}};
const PERSONA_DETAIL_KO = {"program_operator": {"label": "PROGRAM OPERATOR", "tags": ["프로그램 설계", "캠페인 실행", "성과 모니터링"], "actions": ["개인컵 이용 리워드 회원에게 할인 또는 에코별을 제공하는 규칙을 운영합니다. 규칙 도입 연도는 확인되지 않았습니다.", "매월 10일을 일회용 컵 없는 날로 지정합니다.", "누적 고객 혜택 약 759억 원을 보고합니다. 이 금액은 프로그램 예산이나 향후 예산이 아닙니다."]}, "store_manager": {"label": "STORE MANAGER", "tags": ["매장 운영", "업무 조율", "파트너 교육"], "actions": ["보고서에 제시된 국내 매장 운영 맥락에서 역할을 수행합니다. 특정 시점의 매장·인력 규모를 연평균으로 해석하지 않습니다.", "예방 교육 대상에 포함됩니다. 약 2,500명이라는 이수 인원은 점장만이 아닌 전체 교육 대상의 합계입니다."]}, "store_partner": {"label": "STORE PARTNER", "tags": ["현장 실행", "고객 서비스", "SNS 콘텐츠", "주문 응대"], "actions": ["개인컵 주문과 문서에 명시된 매장 활동을 수행합니다.", "‘Reuse, I can!’ 독려 영상 챌린지에 참여했습니다."]}, "customer": {"label": "REWARDS CUSTOMER", "tags": ["프로그램 참여", "컵 사용 결정", "리워드 선택"], "actions": ["개인컵 주문 시 400원 할인 또는 에코별 1개 중 하나를 선택할 수 있습니다.", "탄소중립 프로그램 조건에 따라 개인컵 300원, 전자영수증 100원 혜택 대상이 될 수 있습니다. 실제 지급 여부는 확인되지 않았습니다.", "사이렌 오더 이용 시 STAR★LIGHT 에코스탬프와 구간별 NFT 보상 대상이 될 수 있습니다. 이는 할인·에코별 규칙과 별개입니다."]}};
function renderPersonaStage(){
  return `<div class="demo-page">
    <section class="persona-grid">${demoState.personas.map((persona,index)=>{
      const color=PERSONA_COLORS[index % PERSONA_COLORS.length];
      const localized=PERSONA_TEXT_KO[persona.stakeholder_type] || {};
      const detail=PERSONA_DETAIL_KO[persona.stakeholder_type] || {};
      const roleTitle=PERSONA_ROLE_TITLES[persona.stakeholder_type] || persona.name;
      const location=[...new Set([persona.province,persona.district].filter(Boolean))].join(" ");
      const background=[persona.age ? `${persona.age}세` : "",({male:"남",female:"여"})[persona.sex] || persona.sex,location,persona.occupation].filter(Boolean).join(" · ");
      const constraints=localized.constraints || [];
      return `<article class="persona-card persona-expanded" style="--accent:${color};--accent-soft:${color}18">
        <header class="persona-card-head"><div class="persona-avatar"><img src="assets/persona_avatars/persona-${index+1}.svg" alt="${escDemo(roleTitle)} 페르소나 이미지" /></div><div><span class="persona-role">${escDemo(detail.label || roleTitle)}</span><h3>${escDemo(roleTitle)}</h3><p class="persona-background">${escDemo(background)}</p></div></header>
        <p class="persona-intro">${escDemo(persona.professional_persona || localized.objective || "")}</p>
        <div class="persona-tags">${(detail.tags || []).map(tag=>`<span>${escDemo(tag)}</span>`).join("")}</div>
        <details class="persona-details"><summary>주요 내용 상세 보기</summary>
          <section><h4>전문성</h4><p>${escDemo(persona.skills_and_expertise || "정보 없음")}</p></section>
          <section><h4>목표</h4><p>${escDemo(persona.career_goals_and_ambitions || localized.objective || "정보 없음")}</p></section>
          <section><h4>정책 행동</h4><ul>${(detail.actions || []).map(text=>`<li>${escDemo(text)}</li>`).join("")}</ul></section>
          <section><h4>제약</h4><ul>${constraints.map(text=>`<li>${escDemo(text)}</li>`).join("")}</ul></section>
        </details>
      </article>`;
    }).join("")}</section>
    <div class="persona-footer"><span>실험에 사용된 합성 페르소나입니다. 실제 인물이나 전체 고객 분포를 대표하지 않습니다.</span><button class="demo-action" data-go="pathways">시뮬레이션 시작 <i data-lucide="arrow-right"></i></button></div>
  </div>`;
}

function renderPathwayStage(){
  return `<div class="demo-page">
    <section class="pathway-demo">
      <iframe class="pathway-frame" title="Starbucks Korea 세 경로 시뮬레이션" src="pathway_demo.html?policy=company%2Fstarbucks&condition=3path&demo=1&view=chat-context-fix-20261002"></iframe>
    </section>
  </div>`;
}
function bindStage(){
  if(demoState.stage === "source"){
    const drop=document.getElementById("pdfDrop");
    const input=document.getElementById("pdfInput");
    const error=document.getElementById("fileInputError");
    const selectFile=file=>{
      if(!file)return;
      if(!/\.pdf$/i.test(file.name)){
        error.textContent="PDF 파일을 선택해주세요."; error.hidden=false; input.value=""; return;
      }
      error.hidden=true;
      demoState.fileName=file.name;
      demoState.documentInput={file,meta:`${Math.max(1,Math.round(file.size/1024)).toLocaleString()} KB · PDF`};
      document.getElementById("dropFileName").textContent=file.name;
      document.getElementById("dropFileStatus").textContent="문서 선택 완료 · 클릭하여 변경";
      drop.classList.add("document-selected");
    };
    const prepared=document.getElementById("preparedSource");
    const selectPrepared=()=>selectFile({name:PREPARED_FILE,size:0,prepared:true});
    prepared.addEventListener("dragstart",event=>{event.dataTransfer.effectAllowed="copy";event.dataTransfer.setData("text/plain","prepared-starbucks-source");});
    prepared.addEventListener("click",selectPrepared);
    prepared.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();selectPrepared();}});
    input.addEventListener("change",()=>selectFile(input.files?.[0]));
    drop.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();input.click();}});
    ["dragenter","dragover"].forEach(type=>drop.addEventListener(type,event=>{event.preventDefault();drop.classList.add("dragging");}));
    drop.addEventListener("dragleave",event=>{if(!drop.contains(event.relatedTarget))drop.classList.remove("dragging");});
    drop.addEventListener("drop",event=>{event.preventDefault();drop.classList.remove("dragging");const file=event.dataTransfer.files?.[0]; if(file) selectFile(file); else if(event.dataTransfer.getData("text/plain")==="prepared-starbucks-source") selectPrepared();});
    document.getElementById("simulationPurpose").addEventListener("input",event=>{demoState.simulationPurpose=event.target.value;});
  }
  document.querySelectorAll("[data-go]").forEach(button=>button.addEventListener("click",()=>startStageTransition(button.dataset.go)));
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
    return `<line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" class="kg-edge kg-build-edge" data-source="${escDemo(edge.source)}" data-target="${escDemo(edge.target)}" style="--appear-delay:${delay.toFixed(2)}s"></line>`;
  }).join("");
  const nodeMarkup=visibleNodes.map(node=>{
    const point=positioned.get(node.id), color=CATEGORY_COLORS[node.iad_category]||"#8c91a0";
    const label=String(NODE_KO[node.name]?.name || node.name || "정책 개념").replace(/([a-z])([A-Z])/g,"$1 $2").slice(0,18);
    const radius=highDegree.some(item=>item.id===node.id)?14:node.persona_eligible?10:7;
    return `<g class="kg-node kg-build-node" style="--appear-delay:${(nodeDelay.get(node.id)||0).toFixed(2)}s" data-node-id="${escDemo(node.id)}" tabindex="0"><circle cx="${point.x}" cy="${point.y}" r="${radius}" fill="${color}"></circle><text x="${point.x+radius+5}" y="${point.y+4}">${escDemo(label)}</text></g>`;
  }).join("");
  const legendMarkup=`<div class="kg-overlay-legend"><span class="kg-overlay-title">IAD categories</span><div>${categories.map(category=>`<span class="kg-overlay-item"><i style="background:${CATEGORY_COLORS[category]||"#8c91a0"}"></i>${escDemo(category)}</span>`).join("")}</div></div>`;
  container.innerHTML=`<div class="kg-summary"><span id="kgBuildStatus">지식 그래프를 구축하고 있습니다…</span><b>${kg.nodes.length} 개념 · ${kg.edges.length} 관계</b></div><button type="button" class="kg-clear-selection" id="kgClearSelection">선택 해제</button><svg class="kg-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Policy graph">${clusterMarkup}${lineMarkup}${nodeMarkup}</svg>${legendMarkup}`;
  container.classList.add("kg-is-building");
  container.querySelector("#kgClearSelection").onclick=()=>{
    container.classList.remove("kg-has-selection","kg-is-building","kg-build-active");
    container.querySelectorAll(".kg-selected,.kg-related").forEach(el=>el.classList.remove("kg-selected","kg-related"));
    document.getElementById("demoGraphDetail").innerHTML="<p>노드를 선택하면 설명과 연결 관계를 확인할 수 있습니다.</p>";
  };
  container.querySelectorAll("[data-node-id]").forEach(node=>node.addEventListener("click",()=>renderNodeDetail(node.dataset.nodeId)));
  requestAnimationFrame(()=>requestAnimationFrame(()=>container.classList.add("kg-build-active")));
  window.setTimeout(()=>{
    const status=document.getElementById("kgBuildStatus");
    if(status) status.textContent="지식 그래프 · 검토 반영본";
  },7100);
}
const EDGE_LABELS_KO = {"AIMS_TO_INCREASE_REUSABLE_USE": "다회용 컵 이용 확대 목표", "AIMS_TO_INCREASE_USE": "이용 확대 목표", "ASSURANCE_COVERS_PERIOD": "검증 대상 기간", "ELIGIBLE_FOR_REWARD": "리워드 대상", "HOSTS_PROGRAM": "프로그램 개최", "IMPLEMENTS_AT_STORE": "매장에서 실행", "ISSUES_RECOMMENDATION": "개선 권고 제시", "MEASURES_REUSABLE_RATE": "다회용 컵 이용률 측정", "OPERATES_IN_CONTEXT": "매장 운영 맥락에 속함", "OPERATES_PROGRAM": "프로그램 운영", "OPERATES_REWARD_PROGRAM": "리워드 프로그램 운영", "PART_OF_STORE_NETWORK": "매장 네트워크에 포함", "RECEIVES_REWARD": "리워드 수령", "REPORTS_METRIC": "지표 보고", "REQUIRES_PERSONAL_CUP": "개인컵 사용 요구", "RESPONSIBLE_FOR_REPORT": "보고서 담당", "TARGETED_BY_TRAINING": "교육 대상", "USES_INFORMATION": "정보 활용", "USES_ORDERING_CHANNEL": "주문 채널 활용", "VERIFIES_REPORT": "보고서 검증"};
function renderNodeDetail(id){
  const kg=demoState.graph?.kg; const node=kg?.nodes.find(item=>item.id===id); if(!node)return;
  const connected=kg.edges.filter(edge=>edge.source===id||edge.target===id);
  const summary=NODE_KO[node.name]?.summary || DEMO_NODE_SUMMARIES[node.name] || conciseNodeSummary(node.summary) || "추가 설명이 없습니다.";
  const neighborIds=new Set(connected.map(edge=>edge.source===id?edge.target:edge.source));
  const neighbors=kg.nodes.filter(item=>neighborIds.has(item.id));
  const nodeNames=[...new Set(neighbors.map(item=>NODE_KO[item.name]?.name || item.name))];
  const relationNames=[...new Set(connected.map(edge=>EDGE_LABELS_KO[edge.type] || edge.type))];
  const nodeList=nodeNames.map(name=>`<li>${escDemo(name)}</li>`).join("");
  const relationList=relationNames.map(name=>`<li>${escDemo(name)}</li>`).join("");
  const category=node.iad_category || "Policy concept";
  const color=CATEGORY_COLORS[category] || "#8c91a0";
  document.getElementById("demoGraphDetail").innerHTML=`<b>${escDemo(NODE_KO[node.name]?.name || node.name)}</b><p>${escDemo(summary)}</p><span class="iad-category-tag" style="--tag-color:${color}">${escDemo(category.replaceAll("_"," "))}</span><section class="kg-detail-card"><h3>연결 노드 <strong>${nodeNames.length}</strong>개</h3><ul class="connected-node-list">${nodeList}</ul></section><section class="kg-detail-card"><h3>관계 종류 <strong>${relationNames.length}</strong>개</h3><ul class="connected-node-list">${relationList}</ul></section>`;
  const graph=document.getElementById("demoGraph");
  graph.classList.add("kg-has-selection");
  graph.querySelectorAll(".kg-node").forEach(element=>{
    const selected=element.dataset.nodeId===id;
    element.classList.toggle("kg-selected",selected);
    element.classList.toggle("kg-related",selected || neighborIds.has(element.dataset.nodeId));
  });
  graph.querySelectorAll(".kg-edge").forEach(element=>element.classList.toggle("kg-related",element.dataset.source===id || element.dataset.target===id));
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
