// Animacja pojawiania się opinii
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.opinia').forEach((el, i) => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = 'opacity 0.7s cubic-bezier(.77,0,.18,1)';
      el.style.opacity = 1;
    }, 700 + i * 350);
  });

  // Efekt wybuchu bomby w showcase
  const bomb = document.querySelector('.showcase-animation');
  if (bomb) {
    bomb.addEventListener('click', () => {
      bomb.classList.add('explode');
      setTimeout(() => bomb.classList.remove('explode'), 900);
    });
  }

  // Smooth scroll do cennika
  document.querySelectorAll('a[href^="#cennik"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#cennik').scrollIntoView({ behavior: 'smooth' });
    });
  });
});

// CSS dla efektu wybuchu bomby (dodawany dynamicznie)
const style = document.createElement('style');
style.innerHTML = `
.showcase-animation.explode {
  animation: bombExplode 0.9s cubic-bezier(.77,0,.18,1) both;
  box-shadow: 0 0 120px 40px #ff2d55cc, 0 0 0 0 #ff2d55;
}
@keyframes bombExplode {
  0% { transform: scale(1); }
  60% { transform: scale(1.4) rotate(10deg); }
  80% { transform: scale(0.7) rotate(-10deg); }
  100% { transform: scale(1); }
}`;
document.head.appendChild(style);
