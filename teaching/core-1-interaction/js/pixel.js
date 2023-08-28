const button = document.querySelector('.js-pixel-button');

const hex = [
  "#FF5555", // Bright Red
  "#FFA533", // Bright Orange
  "#FFFF66", // Bright Yellow
  "#55FF55", // Bright Green
  "#5555FF", // Bright Blue
  "#7D26CD", // Bright Indigo
  "#BE29E4"  // Bright Violet
];

let interval;

function createPixel() {
  const pixel = document.createElement('span');
  pixel.className = 'pixel';
  pixel.style.left = `${Math.random() * 100}%`;
  pixel.style.top = `${Math.random() * 100}%`;
  pixel.style.color = hex[Math.floor(Math.random() * hex.length)];
  pixel.innerText = "*";
  document.body.appendChild(pixel);
}

function fillPage() {
  const totalPixels = window.innerWidth * window.innerHeight;
  let pixelsCreated = 0;

  interval = setInterval(() => {
    createPixel();
    pixelsCreated++;

    if (pixelsCreated >= totalPixels) {
      clearInterval(interval);
    }
  }, 25);
}

function clearPage() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.remove();
  });
}

function togglePixelButton() {
  if (button.classList.contains('active')) {
    button.classList.remove('active');
    clearPage();
    clearInterval(interval);
  } else {
    button.classList.add('active');
    fillPage();
  }
}

button.addEventListener('click', () => {
  togglePixelButton();
});
