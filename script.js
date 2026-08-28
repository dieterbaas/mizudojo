const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.site-nav');toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));document.querySelector('#year').textContent=new Date().getFullYear();

/* Fotoversie-switcher (A = real-life, B = fotograaf/clean; uitbreidbaar met C voor een volgende set) */
(function () {
  var PHOTO_VERSIONS = {
    A: { dir: 'real-life', suffix: '', label: 'Real-life' },
    B: { dir: 'photographer', suffix: '', label: 'Clean' }
  };
  var STORAGE_KEY = 'mizu-photo-version';
  var buttons = document.querySelectorAll('.photo-switcher-btn');
  var images = document.querySelectorAll('img[data-photo]');

  function applyVersion(key) {
    var version = PHOTO_VERSIONS[key];
    if (!version) return;
    images.forEach(function (img) {
      var base = img.getAttribute('data-photo');
      img.src = 'assets/images/' + version.dir + '/' + base + version.suffix + '.jpg';
    });
    buttons.forEach(function (btn) {
      var active = btn.getAttribute('data-version') === key;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem(STORAGE_KEY, key); } catch (e) {}
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyVersion(btn.getAttribute('data-version'));
    });
  });

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  applyVersion(saved && PHOTO_VERSIONS[saved] ? saved : 'A');
})();

/* Actieve nav-link markeren o.b.v. zichtbare sectie (scrollspy) */
(function () {
  var navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  var targets = [];
  navLinks.forEach(function (link) {
    var id = link.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if (el) targets.push({ link: link, el: el });
  });
  if (!('IntersectionObserver' in window) || targets.length === 0) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var match = targets.find(function (t) { return t.el === entry.target; });
      if (!match) return;
      if (entry.isIntersecting) {
        navLinks.forEach(function (l) { l.classList.remove('is-current'); });
        match.link.classList.add('is-current');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  targets.forEach(function (t) { observer.observe(t.el); });
})();

/* Terug-naar-boven knop: zichtbaar zodra er voorbij de hero gescrold is */
(function () {
  var btn = document.getElementById('back-to-top');
  if (!btn) return;
  var toggle = function () {
    if (window.scrollY > window.innerHeight * 0.6) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  };
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
})();
