// Fade-in on scroll
const cards = document.querySelectorAll('.project-card');

function checkVisibility() {
  const screenHeight = window.innerHeight;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if(top < screenHeight - 100) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
