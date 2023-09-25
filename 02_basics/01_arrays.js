// Arrays

const myArr = [0,1,2,3,5,8];
// const heroes = ["Shaktiman","nagraaj"];

// const myArr2 = new Array(1,2,3,4);
// console.log(myArr2[1]);

// Array methods

// myArr.push(6)
// myArr.push(9)
// console.log(myArr);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(8));

const newArr = myArr.join();

// console.log(myArr);
// console.log("myArr is of type " + typeof myArr);
// console.log(newArr);
// console.log("newArr is of type " + typeof newArr);



// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C ", myArr)

//Splice changes the orginal array permanelty but slice just make a copy of of the portion mentioned