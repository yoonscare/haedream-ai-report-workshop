// 강의 중에는 장면별 제목과 하나의 연속 대본만 남긴다.
// 보조 질문·화면 행동·완료 기준 등은 강사용 화면에서 실제 노드까지 제거해
// 이전 스타일 캐시가 남아 있어도 별도 상자로 다시 나타나지 않게 한다.
document.querySelectorAll('.scene').forEach(scene=>{
  const scripts=[...scene.querySelectorAll(':scope > .script')];
  if(!scripts.length)return;
  const primary=scripts[0];
  const lines=scripts.flatMap(script=>[...script.querySelectorAll('p')].map(p=>p.textContent.trim())).filter(Boolean);
  primary.innerHTML=`<b>이렇게 말하기</b>${lines.map(line=>`<p>${line}</p>`).join('')}`;
  [...scene.children].forEach(child=>{
    if(child.tagName!=='H3'&&child!==primary)child.remove();
  });
});

const sections=[...document.querySelectorAll('.part')];
document.querySelector('#nav').innerHTML=`<a href="#opening">수업 운영 원칙</a>${sections.map(s=>`<a href="#${s.id}">${s.dataset.title}</a>`).join('')}`;
document.querySelector('#font').addEventListener('click',()=>{document.body.classList.toggle('large');document.querySelector('#font').textContent=document.body.classList.contains('large')?'글자 원래대로':'글자 크게'});
document.querySelector('#top').addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
const links=[...document.querySelectorAll('aside a')];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.hash===`#${entry.target.id}`))}}),{rootMargin:'-25% 0px -65%'});
[document.querySelector('#opening'),...sections].forEach(s=>observer.observe(s));

// 대본 장면이 보이면 오른쪽 교육생 화면도 해당 실습으로 자동 이동한다.
const studentViews=[
  ['index.html?page=lesson1&step=0','PART 1 · 검색과 생성'],
  ['index.html?page=lesson1&step=1','PART 1 · 같은 자료, 다른 질문'],
  ['index.html?page=lesson1&step=2','PART 1 · AI가 잘하는 6가지'],
  ['index.html?page=lesson1&step=3','PART 1 · AI가 위험한 4가지'],
  ['index.html?page=lesson1&step=4','PART 1 · 내 업무와 AI 연결'],
  ['index.html?page=lesson2&step=0','PART 2 · 질문 설계 공식'],
  ['index.html?page=lesson2&step=1','PART 2 · 맥락과 목적'],
  ['index.html?page=lesson2&step=2','PART 2 · 자료의 경계'],
  ['index.html?page=lesson2&step=3','PART 2 · 결과 형식'],
  ['index.html?page=lesson2&step=4','PART 2 · 오류 초안 진단'],
  ['index.html?page=lesson2&step=5','PART 2 · 이어 묻기'],
  ['index.html?page=lesson2&step=6','PART 2 · 미니챌린지'],
  ['index.html?page=lesson3&step=0','PART 3 · 하나의 자료, 다섯 결과'],
  ['index.html?page=lesson3&step=1','PART 3 · 파일 읽히기'],
  ['index.html?page=lesson3&step=2','PART 3 · 이미지 분석'],
  ['index.html?page=lesson3&step=3','PART 3 · 표와 비교 분석'],
  ['index.html?page=lesson3&step=4','PART 3 · 업무 변환 선택 실험'],
  ['index.html?page=lesson3&step=5','PART 3 · 변환 결과 비교·공유'],
  ['index.html?page=lesson3&step=6','PART 3 · Deep Research 조사보고서 만들기'],
  ['index.html?page=lesson3&step=7','PART 3 · Deep Research 결과보고서 검증하기'],
  ['index.html?page=lesson4&step=0','PART 4 · 최종 보고서 만들기'],
  ['index.html?page=lesson4&step=1','PART 4 · AI가 먼저 질문하기'],
  ['index.html?page=lesson4&step=2','PART 4 · 10분 초안 시연'],
  ['index.html?page=lesson4&step=3','PART 4 · 원자료와 방금 나온 초안 비교시키기'],
  ['index.html?page=lesson4&step=4','PART 4 · 개인 10분 실습'],
  ['index.html?page=lesson4&step=5','PART 4 · 결과보다 과정 공유'],
  ['index.html?page=lesson5&step=0','PART 5 · NotebookLM 역할'],
  ['index.html?page=lesson5&step=1','PART 5 · 초보자 질문 5가지'],
  ['index.html?page=lesson5&step=2','PART 5 · 소스 등록과 질문 사다리'],
  ['index.html?page=lesson5&step=3','PART 5 · 소스 비교와 검토'],
  ['index.html?page=lesson5&step=4','PART 5 · 업무 선택 실습 7가지'],
  ['index.html?page=lesson5&step=5','PART 5 · Studio 결과물 선택'],
  ['index.html?page=lesson5&step=6','PART 5 · 결과 검토와 최종 편집'],
  ['index.html?page=lesson5&step=7','PART 5 · 강의 마무리']
];
const scenes=[...document.querySelectorAll('.scene')];
const studentFrame=document.querySelector('#student-frame');
const studentLabel=document.querySelector('#student-label');
const studentNew=document.querySelector('#student-new');
let currentStudent='';
let currentScene=-1;
function showStudent(index){
  const view=studentViews[index];
  if(!view||index===currentScene)return;
  currentScene=index;
  scenes.forEach((scene,i)=>{
    const active=i===index;
    scene.classList.toggle('in-view',active);
    scene.setAttribute('aria-current',active?'step':'false');
  });
  studentLabel.textContent=view[1];
  studentNew.href=view[0];
  if(view[0]===currentStudent)return;
  currentStudent=view[0];
  studentFrame.src=view[0];
}

// 화면 중앙의 기준선과 가장 가까운 장면 하나만 선택한다.
// IntersectionObserver처럼 경계에서 두 장면이 번갈아 선택되지 않으므로
// 마우스나 트랙패드로 천천히 이동해도 교육생 화면이 떨리지 않는다.
let sceneTick=0;
function syncSceneToScroll(){
  sceneTick=0;
  const guideY=Math.max(150,Math.min(innerHeight*.38,360));
  let bestIndex=currentScene<0?0:currentScene;
  let bestDistance=Infinity;
  scenes.forEach((scene,index)=>{
    const rect=scene.getBoundingClientRect();
    const distance=guideY<rect.top?rect.top-guideY:guideY>rect.bottom?guideY-rect.bottom:0;
    if(distance<bestDistance){bestDistance=distance;bestIndex=index;}
  });
  showStudent(bestIndex);
}
function requestSceneSync(){
  if(sceneTick)return;
  sceneTick=requestAnimationFrame(syncSceneToScroll);
}
addEventListener('scroll',requestSceneSync,{passive:true});
addEventListener('resize',requestSceneSync,{passive:true});
syncSceneToScroll();
