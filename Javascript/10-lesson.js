/**
 * 1. DOM Events
 *
 * Mouse events - click, mouseover, mouseout, mouseup, mousedown
 * Keyboard events - keydown, keyup
 * Document events - DOMContentLoaded
 */
// document.body.addEventListener("keydown", alert("Keydown"));

/**
 * 1.1 Event handlers - on<event nome>
 */
function showDivMessage() {
  alert("First div clicked");
}

// firstDiv.onclick = showDivMessage(); // bu xato
// firstDiv.onclick = showDivMessage;

/**
 * 1.2 addEventListener()
 */
let counter = 0;

function firstDivEvent(event) {
  counter++;
  if (counter % 2 === 0) {
    this.style.backgroundColor = "red";
  } else {
    this.style.backgroundColor = "yellow";
  }
}

const firstDiv = document.getElementById("firstDiv");

firstDiv.addEventListener("click", firstDivEvent);

function removeEventFromDiv(event) {
  firstDiv.removeEventListener("click", firstDivEvent);
}

/**
 * 2. Bubbling and Capturing
 * Bubbling - eng pastdagi child elementdan to eng yuqoridagi parent elementga oqim
 * Capturing - balanddagi parent elementdan to eng pastdagi child elementga oqim
 * Target - Bosilgan elementga yetib kelgandagi davr
 */
const parentDiv = document.getElementById("parent");
const childP = document.getElementById("child");

parentDiv.addEventListener("click", function (event) {
  alert("Parent clicked");
});

childP.addEventListener(
  "click",
  function (event) {
    //   event.stopPropagation();
    alert("Child clicked");
  },
  { capture: true }
);

/**
 * 3. Event Delegation
 */
const parent2 = document.getElementById("parent2");
const child2 = document.getElementById("child2");
const h1Child = document.getElementById("h1-child");
const childButton = document.getElementById("childButton");

// parent2.addEventListener("click", function (event) {
//   alert("Parent 2");
// });

// child2.addEventListener("click", function (event) {
//   alert("Child 2");
// });

// h1Child.addEventListener("click", function (event) {
//   alert("H1Child 2");
// });

// childButton.addEventListener("click", function (event) {
//   alert("Child button");
// });

parent2.addEventListener("click", function (event) {
  const targetElement = event.target;

  if (targetElement.tagName === "DIV") {
    targetElement.style.backgroundColor = "yellow";
  } else if (targetElement.tagName === "P") {
    targetElement.innerHTML = "New P element ";
    alert("P clicked");
  } else if (targetElement.tagName === "H1") {
    targetElement.style.color = "green";
    alert("H1 clicked");
  } else if (targetElement.tagName === "BUTTON") {
    alert("Button clicked");
  }

  //   console.log("Target: ", event.target);
  //   console.log("this: ", this);
});

/**
 * preventDefault()
 */
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
});
