'use strict';
console.log('promise.js file was loaded');

// Promise status gali buti, Pending, Resolve, Reject

// Pirksim lektuvo bilietus

// galimi 3 varijantai
// pirkimo rezultatas
// vygdomas - Pending
// pavyko - Resolve - fulfilled
// nepavyko - Reject - rejected

// new Promise((resolve, reject) => {})

let pirkimoPazadas = new Promise((resolve, reject) => {
  // imituojam serverio apdorojimo laika 2 sek
  setTimeout(() => {
    // imituojam galima klaida
    let error = false;

    if (error === false) {
      // console.log('pirkimas sekmingas');
      let price = 999;
      resolve(price);
    } else {
      // console.warn('nepavyko, ivyko klaida');
      reject('bankas atmete operacija');
    }
  }, 2000);
});

console.log('pirkimoPazadas ===', pirkimoPazadas);
// darbas su promiso reikmem vyksta su .then .catch .finnally

pirkimoPazadas
  .then((price) => {
    console.log('pirkimas sekmingas, kaina', price);
    return price.toFixed(2);
  })
  .then((antrasThen) => {
    throw new Error('klaida antrame then');
    console.log('antrasThen ===', antrasThen);
  })
  .catch((errorMsg) => {
    console.warn(errorMsg);
  });
