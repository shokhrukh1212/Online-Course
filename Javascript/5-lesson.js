/**
 * 1. Map va Set
 * Map - har qanaqa tipdagi key larga ega bo'lgan key:value ko'rinishidagi collection
 * Set - har bitta itemi unique bo'lgan collection, array ga o'xshagan
 */

// 1.1 new Map() orqali yaratamiz
const map = new Map();
// 1.2 map.set(key, value)
map.set(1, "1");
map.set(2, "2");
map.set(3, "3");
console.log(map);

// 1.3 map.get(key)
console.log(map.get(1)); // "1"

// 1.4 map.has(key) - map da key bormi yoki yo'q, true/false qaytaradi
console.log(map.has(1)); // true

// 1.5 map.delete(key) - key ga ega object ni o'chirish
map.delete(3);
console.log(map);

// 1.6 map.clear() - map ni clear qiladi, hamma elementlari o'chib ketadi
map.clear();
console.log(map);

// 1.7 map.size() - map ni uzunligini qaytaradi
map.set(1, "1");
map.set(2, "2");
map.set(3, "3");
console.log(map.size); // 3

// .set() chaining
map.clear();
console.log("Before: ", map);
map.set(1, "1").set(2, "2").set(3, "3").set("string", "value");
console.log("After: ", map);

/**
 * 1.8 Iteration of maps
 * |.   map.keys() - map dagi key larni object qilib qaytaradi
 * ||.  map.values() - map dagi value larni object qilib qaytaradi
 * |||. map.entries() - map dagi key:value larni object qilib qaytaradi
 */

const newArr = Array.from(map.keys());
console.log(newArr); // [ 1, 2, 3, 'string' ]

/**
 * 1.9 Object dan Map yaratish
 */

const obj = {
  name: "Suzana",
  surname: "Amanova",
  age: 25,
};
const newMap = new Map(Object.entries(obj));

console.log("Object: ", obj);
console.log("Map: ", newMap);

/**
 * 1.10 Map dan Object yaratish
 */
const newObj = Object.fromEntries(newMap.entries());
console.log("New Object: ", newObj);

/**
 * 2. Set
 */

const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
const set = Array.from(new Set(arr));
console.log("array: ", arr);
console.log("set: ", set);

// 2.1 new Set() orqali yaratiladi, set.add(value) - set ga value qo'shish
const newSet = new Set();
newSet.add("first item");
newSet.add("second item");
newSet.add("second item");
newSet.add("third item");
newSet.add("fourth item");

// they are not printed
newSet.add("fourth item");
newSet.add("fourth item");
newSet.add("fourth item");

console.log(newSet);

// 2.2 set.delete(value) - value ni set dan o'chirib tashash
newSet.delete("first item");
console.log(newSet);

// 2.3 set.has(value) - set da value bormi yoki yo'q
console.log(newSet.has("second item")); // true

// 2.4 set.clear() - to'liq tozalaydi
newSet.clear();
console.log("new set: ", newSet);

// 2.5 set.size - uzunligini qaytaradi

console.log(newSet.size); // 0

newSet.add("first item");
newSet.add("second item");
newSet.add("second item");
newSet.add("third item");
newSet.add("fourth item");

// they are not printed
newSet.add("fourth item");
newSet.add("fourth item");
newSet.add("fourth item");

newSet.forEach((item) => {
  console.log("item: ", item);
});

/**
 * 3. Object.keys(), Object.values(), Object.entries()
 */

const carObj = {
  brand: "Merdedes",
  color: "black",
  price: 500,
};

// 3.1 Object.keys(obj) - obj dagi key larni qaytaradi
console.log(Object.keys(carObj));

// 3.2 Object.values(obj) - obj dagi value larni qaytaradi
console.log(Object.values(carObj));

// 3.3 Object.entries(obj) - obj dagi key: value larni qaytaradi
console.log(Object.entries(carObj));
for (let [key, value] of Object.entries(carObj)) {
  console.log(`key: ${key}, value: ${value}`);
}

