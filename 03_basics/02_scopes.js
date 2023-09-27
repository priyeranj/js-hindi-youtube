var c = 300;
let a = 900;
if(true){
    let a =10
    const b =20
    console.log("INNER: ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website ="youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username ="hitesh"
    if(username==="hitesh")
    {
        const website =" youtube"
        // console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);



// ++++++++++++Intresting++++++++++++++++++

console.log(addone(7));
function addone(num){
    return num+1;
}


// addTwo(9)
const addTwo = function(num){
    return num+2;
}

