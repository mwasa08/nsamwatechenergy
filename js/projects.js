document.addEventListener('DOMContentLoaded',()=>{
  const bar=document.querySelector('.filters');if(!bar)return;
  bar.addEventListener('click',e=>{const b=e.target.closest('.fb');if(!b)return;
    bar.querySelectorAll('.fb').forEach(x=>x.classList.toggle('on',x===b));
    document.querySelectorAll('.pj').forEach(p=>p.classList.toggle('hide',b.dataset.f!=='All'&&p.dataset.cat!==b.dataset.f));});
});
