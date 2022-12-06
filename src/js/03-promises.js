// Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів, скільки ввели в поле amount. Під час кожного виклику передай їй номер промісу (position), що створюється, і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).

import Notiflix from 'notiflix';

const delay = document.querySelector('.delay');
const step = document.querySelector('.step');
const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitClick);

// Функція для клика

function onSubmitClick(event) {
  event.preventDefault();
  // Пишемо значення інпутов 

  const delayValue = Number(event.currentTarget.elements.delay.value);
  const stepValue = Number(event.currentTarget.elements.step.value);
  const amountValue = Number(event.currentTarget.elements.amount.value);

  // створюємо цикл

  for (let i = 0; i < amountValue; i++) {
    const stepDelay = i * stepValue + delayValue;
    createPromise(i + 1, stepDelay);
  }
}

// створюємо проміс

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  // повертаємо повідомлення о результаті проміса

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
}
