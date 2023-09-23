const accountId = 144553;
let accountEmail = "priyeranjan.moscow@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";

let accountState;

// accountId = 2;

accountEmail = "hc@hc.com";
accountPassword =  "2121345";
accountCity = "Pune";

/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountEmail, accountPassword, accountCity, accountState]);