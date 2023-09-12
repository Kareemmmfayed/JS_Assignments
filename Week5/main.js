// ternary operator

var age = 20;

age > 40 ? console.log("old") : age < 40 && age > 30 ? console.log("mid") : age < 30 ? console.log("me") : console.log("unknowen");

// Nullish coalescing operator

// any false value

console.log(`The price is ${null || 200}`); // 200
console.log(`The price is ${0 || 200}`); // 200
console.log(`The price is ${false || 200}`); // 200
console.log(`The price is ${undefined || 200}`); // 200


// only null and undefined

console.log(`The price is ${null ?? 200}`); // 200
console.log(`The price is ${0 ?? 200}`); // 0
console.log(`The price is ${false ?? 200}`); // false
console.log(`The price is ${undefined ?? 200}`); // 200


// If Condition Challenge


let a = 10;

// if (a < 10) {
//     console.log(10);
// } else if (a >= 10 && a <= 40) {
//     console.log("10 To 40");
// } else if (a > 40) {
//     console.log("> 40");
// } else {
//     console.log("Unknown");
// }

a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 to 40") : a > 40 ? console.log("> 40") : console.log("unknown"); 

// Write Previous Condition With Ternary If Syntax


// Switch statement

let day = "   friday  ";

day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

switch (day) {
    case "Saturday":
    case "Friday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;

    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;

    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;

    default :
        console.log("It's Not A Valid Day");
}
