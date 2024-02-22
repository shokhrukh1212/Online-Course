var message = "String";
message.toLowerCase();
// message();
var user = {
    name: "Daniel",
    age: 26,
    location: "Yunusabad 25",
};
user.location;
/**
 * Explicit types
 */
function sayPersonInfo(fullName, age) {
    console.log("Name is ".concat(fullName, ", age is ").concat(age));
}
sayPersonInfo("John Wick", 50);
function makeUppercase(str) {
    console.log(str.toUpperCase());
}
makeUppercase("name");
/**
 * Everyday types
 */
var numsArr = [1, 2, 3, 4, 5];
var strArr = ["one", "two", "three"];
/**
 * Functions
 */
function logSomething() {
    console.log("Hello world");
}
function addTwoNumber(a, b) {
    return a + b;
}
var result = addTwoNumber(5, 4);
// Object types
function logNameAndSurname(obj) {
    console.log("Name - ", obj.name);
    console.log("Surname - ", obj.surname);
    console.log("Age - ", obj.age);
}
logNameAndSurname({ name: "Maradona", surname: "John" });
/**
 * Union Types
 */
function func(value) {
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
var arr = [1, 2, 3, 4, 5, "one", "two", "three"];
function checkObjId(obj) {
    return obj.id;
}
var obj = {
    id: 7,
    color: "red",
    isValid: true,
};
var person = {
    name: "John",
    age: 20,
    isAdult: true,
};
var human = {
    name: "Joahnna",
    age: 25,
    gender: "female",
};
/**
 * Type assertions
 */
var num = 23;
/**
 * ENUMS
 */
var numsEnum;
(function (numsEnum) {
    numsEnum[numsEnum["Up"] = 0] = "Up";
    numsEnum[numsEnum["Down"] = 1] = "Down";
    numsEnum[numsEnum["Left"] = 2] = "Left";
    numsEnum[numsEnum["Right"] = 3] = "Right";
})(numsEnum || (numsEnum = {}));
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log("Left enum: ", numsEnum.Left);
/**
 * Generic Functions
 */
function firstElement(arr) {
    return arr[0];
}
var firstElem = firstElement(["one", "two", "three"]);
console.log(firstElem);
/**
 * Unknown type
 */
function checkInput(input) {
    console.log(input.toUpperCase());
    console.log(input.toFixed(2));
}
