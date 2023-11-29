'use strict';
console.log('posts.js file was loaded');

// taikomes
const appEl = document.getElementById('app');

const posts = [
  { title: 'Post One', body: 'This is post One body' },
  { title: 'Post Two', body: 'This is post Two body' },
];

// functions
function printPosts() {
  appEl.innerHTML = '';
  // sugeneruoti li elmenentus su antraste title, ir textu body
  posts.forEach((pObj) => {
    const liEl = document.createElement('li');
    liEl.innerHTML = `<strong>${pObj.title}:</strong> ${pObj.body} `;
    appEl.append(liEl);
  });
}

// create post funkcija kuti ideda nauja posta i pos masyva
function createPost(newPostObj) {
  // grazinti promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(newPostObj);
      console.log('created Post');
      resolve();
    }, 700);
  });
}

// gauti postus imituojam kad truka 1.5sek juos gauti
function getPosts() {
  setTimeout(() => {
    printPosts();
  }, 500);
}

// app eiga
const thirdPost = { title: 'Post Three', body: 'This is post Three body' };

// problema neatsispausdina paskutinis post
// createPost(thirdPost);
// getPosts();

/// callback sprendimas
// createPost(thirdPost, getPosts);

/// promisify sprendimas
// panaudoti promise
// createPost(thirdPost).then(() => {
//   getPosts();
// });
createPost(thirdPost).then(() => getPosts());

let str1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let value = '    James     ';
  }, 500);
});

// gauti panaudojant str1 reikmme value
// isconsolinti ja
// grazinti i kita .then ja be tarpeliu sonuose
// grazinti i kita .then ja diziosiom raidem
