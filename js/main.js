// js/main.js
'use strict';

const nav = document.getElementById('nav');
const hamburger = document.getElementById('navHamburger');

if (nav && hamburger) {
  // ── Nav: add shadow on scroll ──
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 20);
  });

  // ── Nav: mobile hamburger toggle ──
  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // ── Nav: close mobile menu on link click ──
  document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── Contact form: show success message ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = contactForm.firstName.value.trim();
    const lastName = contactForm.lastName.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!firstName || !lastName || !email || !message) {
      [contactForm.firstName, contactForm.lastName, contactForm.email, contactForm.message].forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = 'var(--coral)';
          field.addEventListener('input', () => { field.style.borderColor = ''; }, { once: true });
        }
      });
      return;
    }

    contactForm.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  });
}
