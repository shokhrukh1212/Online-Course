/**
 * Qoida - primitive data type lar hammasi immutable, ya'ni qiymatini o'zgartira olmaymiz
 */

/**
 * 1. Number methods
 */
let num = 5000000000; // milliard;
let num2 = 5e9; // = num
// 1.1 number.toString(base)  - base bu sanoq tizimi raqami
const stringNumber = 123;
console.log(stringNumber.toString(2));
/**
1.2 
Math.floor(num) - sonning butun qismini quyisini oladi, 
Math.ceil(num) - sonning butun qismidan yuqorisini oladi
Math.round(num) - songa yaqin sonni oladi
Math.trunc(num) - sonni o'zini oladi
 * 
 */

const num3 = 2.65858484;
console.log(Math.floor(num3)); // 2
console.log(Math.ceil(num3)); // 3
console.log(Math.round(num3)); // 3
console.log(Math.trunc(num3)); // 2

/**
 * 1.3 toFixed(n) - bu sonni n xonagacha yaxlitlaydi
 */

console.log(num3.toFixed(2)); // 2.66

/**
 * 1.4 isNaN(num) - raqam NaN mi yoki yo'q, NaN - Not A Number ya'ni raqammas
 */
console.log(isNaN(num3)); // false
console.log(isNaN("string")); // true
console.log(NaN === NaN); // false

/**
 * 1.5 isFinite(num) - num checklimi yoki yo'q
 * Javascript da -Infinity va Infinity qiymatlari bor, bular cheksiz sonlarni tasvirlash uchun ishlatiladi
 */
console.log(isFinite(num3)); // true
console.log(isFinite(Infinity)); // false

/**
 * 1.6 parseInt(value) and parseFloat(floatValue)
 * parseInt(value) - value ichidan int raqamni ovoladi
 * parseFloat(floatValue) - floatValue ichidan float raqam ovoladi
 */

console.log(parseInt("123.48dsd")); // 123
console.log(parseFloat("52.36sds")); // 52.36

/**
 * 1.7 Math.random(), Math.max(numbers), Math.min(numbers)
 */

console.log(Math.random() * 10); // 0 dan 10 gacha, (10 kirmaydi)
const numsArray = [1, 2, 3, 4, 5, 6, 7];
console.log(Math.max(...numsArray)); // 7
console.log(Math.min(...numsArray)); // 1

/**
 * 2. String methods
 */
const str = "this is a string value";

// 2.1 "\n" - new line, yangi qatordan boshlab ketish
console.log("Hello everyone,\nlet's dance now");

// 2.2 string.length - stringni uzunligini qaytaradi
console.log("Hello everyone".length); // 14

// 2.3 string.at(position) - position dagi character ni qaytaradi
console.log(str[str.length - 1]); // e
console.log(str.at(-1)); // e

// 2.4 stringlar immutable
str[0] = "a"; // o'zgarish bo'lmaydi
console.log(str);

// 2.5 string.toUpperCase(), string.toLowerCase();
console.log("Hello".toUpperCase()); // "HELLO"
console.log("Hello".toLowerCase()); // "hello"

/**
 * 2.6
 * string.indexOf(item, ?startPosition) - item ning string dagi 1-topilgan indexini qaytaradi
 * string.lastIndexOf(item) - item ning string dagi oxirgi topilgan indexini qaytaradi
 */

console.log(str.indexOf("this")); // 0
console.log(str.lastIndexOf("a")); // 18

// 2.7 string.includes(item) - string da item bormi yoki yo'q, true/false qaytaradi
console.log(str.includes("this is a new")); // false

/**
 * 2.8
 * string.startsWith(item) - string item bilan boshlanadimi yoki yo'q, true/false qaytaradi
 * string.endsWith(item) - string item bilan tugaydimi yoki yo'q, true/false qaytaradi
 */

console.log(str.startsWith("this")); // true
console.log(str.endsWith("value")); // false

// 2.9 string.slice(start, end) - start dan end gacha bo'lgan string ni qismini oladi
console.log(str.slice(0, 11)); // 11-index kirmaydi

// 2.10 string.substr(start, length) - start index dan length uzunlikdagi kesmani ovoladi
console.log(str.substr(1, 3)); // his

/**
 * 3. Array methods
 */

// 3.1 arr.length, arr.at(position)
const arr = ["first", "second", "third"];
console.log(arr.length); // 3
console.log(arr[arr.length - 1]); // "third"
console.log(arr.at(-1)); // "third"

