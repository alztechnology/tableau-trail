const K="alTableauTrail";let S=JSON.parse(localStorage.getItem(K)||'{"done":{},"pts":0,"sim":{}}');
const save=()=>localStorage.setItem(K,JSON.stringify(S));
const RANKS=[[0,"Scout 🌱"],[500,"Viz Starter ✏️"],[1500,"Analyst 📊"],[3000,"Dashboard Builder 🖼️"],[5000,"Storyteller 📖"],[7000,"Portfolio Ready 🌟"]];
const rank=()=>RANKS.filter(r=>S.pts>=r[0]).pop()[1];
const allUnits=()=>TRAILS.flatMap(t=>t.units.map(u=>({...u,trail:t})));
const tDone=t=>t.units.filter(u=>S.done[u.id]).length;
const $=h=>document.getElementById("app").innerHTML=h;
function stats(){document.getElementById("stats").innerHTML=`<b>${S.pts}</b> pts · ${rank()}<br>${Object.keys(S.done).length}/${allUnits().length} units`}
function links(u){return u.links?`<p>📚 Further reading</p><ul>${u.links.map(l=>`<li><a target="_blank" rel="noopener" href="${l[0]}">${l[1]}</a></li>`).join("")}</ul>`:""}
function home(){const n=Object.keys(S.done).length,tot=allUnits().length;
$(`<div class="card"><h1>Hai AL 👋</h1>
<p>Irene built this one for you, same warm trail as your Salesforce page. A crash course on Tableau Public, so you can walk into a product or BI analyst interview without freezing on "Can you use Tableau?"</p>
<p>You've already done the hard parts for years: SQL, Lenovo APJ metrics, IBM signings and backlog reports, Salesforce reports. We'll just put those muscles into Tableau, one short lesson at a time. Jom.</p>
<p>Read it on your phone if you like. Practice on a Windows or Mac computer, because Tableau Public is a free desktop app.</p>
<div class="bar"><i style="width:${n/tot*100}%"></i></div><p>${n}/${tot} units · Rank: <b>${rank()}</b></p></div>
<div class="card"><h3>🏅 Badges</h3><div class="badges">${TRAILS.map(t=>`<span class="${tDone(t)==t.units.length?'':'off'}">${t.icon} ${t.title}</span>`).join("")}<span class="${Object.keys(S.sim).length>=SIM.length?'':'off'}">🎤 Interview Ready</span></div></div>
${TRAILS.map(t=>`<a class="card unit" href="#t/${t.id}"><div><b>${t.icon} ${t.title}</b><br><small>${t.desc}</small><div class="bar" style="margin-top:6px"><i style="width:${tDone(t)/t.units.length*100}%"></i></div></div><span>${tDone(t)}/${t.units.length}</span></a>`).join("")}
<a class="card unit" href="#sim"><div><b>🎤 Tableau Interview Simulator</b><br><small>${SIM.length} real-style questions with honest model answers you can actually say</small></div><span>${Object.keys(S.sim).length}/${SIM.length}</span></a>
<div class="card"><button class="sec" onclick="if(confirm('Reset all progress?')){localStorage.removeItem(K);location.reload()}">Reset progress</button></div>`)}
function trail(id){const t=TRAILS.find(x=>x.id==id);
$(`<div class="card"><a href="#">← Home</a><h1>${t.icon} ${t.title}</h1><p>${t.desc}</p></div><div class="card">${t.units.map((u,i)=>`<a class="unit" href="#u/${u.id}"><span>${i+1}. ${u.title}</span><span>${S.done[u.id]?'✅ +'+S.done[u.id]:'~'+(u.quiz.length*100+100)+' pts'}</span></a>`).join("")}</div>`)}
let Q;
function unit(id){const u=allUnits().find(x=>x.id==id);Q={u,ans:{},short:false};
$(`<div class="card"><a href="#t/${u.trail.id}">← ${u.trail.title}</a><h1>${u.title}</h1>${u.lesson}
${links(u)}</div>
${u.scenario?`<div class="card"><h3>🎬 Scenario</h3><div class="scn">${u.scenario}</div></div>`:""}
<div class="card"><h3>✅ Quiz</h3>${u.quiz.map((q,i)=>`<div id="q${i}"><p><b>${i+1}. ${q.q}</b></p>${q.o.map((o,j)=>`<button class="opt" onclick="pick(${i},${j})">${o}</button>`).join("")}<div id="e${i}"></div></div>`).join("")}</div>
${u.short?`<div class="card"><h3>✍️ Your turn</h3><p>${u.short.q}</p><textarea placeholder="Type your answer…"></textarea><button onclick="this.nextElementSibling.style.display='block';Q.short=true;check()">Reveal model answer</button><div class="ex" style="display:none">${u.short.m}</div></div>`:""}
<div class="card" id="fin"></div>`);check()}
function pick(i,j){if(Q.ans[i]!=null)return;const q=Q.u.quiz[i];Q.ans[i]=j;
document.querySelectorAll(`#q${i} .opt`).forEach((b,k)=>{if(k==q.a)b.classList.add('ok');else if(k==j)b.classList.add('bad');});
document.getElementById("e"+i).innerHTML=`<div class="ex">${j==q.a?'🎉 Betul!':'😅 Not quite.'} ${q.e}</div>`;check()}
function check(){const u=Q.u,n=Object.keys(Q.ans).length,f=document.getElementById("fin");
if(n<u.quiz.length||(u.short&&!Q.short)){f.innerHTML=`<small>Answer all questions to complete this unit.</small>`;return}
const right=u.quiz.filter((q,i)=>Q.ans[i]==q.a).length,pts=100+right*100;
if(!S.done[u.id]||pts>S.done[u.id]){S.pts+=pts-(S.done[u.id]||0);S.done[u.id]=pts;save();stats()}
const t=u.trail,list=t.units,idx=list.findIndex(x=>x.id==u.id),nx=list[idx+1];
f.innerHTML=`<h3>🏁 Unit complete! ${right}/${u.quiz.length} correct · +${pts} pts</h3>${tDone(t)==list.length?`<p>🏅 Badge earned: <b>${t.icon} ${t.title}</b>! Hebat!</p>`:""}
${right<u.quiz.length?`<button class="sec" onclick="unit('${u.id}')">Retry for full points</button>`:""}${nx?`<a class="btn" href="#u/${nx.id}">Next unit →</a>`:`<a class="btn" href="#">Back home</a>`}`}
function sim(){$(`<div class="card"><a href="#">← Home</a><h1>🎤 Interview Simulator</h1><p>Answer out loud or type, then compare with the model answer and rate yourself. +150 pts each. Be honest. These answers use your real background and do not pretend you have years of Tableau.</p></div>`+
SIM.map((s,i)=>`<div class="card"><p><b>Q${i+1}. ${s.q}</b></p><textarea></textarea><button onclick="this.nextElementSibling.style.display='block'">Show model answer</button><div class="ex" style="display:none">${s.m}<br><br>How did you do? <button onclick="rate(${i},2)">💪 Nailed it</button><button class="sec" onclick="rate(${i},1)">🙂 Partly</button></div>${S.sim[i]?'<small>✅ done</small>':''}</div>`).join(""))}
function rate(i,v){if(!S.sim[i]){S.pts+=150;save();stats()}S.sim[i]=v;save();sim()}
function route(){const h=location.hash.slice(1).split("/");stats();window.scrollTo(0,0);
if(h[0]=="t")trail(h[1]);else if(h[0]=="u")unit(h[1]);else if(h[0]=="sim")sim();else home()}
window.addEventListener("hashchange",route);route();
