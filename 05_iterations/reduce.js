//Reduce

const arr = [5,1,3,2,6];

//sum or max

// function sum(arr){
//     let sum =0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum+arr[i];
        
//     }
//     return sum;
// }

// console.log (sum(arr));

// const output =  arr.reduce(function(acc,curr) {
//     acc=acc+curr;
//     return acc;
// },0);

// console.log(output);

// function findMax(arr){
//     let max =0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>max){
//             max=arr[i];
//         }
        
//     }
//     return max;
// }

const outputMax = arr.reduce((max,curr)=>{
    if(curr>max){
        max=curr
    }
    return max;
},0)

// console.log(outputMax);

const users = [
    {firstName:"akshay ", lastName:"saini",age:26},
    {firstName:"donald ", lastName:"trump",age:75},
    {firstName:"elon ", lastName:"musk",age:50},
    {firstName:"deepika ", lastName:"padukon",age:50}
]

//list of full name
//["akshay saini","donald trump"........]

// const outputName = users.map((x)=>x.firstName+x.lastName)
// console.log(outputName);

// const output = users.reduce(function(acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age]=++acc[curr.age];
//     }else{
//         acc[curr.age]=1;
//     }
//     return acc;
// },{})

// const ageLessThirty = users.filter((item)=>{
//     if(item.age<30){
//         return item
//     }
// }).map((x)=>x.firstName+x.lastName)

const FirstName = users.reduce((acc,curr)=>{
    if(curr.age<30) {
        acc=curr.firstName+curr.lastName
    }
    return acc;
},{})

console.log(FirstName);