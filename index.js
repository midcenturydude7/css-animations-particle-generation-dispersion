import { random, range } from "lodash";

const btn = document.querySelector(".particleButton");

const FADE_DURATION = 1000;
const MAGNITUDE = 40;

btn.addEventListener("click", () => {
  btn.classList.toggle("liked");

  const isLiked = btn.classList.contains("liked");
  if (!isLiked) return;

  const particles = [];
  range(5).forEach(() => {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    const x = random(-MAGNITUDE, MAGNITUDE);
    const y = random(-MAGNITUDE, MAGNITUDE);

    particle.style.transform = `translate(${x}px, ${y}px)`;
    particle.style.setProperty("--fade-duration", FADE_DURATION + "ms");

    btn.appendChild(particle);
    particles.push(particle);
  });

  window.setTimeout(() => {
    particles.forEach((particle) => particle.remove());
  }, FADE_DURATION + 200 /* extra buffer */);
});
