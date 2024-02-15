/**
 * 1. Class inheritance (me'ros olish) - merosxo'rlik
 * super() - bu bizlarga parent class dagi bizga kerakli bo'lga malumotlarni olib kelib beradi
 * xuddi copy/paste qilib beradi
 */

class Animal {
  data = "animal data";
  constructor(type, color) {
    this.type = type;
    this.color = color;
    this.showData();
  }

  showData() {
    console.log("animal data");
  }

  animalInfo() {
    console.log(`Animal type is ${this.type}, its color is ${this.color}`);
  }
}

class Giraffe extends Animal {
  data = "giraffe data";
  constructor(type, color, height) {
    super(type, color);
    this.height = height;
    console.log(this.data);
  }

  showData() {
    console.log("giraffe data");
  }

  animalInfo() {
    super.animalInfo();
    console.log(`I am a ${this.type}`);
  }

  showHeight() {
    console.log(`My height is ${this.height} m`);
  }
}

const animal = new Animal("Lion", "while");
const giraffe = new Giraffe("Giraffe", "red", 20);
// giraffe.showHeight();
// giraffe.animalInfo();

/**
 * 2. Static, private, public, protected field in a class
 * Javascript da 2 xil interface bor, external(public) interface va internal(private) interface
 * default xolatida, hamma field lar public bo'ladi
 */

/**
 * 2.1 Static fields
 */

class Car {
  static data = "static data";
  static staticMethod() {
    console.log("This is a static method");
  }
}

console.log(Car.data);
Car.staticMethod();

/**
 * 2.2 private fields
 */

class Person {
  #minimumAge = 18; // private property
  _protectedField = "protected";

  constructor(age) {
    this.age = age;
  }

  canWatchMovie() {
    if (this.age > this.#minimumAge) {
      console.log("You can watch");
    } else {
      console.log("You are young to watch");
    }
  }
}

const person = new Person(15);
person.canWatchMovie();
console.log(person._protectedField);

/**
 * 2.3 instanceOf()
 */

console.log(person instanceof Person);
const arr = [1, 2, 3];
const str = "string";
console.log(arr instanceof Array);
console.log(arr instanceof Object);

console.log("-------------------------------------------------");

/**
 * 3. try/catch blocklari, har doim runtime da error bo'sa ishlaydi
 * qanaqadir syntax error bo'sa ishlamaydi
 */
try {
  const obj = {};
} catch (error) {
  console.log("ERROR happened", error);
}

/**
 * try/catch blocki synchronous operation lar bilan ishlaydi, asynchronous lar bilan ishlamaydi
 */

// Bu xato
// try {
//   setTimeout(() => {
//     console.logg("Bu ko'dim ishlamaydi");
//   }, 2000);
// } catch (error) {
//   console.log("ERROR: ", error);
// }

// Bu to'g'ri
// setTimeout(() => {
//   try {
//     console.log("Bu xato kod");
//   } catch (error) {
//     console.log("Mani errorim: ", error);
//   }
// }, 2000);

/**
 * error - bir nechta property lari bor
 * 1. error.name - error ni name ini qaytaradi, ReferenceError
 * 2. error.message - error ni message ini qaytaradi, misol uchun
 * 3. error.stack - error ni to'liq chiqarib beradi
 */
// try {
//   console.logg("Bu xato kod");
// } catch (error) {
//   console.log("Error name: ", error.name);
//   console.log("Error message: ", error.message);
//   console.log("Error stack: ", error.stack);
// }

// try {
//   const obj = {};
//   obj.name.data = "";
// } catch {
//   throw new Error("O'zlarimizni errorimiz");
// }

/**
 * 4. Promises - (vada)
 * callback hell - callback larni ichma ich bir necha marta chaqirish
 */

const promise = new Promise(function (resolve, reject) {
  resolve("Vada bajarildi");
  reject("vada bajarilmadi");
  // body
});
