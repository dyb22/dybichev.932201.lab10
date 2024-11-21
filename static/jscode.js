 // Фокус 1: Занавес
const curtain = document.getElementById('curtain');
curtain.addEventListener('click', () => {
  curtain.classList.add('open');
  document.querySelector('.lamp').style.display = 'block';
});

// Фокус 2: Лампа
const lamp = document.getElementById('lamp');
const light = document.getElementById('light');
const switchButton = document.getElementById('switch');

let isLightOn = false;

lamp.addEventListener('mousedown', () => {
  switchButton.style.transform = 'translate(-50%, 30px)';
});

lamp.addEventListener('mouseup', () => {
  switchButton.style.transform = 'translate(-50%, 0)';
  isLightOn = !isLightOn;
  light.style.display = isLightOn ? 'block' : 'none';
});

// Фокус 3: Кролик и его друзья
const rabbit = document.getElementById('rabbit');
const dove = document.getElementById('dove');

rabbit.addEventListener('click', () => {
  rabbit.style.transform = 'translateY(100px)';
  setTimeout(() => {
    rabbit.style.display = 'none';
    dove.style.display = 'block';
    dove.style.transform = 'translateY(-100px)';
  }, 500);
});

dove.addEventListener('click', () => {
  dove.style.transform = 'translateY(100px)';
  setTimeout(() => {
    dove.style.display = 'none';
    rabbit.style.display = 'block';
    rabbit.style.transform = 'translateY(0)';
  }, 500);
});
