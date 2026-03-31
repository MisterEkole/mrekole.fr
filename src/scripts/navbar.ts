const nav = document.querySelector('.navbar') as HTMLElement;
if (nav) {
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      nav.classList.add('navbar--scrolled');
    } else {
      nav.classList.remove('navbar--scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });
}

// Mobile menu toggle
const toggle = document.querySelector('.navbar__toggle') as HTMLElement;
const menu = document.querySelector('.navbar__menu') as HTMLElement;
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('navbar__menu--open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu on link click
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('navbar__menu--open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
