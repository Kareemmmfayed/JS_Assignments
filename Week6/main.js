// Arrays and methods

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

myFriends.pop()

console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

myFriends.length = num;

console.log(myFriends); // ["Ahmed", "Elham", "Osama"];


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

arrTwo.splice(2, 0, ...arrOne);

finalArr = arrTwo.reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO



let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

haystack.includes(needle) ? console.log("found") : console.log("not found");

haystack.indexOf("JS") !== -1 ? console.log("found") : console.log("not found");

haystack.lastIndexOf("JS") !== -1 ? console.log("found") : console.log("not found");




let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr2[2] + arr1[2] + arr2[3];

console.log(allArrs.toLowerCase()); // fxy