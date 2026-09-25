lessons.splice(0,lessons.length,
 {id:'lesson1',title:'생성형 AI는 어떻게 일하는가',time:'40분',desc:'생성 원리·강점·한계를 비교하며 AI의 성격을 이해합니다.'},
 {id:'lesson2',title:'AI와 대화하는 5가지 기술',time:'50분',desc:'모든 업무에 통하는 맥락·목적·자료·형식·검증 기술을 익힙니다.'},
 {id:'lesson3',title:'AI 업무 변환 실험실',time:'60분',desc:'메모·파일·이미지·표를 여러 업무 결과물로 변환합니다.'},
 {id:'lesson4',title:'10분 보고서 AI 챌린지',time:'55분',desc:'AI 질문·초안·비판·수정을 모두 사용하는 종합실습입니다.'},
 {id:'lesson5',title:'AI 오류 통제와 업무 확장',time:'25분',desc:'환각·보안·책임을 점검하고 다른 반복업무로 확장합니다.'}
);

home=function(){return `<div class="page"><section class="hero"><div class="hero-card"><span class="eyebrow">GENERATIVE AI PRACTICAL WORKSHOP</span><h1>생성형 AI와 협업해,<br><em>10분 만에 보고서 초안 잡기</em></h1><p>보고서 형식을 먼저 외우는 수업이 아닙니다. 생성형 AI의 강점과 한계를 체험하고, 대화·파일·이미지·표를 업무 결과물로 바꾸는 방법을 익힙니다.</p><div class="actions"><button class="button orange" data-route="lesson1">AI 활용 과정 시작</button><button class="button secondary" data-route="builder">보고서 챌린지 도구</button></div></div><aside class="hero-card hero-side"><span class="eyebrow">오늘의 도착점</span><h2>교육 후 직접 할 수 있어야 합니다</h2><div class="goal"><b>01</b><span>AI의 강점·한계를 알고 제대로 질문하기</span></div><div class="goal"><b>02</b><span>자료를 요약·표·메일·체크리스트로 변환하기</span></div><div class="goal"><b>03</b><span>AI 오류를 검증해 보고서와 다른 업무에 확장하기</span></div></aside></section><div class="route-grid">${lessons.map((x,i)=>`<article class="route-card"><small>${String(i+1).padStart(2,'0')} · ${x.time}</small><b>${x.title}</b><p>${x.desc}</p><button class="button ghost" data-route="${x.id}">열기</button></article>`).join('')}</div><div class="callout" style="margin-top:22px"><b>강의의 중심</b><br><b>AI 활용 약 70% + 보고서 종합실습 약 30%</b>. 보고서는 AI의 대화·변환·검증 능력을 한 번에 적용하는 최종 과제입니다.</div></div>`};

