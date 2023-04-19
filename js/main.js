'use strict'

// Declarar variables con los elementos del HTML

const inputElement = document.querySelector('.js-input');
const btn = document.querySelector('.js-btn');
const textClue = document.querySelector('.js-clue');
const textCount = document.querySelector('.js-count');
const photo = document.querySelector('.js-photo');
const number = getRandomNumber(100);
let count = 0;

//Función número aleatorio

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
};

// Función modificar texto pistas

function insertClue(text) {
  textClue.innerHTML = text
};


// Función comparar nº aleatorio y nº usuaria

function compareNumbers() {
  const inputValue = parseInt(inputElement.value);
  console.log(number);
  if (inputElement.value.length === 0) {
    insertClue('Debes introducir un número');
    photo.src = 'https://gifs.eco.br/wp-content/uploads/2022/07/gifs-de-simbolos-matematicos-15.gif';
  } else if (inputValue === number) {
    insertClue('Has ganado campeona!! 🎉');
    photo.src = 'https://media.tenor.com/EW0mYzsR4_AAAAAC/si-toma.gif';
  } else if (inputValue > 100 || inputValue < 1) {
    insertClue('El número debe estar entre 1 y 100');
    photo.src = 'https://media.tenor.com/ibWRm2mBxCkAAAAd/doubt-yeah.gif';
    counter()
  } else if (inputValue > number) {
    insertClue('Demasiado alto ⬇️');
    photo.src = 'https://media.tenor.com/-LdTXG8cwfgAAAAd/escaleras-felicidad.gif';
    counter()
  } else if (inputValue < number) {
    insertClue('Demasiado bajo ⬆️');
    photo.src = 'https://64.media.tumblr.com/tumblr_m2uxf5nRxO1qdlh1io1_250.gifv';
    counter()
  }
}

// Función contador

function counter() {
  count++
  textCount.innerHTML = `Número de intentos: ${count}`
}


// Función manejadora del evento

function handleRandomNumber(event) {
  event.preventDefault()
  compareNumbers()
}

// Evento: click en botón

btn.addEventListener('click', handleRandomNumber)
