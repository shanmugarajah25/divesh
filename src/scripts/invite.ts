import Lenis from 'lenis';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Falling jasmine and rose petals ---------- */
type Petal = { g?: number; x: number; y: number; r: number; vy: number; vx: number; rot: number; vr: number; sway: number; phase: number; kind: 0 | 1 | 2; flip: number; vf: number };

// Real flower images (jasmine, rose petal, marigold) fall and tumble
const flowerImgs = ['jasmine', 'rose-petal', 'marigold'].map((n) => {
  const img = new Image();
  img.src = `/flowers/${n}.png`;
  return img;
});
const canvas = document.getElementById('petals') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
let petals: Petal[] = [];
let W = 0, H = 0, dpr = 1, running = true, burst = 0;

function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = window.innerWidth; H = window.innerHeight;
  canvas.width = W * dpr; canvas.height = H * dpr;
  canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function makePetal(top = false): Petal {
  const kind = (Math.random() < 0.5 ? 0 : Math.random() < 0.7 ? 1 : 2) as 0 | 1 | 2; // 0 jasmine, 1 rose, 2 marigold
  return {
    x: Math.random() * W,
    y: top ? -20 - Math.random() * H * 0.3 : Math.random() * H,
    r: kind === 0 ? 9 + Math.random() * 6 : kind === 1 ? 8 + Math.random() * 6 : 8 + Math.random() * 5,
    vy: 0.5 + Math.random() * 0.9,
    vx: -0.2 + Math.random() * 0.4,
    rot: Math.random() * Math.PI * 2,
    vr: -0.02 + Math.random() * 0.04,
    sway: 0.4 + Math.random() * 0.8,
    phase: Math.random() * Math.PI * 2,
    kind,
    flip: Math.random() * Math.PI * 2,
    vf: 0.02 + Math.random() * 0.04,
  };
}

function drawJasmine(r: number) {
  ctx.fillStyle = '#fffdf6';
  ctx.strokeStyle = 'rgba(200,170,110,.5)';
  ctx.lineWidth = 0.6;
  for (let i = 0; i < 5; i++) {
    ctx.rotate((Math.PI * 2) / 5);
    ctx.beginPath();
    ctx.ellipse(0, -r * 0.62, r * 0.32, r * 0.62, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
  }
  ctx.fillStyle = '#f4d77a';
  ctx.beginPath(); ctx.arc(0, 0, r * 0.18, 0, Math.PI * 2); ctx.fill();
}
function drawPetal(r: number, c1: string, c2: string) {
  const g = ctx.createLinearGradient(0, -r, 0, r);
  g.addColorStop(0, c1); g.addColorStop(1, c2);
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.moveTo(0, -r);
  ctx.bezierCurveTo(r * 0.9, -r * 0.6, r * 0.7, r * 0.7, 0, r);
  ctx.bezierCurveTo(-r * 0.7, r * 0.7, -r * 0.9, -r * 0.6, 0, -r);
  ctx.fill();
}

function count() {
  const base = W < 600 ? 20 : 34;
  return reduceMotion ? 0 : base + burst;
}

let t = 0;
function frame() {
  if (!running) return;
  t += 1;
  ctx.clearRect(0, 0, W, H);
  while (petals.length < count()) petals.push(makePetal(true));
  if (burst > 0 && t % 4 === 0) burst--;
  for (let i = petals.length - 1; i >= 0; i--) {
    const p = petals[i];
    if (p.g) {
      p.vy += p.g;
      p.vx *= 0.985;
      if (p.vy > 1.1) p.g = 0;
    }
    p.y += p.vy;
    p.x += p.vx + Math.sin(t * 0.02 + p.phase) * p.sway * 0.5;
    p.rot += p.vr;
    p.flip += p.vf;
    if (p.y > H + 20) {
      if (petals.length > count()) { petals.splice(i, 1); continue; }
      Object.assign(p, makePetal(true));
    }
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.globalAlpha = 0.95;
    const img = flowerImgs[p.kind];
    if (img.complete && img.naturalWidth) {
      ctx.scale(Math.max(0.25, Math.abs(Math.cos(p.flip))), 1); // tumbling in 3D
      const s = p.r * 2;
      ctx.drawImage(img, -s / 2, -s / 2, s, s);
    } else if (p.kind === 0) drawJasmine(p.r * 0.6);
    else if (p.kind === 1) drawPetal(p.r * 0.6, '#ff5a74', '#b3122e');
    else drawPetal(p.r * 0.5, '#ffc94a', '#ef8a12');
    ctx.restore();
  }
  requestAnimationFrame(frame);
}

if (!reduceMotion) {
  resize();
  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) requestAnimationFrame(frame);
  });
  requestAnimationFrame(frame);
}