courseSteps.lesson1=[
 {time:'6분',title:'검색과 생성은 다르다',body:`<div class="compare"><div><span class="tag">검색</span><h2>있는 정보를 찾기</h2><p>출처·날짜·정확한 사실 확인에 강합니다.</p></div><div><span class="tag">생성형 AI</span><h2>가능한 답을 만들기</h2><p>정리·변환·초안·아이디어에 강하지만 그럴듯하게 틀릴 수 있습니다.</p></div></div><div class="callout"><b>쉬운 비유:</b> 검색은 서가에서 책을 찾는 사서, 생성형 AI는 읽은 패턴으로 새 문장을 만드는 작가에 가깝습니다.</div>`},
 {time:'8분',title:'같은 질문, 다른 결과',body:`<div class="prompt-levels"><button class="prompt-level active"><b>질문 1</b><small>회의 정리해줘</small></button><button class="prompt-level"><b>질문 2</b><small>결정·담당·기한 추출</small></button><button class="prompt-level"><b>질문 3</b><small>빠진 정보부터 질문</small></button></div><div class="callout">AI의 성능만큼 중요한 것이 사람이 제공한 맥락과 결과 기준입니다.</div><button class="button secondary copy-module-text" data-copy="같은 회의 메모를 ① 자유 요약 ② 결정사항·담당자·기한 표 ③ 빠진 정보를 먼저 질문한 뒤 정리하는 세 방식으로 처리해 차이를 보여줘.">비교 실험문 복사</button>`},
 {time:'10분',title:'AI가 잘하는 6가지',body:`<div class="six-grid">${[['요약','긴 내용을 짧게'],['분류','비슷한 항목 묶기'],['변환','메모를 표·메일로'],['초안','빈 화면 빠르게 채우기'],['비교','차이·공통점 찾기'],['질문','누락·예상질문 찾기']].map((x,i)=>`<article class="formula-card"><span>${i+1}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}</div>`},
 {time:'10분',title:'AI가 위험한 4가지',body:`<div class="peer-review"><div><b>환각</b><p>없는 사실을 자연스럽게 만듦</p></div><div><b>최신성</b><p>현재 정보가 아닐 수 있음</p></div><div><b>맥락 부족</b><p>회사 사정을 모름</p></div><div><b>책임 없음</b><p>결정 결과를 책임지지 않음</p></div></div><div class="prompt-box bad">“우리 회사 규정상 반드시 이렇게 해야 합니다.” — 규정 파일을 주지 않았다면 그대로 믿으면 안 됩니다.</div>`},
 {time:'6분',title:'내 업무와 AI 연결',body:`<div class="sort-quiz"><h2>업무를 AI 역할에 연결해 보세요</h2>${[['긴 공지 핵심만 보기','요약'],['회의 후 실행항목 만들기','추출'],['현장사진 설명문 만들기','이미지 이해'],['메모를 여러 문서로 바꾸기','변환']].map((x,i)=>`<button class="copy-module-text" data-copy="${x[0]} 업무를 생성형 AI로 처리하는 안전한 절차와 프롬프트를 만들어줘."><span>${i+1}</span>${x[0]} → ${x[1]}</button>`).join('')}</div>`}
];

lesson2Steps.splice(0,lesson2Steps.length,
 {time:'5분',title:'AI 대화는 설계다',body:`<div class="lesson-two-lead"><span class="tag">PROMPT ≠ 주문</span><h2>좋은 프롬프트는 긴 주문이 아니라 좋은 업무 설명입니다</h2><p>한 번에 완벽한 답을 받으려 하지 말고 질문–응답–수정의 순환을 만듭니다.</p></div><div class="report-spine"><div><span>1</span><b>맥락</b><small>어떤 상황?</small></div><div><span>2</span><b>목적</b><small>무엇을 위해?</small></div><div><span>3</span><b>자료</b><small>무엇을 근거로?</small></div><div><span>4</span><b>형식</b><small>어떤 결과?</small></div><div><span>5</span><b>검증</b><small>어떻게 확인?</small></div></div>`},
 {time:'9분',title:'1·2 맥락과 목적',body:`<div class="compare"><div><span class="tag">맥락 없음</span><div class="prompt-box bad">안내문 써줘.</div></div><div><span class="tag">맥락·목적 있음</span><div class="prompt-box good">생산현장 작업자에게 내일부터 바뀌는 위생도구 보관 위치를 알려 혼선을 줄이는 안내문을 작성해줘.</div></div></div><div class="facilitator"><b>실습</b><span>내 업무에 ‘누가·왜·어떤 상황에서’를 한 문장으로 추가합니다.</span></div>`},
 {time:'8분',title:'3 자료의 경계',body:`<div class="prompt-box good">아래 제공한 내용만 근거로 사용하세요. 자료에 없는 사실·수치·원인은 추측하지 말고 [확인 필요]로 표시하세요.</div><div class="callout">많은 자료보다 어떤 자료만 믿어야 하는지 알려주는 것이 중요합니다.</div><button class="button secondary copy-module-text" data-copy="아래 제공한 내용만 근거로 사용하세요. 자료에 없는 사실·수치·원인은 추측하지 말고 [확인 필요]로 표시하세요.">경계 문장 복사</button>`},
 {time:'8분',title:'4 결과 형식',body:`<div class="six-grid">${[['요약','3줄 핵심'],['표','항목별 비교'],['메일','제목·본문·요청'],['체크리스트','행동 중심'],['보고서','목차형 초안'],['질문','확인할 3가지']].map((x,i)=>`<article class="formula-card"><span>${i+1}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}</div>`},
 {time:'8분',title:'5 AI에게 검증시키기',body:`<div class="compare"><div><div class="prompt-box bad">더 전문적으로 고쳐줘.</div></div><div><div class="prompt-box good">초안을 바로 고치지 말고, 근거 없는 내용·빠진 정보·모호한 표현을 먼저 표로 진단해줘.</div></div></div><button class="button secondary copy-module-text" data-copy="초안을 바로 고치지 말고, 근거 없는 내용·빠진 정보·모호한 표현을 먼저 표로 진단해줘.">자기검토 문장 복사</button>`},
 {time:'7분',title:'이어 묻기의 힘',body:`<div class="timed-activity"><div><b>1차</b><span>초안 생성</span></div><div><b>2차</b><span>빠진 정보 질문</span></div><div><b>3차</b><span>독자 관점 비판</span></div><div><b>4차</b><span>최종 수정</span></div></div><div class="facilitator"><b>연습</b><span>첫 답변을 끝으로 보지 않고 최소 두 번 이어 묻습니다.</span></div>`},
 {time:'5분',title:'5기술 미니챌린지',body:`<div class="quiz"><h2>다음 요청에서 빠진 기술은?</h2><div class="prompt-box">아래 회의 메모만 사용해 팀장에게 전달할 결정사항 표를 만들어줘.</div><div class="quiz-options"><button data-quiz="wrong">맥락·자료·형식</button><button data-quiz="correct" data-answer="정답입니다. 근거 없는 내용과 누락을 점검할 검증 기준이 빠졌습니다.">검증 기준</button><button data-quiz="wrong">목적·독자</button></div><div id="quiz-feedback" class="quiz-feedback">정답을 선택하세요.</div></div>`}
);

courseSteps.lesson3=[
 {time:'8분',title:'하나의 자료, 다섯 결과',body:`<div class="report-spine"><div><span>1</span><b>요약</b><small>핵심 3줄</small></div><div><span>2</span><b>표</b><small>사실 분류</small></div><div><span>3</span><b>메일</b><small>공유·요청</small></div><div><span>4</span><b>체크</b><small>실행 항목</small></div><div><span>5</span><b>보고</b><small>의사결정</small></div></div><div class="callout">AI의 핵심 능력은 새 사실 발명이 아니라 같은 사실을 목적에 맞게 변환하는 것입니다.</div>`},
 {time:'12분',title:'긴 글·파일 읽히기',body:`<div class="three-rules"><div><span>1</span><h3>먼저 구조</h3><p>문서의 목차와 핵심 주제를 찾습니다.</p></div><div><span>2</span><h3>근거 표시</h3><p>답의 근거 위치를 함께 요구합니다.</p></div><div><span>3</span><h3>추가 질문</h3><p>요약 후 필요한 부분을 좁혀 묻습니다.</p></div></div><div class="prompt-box good">첨부 문서를 읽고 문서 목적·핵심 내용·실행항목·확인 필요사항을 구분하고 근거 위치도 표시해줘.</div>`},
 {time:'10분',title:'이미지에서 정보 찾기',body:`<div class="compare"><div><span class="tag">입력</span><h2>현장사진·표·화이트보드</h2><p>이미지에서 직접 보이는 사실을 먼저 추출합니다.</p></div><div><span class="tag">질문</span><div class="prompt-box good">직접 확인되는 사실만 목록화하고, 해석이 필요한 내용은 ‘추정’으로 별도 표시해줘.</div></div></div><div class="callout">사진 속 개인정보·설비정보·문서 내용도 보안대상일 수 있습니다.</div>`},
 {time:'12분',title:'표와 비교 분석',body:`<div class="timed-activity"><div><b>추출</b><span>날짜·수량·상태</span></div><div><b>정리</b><span>표로 구조화</span></div><div><b>비교</b><span>차이·추세</span></div><div><b>질문</b><span>추가 확인</span></div></div><button class="button secondary copy-module-text" data-copy="아래 기록에서 날짜·항목·수량·특이사항을 추출해 표로 만들고, 반복 패턴과 추가 질문을 구분해줘.">표 분석 프롬프트 복사</button>`},
 {time:'12분',title:'업무 변환 조별 실험',body:`<div class="scenario-tabs">${Object.entries(scenarios).map(([k,v],i)=>`<button class="scenario-open ${i===0?'active':''}" data-scenario="${k}">${v.name}</button>`).join('')}</div><div id="scenario-view"></div><div class="facilitator"><b>조별 미션</b><span>자료를 요약·메일·체크리스트 중 두 형식으로 바꾸고 유용성을 비교합니다.</span></div>`},
 {time:'6분',title:'변환 결과 공유',body:`<div class="presentation-guide"><h2>조별 60초 공유</h2><ol><li>어떤 자료를 선택했는가?</li><li>어떤 두 형식으로 변환했는가?</li><li>AI가 잘한 일과 사람이 수정한 일은?</li></ol></div>`}
];

courseSteps.lesson4=[
 {time:'5분',title:'AI 종합과제 이해',body:`<div class="lesson-two-lead"><span class="tag">AI CAPSTONE</span><h2>보고서는 AI 활용 능력을 한 번에 확인하는 종합과제입니다</h2><p>자료 이해·질문·구조화·생성·비판·수정을 모두 사용합니다.</p></div>`},
 {time:'8분',title:'AI가 먼저 질문하기',body:`<div class="prompt-box good">보고서를 바로 쓰지 말고, 목적·독자·원자료에서 빠진 핵심 정보를 최대 3개 질문하세요.</div><div class="callout">사람이 모든 빈칸을 미리 채우지 못해도 AI가 인터뷰하도록 만들 수 있습니다.</div>`},
 {time:'10분',title:'10분 초안 시연',body:`<div class="timed-activity"><div><b>2분</b><span>목적·독자</span></div><div><b>3분</b><span>자료·형식</span></div><div><b>3분</b><span>AI 초안</span></div><div><b>2분</b><span>검토</span></div></div><div class="actions"><button class="button orange" data-route="builder">보고서 작성기 열기</button></div>`},
 {time:'12분',title:'AI에게 자기비판 시키기',body:`<div class="peer-review"><div><b>근거</b><p>없는 내용은?</p></div><div><b>누락</b><p>빠진 사실은?</p></div><div><b>독자</b><p>추가 질문은?</p></div><div><b>행동</b><p>다음 조치는?</p></div></div><div class="prompt-box good">초안의 가장 취약한 점을 찾아 원자료로 확인되지 않는 문장과 추가 질문을 먼저 제시해줘.</div>`},
 {time:'15분',title:'개인 10분 실습',body:`<div class="actions"><button class="button orange" data-route="challenge">10분 타이머 시작</button><button class="button secondary" data-route="builder">작성기 열기</button></div><div class="facilitator"><b>성공 기준</b><span>AI와 두 번 이상 대화하고 근거 없는 내용을 한 개 이상 찾아 수정합니다.</span></div>`},
 {time:'5분',title:'결과보다 과정 공유',body:`<div class="presentation-guide"><h2>AI 협업 과정을 공유합니다</h2><ol><li>첫 질문을 어떻게 바꿨는가?</li><li>AI가 무엇을 되물었는가?</li><li>어떤 오류를 사람이 발견했는가?</li><li>시간이 어디서 줄었는가?</li></ol></div>`}
];

courseSteps.lesson5=[
 {time:'8분',title:'AI 오류 통제 3단계',body:`<div class="three-rules"><div><span>1</span><h3>출처</h3><p>무엇을 근거로 했는가?</p></div><div><span>2</span><h3>대조</h3><p>원자료와 일치하는가?</p></div><div><span>3</span><h3>책임</h3><p>누가 최종 판단하는가?</p></div></div>`},
 {time:'7분',title:'보안과 입력 기준',body:`<div class="compare"><div><span class="tag">입력 전 제거</span><ul class="spacious"><li>개인식별정보</li><li>거래처·단가·계약정보</li><li>공정·설비 기밀</li></ul></div><div><span class="tag">회사 기준 우선</span><ul class="spacious"><li>승인된 계정과 도구</li><li>업로드 가능 자료 범위</li><li>결과물 저장·공유 기준</li></ul></div></div>`},
 {time:'7분',title:'보고서 밖으로 확장',body:`<div class="six-grid">${[['회의','결정·담당·기한'],['메일','상대별 문체'],['교육','퀴즈·요약'],['기획','아이디어·반론'],['분석','표·패턴'],['안내','대상별 재작성']].map((x,i)=>`<article class="formula-card"><span>${i+1}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}</div>`},
 {time:'3분',title:'7일 AI 실행 약속',body:`<div class="exit-ticket"><h2>다음 주에 적용할 한 가지</h2><label><input type="checkbox"> 반복업무 하나를 고른다.</label><label><input type="checkbox"> AI와 최소 두 번 이어 묻는다.</label><label><input type="checkbox"> 결과를 원자료와 사람이 검증한다.</label></div>`}
];

window.aiCourseMeta={
 lesson1:{kicker:'PART 1 · AI 40분',title:'생성형 AI는 어떻게 일하는가',desc:'검색과 생성의 차이부터 강점·환각·업무 역할까지 체험합니다.',content:()=>moduleContent('lesson1')},
 lesson2:{kicker:'PART 2 · AI 50분',title:'AI와 대화하는 5가지 기술',desc:'맥락·목적·자료·형식·검증을 모든 업무에 통하는 협업 기술로 익힙니다.',content:()=>lesson2Content()},
 lesson3:{kicker:'PART 3 · AI 60분',title:'AI 업무 변환 실험실',desc:'메모·파일·이미지·표를 요약·메일·체크리스트·분석으로 바꿉니다.',content:()=>moduleContent('lesson3')},
 lesson4:{kicker:'PART 4 · 종합실습 55분',title:'10분 보고서 AI 챌린지',desc:'AI가 질문하고 초안을 만들고 스스로 비판하게 하는 종합실습입니다.',content:()=>moduleContent('lesson4')},
 lesson5:{kicker:'PART 5 · AI 25분',title:'AI 오류 통제와 업무 확장',desc:'환각·보안·책임을 정리하고 보고서 밖의 반복업무로 확장합니다.',content:()=>moduleContent('lesson5')}
};

renderNav();const aiInitialPage=initialParams.get('page')||'home';const aiInitialStep=Number(initialParams.get('step')||0);route(aiInitialPage);if(aiInitialPage==='lesson2'&&aiInitialStep)renderLesson2Step(aiInitialStep);if(courseSteps[aiInitialPage]&&aiInitialStep)renderModuleStep(aiInitialPage,aiInitialStep);
