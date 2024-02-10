/**
 * 1. Objects, reference
 * Objects - ma'lumotlarimizni key:value ko'rinishida xotirada saqlash yo'li
 */

const car = {
  model: "Mercedes",
  true: true,
  //   "g'ildirak soni": 4,
  ["g'ildirak soni"]: 4,
};

console.log(car.model); // "Mercedes"

// Property names - Biz property sifatida language ni o'zidagi key so'zlarni ishlata olmaymiz
// misol uchun - for, let, return, while

// 1.1 for ... in loop
for (let item in car) {
  console.log(item); // "model", "true", "g'ildirak soni"
}

// 1.2 - Object.keys(obj) - object ni key larini iterate qilish uchun ishlatiladi
console.log(Object.keys(car));
// 1.3 - Object.values(obj) - value larini iterate qilish uchun
console.log(Object.values(car));

// 1.4 - in - object da o'sha property bormi yoki yo'qmi tekshiradi, true/false qaytaradi
console.log("name" in car);

// 1.5 - property larni tartibi
const obj = {
  3: 3,
  2: 2,
  str2: "str2",
  str: "str",
  1: 1,
};

for (let item in obj) {
  console.log(item);
}

/**
 * 2. Object copying - object larni copy qilish
 */

const x = 3;
const y = 3;
console.log(x === y); // true

const a = {
  key: "value",
};

const b = a; // b = { key: "value" }

console.log(a === b);

// 2.1 - const object larni biz o'zgartira olamiz
a.key2 = "value2";
console.log(b.key2);
b.key3 = "value3";
console.log(a.key3);
const c = b;
console.log(c);

const person = {
  name: "Adam Johnson",
  age: 52,
  innerObj: {
    innerName: "inner name",
  },
};

// const person2 = {};

// for (let item in person) {
//   person2[item] = person[item];
// }

// console.log(person2);

// 2.2 - Object.assign(obj, ...sources)
const person2 = Object.assign({}, person);
console.log(person2);
console.log(person == person2); // false
console.log(person.innerObj === person2.innerObj); // true

// Object larni clone qilish 2 turga bo'linadi - shallow clone, deep clone
// deep clone uchun - structuredClone

const person3 = structuredClone(person);
console.log(person === person3); // false
console.log(person.innerObj === person3.innerObj); // false

/**
 * 3. Garbage collection - done by garbage collector
 */

let newObj = {};
newObj = null;

let child = {
  age: 2,
};

const child2 = child;
child = null;
console.log(child2);

/**
 * 4. Object methods
 */

const user = {
  name: "Luka Modric",
  sayName: function () {
    console.log("Hello, My name is ", this.name);
  },
  sayAge() {
    let arrowFunc = () => console.log(this.name);
    arrowFunc();
  },
};

user.sayAge(); // "Luka Modric"

/**
 * 5. Optional chaining - ?.
 */
// console.log(user?.surname); // error

/**
 * 6. Symbol type
 * Object property lari har doim 2 xil data type saqlaydi, bular - string va symbol
 */

console.log("******************************************************");

const id = Symbol("id");
user.id = "This is a unique id";

for (let item in user) {
  console.log(item);
}

const z = {
  [id]: "ID",
};

console.log(z[id]);
