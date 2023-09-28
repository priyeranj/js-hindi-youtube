const userEmail = function(){}

if(userEmail){
    console.log("Got user email");
}else{
    console.log("dont have user email");
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values
    // "0",'false'," ",[],{},function(){}


// if(userEmail.length===0){
//     console.log("Array is empty");
// }

const emptyObj={}

// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }

//Notes

// false==0,false=='',0=='' gives output as true


// Nullish Coalescing Operator(??): null undefined

let val1;
// val1 =5??10
// val1 =null??10
// val1 =undefined??15

val1 = null??19??20

console.log(val1);


//Ternary Operator

//condition ? true:false

const iceTeaPrice = 100;
iceTeaPrice >=80 ? console.log("less than 80"): console.log("more than 80");

