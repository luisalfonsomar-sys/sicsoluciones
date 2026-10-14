(() => {
  document.documentElement.classList.remove('no-js');

  const WHATSAPP = '573218397060';
  const EMAIL = 'arqobras@sicsoluciones.com.co';

  // ---------- nav: solid on scroll, mobile menu, current section ----------
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('mobile-menu');

  const onScroll = () => nav.classList.toggle('is-solid', window.scrollY > 40 || !menu.hidden);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const setMenu = (open) => {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    onScroll();
  };
  toggle.addEventListener('click', () => setMenu(menu.hidden));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) setMenu(false); });

  const navLinks = [...document.querySelectorAll('.nav__links a')];
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href') === '#' + entry.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navLinks.forEach((a) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) sectionObserver.observe(target);
  });

  // ---------- reveal on scroll ----------
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    revealObserver.observe(el);
  });

  // ---------- facts counter ----------
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const end = Number(el.dataset.count);
      countObserver.unobserve(el);
      if (reduceMotion) return;
      const start = performance.now();
      const dur = 1200;
      const tick = (now) => {
        const t = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - t, 3)));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach((el) => countObserver.observe(el));

  // ---------- glass systems tabs ----------
  const SYSTEMS = [
    {
      title: 'Fachadas',
      desc: 'Fachadas en vidrio que protegen y le dan identidad al edificio, con perfilería y anclajes según el diseño arquitectónico.',
      items: ['Fachadas en vidrio de seguridad', 'Fachadas en vidrio templado', 'Fachadas flotantes', 'Vidrio de seguridad laminado'],
    },
    {
      title: 'Puertas',
      desc: 'Puertas en vidrio templado y laminado para el acceso a edificios, oficinas y locales comerciales. Nuestros diseños brindan seguridad y alta calidad en fabricación e instalación.',
      items: ['Vidrio templado y laminado', 'Soportes en aluminio y acero inoxidable', 'Sistemas automáticos'],
    },
    {
      title: 'Barandas en vidrio y acero inoxidable',
      desc: 'Barandas que protegen a las personas en cada espacio, instaladas con distintos tipos de anclaje según el aspecto visual que desee el cliente.',
      items: ['Vidrio templado o laminado', 'Estructura en acero inoxidable', 'Pasamanos en aluminio y acero'],
      photo: { src: 'assets/img/obra-lma6024.jpg', alt: 'Vivienda con barandas en vidrio templado en balcones y terraza' },
    },
    {
      title: 'Divisiones de baño',
      desc: 'Nos amoldamos al diseño y a la necesidad del cliente con accesorios en acero inoxidable y aluminio que dan un acabado moderno.',
      items: ['Sistema batiente', 'Sistema corredizo', 'Sistema en ele'],
    },
    {
      title: 'Divisiones de oficina',
      desc: 'Diseñamos e instalamos divisiones para oficinas y espacios corporativos con una visión moderna y agradable, conservando la privacidad sin perder la vista.',
      items: ['Espacios corporativos', 'Privacidad con luz natural', 'Diseño a la medida'],
    },
    {
      title: 'Espejos',
      desc: 'Diseñamos y cortamos espejos a la medida que requiere el cliente y el espacio, para renovar el aspecto del lugar donde se ubican.',
      items: ['Corte a la medida', 'Calibres de 3 mm a 6 mm', 'Formas especiales'],
    },
    {
      title: 'Aluminio arquitectónico',
      desc: 'Fabricamos e instalamos soluciones en aluminio para todo tipo de necesidades, con una amplia variedad de productos requeridos en obra.',
      items: ['Puertas', 'Ventanas', 'Persianas', 'Accesorios'],
      photo: { src: 'assets/img/obra-lma6101.jpg', alt: 'Instaladores de SIC montando una ventana en aluminio y vidrio' },
    },
  ];

  const tabs = [...document.querySelectorAll('.systems__tabs [role="tab"]')];
  const panel = document.querySelector('.systems__panel');
  const art = panel.querySelector('.glass-art');
  const photo = panel.querySelector('.systems__photo');
  const num = panel.querySelector('.systems__num');
  const title = document.getElementById('sys-title');
  const desc = document.getElementById('sys-desc');
  const list = document.getElementById('sys-list');
  const quoteBtn = panel.querySelector('[data-prefill]');

  const render = (i) => {
    const s = SYSTEMS[i];
    art.dataset.art = i;
    photo.hidden = !s.photo;
    if (s.photo) Object.assign(photo, s.photo);
    else photo.alt = '';
    num.textContent = `${String(i + 1).padStart(2, '0')} / ${String(SYSTEMS.length).padStart(2, '0')}`;
    title.textContent = s.title;
    desc.textContent = s.desc;
    list.replaceChildren(...s.items.map((t) => Object.assign(document.createElement('li'), { textContent: t })));
    quoteBtn.dataset.prefill = s.title;
  };

  const select = (i, focus) => {
    tabs.forEach((t, j) => {
      t.setAttribute('aria-selected', String(j === i));
      t.tabIndex = j === i ? 0 : -1;
    });
    if (focus) tabs[i].focus();
    if (reduceMotion) return render(i);
    panel.classList.add('is-swapping');
    setTimeout(() => { render(i); panel.classList.remove('is-swapping'); }, 220);
  };

  tabs.forEach((tab, i) => {
    tab.tabIndex = i === 0 ? 0 : -1;
    tab.addEventListener('click', () => select(i));
    tab.addEventListener('keydown', (e) => {
      const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      if (!(e.key in keys)) return;
      e.preventDefault();
      select((i + keys[e.key] + tabs.length) % tabs.length, true);
    });
  });
  render(0);

  // ---------- project filter ----------
  const filterBtns = document.querySelectorAll('.filter button');
  const projects = document.querySelectorAll('.project');
  filterBtns.forEach((btn) => btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
    const f = btn.dataset.filter;
    projects.forEach((p) => p.classList.toggle('is-hidden', f !== 'all' && !p.dataset.tags.split(' ').includes(f)));
  }));

  // ---------- quote form → WhatsApp or email ----------
  const form = document.getElementById('quote-form');
  const errorEl = document.getElementById('form-error');

  quoteBtn.addEventListener('click', () => {
    form.querySelector('input[value="Vidrio, aluminio y acero"]').checked = true;
    const msg = form.elements.mensaje;
    if (!msg.value) msg.value = `Me interesa: ${quoteBtn.dataset.prefill}. `;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const required = ['nombre', 'telefono', 'mensaje'].map((n) => form.elements[n]);
    let ok = true;
    required.forEach((el) => {
      const bad = !el.value.trim();
      el.classList.toggle('is-invalid', bad);
      if (bad) ok = false;
    });
    errorEl.hidden = ok;
    if (!ok) return required.find((el) => !el.value.trim()).focus();

    const d = Object.fromEntries(new FormData(form));
    const text = [
      'Hola SIC, quisiera una cotización.',
      `Nombre: ${d.nombre}`,
      `Teléfono: ${d.telefono}`,
      d.ciudad && `Ciudad: ${d.ciudad}`,
      `División: ${d.division}`,
      `Proyecto: ${d.mensaje}`,
    ].filter(Boolean).join('\n');

    const channel = e.submitter?.dataset.channel || 'whatsapp';
    if (channel === 'email') {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Cotización · ' + d.division)}&body=${encodeURIComponent(text)}`;
    } else {
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    }
  });
  form.addEventListener('input', (e) => {
    if (e.target.classList.contains('is-invalid') && e.target.value.trim()) e.target.classList.remove('is-invalid');
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
