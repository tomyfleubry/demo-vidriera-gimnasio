const hero = document.querySelector('.hero');
const film = document.querySelector('#hero-film');
const control = document.querySelector('.film-control');
const word = document.querySelector('#hero-word');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const words = ['Training', 'Fuerza', 'Funcional', 'Resistencia'];
let index = 0;
let rotation;
let swap;
let paused = reducedMotion.matches;
let inView = true;

function rotateWord() {
  swap = word.animate(
    [{ transform: 'translateY(0)' }, { transform: 'translateY(-103%)' }],
    { duration: 305, easing: 'ease-in' },
  );
  swap.onfinish = () => {
    index = (index + 1) % words.length;
    word.textContent = words[index];
    swap = word.animate(
      [{ transform: 'translateY(103%)' }, { transform: 'translateY(0)' }],
      { duration: 390, easing: 'cubic-bezier(.17,.67,.23,1)' },
    );
  };
}

function updateHero() {
  clearInterval(rotation);
  swap?.cancel();
  control.dataset.paused = paused;
  control.setAttribute('aria-label', paused
    ? 'Reproducir video y texto de la portada'
    : 'Pausar video y texto de la portada');

  if (paused || !inView) {
    film.pause();
    return;
  }

  film.play().catch(() => {
    // Keep the poster visible where the browser blocks automatic playback.
  });
  if (!reducedMotion.matches) rotation = setInterval(rotateWord, 2700);
}

control.hidden = false;
control.addEventListener('click', () => {
  paused = !paused;
  updateHero();
});
reducedMotion.addEventListener('change', () => {
  paused = reducedMotion.matches;
  updateHero();
});
new IntersectionObserver(([entry]) => {
  if (inView === entry.isIntersecting) return;
  inView = entry.isIntersecting;
  updateHero();
}).observe(hero);
updateHero();

const photo = document.querySelector('#workout-photo');
document.querySelectorAll('.workout-catalog details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    photo.src = detail.dataset.image;
    photo.alt = detail.dataset.alt;
  });
});

const tour = document.querySelector('.tour-link');
const footer = document.querySelector('.footer');
new IntersectionObserver(([entry]) => {
  tour.toggleAttribute('data-out-of-way', entry.isIntersecting);
}, { threshold: .15 }).observe(footer);
