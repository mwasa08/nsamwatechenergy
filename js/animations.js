document.addEventListener('DOMContentLoaded',()=>{
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);
    const t=+e.target.dataset.target,s=performance.now();
    (function f(n){const p=Math.min((n-s)/1500,1);e.target.textContent=Math.round(t*p);if(p<1)requestAnimationFrame(f);})(s);}),{threshold:.6});
  document.querySelectorAll('.count').forEach(c=>co.observe(c));
  const sl=[...document.querySelectorAll('.sl')],dots=document.getElementById('dots');
  if(sl.length){let i=0,t;
    const go=n=>{sl[i].classList.remove('on');dots.children[i].classList.remove('on');i=(n+sl.length)%sl.length;sl[i].classList.add('on');dots.children[i].classList.add('on');};
    sl.forEach((_,k)=>{const b=document.createElement('button');b.setAttribute('aria-label','Slide '+(k+1));if(!k)b.className='on';b.onclick=()=>{go(k);reset();};dots.appendChild(b);});
    const reset=()=>{clearInterval(t);t=setInterval(()=>go(i+1),6000);};reset();}
});
