// ------------------------------------------
// Part 1: Variables, Data Types, Conditionals
// ------------------------------------------

let userName = "Brandon";
let userAge = 20;
let isAdult = false;

if (userAge >= 18) {
  isAdult = true;
  console.log(`${userName} is an adult.`);
} else {
  isAdult = false;
  console.log(`${userName} is not an adult.`);
}

document.getElementById("output").textContent = isAdult
  ? `${userName} is an adult.`
  : `${userName} is not an adult.`;

// ------------------------------------------
// Part 2: Functions — Reusable Logic
// ------------------------------------------

// Function 1: Calculate total price including tax
function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}

console.log("Total with tax:", calculateTotal(100, 0.15));

// Function 2: Format a greeting message
function greetUser(name) {
  return `Hello, ${name}! Welcome back!`;
}

console.log(greetUser(userName));

// ------------------------------------------
// Part 3: Loops — Repetition and Iteration
// ------------------------------------------

// For loop: Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// While loop: Countdown from 5
let count = 5;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

// ------------------------------------------
// Part 4: DOM Manipulation
// ------------------------------------------

// 1) Toggle a message when clicking a button
const toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", () => {
  const output = document.getElementById("output");
  if (output.textContent.includes("Hello")) {
    output.textContent = "";
  } else {
    output.textContent = greetUser(userName);
  }
});

// 2) Add new list item dynamically
const addItemButton = document.getElementById("addItemButton");
const itemList = document.getElementById("itemList");

addItemButton.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${itemList.children.length + 1}`;
  itemList.appendChild(newItem);
});

// 3) Change text content dynamically — already done with toggle and output above.
