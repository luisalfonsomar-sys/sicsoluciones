// Nav scroll shadow + mobile menu
(function () {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-menu__close');

  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function openMenu() {
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', openMenu);
    mobileClose.addEventListener('click', closeMenu);
    mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  }
})();

// Scroll reveal
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
  );

  items.forEach((el) => observer.observe(el));
})();

// Contact form validation + mailto handoff
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const success = document.getElementById('form-success');
  const resetBtn = document.getElementById('form-reset');

  function setError(fieldName, message) {
    const field = form.querySelector(`[data-field="${fieldName}"]`);
    if (!field) return;
    const errorEl = field.querySelector('.field__error');
    if (message) {
      field.classList.add('has-error');
      if (errorEl) errorEl.textContent = message;
    } else {
      field.classList.remove('has-error');
      if (errorEl) errorEl.textContent = '';
    }
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const phone = form.elements['phone'].value.trim();
    const line = form.elements['line'].value;
    const message = form.elements['message'].value.trim();

    let valid = true;
    if (!name) { setError('name', 'Cuéntanos tu nombre.'); valid = false; } else { setError('name', ''); }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('email', 'Escribe un correo válido.'); valid = false; } else { setError('email', ''); }
    if (!message || message.length < 12) { setError('message', 'Danos un poco más de detalle (mín. 12 caracteres).'); valid = false; } else { setError('message', ''); }

    if (!valid) return;

    const subject = encodeURIComponent(`Nuevo proyecto — ${line}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone || 'No indicado'}\nLínea de interés: ${line}\n\nMensaje:\n${message}`,
    );
    window.location.href = `mailto:gerencia@sicsoluciones.com.co?subject=${subject}&body=${body}`;

    form.style.display = 'none';
    if (success) success.classList.add('is-visible');
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      form.reset();
      ['name', 'email', 'message'].forEach((f) => setError(f, ''));
      form.style.display = '';
      if (success) success.classList.remove('is-visible');
    });
  }
})();
