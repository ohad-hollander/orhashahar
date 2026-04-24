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
