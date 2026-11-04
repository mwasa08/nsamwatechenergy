document.addEventListener('DOMContentLoaded',()=>{
  const hdr=document.querySelector('.hdr'),nav=document.getElementById('nav'),bg=document.querySelector('.burger'),top=document.getElementById('top');
  const cur=document.body.dataset.page;
  document.querySelectorAll('#nav a[data-page]').forEach(a=>{if(a.dataset.page===cur)a.classList.add('active');});
  bg.addEventListener('click',()=>{const o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o);});
  nav.addEventListener('click',e=>{if(e.target.closest('a'))nav.classList.remove('open');});
  document.querySelectorAll('.dd-btn').forEach(b=>b.addEventListener('click',()=>{const d=b.parentElement,o=d.classList.toggle('open');b.setAttribute('aria-expanded',o);}));
  const onScroll=()=>{hdr.style.boxShadow=scrollY>10?'0 4px 20px rgba(0,26,68,.08)':'none';top.hidden=scrollY<500;};
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  top.addEventListener('click',e=>{e.preventDefault();scrollTo({top:0,behavior:'smooth'});});
});
