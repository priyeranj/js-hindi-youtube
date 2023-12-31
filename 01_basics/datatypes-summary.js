// Primitive 

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
//console.log(typeof score);

const scoreValue = 100.3;
//console.log(typeof scoreValue);

const isLoggedIn = false;
//console.log(typeof isLoggedIn);

const outsideTemp = null;
//console.log(typeof outsideTemp);

let userEmail;
//console.log(typeof userEmail);

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(anotherId);


// Reference (Non primitive)

// Array,Objects, Functions

const heroes = ["Shaktiman","naagraj","doga"]

let myObj = {
    name :"hitesh",
    age: 22,
}
// console.log(typeof myObj);

const myFunction = function(){
    console.log("Hello World");
}
// console.log(typeof myFunction);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudarydotcom";

let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email:"ranjan@google.com",
    name:"ranjan"
}

let userTwo = userOne;
userTwo.email="ravi@google.com";

console.log(userOne.email);
console.log(userTwo.email);