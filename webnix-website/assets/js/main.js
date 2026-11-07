(function(){
var root=document.documentElement,tt=document.getElementById('tt');
function theme(t){root.setAttribute('data-theme',t);tt.textContent=t==='dark'?'Light mode':'Dark mode';try{localStorage.setItem('wn-theme',t)}catch(e){}}
var st='dark';try{st=localStorage.getItem('wn-theme')||'dark'}catch(e){}
theme(st==='light'?'light':'dark');
tt.addEventListener('click',function(){theme(root.getAttribute('data-theme')==='dark'?'light':'dark')});

var pgs=[].slice.call(document.querySelectorAll('.pg')),ls=document.querySelectorAll('.mn a'),cta=document.getElementById('cta');
function route(){
var h=(location.hash||'#home').slice(1),pg=document.getElementById(h);
if(!pg||pg.className.indexOf('pg')<0){h='home';pg=document.getElementById('home')}
pgs.forEach(function(p){p.hidden=p!==pg});
[].forEach.call(ls,function(a){a.getAttribute('href')==='#'+h?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});
cta.hidden=h==='contact';
document.title='WebNix | '+pg.getAttribute('data-t');
window.scrollTo(0,0)}
window.addEventListener('hashchange',route);route();

var ba=document.getElementById('ba'),r=ba.querySelector('input'),exs=ba.querySelectorAll('.ex'),tabs=document.querySelectorAll('.tabs button');
function set(v){ba.style.setProperty('--p',v)}
r.addEventListener('input',function(){set(r.value)});
[].forEach.call(tabs,function(b){b.addEventListener('click',function(){var i=+b.getAttribute('data-i');
[].forEach.call(tabs,function(x){x.setAttribute('aria-selected',x===b)});
[].forEach.call(exs,function(e,k){e.hidden=k!==i;if(k===i)document.getElementById('url').textContent=e.getAttribute('data-u')});
r.value=50;set(50)})});
if(!window.matchMedia('(prefers-reduced-motion:reduce)').matches){
var t0=null;(function f(t){if(t0===null)t0=t;var k=Math.min((t-t0)/1500,1),e=1-Math.pow(1-k,3),v=92-42*e;set(v);r.value=v;if(k<1)requestAnimationFrame(f)})(performance.now())}

var nm=document.getElementById('nm'),sv=document.getElementById('sv'),ms=document.getElementById('ms'),s=document.getElementById('send');
function upd(){var t='Hi WebNix, I am '+(nm.value||'a new client')+'. I need: '+sv.value+'. '+ms.value;
s.href='https://wa.me/918767884003?text='+encodeURIComponent(t.trim())}
[nm,sv,ms].forEach(function(x){x.addEventListener('input',upd)});upd();
})();