/**
 * 4. Destructuring
 */

/**
 * 4.1 Array destructuring
 */

const namesArray = ["Shohjahon", "Malika", "Otabek"];
const [name1, name2, name3] = namesArray;
console.log("name1: ", name1);
console.log("name2: ", name2);
console.log("name3: ", name3);

const carFullName = "BMW GT 700";
const carArr = carFullName.split(" ");
const [carBrand, carType, carNumber] = carArr; // array destructuring
console.log("Brand: ", carBrand);
console.log("Type: ", carType);
console.log("Number: ", carNumber);

/**
 * 4.1.1 bazi elementlarni o'tkazib yuborish
 */

const [first, , third] = ["first", "second", "third"];
console.log(first);
console.log(third);

/**
 * 4.1.2
 */

// const humanObj = {};
// const [humanObj.name, humanObj.surname] = ["John", "Smith"];

let a = 3;
let b = 4;

[a, b] = [b, a]; // swap

console.log(a);
console.log(b);

const [x, y, z, ...rest] = ["x", "y", "z", "a", "b", "c"];
console.log(rest);

/**
 * 4.1.3 Default values
 */
const [houseName = "Yunusobod", houseNumber = 23] = ["Shayhontohur"];
console.log(houseName);
console.log(houseNumber);

/**
 * 4.2 Object destructuring
 */

const computerData = {
  brand: "Macbook",
  price: 2500,
  color: "pink",
  rest1: "rest1",
  rest2: "rest2",
};

const { brand: br = "HP", color: cl, price: pr, ...restKeys } = computerData;
console.log(br);
console.log(cl);
console.log(pr);
console.log(restKeys);

/**
 * 5. JSON methods - JSON(JavaScript Object Notation)
 */

/**
 * 5.1 JSON.stringify(obj) - Object dan JSON data yaratadi
 */
const exampleObj = {
  key: "key",
  value: "value",
};

const jsonObj = JSON.stringify(exampleObj);
console.log(jsonObj);

/**
 * 5.2 JSON.parse(jsonObj) - json data ni object ga o'giradi
 */

const objAgain = JSON.parse(jsonObj);
console.log(objAgain);

/**
 * 6. Rest va Spread
 */

function printNames(name1, name2, ...restNames) {
  console.log(restNames);
}

printNames("first name", "second name", "rest name 1", "rest name 2");

// Spread
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers));

const newNumbers = [...numbers];

console.log(newNumbers);
console.log("Is equal: ", numbers === newNumbers);

const numbersObj = {
  1: "1",
  2: "2",
  3: "3",
};

const newNumbersObj = { ...numbersObj };
console.log(newNumbersObj);
console.log(numbersObj === newNumbersObj);

/**
 * 7. Scope
 * let va const - block scoped variables, for, while, if
 */

{
  const j = "1 2 3";
  console.log(j);
}

for (let i = 0; i < 10; i++) {
  let count = 2;
  //   console.log(count);
}

if (true) {
  let count = 3;
  console.log(count);
}

function func(color1, color2) {
  let color3 = "yellow";
  function printColors() {
    console.log(`Color1: ${color1}, Color2: ${color2}, Color3: ${color3}`);
  }

  printColors();
}

func("red", "blue");

/**
 * counter() - 0
 * counter() - 1
 * counter() - 2
 * counter() - 3
 */

console.log("---------------------------------------------------------");

function counter() {
  let count = 0;

  return function () {
    return count++;
  };
}

const counter2 = counter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());

/**
 * 8. setTimeout va setInterval
 */

const id = setTimeout(() => {
  console.log("Bu 3 sekunddan keyin chiqadi");
}, 3000);

clearTimeout(id);

let intervalCounter = 0;

const intervalID = setInterval(() => {
  console.log("Bu har sekundda chiqadi");
  intervalCounter++;

  if (intervalCounter === 5) {
    clearInterval(intervalID);
  }
}, 1000);
