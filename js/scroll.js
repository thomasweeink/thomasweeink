document.addEventListener("DOMContentLoaded", () => {
  // --- Create Scroll Indicator ---
  const scrollDiv = document.createElement("div");
  scrollDiv.className = "scroll-indicator";

  const text = document.createElement("span");
  text.classList.add("scroll-text");
  text.textContent = "scroll";
  scrollDiv.appendChild(text);

  const arrow = document.createElement("span");
  arrow.classList.add("arrow");
  arrow.textContent = "↓";
  scrollDiv.appendChild(arrow);

  document.body.appendChild(scrollDiv);

  // --- Background ghost text ---
  const bgText = document.querySelector(".background-text");
  const baseTransform = "translate(-50%, -50%)"; // baseline position

  // --- Scroll Effects ---
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Fade out scroll indicator
    const fadeStart = 0;
    const fadeEnd = 200;
    let opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
    opacity = Math.max(0, Math.min(1, opacity));
    scrollDiv.style.opacity = opacity;

    // Move and fade ghost text
    if (bgText) {
      const moveSpeed = -0.7; // moves slowly to the left
      const moveX = scrollY * moveSpeed;
      bgText.style.transform = `${baseTransform} translateX(${moveX}px)`;
    }
  });
});
