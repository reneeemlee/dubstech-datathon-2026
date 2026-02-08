// Minimal motion: progressive reveal
const hero = document.querySelector(".hero");
hero.style.opacity = 0;

window.onload = () => {
  hero.style.transition = "opacity 1s ease";
  hero.style.opacity = 1;
};
