// Map VS WeakMap

let setOfNumbers = new Set([10]);

setOfNumbers.add(20).add(2);

console.log(setOfNumbers);

let myArr = [...setOfNumbers];

console.log(myArr[myArr.length - 1]);

// Needed Output
// Set(3) {10, 20, 2}
// 2

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let mySet = new Set(myFriends.sort());

console.log(mySet);

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']


let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let entries = Object.entries(myInfo);

let myMap = new Map(entries);

console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true





let theNumber = 100020003000;

let myNewSet = new Set(String(theNumber));

myNewSet.delete("0");

console.log(Number([...myNewSet].join("")));

// Needed Output
//123


let theName = "Kareem";

// One 

let result = theName.split("");
console.log(result);

// Two

let result1 = Array.from(theName);
console.log(result1);

// Three

let result2 = [...theName];
console.log(result2); 

// Four

let result3 = [];
for (let i = 0; i < theName.length; i++) {
    let char = theName.charAt(i); 
    result3.push(char); 
}

console.log(result3); 

// Needed Output
// ['K', 'a', 'r', 'e', 'e', 'm']



