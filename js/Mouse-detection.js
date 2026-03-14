document.addEventListener('DOMContentLoaded', function () {
  const root = document.documentElement;
  let hasHover = false;

  try {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    hasHover = mq.matches;
  } catch {
    hasHover = !(navigator.maxTouchPoints > 0);
  }

  root.classList.add(hasHover ? 'supports-hover' : 'no-hover');

  console.log('Hover support detected:', hasHover);
});
