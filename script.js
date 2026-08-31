document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile navigation
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Hero carousel
  const track = document.getElementById("heroTrack");
  const dots = document.getElementById("carouselDots");
  const next = document.getElementById("nextSlide");
  const prev = document.getElementById("prevSlide");

  if (!track) return;

  const slides = [...track.children];
  let current = 0;
  let timer = null;

  const setSlide = (index, restart = true) => {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;

    if (dots) {
      [...dots.children].forEach((dot, i) => {
        dot.classList.toggle("active", i === current);
        dot.setAttribute("aria-current", i === current ? "true" : "false");
      });
    }

    if (restart) startAuto();
  };

  if (dots) {
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Ir para slide ${i + 1}`);
      dot.addEventListener("click", () => setSlide(i));
      dots.appendChild(dot);
    });
  }

  next?.addEventListener("click", () => setSlide(current + 1));
  prev?.addEventListener("click", () => setSlide(current - 1));

  const startAuto = () => {
    clearInterval(timer);
    timer = setInterval(() => setSlide(current + 1, false), 6500);
  };

  const hero = track.closest(".hero");
  hero?.addEventListener("mouseenter", () => clearInterval(timer));
  hero?.addEventListener("mouseleave", startAuto);

  // Keyboard support
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") setSlide(current + 1);
    if (event.key === "ArrowLeft") setSlide(current - 1);
  });

  setSlide(0, false);
  startAuto();
});
