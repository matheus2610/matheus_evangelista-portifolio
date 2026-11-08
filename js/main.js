/**
 * JS GLOBAL
 * Funciona sem dependências e sem chamadas a servidores externos.
 * Responsabilidades: menu mobile e atualização automática do ano no rodapé.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Atualiza o ano automaticamente em todas as páginas.
  document.querySelectorAll('[data-current-year]').forEach(element => {
    element.textContent = String(new Date().getFullYear());
  });

  // Ancoragem #topo funciona até sem JS; aqui adicionamos rolagem suave.
  document.querySelectorAll('.back-to-top').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({top: 0, behavior: reduce ? 'auto' : 'smooth'});
    });
  });

  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('siteNav');
  if (!toggle || !nav) return;

  // Mantém o atributo ARIA sincronizado com o estado visual do menu.
  function setMenuOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? toggle.dataset.menuClose : toggle.dataset.menuOpen);
    nav.classList.toggle('open', open);
  }
  toggle.addEventListener('click', () => {
    setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenuOpen(false);
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) setMenuOpen(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) setMenuOpen(false);
  });
});
