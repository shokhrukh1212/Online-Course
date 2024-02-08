"use strict";

// 1. Variables

let x = 0,
  y,
  z;
let a = "Hello world",
  b = "b",
  c = "c";

let lesson;
lesson = "This is a lesson 1";
lesson = "This is a lesson 2";
console.log(lesson);

// 1.1 Naming variables
let myName = "Shokhrukh Karimov";
/**
 * Rules
 * 1. Faqat harflar, raqamlar, va $ va _ lar ham kiradi
 * 2. Birinchi harf raqam bo'lmasligi shart
 */

let tutorial;
let TUTORIAL;

// let for; // is not allowed

// const
const MY_AGE = 20;

// 2. Data types
/**
 * |. Primitive
 * 1. Number - 2, 34, 45.5 - chegarasi (-2**53 - 1 dan 2**53 - 1) gacha
 * 2. Bigint - 45n;
 * 3. String - "string", 'string', `string`;
 * 4. Boolean - true/false
 * 5. null - is a reference to a non-existing object
 * 6. undefined - value is not assigned
 * 7. Symbol - boshqa joyda uchramaydigan nom, unique naming for object properties
 *
 * ||. Non-primitive
 * 8. Object
 */
const myFullName = "Shokhrukh Karimov";
const sayHello = `Hello from ${myFullName}`;
console.log(sayHello);

let mySymbol = Symbol("This is for an object");
const myObj = {};
myObj.mySymbol = "Tis is my symbol";

// typeof operand
console.log(typeof 123); // Number
console.log(typeof 25n); // Bigint
console.log(typeof "I am learning typeof"); // String
console.log(typeof true); // Boolean
console.log(typeof null); // Object
console.log(typeof undefined); // undefined
console.log(typeof {}); // Object

// 3. Interaction
/**
 * 1. alert - xabar bo'ladi, va siz OK tugmasini bosishingiz mumkin
 * 2. prompt - xabar bo'ladi, va sizda input field bo'ladi, bunga default value qo'ysangiz bo'ladi, va OK/Cancel buttonlar bo'ladi
 * 3. confirm - savol bo'ladi, va OK/Cancel button lari bo'ladi
 */

// alert("Hello world!");

// const promptValue = prompt("Sizning yoshingiz nechchi?");
// console.log(promptValue);

// const isAdult = confirm("Siz balog'atga yetganmisiz");
// console.log(isAdult);

// 4. Type Conversions
// 4.1) String conversion
let num = 4;
console.log(typeof num);
num = num.toString(); // method
console.log(typeof num);
// 4.2) Numeric conversion
let num2 = undefined;
num2 = Number(num2);
console.log(num2); // NaN - Not a Number

let num3 = null;
num3 = Number(num3); // 0
console.log(num3);

let isOlder = false;
isOlder = Number(isOlder);
console.log(isOlder); // agar true bo'lsa 1 bo'ladi, agar false bo'lsa 0 bo'ladi

let emptyString = "";
console.log(Number(emptyString)); // 0

let hasValue = "string 5";
console.log(Number(hasValue)); // NaN

let stringNumber = "         545    ";
console.log(Number(stringNumber));

//4.3) Boolean conversion
let nullValue = 0;
console.log(Boolean("0"));

// 5. Basic Operators
/**
 * 1. Unary - bitta operatsiya amal bajaramiz
 * 2. Binary - 2 ta operatsiya amal bajaramiz
 * 3. Operands - (+, *, -, /, %, **)
 */

// 5.1 Unary
let unaryData = 10;
unaryData = -unaryData;
console.log(unaryData);

// 5.2 Binary
let binaryData1 = 5;
let binaryData2 = 10;
let binaryResult = binaryData1 * binaryData2;
console.log(binaryResult);

// 5.3 Operands
console.log(9 % 4); // 1
console.log(5 ** 3);

// Bazi savollar
// (+) amalida hamma qiymatlar string ga o'giriladi

console.log(5 + "4"); // "54"
console.log(3 + 4 + "5"); // "75"
console.log("5" + 4 + 3); // "543"

// qolgan barcha amallarda, qiymatlar number ga o'giriladi
console.log("8" / "2");
console.log("6" - "5");

// (++) hamda (--)
let incrementerValue = 5;
let decrementerValue = 10;
incrementerValue++;
decrementerValue--;
console.log(incrementerValue); // 6
console.log(decrementerValue); // 9

console.log(
  "-----------------------------------------------------------------------------------------"
);

console.log(incrementerValue++); // 6
console.log(decrementerValue--); // 9

console.log(incrementerValue);
console.log(decrementerValue);

// num++ va ++num
// num++ - bu oldin eski value ni qaytaradi, va keyin increment qiladi
// ++num - bu oldin increment qiladi, keyin yangi value ni qaytaradi
