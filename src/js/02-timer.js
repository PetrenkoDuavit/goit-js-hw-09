import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.getElementById('datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    if (selectedDates < Date.now()) {
      startBtnEl.disabled = true;
      alert('Please choose a date in the future');
    } else {
      startBtnEl.disabled = false;
    }
  },
};
flatpickr(input, options);

startBtnEl.addEventListener('click', onClose);

function onClose() {
  let deltaTime = new Date(input.value) - Date.now();
  const intervalId = setInterval(() => {
    deltaTime -= 1000;
    if (deltaTime < 1000) {
      clearInterval(intervalId);
      updateTimer();
      return;
    }
    const date = convertMs(deltaTime);
    updateTimer(date);
  }, 1000);
}
function updateTimer({ days = 0, hours = 0, minutes = 0, seconds = 0 } = {}) {
  daysEl.textContent = padStart(days);
  hoursEl.textContent = padStart(hours);
  minutesEl.textContent = padStart(minutes);
  secondsEl.textContent = padStart(seconds);
}

function padStart(value) {
  return value.toString().padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
