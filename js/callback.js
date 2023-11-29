'use strict';
console.log('callback.js file was loaded');

// setTimeout(fn, laikas ms)
// setInterval(fn, laikas ms)

console.log('1');
setTimeout(() => {
  console.log('2');
}, 2000);
console.log('3');

function getHeader(callback) {
  setTimeout(() => {
    console.log('<Header />');
    callback();
  }, 1500);
}
function getContent(callback) {
  setTimeout(() => {
    console.log('<Main Content />');
    callback();
  }, 500);
}
function getFooter() {
  setTimeout(() => {
    console.log('<Footer />');
  }, 2000);
}
// kvieciam funkcija eiles tvarka
// callback hell
getHeader(() => {
  getContent(() => {
    getFooter();
  });
});
