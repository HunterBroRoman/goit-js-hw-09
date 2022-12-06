const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

let intervalID = null;

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick(event) {
  intervalID = setInterval(changeBodyColor, 1000);
  function changeBodyColor() {
    bodyEl.style.backgroundColor = getRandomHexColor();
    event.target.disabled = true;
    stopBtn.disabled = false;
  }
}

stopBtn.addEventListener('click', onStopBtnClick);

function onStopBtnClick(event) {
  clearInterval(intervalID);
  event.target.disabled = true;
  startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