/**
 * 3.2
 * arr.push(item) - arr ni oxiriga item ni qo'shib qo'yadi
 * arr.pop() - arr ni oxiridagi element ni olib tashiydi, va shuni qaytaradi
 */

arr.push("fourth");
console.log(arr);
const lastItem = arr.pop();
console.log(lastItem); // "fourth"
console.log(arr); // ["first", "second", "third"]

/**
 * 3.3
 * arr.shift() - arr dan birinchi element ni olib tashaydi va qaytaradi
 * arr.unshift(item) - arr ni boshiga item ni qo'shib qo'yadi
 */

const firstItem = arr.shift();
console.log(firstItem); // "first"
console.log(arr); // ["second", "third"]

arr.unshift("first");

console.log(arr); // ["first", "second", "third"]

/**
 * 3.4
 * arr.splice(start, deleteCount, element1, element2) - arr dan item larni olib tashash, arr ni o'zgartirish
 * va array ga yangi item lar qo'shish uchun ishlatiladi
 * edit, delete, add
 */

const newArr = [1, 2, 3, 4, 5, 6];
newArr.splice(1, 2);
console.log(newArr); // [1, 4, 5, 6]
newArr.splice(1, 0, "new item", "new item 2");
console.log(newArr); // [1, "new item", "new item 2", 3, 4, 5, 6]

// 3.5 array.slice(start, end) - arr dan start index dan end index gacha qismini ovoladi
console.log(newArr.slice(0, 2)); // 2 kirmaydi, [1, "new item"]

// 3.6 array.concat(newArr) - array ga newArr ni biriktiradi va yangi array qaytaradi

const newArray = [1, 2, 3];
const newArray2 = [4, 5, 6];
const newArray3 = newArray.concat(newArray2);
console.log(newArray3); // [1, 2, 3, 4, 5, 6]

/**
 * 3.7
 * array.forEach(function) - array ni har bitta item i ustida ishlash
 * array.map(function) - array ni har bitta item larini ustida ishlash
 * array.filter(function) - arrayni item larini filter qilib olish
 * array.every(function) - array ni har bitta item i function ni qanoatlantiradimi yoki yo'q, true/false qaytaradi
 * array.some(function) - array ni qaysidir item lari function ni qanoatlantiradimi yoki yo'q, true/false qaytaradi
 */

newArray3.forEach((item, index) => console.log(`item[${index}]: ${item}`));

const newArray4 = newArray3.map((item) => item * 2);
console.log(newArray4); // [2, 4, 6, 8, 10, 12]

const newArray5 = newArray4.filter((item) => item > 5);
console.log(newArray5); // [6, 8, 10, 12]

const result = newArray5.every((item) => item > 1);
console.log(result); // true

const result2 = newArray5.some((item) => item > 10);
console.log(result2); // true

console.log(
  "********************************************************************"
);

// 3.8 array.sort(function) - string qiymatlar sifatida sort qiladi (default)
const newItems = ["d", "c", "b", "a"];
const newItems2 = [4, 3, 12, 1];
newItems.sort();
newItems2.sort((a, b) => a - b);
console.log(newItems); // ["a", "b", "c", "d"]
console.log(newItems2); // [1, 3, 4, 12]

// 3.9 array.reverse() - array ni teskarisiga aylantiradi
newItems.reverse();
console.log(newItems); // ["d", "c", "b", "a"]

/**
 * 3.9
 * array.split(item)- string dan array hosil qiladi, item dan ajratib oladi
 *  va array.join(item) - .split() ni teskarisini qiladi, array dan string hosil qiladi, item dan ajratib oladi
 */

const newItem = "Men talabaman";
const newItem2 = newItem.split("");
console.log(newItem2); // ["Men", "talabaman"]
const newItem3 = newItem2.join(""); // "Men talabaman"
console.log(newItem3);

/**
 * 3.10 - array.reduce() - array item larini yig'indisini topish uchun ishlatiladi
 */

const newNumbersArr = [1, 2, 3, 4, 5, 6];
const sum = newNumbersArr.reduce((sum, currentValue) => sum + currentValue, 0);
console.log(sum); // 21

/**
 * 3.11 - Array.isArray(array) - array bu array mi yoki yo'qmi, true/false qaytaradi
 */
console.log(Array.isArray(numsArray)); // true
