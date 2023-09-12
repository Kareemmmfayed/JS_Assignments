function getDetails(zName, zAge, zCountry) {
    function namePattern() {
        let index = zName.indexOf(" ");
        let name = zName.slice(0, index + 2);
        name = name.slice(0, -1) + name.slice(-1).toUpperCase();
        name += ".";
        return name;
    }
    function ageWithMessage() {
        let age = zAge.slice(0, 2);
        return "Your age is " + age;
    }
    function countryTwoLetters() {
        let country = zCountry.slice(0, 2).toUpperCase();
        return country;
    }
    function fullDetails() {
        console.log(`Hello ${namePattern()}, ${ageWithMessage()}, you live in ${countryTwoLetters()}`);
    }
    return fullDetails();
}

console.log(getDetails("john doe", "34 Is My Age", "canada")); // Hello Kareem F., Your age is 20, you live in EG



function specialMix(...args) {
    if (args.every(arg => typeof arg === "string")) {
        if (args.every(arg => arg.isalpha())) {
            console.log("All are strings");
        }
        else {
            let sum = 0;
            for (let arg of args) {
                let num = arg.replace(/\D/g, "");
                sum += Number(num);
            }
            return sum;
        }
    }
    else if (args.every(arg => typeof arg === "number")) {
        let result = args.reduce((a, b) => a + b);
        console.log(result);
    }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All are Strings

// Ok so I did my best apparently isalpha() doesn't exist in javascript and I don't know what to do so I'll just leave it for now.