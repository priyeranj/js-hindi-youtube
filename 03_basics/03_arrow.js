const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to my website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Ruchi";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username="priyeranjan"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username="Ruchi"
//     console.log(this.username);
// }

const chai= () =>{
    let username="Ravi"
    console.log(this);
}

// chai()

// const addTwo =(num1,num2)=>{
//     return num1+num2
// }

// const addTwo =(num1,num2)=> (num1+num2)

const addTwo =  () =>({username:"Ranjan"})



console.log(addTwo(3,4));