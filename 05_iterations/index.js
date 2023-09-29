const myArr = [5,1,3,2,6]

//Double - [10,2,6,4,12]

//Triple - [15,3,9,6,18]

//Binary - ["101","1","11","10","110"]

// function double(x){
//     return x*2;
// }

// function triple(x){
//     return x*3;
// }


// const output = myArr.map((x)=>{
//     return x.toString(2);
// });
// console.log(output);


//Filter 

const arr = [5,1,3,2,6]

function isEven(x){
    return x%2===0;
}
const output = arr.filter(isEven);

const greater = arr.filter((x)=>x>4);

console.log(greater);

