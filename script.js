// SMOOTH SCROLL FOR ALL ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// NAV SCROLL
const nav = document.getElementById('nav');
function updateNav() {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', updateNav);
updateNav();

// MOBILE MENU
const burger = document.getElementById('burger');
if (burger) {
  burger.addEventListener('click', () => nav.classList.toggle('menu-open'));
  document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('menu-open'));
  });
}

// NAV CTA BUTTON
document.querySelector('.nav__cta').addEventListener('click', function(e) {
  e.preventDefault();
  nav.classList.remove('menu-open');
  const target = document.querySelector('#contact');
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(
  '.about-card, .portfolio__item, .service-card, .process__step, .contact-link'
);
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => { el.classList.add('reveal'); observer.observe(el); });

// FORM
function submitForm() {
  const name = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const msg = document.getElementById('fmsg').value.trim();
  const btn = document.getElementById('submitBtn');
  const formMsg = document.getElementById('formMsg');
  if (!name || !email || !msg) { btn.style.animation='shake 0.4s ease'; setTimeout(()=>btn.style.animation='',400); return; }
  btn.textContent = 'Відправляємо...';
  btn.disabled = true;
  setTimeout(() => { btn.style.display='none'; formMsg.style.display='block'; }, 1200);
}

// CURSOR GLOW
if (window.matchMedia('(pointer: fine)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = 'position:fixed;pointer-events:none;z-index:9999;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(0,210,200,0.06) 0%,transparent 70%);transform:translate(-50%,-50%);transition:left 0.15s ease,top 0.15s ease;';
  document.body.appendChild(glow);
  document.addEventListener('mousemove', e => { glow.style.left=e.clientX+'px'; glow.style.top=e.clientY+'px'; });
}