/* ---------- Tap anywhere to shower flowers ---------- */
function shower(x: number, y: number, n = 14) {
  if (reduceMotion) return;
  for (let i = 0; i < n; i++) {
    const p = makePetal();
    const a = -Math.PI / 2 + (Math.random() - 0.5) * 2.2;
    const v = 2.5 + Math.random() * 3.5;
    Object.assign(p, { x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: 0.09 });
    petals.push(p);
  }
}
document.addEventListener('pointerdown', (e) => {
  if (!document.body.classList.contains('opened')) return;
  if ((e.target as HTMLElement).closest('a, button, iframe')) return;
  shower(e.clientX, e.clientY);
});

/* ---------- Smooth scroll ---------- */
let lenis: Lenis | null = null;
if (!reduceMotion) {
  lenis = new Lenis({ duration: 1.25, easing: (t) => 1 - Math.pow(1 - t, 4), smoothWheel: true });
  const raf = (time: number) => {
    lenis!.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

/* ---------- Opening doors ---------- */
const intro = document.getElementById('intro')!;
const openBtn = document.getElementById('open-invite')!;
function openInvite() {
  if (intro.classList.contains('open')) return;
  intro.classList.add('open');
  document.body.classList.remove('locked');
  document.body.classList.add('opened');
  lenis?.start();
  burst = 70;
  shower(W / 2, H * 0.45, 30);
  try { sessionStorage.setItem('divesh-opened', '1'); } catch {}
  setTimeout(() => intro.remove(), reduceMotion ? 0 : 1700);
  loadMap();
}
openBtn.addEventListener('click', openInvite);
let seen = false;
try { seen = sessionStorage.getItem('divesh-opened') === '1'; } catch {}
if (seen) {
  intro.remove();
  document.body.classList.add('opened');
} else {
  document.body.classList.add('locked');
  lenis?.stop();
  openBtn.focus({ preventScroll: true });
}

/* ---------- Sticky bar: smooth jump + active state ---------- */
document.querySelectorAll<HTMLAnchorElement>('.dock a[data-scroll]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href')!;
    const target = document.querySelector<HTMLElement>(id);
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { offset: -16, duration: 1.4 });
    else target.scrollIntoView({ behavior: 'smooth' });
  });
});
const detailsBtn = document.querySelector('.dock a[href="#details"]');
const detailsSec = document.getElementById('details');
if (detailsBtn && detailsSec) {
  new IntersectionObserver(([e]) => detailsBtn.classList.toggle('active', e.isIntersecting), { threshold: 0.3 }).observe(detailsSec);
}

/* ---------- Scroll reveal ---------- */
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
);
document.querySelectorAll('.reveal').forEach((el, i) => {
  (el as HTMLElement).style.setProperty('--d', `${(i % 6) * 80}ms`);
  io.observe(el);
});

/* ---------- Countdown ---------- */
const cd = document.getElementById('countdown')!;
const start = new Date(cd.dataset.start!).getTime();
const units = {
  d: cd.querySelector('[data-u="d"]')!,
  h: cd.querySelector('[data-u="h"]')!,
  m: cd.querySelector('[data-u="m"]')!,
  s: cd.querySelector('[data-u="s"]')!,
};
const pad = (n: number) => String(n).padStart(2, '0');
function tick() {
  const diff = start - Date.now();
  if (diff <= 0) {
    cd.querySelector('.cd-grid')!.setAttribute('hidden', '');
    cd.querySelector('.cd-label')!.setAttribute('hidden', '');
    cd.querySelector('.cd-done')!.removeAttribute('hidden');
    return;
  }
  const s = Math.floor(diff / 1000);
  const set = (el: Element, v: string) => {
    if (el.textContent === v) return;
    el.textContent = v;
    el.classList.remove('tick');
    void (el as HTMLElement).offsetWidth;
    el.classList.add('tick');
  };
  set(units.d, pad(Math.floor(s / 86400)));
  set(units.h, pad(Math.floor((s % 86400) / 3600)));
  set(units.m, pad(Math.floor((s % 3600) / 60)));
  set(units.s, pad(s % 60));
  setTimeout(tick, 1000 - (Date.now() % 1000));
}
tick();

/* ---------- Map loads only after opening (saves data on mobile) ---------- */
function loadMap() {
  const f = document.querySelector<HTMLIFrameElement>('.map iframe');
  if (f && !f.src && f.dataset.src) f.src = f.dataset.src;
}
if (seen) loadMap();
