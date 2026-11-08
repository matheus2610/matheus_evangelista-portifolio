/**
 * CARROSSEL DA PÁGINA INICIAL
 * Vanilla JavaScript: autoplay, setas, indicadores, teclado, toque e pausa.
 * Nenhuma biblioteca de terceiros ou solicitação de rede é necessária.
 */
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const track = document.getElementById('heroTrack');
  const dots = document.getElementById('carouselDots');
  const previous = document.getElementById('prevSlide');
  const next = document.getElementById('nextSlide');
  if (!hero || !track || !dots || !previous || !next) return;

  const slides = [...track.querySelectorAll('.hero-slide')];
  const lang = document.documentElement.lang.slice(0,2);
  const dotLabel = {pt:'Ir ao slide',en:'Go to slide',es:'Ir a la diapositiva'}[lang] || 'Go to slide';
  const ofLabel = {pt:'de',en:'of',es:'de'}[lang] || 'of';
  if (slides.length < 2) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DELAY = 6500;
  let current = 0;
  let timer = null;
  let touchingX = null;

  // O navegador não deve tabular por links que estão em slides ocultos.
  function goToSlide(index, restart = true) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    slides.forEach((slide, i) => {
      const active = i === current;
      slide.setAttribute('aria-hidden', String(!active));
      slide.querySelectorAll('a,button').forEach(control => {
        control.tabIndex = active ? 0 : -1;
      });
    });
    [...dots.children].forEach((dot, i) => {
      const active = i === current;
      dot.classList.toggle('active', active);
      dot.setAttribute('aria-current', String(active));
    });
    if (restart) startAutoplay();
  }

  // Indicadores criados dinamicamente, um para cada imagem.
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `${dotLabel} ${i+1} ${ofLabel} ${slides.length}`);
    dot.addEventListener('click', () => goToSlide(i));
    dots.appendChild(dot);
  });

  function stopAutoplay() {
    if (timer !== null) window.clearInterval(timer);
    timer = null;
  }
  function startAutoplay() {
    stopAutoplay();
    // Não anima automaticamente caso o usuário prefira menos movimento.
    if (reduceMotion || document.hidden) return;
    timer = window.setInterval(() => goToSlide(current + 1, false), DELAY);
  }

  previous.addEventListener('click', () => goToSlide(current - 1));
  next.addEventListener('click', () => goToSlide(current + 1));

  // Teclado apenas quando o carrossel tem foco (não interfere no site todo).
  hero.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {event.preventDefault(); goToSlide(current + 1);}
    if (event.key === 'ArrowLeft') {event.preventDefault(); goToSlide(current - 1);}
  });
  hero.addEventListener('mouseenter', stopAutoplay);
  hero.addEventListener('mouseleave', startAutoplay);
  hero.addEventListener('focusin', stopAutoplay);
  hero.addEventListener('focusout', event => {
    if (!hero.contains(event.relatedTarget)) startAutoplay();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAutoplay(); else startAutoplay();
  });

  // Deslizar com o dedo em celulares (sem plug-in para gestos).
  hero.addEventListener('touchstart', event => {
    touchingX = event.changedTouches[0]?.screenX ?? null;
  }, {passive:true});
  hero.addEventListener('touchend', event => {
    if (touchingX === null) return;
    const distance = (event.changedTouches[0]?.screenX ?? touchingX) - touchingX;
    touchingX = null;
    if (Math.abs(distance) > 45) goToSlide(current + (distance < 0 ? 1 : -1));
  }, {passive:true});

  goToSlide(0, false);
  startAutoplay();
});
