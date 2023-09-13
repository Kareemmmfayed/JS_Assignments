// DOM

let myEle = document.querySelectorAll("div");
let myEle1 = document.querySelectorAll("#kareem");
let myEle2 = document.querySelectorAll(".element");
let myEle3 = document.querySelectorAll("div[name = 'js']");
let myEle4 = document.querySelector("div");
let myEle5 = document.querySelector("#kareem");
let myEle6 = document.querySelector(".element");
let myEle7 = document.querySelectorA("div[name = 'js']");
let myEle8 = document.getElementById("kareem");
let myEle9 = document.getElementsByClassName("element");
let myEle10 = document.getElementsByName("js");
let myEle11 = document.getElementsByTagName("div");
let myEle12 = document.getElementsByTagNameNS("div");


// Set Attribute 

let myImgs = document.querySelectors("div img");


myImgs.forEach(ele => {
    ele.setAttribute('src', 'https://elzero.org/wp-content/themes/elzero/imgs/logo.png');
    ele.setAttribute('alt', 'Picture');
});

// getAttribute, Children, appendChild, addEventListener, CloneNode, Local storage, session storage


const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    button.style.backgroundColor = "red";
    localStorage.setItem("buttonColor", "red");
});

const color = localStorage.getItem("buttonColor");
console.log(color); // Prints "red"
