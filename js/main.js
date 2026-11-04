document.addEventListener('DOMContentLoaded',()=>{
  const y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
  document.querySelectorAll('.fq button').forEach(b=>b.addEventListener('click',()=>{
    const it=b.parentElement,o=it.classList.toggle('open');b.setAttribute('aria-expanded',o);b.lastElementChild.textContent=o?'−':'+';}));
  document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
});
