import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const tripStart = document.querySelector('#check-in');
const tripEnd = document.querySelector('#check-out');

const options = {
  enableTime: true,
  // time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure(`Please choose a date in the future`);
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(tripStart, options);
flatpickr(tripEnd, options);

const checkBox = document.querySelector('.booking__form--checkbox-input');
const infoInput = document.querySelector('.booking-info__input');
const bookingInfoBtn = document.querySelector('.booking-info__button');
console.log(checkBox);
console.log(bookingInfoBtn);

checkBox.addEventListener('input', onCheckInput);

function onCheckInput(e) {
  if (checkBox.checked === true) {
    return infoInput.classList.remove('visually-hidden');
  }
  infoInput.classList.add('visually-hidden');
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.target.value);
}

// bookingInfoBtn.addEventListener('click', onBookingBtnClick);

// function onBookingBtnClick(e) {
//   // array.forEach(element => {

//   // });
//   return infoInput.classList.remove('visually-hidden');
// }
