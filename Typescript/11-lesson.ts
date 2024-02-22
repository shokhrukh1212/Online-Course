const message = "String";

message.toLowerCase();
// message();

const user = {
  name: "Daniel",
  age: 26,
  location: "Yunusabad 25",
};

user.location;

/**
 * Explicit types
 * Type annotation
 */

function sayPersonInfo(fullName: string, age: number) {
  console.log(`Name is ${fullName}, age is ${age}`);
}

sayPersonInfo("John Wick", 50);

function makeUppercase(str: string) {
  console.log(str.toUpperCase());
}

makeUppercase("name");

/**
 * Everyday types
 */

const numsArr: number[] = [1, 2, 3, 4, 5];
const strArr: string[] = ["one", "two", "three"];

/**
 * Functions
 */
function logSomething(): void {
  console.log("Hello world");
}

function addTwoNumber(a: number, b: number): number {
  return a + b;
}
const result = addTwoNumber(5, 4);

// Object types
function logNameAndSurname(obj: {
  name: string;
  surname: string;
  age?: number;
}): void {
  console.log("Name - ", obj.name);
  console.log("Surname - ", obj.surname);
  console.log("Age - ", obj.age);
}
logNameAndSurname({ name: "Maradona", surname: "John" });

/**
 * Union Types
 */

function func(value: string | number | boolean) {
  if (typeof value === "string") {
    console.log("This string value is - ", value);
  }

  if (typeof value === "number") {
    console.log("This number value is - ", value);
  }
}

func("Book");
func(20);
func(true);

const arr: (string | number)[] = [1, 2, 3, 4, 5, "one", "two", "three"];

/**
 * Types alias
 */
type objType = { id: number; color: string; isValid: boolean };

function checkObjId(obj: objType) {
  return obj.id;
}

const obj = {
  id: 7,
  color: "red",
  isValid: true,
};

/**
 * Interface
 */

interface Person {
  name: string;
  age: number;
  isAdult?: boolean;
}

const person: Person = {
  name: "John",
  age: 20,
  isAdult: true,
};

// interface larni kengaytirish
interface Human extends Person {
  gender: string;
}

const human: Human = {
  name: "Joahnna",
  age: 25,
  gender: "female",
};

/**
 * Type assertions
 */

const num: number = 23;

/**
 * ENUMS
 */

enum numsEnum {
  Up,
  Down,
  Left,
  Right,
}

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log("Left enum: ", numsEnum.Left);

/**
 * Generic Functions
 */

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstElem = firstElement(["one", "two", "three"]);
console.log(firstElem);

/**
 * Unknown type
 */

function checkInput(input: unknown) {
  if (typeof input === "string") {
    console.log(input.toUpperCase()); // string method
  }

  if (typeof input === "number") {
    console.log(input.toFixed(2)); // number method
  }
}

/**
 * Tuple types
 */

type Str_num = [string, number, Function];
const str_num: Str_num = ["Shahzoda", 20, () => console.log("hello")];
