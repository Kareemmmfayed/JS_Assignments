// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let i = 0; i < mix.length; i++) {
//     if (mix[i] == 1) continue;

//     if (typeof mix[i] == "number") {
//         console.log(mix[i]);
//     }
//     else {
//         continue;
//     }
// }

// // Output
// 2
// 3
// 4



let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 1;

while (index < friends.length) {
    if (typeof friends[index] !== "string" || friends[index][0] === "A") {
        index++;
    }
    else{
        console.log(`${counter} => ${friends[index]}`);
        index++;
        counter++;
    }
}

// Output
"1 => Sayed"
"2 => Mahmoud"