'use strict';
console.log('destruct.js file was loaded');

// destruct, spread

function getUser() {
  let mas = ['James', 'London', '45'];
  return mas;
}

// const rez = getUser();
// const username = rez[0];
// const town = rez[1];

// array destruct
// const [username, , age] = getUser();

// console.log('username ===', username);
// console.log('town ===', town);

// let sent = `Mr ${username} is from ${5} and is ${age} year old`;
// console.log('sent ===', sent);

// objektu destruct

function getPerson() {
  let p1 = {
    name: 'Mike',
    town: 'Kaunas',
    age: 25,
  };
  return p1;
}

const personObj = getPerson();
console.log('personObj ===', personObj);

// const name = personObj.name;
// const town = personObj.town;
// const age = personObj.age;

// object destrukturizacija
const { name, town, age } = personObj;

let sentObj = `Mr ${name} is from ${town} and is ${age} year old`;
console.log('sentObj ===', sentObj);

// spread

const nums = [1, 2, 3];
const nums2 = [4, 4, 6];
// const max = Math.max(1, 2, 3);
const max = Math.max(...nums);
console.log('max ===', max);

const sujungtasArr = [0, ...nums, 10, ...nums2, 55];
console.log('sujungtasArr ===', sujungtasArr);
const nums2copy = [...nums2];

let p5 = {
  name: 'Mike',
  town: 'Kaunas',
  age: 25,
};
// sukurti nauja objekta su visom p5 reiksmem plius hasCar reiksme

let p5Copy = { ...p5, hasCar: true };
// p5Copy.hasCar = true;
console.log('p5Copy ===', p5Copy);
