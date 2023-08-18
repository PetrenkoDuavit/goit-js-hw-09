const bodyEl = document.body;
const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');

startBtnEl.addEventListener('click', getRandomColor);
stopBtnEl.addEventListener('click', stopGenerate);
let intervalId = null;

function getRandomColor() {
  startBtnEl.disabled = true;
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function stopGenerate() {
  startBtnEl.disabled = false;
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
