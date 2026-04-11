// DOM --> Document Object Model
// let container = document.getElementsByClassName("container");
// let heading = document.getElementById("heading");
// let paragraph = document.getElementsByTagName("p");




// using query selector

let heading = document.querySelector("#heading");
let paragraph = document.querySelector("p");
let container = document.querySelectorAll(".container");

console.log(container);
console.log(heading);
console.log(paragraph);


// heading.classList.add("heading");
// heading.classList.remove("heading");
// heading.classList.toggle("heading");


// elements methods

// append()
// remove()
// createElement()

let ul = document.querySelector(".fruits");

let li = document.createElement("li");
li.textContent = "Orange";

ul.append(li);

// after --> after any element
// before --> before any element

// Event Listeners

let button = document.querySelector(".submit");
let input = document.querySelector("input");
let todo_ul = document.querySelector(".todo");

// button.addEventListener('click' , () => {
//     console.log("Button is clicked...");
// });