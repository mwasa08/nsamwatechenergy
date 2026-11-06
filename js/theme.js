/* Light / System / Dark theme. Loaded in <head> so the theme applies before first paint (no flash). */
(function () {
  var d = document.documentElement, KEY = 'nsamwa-theme', mq = matchMedia('(prefers-color-scheme: dark)');
  function saved() { try { return localStorage.getItem(KEY) || 'system'; } catch (e) { return 'system'; } }
  function sync() {
    document.querySelectorAll('.tgl button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.t === d.dataset.mode)); });
  }
  function apply(mode) {
    var dark = mode === 'dark' || (mode === 'system' && mq.matches);
    d.dataset.theme = dark ? 'dark' : 'light';
    d.dataset.mode = mode;
    var m = document.querySelector('meta[name=theme-color]');
    if (m) m.content = dark ? '#08111F' : '#001A44';
    sync();
  }
  window.setTheme = function (mode) {
    try { localStorage.setItem(KEY, mode); } catch (e) {}
    d.classList.add('theme-fade'); apply(mode);
    setTimeout(function () { d.classList.remove('theme-fade'); }, 350);
  };
  apply(saved());
  mq.addEventListener('change', function () { if (saved() === 'system') apply('system'); });
  document.addEventListener('DOMContentLoaded', function () {
    sync();
    document.querySelectorAll('.tgl button').forEach(function (b) { b.addEventListener('click', function () { window.setTheme(b.dataset.t); }); });
  });
})();
