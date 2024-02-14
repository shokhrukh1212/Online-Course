/**
 * 1. call, apply, bind
 */

/**
 * 1.1 call()
 */

function Animal() {
  this.name = "Animal";
}

function Dog() {
  Animal.call(this);
}

const dog = new Dog();
console.log(dog);

// new example
function sayName(age, address) {
  console.log(
    `Your name is ${this.fullName}, age is ${age} and your address is ${address}`
  );
}

const personObj = {
  fullName: "Bobby Brown",
};

sayName.call(personObj, 25, "Tashkent, Chilonzor");

// new example
const newObj = {
  ownMethod() {
    console.log("Object data: ", this.data);
  },
};

const newObj2 = {
  data: "new object 2",
};

newObj.ownMethod.call(newObj2); // "Object data: new object 2"

/**
 * apply() - xuddi call bilan bir xil, faqat argument lar array ni ichida uzatiladi
 */

sayName.apply(personObj, [25, "Toshkent, Chilonzor"]);

// new example
const numbersArr = [1, 2, 3, 4, 5];
console.log(Math.max.apply(null, numbersArr)); // 5

// new example
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
arr1.push.apply(arr1, arr2);
console.log(arr1);

/**
 * 1.3 bind() - deyarli, call, apply lar bilan bir xil, faqat bu yangi funksiya qaytaradi
 */
const obj2 = {
  key: "value",
  printKey() {
    console.log("Key value is ", this.key);
  },
};

obj2.printKey(); // bu ishlaydi

// bu undefined qaytaradi
// const printKeyMethod = obj2.printKey;

const printKeyMethod = obj2.printKey.bind(obj2);
printKeyMethod();

/**
 * 2. Arrow functions - part 2
 */

/**
 * 2.1 Arrow function da this yo'q, this bu Window qaytaradi
 */

const obj3 = {
  prop: "property",
  arrowFunc: () => console.log(`prop value is ${this.prop}, this is ${this}`),
};

obj3.arrowFunc();

/**
 * 2.2 arguments yo'q arrow function larda
 */

function printArguments() {
  console.log(...arguments);
}

printArguments(1, 2, 3, 4, 5, 6, 7);

// const printArguments = () => {
//   console.log(arguments);
// };

// printArguments(1, 2, 3, 4, 5, 6, 7);

/**
 * 2.3 object lar da method qilib ishlatmasligimiz kerak
 */

/**
 * 2.4 arrow function lardan Constructor function yasay olmaymiz
 */

// const ConstructorFunction = () => {
//   console.log("this is a constructor function");
// };

// const newInstance = new ConstructorFunction();
// console.log(newInstance);

/**
 * 2.5 arrow function larni ichida yield ni ishlata olmaymiz, va generator funciton ham yasay olmaymiz
 */

// Bu generator function
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const generatorInstance = generatorFunction();
console.log(generatorInstance.next());
console.log(generatorInstance.next());
console.log(generatorInstance.next());
console.log(generatorInstance.next());

/**
 * 3. Prototype
 * har bitta objectni ichida yashiringan [[Prototype]] degan property si bo'ladi
 * bu [[Prototype]] null bo'ladi yoki boshqa bir object ga reference qiladi
 */

const obj4 = {
  name4: "obj4",
  printName() {
    return "printing name: " + this.name4;
  },
};

const obj5 = {
  __proto__: obj4,
  name5: "obj5",
};

const obj6 = {
  __proto__: obj5,
  name6: "obj6",
};

// obj5.__proto__ = obj4;
console.log(obj5.name4);
console.log(obj5.printName());
console.log(obj6.name4);
console.log(obj6.printName());

/**
 * 4. Class lar
 */
// C++, Java - Object Oriented Programming Language
// Javascript - multiparadighm - bu degani ham Functional ham Object oriented programming language

// class ClassName {
//     constructor() {};
//     method1() {}
//     method2() {}
// }

class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  printCarInfo() {
    console.log(`Car model is ${this.model}, color is ${this.color}`);
  }
}

// function Car(model, color) {
//   this.model = model;
//   this.color = color;
// }

// Car.prototype.printCarInfo = function () {
//   console.log(`Car model is ${this.model}, color is ${this.color}`);
// };

console.log("------------------------------------------------");

const car = new Car("Bugatti Chiyron", "black");
console.log(car);
car.printCarInfo();
