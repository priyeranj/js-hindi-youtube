// Singleton
// Object.create


// object literals

const mySm = Symbol("key1");
const jsUser = {
    name:"Priyaranjan",
    "full name":"Pryranjan Kumar",
    [mySm]:"mykey1",
    age: 18,
    location: "Jaipur",
    email: "ranjan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySm]);

jsUser.email="ravi@yahoo.com";
// Object.freeze(jsUser);
jsUser.email="Ruchi@chatgpt.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());