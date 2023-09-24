const name ="hitesh"
const repoCount =50

// console.log(name+repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const str1 = new String('Ranjanloves-Ruchi');

// console.log(str1[0]);
// console.log(str1.__proto__);
// console.log(str1.toUpperCase());
// console.log(str1.length);
// console.log(str1.charAt(2));
console.log(str1.indexOf('j'));

const newString = str1.substring(0,4);
// console.log(newString);

const anotherString = str1.slice(-5,4);
// console.log(anotherString);

const newStringOne =  "    hitesh    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://ranjan.com/ranjan%20kumar";

console.log(url.replace('%20','-'));

console.log(url.includes('ruchi'));
