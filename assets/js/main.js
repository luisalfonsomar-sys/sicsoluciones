(() => {
  document.documentElement.classList.remove('no-js');

  const WHATSAPP = '573218397060';
  const EMAIL = 'arqobras@sicsoluciones.com.co';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const norm = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  // ---------- nav: solid on scroll, mobile menu ----------
  function initNav() {
    const nav = $('.nav');
    const toggle = $('.nav__toggle');
    const menu = $('#mobile-menu');
    if (!nav || !toggle || !menu) return;

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
  }

  // ---------- reveal on scroll ----------
  function initReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    $$('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      io.observe(el);
    });
  }

  // ---------- facts counter ----------
  function initCounters() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const end = Number(el.dataset.count);
        io.unobserve(el);
        if (reduceMotion) return;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / 1200, 1);
          el.textContent = Math.round(end * (1 - Math.pow(1 - t, 3)));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.6 });
    $$('[data-count]').forEach((el) => io.observe(el));
  }

  // ---------- glass systems: tabs, gallery, lightbox (vidrio-aluminio-acero.html) ----------
  const SYSTEMS = [
    {
      slug: 'fachadas',
      title: 'Fachadas',
      desc: 'Fachadas en vidrio que protegen y le dan identidad al edificio, con perfilería y anclajes según el diseño arquitectónico.',
      items: ['Fachadas en vidrio de seguridad', 'Fachadas en vidrio templado', 'Fachadas flotantes', 'Vidrio de seguridad laminado'],
      gallery: 5,
    },
    {
      slug: 'puertas',
      title: 'Puertas',
      desc: 'Puertas en vidrio templado y laminado para el acceso a edificios, oficinas y locales comerciales. Nuestros diseños brindan seguridad y alta calidad en fabricación e instalación.',
      items: ['Vidrio templado y laminado', 'Soportes en aluminio y acero inoxidable', 'Sistemas automáticos'],
      gallery: 4,
    },
    {
      slug: 'barandas',
      title: 'Barandas en vidrio y acero inoxidable',
      desc: 'Barandas que protegen a las personas en cada espacio, instaladas con distintos tipos de anclaje según el aspecto visual que desee el cliente.',
      items: ['Vidrio templado o laminado', 'Estructura en acero inoxidable', 'Pasamanos en aluminio y acero'],
      gallery: 1,
    },
    {
      slug: 'banos',
      title: 'Divisiones de baño',
      desc: 'Nos amoldamos al diseño y a la necesidad del cliente con accesorios en acero inoxidable y aluminio que dan un acabado moderno.',
      items: ['Sistema batiente', 'Sistema corredizo', 'Sistema en ele'],
      gallery: 4,
    },
    {
      slug: 'oficina',
      title: 'Divisiones de oficina',
      desc: 'Diseñamos e instalamos divisiones para oficinas y espacios corporativos con una visión moderna y agradable, conservando la privacidad sin perder la vista.',
      items: ['Espacios corporativos', 'Privacidad con luz natural', 'Diseño a la medida'],
      gallery: 0,
    },
    {
      slug: 'espejos',
      title: 'Espejos',
      desc: 'Diseñamos y cortamos espejos a la medida que requiere el cliente y el espacio, para renovar el aspecto del lugar donde se ubican.',
      items: ['Corte a la medida', 'Calibres de 3 mm a 6 mm', 'Formas especiales'],
      gallery: 2,
    },
    {
      slug: 'aluminio',
      title: 'Aluminio arquitectónico',
      desc: 'Fabricamos e instalamos soluciones en aluminio para todo tipo de necesidades, con una amplia variedad de productos requeridos en obra.',
      items: ['Puertas', 'Ventanas', 'Persianas', 'Accesorios'],
      gallery: 2,
    },
  ];

  function initSystems() {
    const panel = $('.systems__panel');
    if (!panel) return;
    const tabs = $$('.systems__tabs [role="tab"]');
    const art = $('.glass-art', panel);
    const zoom = $('.systems__zoom', panel);
    const photo = $('.systems__photo', panel);
    const galleryUi = $('.gallery-ui', panel);
    const galleryCount = $('.gallery-ui__count', galleryUi);
    const num = $('.systems__num', panel);
    const title = $('#sys-title');
    const desc = $('#sys-desc');
    const list = $('#sys-list');
    const quote = $('[data-prefill]', panel);

    const photosOf = (s) => Array.from({ length: s.gallery }, (_, k) => ({
      src: `assets/img/galeria/${s.slug}-${k + 1}.jpg`,
      alt: `${s.title}: obra de SIC, foto ${k + 1} de ${s.gallery}`,
    }));
    let current = { photos: [], index: 0, title: '' };

    const showPhoto = (index) => {
      const { photos } = current;
      if (!photos.length) return;
      current.index = (index + photos.length) % photos.length;
      Object.assign(photo, photos[current.index]);
      galleryCount.textContent = `${current.index + 1} / ${photos.length}`;
    };

    const render = (i) => {
      const s = SYSTEMS[i];
      art.dataset.art = i;
      current = { photos: photosOf(s), index: 0, title: s.title };
      zoom.hidden = !current.photos.length;
      galleryUi.hidden = current.photos.length < 2;
      if (current.photos.length) showPhoto(0);
      else photo.alt = '';
      num.textContent = `${String(i + 1).padStart(2, '0')} / ${String(SYSTEMS.length).padStart(2, '0')}`;
      title.textContent = s.title;
      desc.textContent = s.desc;
      list.replaceChildren(...s.items.map((t) => Object.assign(document.createElement('li'), { textContent: t })));
      quote.href = `contacto.html?${new URLSearchParams({ division: 'vidrio', interes: s.title })}`;
    };

    const select = (i, { focus = false, updateHash = true } = {}) => {
      tabs.forEach((t, j) => {
        t.setAttribute('aria-selected', String(j === i));
        t.tabIndex = j === i ? 0 : -1;
      });
      if (focus) tabs[i].focus();
      if (updateHash) history.replaceState(null, '', `#${SYSTEMS[i].slug}`);
      if (reduceMotion) return render(i);
      panel.classList.add('is-swapping');
      setTimeout(() => { render(i); panel.classList.remove('is-swapping'); }, 220);
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(i));
      tab.addEventListener('keydown', (e) => {
        const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (!step) return;
        e.preventDefault();
        select((i + step + tabs.length) % tabs.length, { focus: true });
      });
    });

    // deep links: vidrio-aluminio-acero.html#barandas
    const fromHash = () => {
      const i = SYSTEMS.findIndex((s) => `#${s.slug}` === location.hash);
      if (i < 0) return false;
      tabs.forEach((t, j) => { t.setAttribute('aria-selected', String(j === i)); t.tabIndex = j === i ? 0 : -1; });
      render(i);
      $('#sistemas')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      return true;
    };
    if (!fromHash()) {
      tabs.forEach((t, j) => { t.tabIndex = j === 0 ? 0 : -1; });
      render(0);
    }
    window.addEventListener('hashchange', fromHash);

    galleryUi.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-step]');
      if (btn) showPhoto(current.index + Number(btn.dataset.step));
    });

    const lightbox = $('.lightbox');
    if (!lightbox) return;
    const lbImg = $('.lightbox__img', lightbox);
    const lbCaption = $('.lightbox__caption', lightbox);
    const sync = () => {
      Object.assign(lbImg, current.photos[current.index]);
      lbCaption.textContent = `${current.title} · ${current.index + 1} / ${current.photos.length}`;
      lightbox.classList.toggle('is-single', current.photos.length < 2);
    };
    const step = (n) => { showPhoto(current.index + n); sync(); };
    zoom.addEventListener('click', () => {
      if (!current.photos.length) return;
      sync();
      lightbox.showModal();
    });
    lightbox.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-step]');
      if (btn) return step(Number(btn.dataset.step));
      if (e.target.closest('.lightbox__close') || e.target === lightbox) lightbox.close();
    });
    lightbox.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    });
  }

  // ---------- featured projects filter (proyectos.html) ----------
  function initProjectFilter() {
    const buttons = $$('.filter button');
    if (!buttons.length) return;
    const projects = $$('.project');
    buttons.forEach((btn) => btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.toggle('is-active', b === btn));
      const f = btn.dataset.filter;
      projects.forEach((p) => p.classList.toggle('is-hidden', f !== 'all' && !p.dataset.tags.split(' ').includes(f)));
    }));
  }

  // ---------- quote form → WhatsApp or email (contacto.html) ----------
  const DIVISIONS = { suministros: 'Suministros y obras', vidrio: 'Vidrio, aluminio y acero' };

  function initForm() {
    const form = $('#quote-form');
    if (!form) return;
    const errorEl = $('#form-error');

    // prefill from links such as contacto.html?division=vidrio&interes=Fachadas
    const params = new URLSearchParams(location.search);
    const division = DIVISIONS[params.get('division')];
    if (division) form.querySelector(`input[value="${division}"]`).checked = true;
    const interes = params.get('interes');
    if (interes) form.elements.mensaje.value = `Me interesa: ${interes}. `;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const required = ['nombre', 'telefono', 'mensaje'].map((n) => form.elements[n]);
      required.forEach((el) => el.classList.toggle('is-invalid', !el.value.trim()));
      const firstBad = required.find((el) => !el.value.trim());
      errorEl.hidden = !firstBad;
      if (firstBad) return firstBad.focus();

      const d = Object.fromEntries(new FormData(form));
      const text = [
        'Hola SIC, quisiera una cotización.',
        `Nombre: ${d.nombre}`,
        `Teléfono: ${d.telefono}`,
        d.ciudad && `Ciudad: ${d.ciudad}`,
        `División: ${d.division}`,
        `Proyecto: ${d.mensaje}`,
      ].filter(Boolean).join('\n');

      if ((e.submitter?.dataset.channel || 'whatsapp') === 'email') {
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Cotización · ${d.division}`)}&body=${encodeURIComponent(text)}`;
      } else {
        window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      }
    });
    form.addEventListener('input', (e) => {
      if (e.target.classList.contains('is-invalid') && e.target.value.trim()) e.target.classList.remove('is-invalid');
    });
  }

  // ---------- product catalog: tabs, chips, search (suministros.html) ----------
  function initCatalog() {
    const catalog = $('#catalogo');
    if (!catalog) return;
    const tabs = $$('[role="tab"]', catalog);
    const panels = $$('.catalog__panel', catalog);
    const search = $('.catalog__search input', catalog);
    const empty = $('.catalog__empty', catalog);

    const openTab = (i, focus) => {
      tabs.forEach((t, j) => {
        t.setAttribute('aria-selected', String(j === i));
        t.tabIndex = j === i ? 0 : -1;
      });
      panels.forEach((p, j) => { p.hidden = j !== i; });
      if (focus) tabs[i].focus();
    };
    tabs.forEach((tab, i) => {
      tab.tabIndex = i === 0 ? 0 : -1;
      tab.addEventListener('click', () => openTab(i));
      tab.addEventListener('keydown', (e) => {
        const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
        if (!step) return;
        e.preventDefault();
        openTab((i + step + tabs.length) % tabs.length, true);
      });
    });

    panels.forEach((panel) => {
      const chips = $$('.catalog__chips button', panel);
      chips.forEach((chip) => chip.addEventListener('click', () => {
        chips.forEach((c) => c.classList.toggle('is-active', c === chip));
        const g = chip.dataset.group;
        $$('.product', panel).forEach((p) => { p.hidden = g !== 'all' && p.dataset.group !== g; });
      }));
    });

    search.addEventListener('input', () => {
      const q = norm(search.value.trim());
      catalog.classList.toggle('is-searching', Boolean(q));
      let total = 0;
      panels.forEach((panel) => {
        let n = 0;
        $$('.product', panel).forEach((p) => {
          const match = !q || norm(p.dataset.search).includes(q);
          p.hidden = !match;
          if (match) n++;
        });
        panel.classList.toggle('is-empty', n === 0);
        total += n;
      });
      empty.hidden = !q || total > 0;
      if (!q) {
        panels.forEach((panel) => $('.catalog__chips .is-active', panel)?.click());
        openTab(tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true'));
      }
    });

    // deep links: suministros.html#cat-geosistemas
    const fromHash = () => {
      const i = panels.findIndex((p) => `#${p.id}` === location.hash);
      if (i < 0) return;
      openTab(i);
      catalog.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
  }

  // ---------- projects map: markers ↔ list (proyectos.html) ----------
  function initMap() {
    const map = $('.map');
    if (!map) return;
    const tip = $('.map__tip', map);
    const pins = $$('.map__pin', map);
    const items = $$('.portfolio__list li[data-city]');
    let pinned = null;

    const show = (city) => {
      const pin = pins.find((p) => p.dataset.city === city);
      if (!pin) return;
      pins.forEach((p) => p.classList.toggle('is-active', p === pin));
      items.forEach((li) => li.classList.toggle('is-active', li.dataset.city === city));
      const box = map.getBoundingClientRect();
      const dot = pin.getBoundingClientRect();
      $('b', tip).textContent = pin.dataset.name;
      $('span', tip).textContent = pin.dataset.projects;
      tip.hidden = false;
      const half = tip.offsetWidth / 2;
      const x = Math.min(Math.max(dot.left + dot.width / 2 - box.left, half + 4), box.width - half - 4);
      const above = dot.top - box.top - tip.offsetHeight - 16 >= 0;
      tip.classList.toggle('is-below', !above);
      tip.style.left = `${x}px`;
      tip.style.top = `${(above ? dot.top : dot.bottom) - box.top}px`;
    };
    const hide = () => {
      if (pinned) return show(pinned);
      tip.hidden = true;
      pins.forEach((p) => p.classList.remove('is-active'));
      items.forEach((li) => li.classList.remove('is-active'));
    };

    pins.forEach((pin) => {
      pin.addEventListener('mouseenter', () => show(pin.dataset.city));
      pin.addEventListener('mouseleave', hide);
      pin.addEventListener('focus', () => show(pin.dataset.city));
      pin.addEventListener('blur', () => { pinned = null; hide(); });
      pin.addEventListener('click', () => {
        pinned = pinned === pin.dataset.city ? null : pin.dataset.city;
        if (pinned) show(pinned); else hide();
      });
      pin.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pin.dispatchEvent(new Event('click')); }
      });
    });
    items.forEach((li) => {
      li.addEventListener('mouseenter', () => show(li.dataset.city));
      li.addEventListener('mouseleave', hide);
    });
    document.addEventListener('click', (e) => {
      if (pinned && !e.target.closest('.map__pin')) { pinned = null; hide(); }
    });
  }

  initNav();
  initReveal();
  initCounters();
  initSystems();
  initProjectFilter();
  initForm();
  initCatalog();
  initMap();
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
