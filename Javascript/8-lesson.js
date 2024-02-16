import api from "./index.js";
/**
 * 1. Promise - (va'da)
 * |.  Synchronous operation lar
 * ||. Asynchronous operation lar
 */

const promise = new Promise(function (resolve, reject) {
  //   setTimeout(() => {
  //     reject("Reject");
  //     resolve("Resolve");
  //   }, 1500);
  //   reject("Reject");
  //   resolve("Resolve");
});

/**
 * new Promise() da quyidagi xususiyatlar bor
 * |.  state degan property si bor (davr)
 *                  state
 *          /         |        \
 *      pending   fulfilled   rejected
 * ||. result - 1, undefined
 */

// Promise consumers - promise ni mijozlari
// Bular .then(), .catch() va .finally()

console.log("----------------------------------------------------");
// promise
//   .then((result) => console.log("Result: ", result))
//   .finally(() => console.log("Men har doim ishlayman"))
//   .catch((error) => console.log("Error: ", error));

/**
 * 2. Promise chaining - promise larni bir biriga zanjir qilib bog'lab ketish
 */
// const newPromise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("1. Resolve");
//   }, 1000);
// });

// newPromise
//   .then((result) => {
//     console.log(result);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("2. Resolve");
//       }, 1000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         reject("3. Reject");
//       }, 1000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("4. Resolve");
//       }, 1000);
//     });
//   })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Finally"));

// example
let namesArr = [];
const usersPromise = fetch(`${api}/users`);
usersPromise
  .then((res) => res.json())
  .then((data) => {
    namesArr = data.map((user) => {
      const { name, email } = user;
      return {
        name,
        email,
      };
    });
    console.log(namesArr);
  })
  .catch((error) => console.log(error));

/**
 * 3. async/await
 * Bu promise ni ham keyingi versiyasi
 * Bu promise dan ham qulayroq hisoblanadi
 * Bir xil amal bajarishadi
 */

async function fetchUsers() {
  try {
    const usersPromise = await fetch(`${api}/users/2`);
    const data = await usersPromise.json();
    // console.log(data);

    console.log(2 * 3);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Your fetch is done");
  }
}

fetchUsers();

/**
 * Modules - import/export
 */
