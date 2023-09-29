const myNums = [1,2,3,4];

// const myTotal = myNums.reduce(function (acc,currVal){
//     console.log(`acc: ${acc} and currval: ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce((acc,currVal)=>acc+currVal,0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science",
        price:12999
    },
    {
        itemName:"py",
        price:900
    }
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);