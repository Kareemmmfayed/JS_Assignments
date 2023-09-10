// First 

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100

console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// Second

let arr = [1, 6, 3, 2];

let randomNum = Math.floor(Math.random() * arr.length);

console.log(arr[randomNum]); // 1 || 6 || 3 || 2

// Third

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.toLowerCase().startsWith(letterE)); // True
console.log(word.toUpperCase().endsWith(letterO)); // True
