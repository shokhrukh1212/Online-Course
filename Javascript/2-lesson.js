// 1. Comparisons - >, <, >=, <=, ==, ===, har doim true/false qaytaradi
/**
 * 1.1String comparison
 * Alfabet bo'yicha solishtiriladi
 */
console.log("a" > "b"); // false
console.log("ab" < "aa"); // false

/**
 * 1.2) 2 ta data type dagi qiymatlarni solishtirish
 * Bu holatda, Javascript qiymatlarni number type ga o'tkazadi
 */

console.log("0" > 0); // false
console.log("01" == 1); // true
console.log("abc" == 0); // false -> NaN == 0

// Qiziqarli solishtirish
let a = 0;
let b = "0";
console.log(Boolean(a)); // false
console.log(Boolean(b)); // true
console.log(a == b); // true

/**
 * 1.3 (===) - strict equality
 * (==) - non-strict equality
 * Farqi
 * (==) bu avval ikkita qiymatni bitta type ga o'tkazadi (numberga) va keyin solishtiradi
 * (===) bu bitta type ga o'tkazmaydi, ham type ni tekshiradi, ham qiymatni tekshiradi
 */

console.log(a === b); // false
console.log(5 === 5); // true

/**
 * 1.4 null va undefined larni solishtirish
 * Bular faqat va faqat bitta xolatda bir biriga teng, va boshqa holatlarda hech biri
 * boshqa qiymatga teng bo'lmaydi
 */
console.log(null == undefined); // faqat shu holatda, sweet-couple - bir birini yoqtiradigan juftlik

// G'alati holarlar bor
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// G'alati holatlar 2
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false

// 2. Conditional Branching -  if, else, if else, ? va :
if (0) {
  console.log("Yes, Bu har doim ishlaydi");
} else {
  console.log("Balanddagi shart ishlamaydi");
}

let role = "admin";
let result = role === "admin" ? "This is an admin" : "This is not an admin";
console.log(result); // "This is an admin"

// Bir nechta qilish ishlatish
let result2 =
  role === "admin"
    ? "Bu admin"
    : role === "user"
    ? "Bu user"
    : "Bu na admin, na user";
console.log(result2);

/**
 * 3. Logical Operators - (|| - yoki), (&& - va), (! - inkor) - hamma qiymatlar Boolean(data) bilan tekshiriladi
 * 3.1 (||) - birinchi rost qiymatni qaytaradi
 * 3.2 (&&) - birinchi yolg'on qiymatni qaytaradi
 * 3.3 (!) - rostni yolg'on, yolg'onni rost qiladi
 */

console.log(0 || -5 || null); // -5
console.log(1 && 2); // 2
console.log(!null); // true

/**
 * 4. Nullish operator - (??)
 * (??) - bu birinchi defined bo'gan value ni qaytaradi, null/undefined ga tekshiradi
 * (a ?? b)
 * agar a ni qiymati bo'sa a qaytaradi
 * agar a ni qiymati bo'masa, b ni qaytaradi
 */

let x = 0;
let y = 3;
console.log(x ?? y); // 0
console.log(x || y); // 3
let value = 1;

/**
 * 5. Loops - for, while, do while
 */
let i = 0;
// for (; i < 10; i += 2) {
//   console.log(i);
// }

// while (i < 10) {
//   console.log(i);
//   i += 2;
// }

do {
  console.log(i);
  i += 2;
} while (i < 10);

/**
 * 6. Functions
 */

// 6.1 Function declaration
// const country = "USA";
function sayHello(name = "Shokhrukh") {
  const country = "Uzbekistan";
  return `Hello ${name}, you are from ${country}`;
}
const functionResult = sayHello("Azamat");
console.log(functionResult);

// 6.2 Function expressions
// Har bitta function bu qiymatga ega narsa
// bu yerda function1 hamda function2 callback function lar
const sayName = function (x, function1, function2) {
  if (x === true) {
    function1();
  } else {
    function2();
  }
};

sayName(false, func1, func2);

function func1() {
  console.log("Function 1");
}

function func2() {
  console.log("Function 2");
}

// 1-farqi
// Function declaration ni yaratilgan joyidan balandda call qisak bo'ladi;
// Function expression ni esa, bunaqa qila olmayman

console.log("**********************************************");
/**
7. Arrow functions
 * 
 */

const arrorFunc = (value = true) =>
  value === true ? "This is an arrow function syntax" : "Error";
const arrowFuncResult = arrorFunc();
console.log(arrowFuncResult);
