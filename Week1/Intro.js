// First 

document.write("<h1>Kareem Fayed</h1>");
document.querySelector("h1").style.color = "red";

// Second

console.log("%cKareem %cFeyed", "color: red; font-size: 42px", "color: green; font-size: 42px");

// Third 

console.group("Group1");
console.log("one");
console.log("two");
console.group("chile");
console.log("one");
console.log("two");
console.groupEnd();
console.groupEnd();
console.group("Group2");
console.log("one");
console.log("two");
console.groupEnd();

// Fourth

console.table(["kareem", "fayed"]);

