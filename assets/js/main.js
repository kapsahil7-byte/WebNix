(function(){

var pgs=[].slice.call(document.querySelectorAll('.pg')),ls=document.querySelectorAll('.mn a'),cta=document.getElementById('cta');
function route(){
var h=(location.hash||'#home').slice(1),pg=document.getElementById(h);
if(!pg||pg.className.indexOf('pg')<0){h='home';pg=document.getElementById('home')}
pgs.forEach(function(p){p.hidden=p!==pg});
[].forEach.call(ls,function(a){a.getAttribute('href')==='#'+h?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});
cta.hidden=h==='contact';document.body.classList.toggle('home',h==='home');
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

(function(){
var D='\u2013';
var R={
uae:{n:'UAE',tiers:[
{t:'Starter Landing Page',b:'Product launches, ad landing pages and early-stage startups.',p:'AED 1,500 '+D+' 3,500',l:['1 long-scrolling page with 4 to 6 sections','Responsive template in WordPress, Webflow or HTML5','Lead form with email forwarding and WhatsApp chat widget','Mobile and tablet optimization, SSL and Google Maps','14 to 30 days of free bug-fix support'],x:'Not included: Arabic version, custom Figma design, copywriting, advanced CRM integrations.'},
{t:'Business Website',b:'B2B companies, consultancies, clinics, contractors and service businesses.',p:'AED 6,000 '+D+' 15,000',l:['5 to 10 fully responsive pages','Semi-custom design built around your brand guidelines','WordPress or Webflow CMS with an easy admin dashboard','GA4, Tag Manager, Search Console and newsletter form','Basic on-page SEO: meta tags, ALT tags, XML sitemap','30 to 60 days of support and a 1-hour CMS training video']},
{t:'Bilingual Corporate Platform',b:'Regional firms, government contractors, real estate agencies and holding groups.',p:'AED 25,000 '+D+' 55,000',l:['15 to 25 bespoke pages with Figma prototypes first','Full English and Arabic with native right-to-left layout','Two-way CRM sync (HubSpot, Salesforce, Zoho), career and applicant tracking, WhatsApp and live chat bots','Optimized for a 90+ Google PageSpeed score','Cookie consent for UAE and GDPR, plus WAF protection','60 to 90 days of maintenance, staging access and code handover']},
{t:'E-commerce Store',b:'Direct-to-consumer brands, boutique retail and local product suppliers.',p:'AED 12,000 '+D+' 30,000',l:['Up to 100 products with variations, filters and smart search','UAE payment gateways: Stripe, PayTabs, Telr, Network International','Tabby and Tamara buy now, pay later setup','5% VAT logic, Emirate delivery zones and shipping rates','Accounts, order history, wishlist, order emails and abandoned cart recovery','45 days of support and inventory upload training']}],
add:[['Arabic and English bilingual setup (added to Starter or Business)','+25% to 40%'],['Standalone payment gateway integration','AED 1,500 '+D+' 3,500'],['Bespoke UI/UX Figma design phase','AED 3,000 '+D+' 10,000'],['Copywriting and content creation','AED 300 '+D+' 600 per page']],
note:'All prices are in UAE dirhams. A 5% UAE VAT is added and itemized on the final invoice.'},
usa:{n:'USA',tiers:[
{t:'Starter Landing Page',b:'Product launches, local small businesses, lead campaigns and simple portfolios.',p:'$1,500 '+D+' $4,000',l:['1 landing page with 4 to 5 sections','Webflow, WordPress or Squarespace with a custom-styled premium template','Smart forms connected to Mailchimp or HubSpot Starter','Mobile-first layout, SSL and custom domain connection','14 days of launch monitoring and bug support']},
{t:'Business Website',b:'B2B firms, law firms, clinics, consultancies and growing startups.',p:'$6,000 '+D+' $15,000',l:['6 to 12 custom or extensively tailored pages','Component-based UI/UX built around your brand','Custom WordPress or Webflow CMS for blogs, case studies and team','GA4, conversion tracking and on-page SEO with schema markup','Basic WCAG 2.1 accessibility check','30 days of support and a recorded CMS training video']},
{t:'Premium Custom Platform',b:'Mid-market enterprises, national brands and multi-location companies.',p:'$20,000 '+D+' $50,000+',l:['15 to 30+ pages with 100% custom UI/UX, Figma wireframes and interactive prototypes','Headless CMS or custom frontend (Next.js, React, Tailwind)','Deep API integrations: Salesforce, HubSpot Enterprise, ERP, hiring boards','Core Web Vitals optimization, global CDN and caching','Full ADA/WCAG compliance, WAF, CCPA and GDPR cookie management','60 days of priority support, deployment pipeline and full codebase handoff']},
{t:'E-commerce Store',b:'Direct-to-consumer brands, independent retailers and online product suppliers.',p:'$10,000 '+D+' $30,000+',l:['Up to 100 items with multi-attribute filtering, smart search and reviews','Shopify Payments, Stripe and PayPal, plus Klarna and Affirm','US sales tax automation (Avalara or Shopify Tax) and UPS, FedEx, USPS shipping rates','Customer accounts, cart drawer, order tracking and abandoned cart emails','45 days of support and backend management training']}],
note:'All prices are in US dollars. Final cost depends on your exact scope and requirements.'}
};
var box=document.getElementById('rc'),tabs=document.querySelectorAll('.cs button'),ms=document.getElementById('ms');
function li(x){return '<li>'+x+'</li>'}
function draw(c){
var d=R[c],h='';
if(!d){h='<div class="card bnr"><div><h3>Rates for your country</h3><p>We build websites for businesses around the world. Tell us your country and what you need, and we will send a custom quote.</p></div><a class="btn" href="#contact" data-q="a custom quote">Get a quote</a></div>'}
else{
h='<div class="rg">';
d.tiers.forEach(function(t,i){h+='<div class="card pl'+(i===1?' ft':'')+'"><h3>'+t.t+'</h3><p class="bf2">'+t.b+'</p><div class="px">'+t.p+'<small>Fixed-scope project</small></div><ul>'+t.l.map(li).join('')+'</ul>'+(t.x?'<p class="ex2">'+t.x+'</p>':'')+'<a class="btn'+(i===1?'':' g')+'" href="#contact" data-q="'+t.t+' ('+d.n+')">Get a quote</a></div>'});
h+='</div>';
if(d.add){h+='<div class="ao"><h3>Add-ons</h3>';d.add.forEach(function(a){h+='<div><span>'+a[0]+'</span><b>'+a[1]+'</b></div>'});h+='</div>'}
h+='<p class="rn">'+d.note+'</p>';
h+='<div class="card bnr"><div><h3>Need something different?</h3><p>Redesigns, support plans or a custom project. Tell us what you need and we will send a quote.</p></div><a class="btn" href="#contact" data-q="a custom quote">Get a quote</a></div>'}
box.innerHTML=h;
[].forEach.call(tabs,function(b){b.setAttribute('aria-selected',b.getAttribute('data-c')===c)})}
[].forEach.call(tabs,function(b){b.addEventListener('click',function(){draw(b.getAttribute('data-c'))})});
box.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[data-q]');if(a&&ms){ms.value='I am interested in: '+a.getAttribute('data-q')+'.';ms.dispatchEvent(new Event('input'))}});
var tz='';try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||''}catch(e){}
draw(tz.indexOf('America/')===0?'usa':'uae');
})();
