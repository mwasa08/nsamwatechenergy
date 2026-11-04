document.addEventListener('DOMContentLoaded',()=>{
  const mail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const check=el=>{let m='';const v=el.value.trim();
    if(el.required&&!v)m='This field is required.';
    else if(el.type==='email'&&!mail.test(v))m='Enter a valid email address.';
    else if(el.type==='tel'&&!/^[+\d][\d\s-]{6,}$/.test(v))m='Enter a valid phone number.';
    else if(el.tagName==='TEXTAREA'&&v.length<10)m='Please write at least 10 characters.';
    el.parentElement.classList.toggle('bad',!!m);el.parentElement.querySelector('.err').textContent=m;return !m;};
  document.querySelectorAll('form.form').forEach(f=>{
    f.querySelectorAll('input,textarea,select').forEach(el=>el.addEventListener('blur',()=>check(el)));
    f.addEventListener('submit',e=>{e.preventDefault();
      const ok=[...f.querySelectorAll('input,textarea,select')].map(check).every(Boolean);
      const o=f.querySelector('.ok');o.hidden=!ok;
      /* To send real emails, connect Formspree/EmailJS here. */
      if(ok)f.reset();});});
});
