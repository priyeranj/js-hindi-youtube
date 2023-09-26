// const tinderUser = new Object(); // singleton object
const tinderUser = {};//non-singleton object

tinderUser.id = "123xyz";
tinderUser.name="Rom";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstName:"Priyaranjan",
            lastName:"Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);

const obj1 ={1:"a", 2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 ={9:"c",8:"p"}

// const obj3 ={obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2,obj4)

const obj3={...obj1,...obj2}
// console.log(obj3);

//When we get values from database
const user = [
    {
        name: "Ruchi",
        isLoggedIn: false
    },
    {
        name: "Ruchi",
        isLoggedIn: false
    },
    {
        name: "Ruchi",
        isLoggedIn: false
    },
    {
        name: "Ruchi",
        isLoggedIn: false
    },

]

user[1].name
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));

