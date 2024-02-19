/**
 * 1. DOM - Document Object Model
 */

/**
 * html - document.documentElement
 * body  - document.body
 * head - document.head
 * Har bitta tree node bu object hisoblanadi
 */

// document.body.style.backgroundColor = "red";
// setTimeout(() => {
//   document.body.style.backgroundColor = "";
// }, 2000);

// html element
// console.log(document.documentElement);

/**
 * 1.1 childNodes, firstChild, lastChild, firstChildElement,
 * lastChildElement, children
 */
const bodyNodes = document.body.childNodes;
const body = document.body;

console.log("First child element of BODY: ", document.body.lastElementChild);

for (let node of bodyNodes) {
  if (node.nodeName === "UL") {
    console.log("First child element of UL: ", node.firstElementChild);
    for (let li of node.childNodes) {
      console.log(li);
    }
  }
}

// node larni tekshirish
console.log(body.childNodes[0] === body.firstChild);
console.log(body.childNodes[body.childNodes.length - 1] === body.lastChild);
console.log("Children of BODY - ", body.children);
for (let element of body.children) {
  console.log("Element: ", element);
}

console.log("------------------------------------------------------------");

/**
 * 2. DOM searching elements
 * just by id
 * document.getElementById(id)
 * document.querySelector()
 * document.querySelectorAll()
 * document.getElementsByClassName()
 * document.getElementsByTagName()
 */

// just by id
item1.style.backgroundColor = "red";
console.log("Item1 ", item1);

// document.querySelector()
const ptag = document.querySelector(".pElement");
console.log("P tag: ", ptag);

// document.querySelectorAll()
const ptags = document.querySelectorAll(".pElement");
console.log("P tags: ", ptags);

// document.getElementsByClassName()
const headers = document.getElementsByClassName("header");
for (let item of headers) {
  console.log(item.innerHTML);
}
console.log(headers);

// document.getElementsByTagName()
// const divs = document.getElementsByTagName("div");
// console.log("DIVS ", divs);

/**
 * Bazi savollarga javob
 * |. Live collections vs Static collections
 * getElementsBy...() - bular live collection
 * querySelectorAll() - bular static collection
 */

/**
 * ||. innerHTML += "Some content" - bu oldingi contentni to'liq o'chirib tashlaydi
 * va hozirgi content ni yozib qo'yadi
 */

console.log("Before: ", item1.innerHTML);
item1.innerHTML += " <div>DIV</div>";
console.log("After: ", item1.innerHTML);

/**
 * |||. innerHTML vs textContent
 */
console.log("Text content of item1: ", item1.textContent);
// item1.textContent += "<div>DIV</div>";

/**
 * 3. Styles and classes
 */
item1.style.fontSize = "30px";
// classList - class larni listini chiqarib beradi
/**
 * |.   classList.add() - class listiga yangi class name qo'shadi
 * ||.  classList.remove() - class name ni class list dan olib tashaydi
 * |||. classList.toggle() - agar class name bo'lsa olib tashaydi, bo'lmasa qo'shadi
 * |V.  classList.contains() - agar bo'lsa true, aks holda false qaytaradi
 */
// item1.classList.add("item");
// item1.classList.remove("item");
item1.classList.toggle("item");
console.log(item1.classList.contains("item"));
