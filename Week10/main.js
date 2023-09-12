// Higher Order Functions - Map | Filter | Reduce | ForEach

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newMix = mix.map((ele) => {
    return typeof ele === "string" ? ele : "";
}).reduce((a,b) => { 
    return a + b;
});

console.log(newMix);

let myString = "EElllzzzzzzzeroo";


myString.split("").filter((ele, index) => {
    return ele !== myString[index + 1];
}).join("");

console.log(myString); // "Elzro"


//  Array.flat();

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let myNew = numsAndStrings.filter(ele => typeof ele === "number").map(ele => -ele);

console.log(myNew);