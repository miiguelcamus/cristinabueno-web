(function(){
var b=document.querySelector('.burger'),m=document.querySelector('.menu');
b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
var parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Madrid',weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date()),g={};
parts.forEach(function(p){g[p.type]=p.value});
var d={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6}[g.weekday],mins=(+g.hour%24)*60+ +g.minute;
var H={2:[630,1080],3:[630,1080],4:[630,1080],5:[630,1080],6:[645,840]},h=H[d];
var open=h&&mins>=h[0]&&mins<h[1];
var s=document.getElementById('openstate');
if(s){var t=s.querySelector('svg');s.innerHTML='';s.appendChild(t);s.appendChild(document.createTextNode(' '+(open?'Abierto ahora · con cita previa':'Cerrado ahora · reserva tu cita online')))}
var li=document.querySelector('#hours li[data-d="'+d+'"]');if(li)li.classList.add('today');
var io='IntersectionObserver' in window?new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12}):null;
document.querySelectorAll('.card,blockquote,.grp,.box,.g').forEach(function(el,i){if(!io)return;el.classList.add('reveal');el.style.transitionDelay=(i%3)*90+'ms';io.observe(el)});
var lb=document.querySelector('.lb');
if(lb){var li2=lb.querySelector('img');document.querySelectorAll('.g').forEach(function(x){x.addEventListener('click',function(){li2.src=x.dataset.src;lb.hidden=false})});
lb.addEventListener('click',function(){lb.hidden=true});document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.hidden=true})}
})();
