// Date Object 

let newDate = new Date();

let myBirthDay = new Date("2002-10-09");

let today = newDate - myBirthDay;

console.log(`${today / 1000} seconds`);
console.log(`${today /1000 / 60} minutes`);
console.log(`${today /1000 /60 / 60} hours`);
console.log(`${today /1000 /60 / 60 / 24} days`);
console.log(`${today /1000 /60 / 60 / 24 / 30} months`);
console.log(`${today /1000 /60 / 60 / 24 / 30 / 12} years`);


// Needed Output

"1247939400 Seconds"
"20798990 Minutes"
"346650 Hours"
"14444 Days"
"481 Months"
"40 Years"




