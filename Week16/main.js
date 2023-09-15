// regex

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let rx = /\w?\w?\d*:/ig;

console.log(ip.match(rx));




let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let regex0 = /Os1?0?0?O/g;

console.log(specialNames.match(regex0));
// Output
// ['Os10O', 'OsO', 'Os100O']


let phone = "+(995)-123 (4567)";

let regex1 = /\+\(\d{3}\)-\d{3} \(\d{4}\)/g;

console.log(regex1.test(phone));


let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}\/? ?-? ?\d{2}\/? ?-? ?\d{2}/;

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"