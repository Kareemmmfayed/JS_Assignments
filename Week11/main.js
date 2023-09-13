
let member = {
    name: "kareem",
    age: 20,
    country: "Egypt",
    fullDetails: () => {
        console.log("My Name Is Kareem, My Age Is 20, I Live in Egypt");
    }
}

console.log(member.name);
console.log(member.age); 
console.log(member.country);
console.log(member.fullDetails());



// Method One
let objMethodOne = {}
objMethodOne.property = "kareem";

console.log(objMethodOne.property);

// Method Two
let objMethodTwo = new Object({});
objMethodTwo.property = "kareem";

console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = Object.create({});
objMethodThree.property = "kareem";

console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour = Object.assign(objMethodOne);
objMethodFour.property = "kareem";

console.log(objMethodFour.property); // "Method Four"

/////////////////////////////////////////////////////

let a = 1;

let threeNums = {
    b: 2,
    c: 3,
    d: 4,
};

let twoNums = {
    e: 5,
    f: 6,
};

let finalObject = Object.assign(threeNums, twoNums, {a: a})

console.log(finalObject);

/*
a: 1
b: 2
c: 3
d: 4
e: 5
f: 6
*/



/////////////////////////////////////////////////////////////////////////////////////////////



// The Object To Work With
let myFavGames = {
    "Trinity Universe": {
        publisher: "NIS America",
        price: 40,
    },
    "Titan Quest": {
        publisher: "THQ",
        bestThree: {
        one: "Immortal Throne",
        two: "Ragnarök",
        three: "Atlantis",
        },
        price: 50,
    },
    YS: {
        publisher: "Falcom",
        bestThree: {
        one: "Oath in Felghana",
        two: "Ark Of Napishtim",
        three: "origin",
        },
        price: 40,
    },
};

let games = Object.values(myFavGames);

for (let i = 0; i < games.length; i++) {
    let game = games[i];
    let gameInfo = Object.values(game);
    console.log(`The Game Name Is ${gameInfo[0]}`);
    console.log(`The Publisher Is ${gameInfo[1]}`);
    console.log(`The Price Is ${gameInfo[3]}`);

    if (game.hasOwnProperty("bestThree")) {
        console.log("- Game Has Releases");
        let releases = Object.values(game.bestThree);
        console.log(`First => ${releases[0]}`);
        console.log(`Second => ${releases[1]}`);
        console.log(`Third => ${releases[2]}`);
    }
    console.log("#".repeat(20));
}

// The Output 

// The Game Name Is NIS America
// The Publisher Is 40
// The Price Is undefined
// ####################
// The Game Name Is THQ
// The Publisher Is 50
// The Price Is undefined
// - Game Has Releases
// First => Immortal Throne
// Second => Ragnarök
// Third => Atlantis
// ####################
// The Game Name Is Falcom
// The Publisher Is 40
// The Price Is undefined
// - Game Has Releases
// First => Oath in Felghana
// Second => Ark Of Napishtim
// Third => origin
// ####################
