/**
 * Site interactions. Everything is initialised on `astro:page-load` so it
 * keeps working across client-side page transitions (ClientRouter).
 */

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Theme ---------- */
function applyTheme(dark: boolean) {
  root.classList.toggle('dark', dark);
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]:not([media])');
  if (meta) meta.content = dark ? '#080b14' : '#f7f8fc';
}

function currentThemeIsDark() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
  } catch {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function toggleTheme() {
  const dark = !root.classList.contains('dark');
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  } catch {}
  const doc = document as Document & { startViewTransition?: (cb: () => void) => { finished: Promise<void> } };
  if (doc.startViewTransition && !reduceMotion) {
    root.classList.add('theme-switch');
    doc.startViewTransition(() => applyTheme(dark)).finished.finally(() => root.classList.remove('theme-switch'));
  } else {
    applyTheme(dark);
  }
}

// Follow the OS if the user has not chosen explicitly.
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  try {
    if (!localStorage.getItem('theme')) applyTheme(e.matches);
  } catch {}
});

/* ---------- Global scroll handling (bound once) ---------- */
let header: HTMLElement | null = null;
let backToTop: HTMLElement | null = null;
let progress: HTMLElement | null = null;

function onScroll() {
  const y = window.scrollY;
  header?.classList.toggle('is-scrolled', y > 24 || root.classList.contains('menu-open'));
  if (backToTop) {
    const show = y > 600;
    backToTop.classList.toggle('opacity-0', !show);
    backToTop.classList.toggle('translate-y-4', !show);
    backToTop.classList.toggle('pointer-events-none', !show);
  }
  if (progress) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });

/* ---------- Per-page initialisation ---------- */
function init() {
  header = document.getElementById('site-header');
  backToTop = document.getElementById('back-to-top');
  progress = document.getElementById('scroll-progress');
  root.classList.remove('menu-open');
  onScroll();

  document.querySelectorAll('[data-theme-toggle]').forEach((b) => b.addEventListener('click', toggleTheme));
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  initMenu();
  initReveal();
  initCounters();
  initTypewriter();
  initSpotlight();
  initCardLift();
  initTilt();
  initParallax();
}

/* ---------- Mobile menu ---------- */
function initMenu() {
  const menuBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!menuBtn || !menu) return;

  const setMenu = (open: boolean) => {
    menu.classList.toggle('open', open);
    root.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menuBtn.classList.toggle('is-open', open);
    onScroll();
  };

  menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu.querySelectorAll('.mobile-link').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  menu.querySelector('.menu-backdrop')?.addEventListener('click', () => setMenu(false));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => e.matches && setMenu(false));
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const reveals = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)');
  if (!('IntersectionObserver' in window) || reduceMotion) {
    reveals.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.add('is-visible');
          el.addEventListener('animationend', (ev) => ev.target === el && el.classList.add('is-done'), { once: true });
          io.unobserve(el);
        }
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
  );
  reveals.forEach((el) => io.observe(el));
}

/* ---------- Animated counters ---------- */
function initCounters() {
  const counters = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!counters.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        io.unobserve(el);
        const target = Number(el.dataset.count ?? 0);
        if (reduceMotion) {
          el.textContent = String(target);
          continue;
        }
        const duration = 1600;
        let start: number | undefined;
        const tick = (now: number) => {
          // rAF timestamps can predate performance.now(), so anchor to the first frame and clamp
          start ??= now;
          const t = Math.max(0, Math.min(1, (now - start) / duration));
          const eased = 1 - Math.pow(1 - t, 4);
          el.textContent = String(Math.round(target * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    },
    { threshold: 0.5 },
  );
  counters.forEach((el) => io.observe(el));
}

/* ---------- Typewriter ---------- */
function initTypewriter() {
  const typed = document.getElementById('typed');
  if (!typed || reduceMotion || typed.dataset.ready) return;
  typed.dataset.ready = '1';
  let roles: string[] = [];
  try {
    roles = JSON.parse(typed.dataset.roles ?? '[]');
  } catch {}
  if (roles.length < 2) return;

  // The first word is already rendered in full, so start by deleting it.
  let roleIdx = 0;
  let charIdx = roles[0].length;
  let deleting = true;

  const step = () => {
    if (!typed.isConnected) return; // page was swapped
    const word = roles[roleIdx];
    charIdx += deleting ? -1 : 1;
    typed.textContent = word.slice(0, charIdx);

    let delay = deleting ? 35 : 75;
    if (!deleting && charIdx >= word.length) {
      delay = 2400;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 300;
    }
    window.setTimeout(step, delay);
  };
  window.setTimeout(step, 2400);
}

/* ---------- Cursor spotlight on cards ---------- */
function initSpotlight() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll<HTMLElement>('.card').forEach((card) => {
    let raf = 0;
    let x = 0;
    let y = 0;
    card.addEventListener('pointermove', (e) => {
      x = e.clientX;
      y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${x - r.left}px`);
        card.style.setProperty('--my', `${y - r.top}px`);
      });
    });
  });
}

/* ---------- Hover lift on cards ---------- */
// Keeps a card lifted while the cursor is inside the area the card covered before it moved up,
// so hovering near the bottom edge no longer toggles the lift on and off.
function initCardLift() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll<HTMLElement>('.card-hover, .btn-primary, .btn-ghost, .icon-btn, .chip').forEach((card) => {
    // px of slack below the element: its lift (6px cards, 2px buttons) plus a little margin
    const slack = card.classList.contains('card-hover') ? 8 : 3;
    const inside = (e: PointerEvent) => {
      const r = card.getBoundingClientRect();
      return e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom + slack;
    };
    const track = (e: PointerEvent) => {
      if (inside(e)) return;
      card.classList.remove('is-lifted');
      window.removeEventListener('pointermove', track);
    };
    card.addEventListener('pointerenter', (e) => {
      if (e.pointerType !== 'mouse') return;
      card.classList.add('is-lifted');
    });
    card.addEventListener('pointerleave', (e) => {
      if (e.pointerType !== 'mouse') return;
      if (inside(e)) window.addEventListener('pointermove', track);
      else card.classList.remove('is-lifted');
    });
  });
}

/* ---------- 3D tilt (hero portrait) ---------- */
function initTilt() {
  if (reduceMotion || window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    const zone = el.closest('section') ?? el;
    const max = Number(el.dataset.tilt) || 8;
    zone.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const y = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      const cx = Math.max(-1.5, Math.min(1.5, x));
      const cy = Math.max(-1.5, Math.min(1.5, y));
      el.style.transform = `perspective(1200px) rotateY(${cx * max}deg) rotateX(${-cy * max}deg)`;
    });
    zone.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });
}

/* ---------- Mouse parallax for decorative blobs ---------- */
function initParallax() {
  if (reduceMotion || window.matchMedia('(hover: none)').matches) return;
  const items = document.querySelectorAll<HTMLElement>('[data-parallax]');
  if (!items.length) return;
  let raf = 0;
  let px = 0;
  let py = 0;
  window.addEventListener(
    'pointermove',
    (e) => {
      px = e.clientX / window.innerWidth - 0.5;
      py = e.clientY / window.innerHeight - 0.5;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        items.forEach((el) => {
          const depth = Number(el.dataset.parallax) || 20;
          el.style.translate = `${px * depth}px ${py * depth}px`;
        });
      });
    },
    { passive: true },
  );
}

/* ---------- Lifecycle ---------- */
document.addEventListener('astro:page-load', init);
// Re-apply the theme after a client-side navigation swaps the <html> element.
document.addEventListener('astro:after-swap', () => applyTheme(currentThemeIsDark()));
