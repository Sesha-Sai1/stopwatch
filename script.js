const items = document.querySelector(".Stopwatch-format h4");
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
function handleStart() {
  timer = setInterval(updateDisplay, 1000);
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  items.textContent =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);
}

function handleStop() {
  clearInterval(timer);
  timer = null;
}

function handleReset() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  items.textContent = "00:00:00";
}
