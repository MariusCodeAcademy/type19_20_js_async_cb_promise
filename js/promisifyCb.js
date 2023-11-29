'use strict';
console.log('promisifyCb.js file was loaded');

function getHeader() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('<Header />');
      resolve();
    }, 1500);
  });
}
function getContent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('<Main Content />');
      resolve();
    }, 500);
  });
}
function getFooter() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('<Footer />');
      res();
    }, 2000);
  });
}

console.log('pries gaunant psl dalis');
getHeader()
  .then(() => {
    console.log('gavom header');
    return getContent();
  })
  .then(() => {
    console.log('gavom content');
    return getFooter();
  })
  .then(() => {
    console.log('gavom footer');
  });
console.log('PO gaunant psl dalis');

// kvieciam funkcija eiles tvarka
// callback hell
// getHeader(() => {
//   getContent(() => {
//     getFooter();
//   });
// });
