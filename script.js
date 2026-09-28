// =========================================
// THERMODA — JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  // =========================================
  // BOTONES DE WHATSAPP
  // =========================================

  const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');

  whatsappButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Pequeño efecto visual al hacer clic
      button.style.transform = "scale(0.97)";

      setTimeout(() => {
        button.style.transform = "";
      }, 150);
    });
  });

  // =========================================
  // BOTÓN FLOTANTE DE WHATSAPP
  // =========================================

  const whatsappFloat = document.querySelector(".whatsapp-float");

  if (whatsappFloat) {
    // Pequeño efecto al aparecer
    whatsappFloat.style.opacity = "0";
    whatsappFloat.style.transform = "scale(0.8)";

    setTimeout(() => {
      whatsappFloat.style.transition = "opacity 0.4s ease, transform 0.4s ease";

      whatsappFloat.style.opacity = "1";
      whatsappFloat.style.transform = "scale(1)";
    }, 300);
  }

  // =========================================
  // ANIMACIÓN AL HACER SCROLL
  // =========================================

  const elements = document.querySelectorAll(
    ".feature-card, .product-info, .g-card, .vasos-box, .step",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  elements.forEach((element) => {
    element.classList.add("scroll-hidden");

    observer.observe(element);
  });
});
