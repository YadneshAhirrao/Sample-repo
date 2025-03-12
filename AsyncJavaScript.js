/*
   What Exactly is callback is ?

   A callback in JavaScript is a function passed as an argument to another function, 
   which is then executed later, usually after an asynchronous operation is completed.

*/

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSquare(a, b) {
  let s1 = square(a);
  let s2 = square(b);
  return s1 + s2;
}

function sumOfCube(a, b) {
  let s1 = cube(a);
  let s2 = cube(b);
  return s1 + s2;
}

// console.log(sumOfSquare(1, 3));
// console.log(sumOfCube(1, 3));

function sumOfSomething(a, b, callback) {
  let num1 = callback(a);
  let num2 = callback(b);
  return num1 + num2;
}

// console.log(sumOfSomething(2, 4, cube));

/* 
  What is async? - Asynchronous

    1. Your javascript thread doesn’t have access to everything immediately
    2. There are some tasks it needs to wait for

  For example -
    1. Reading a le
    2. Sending a network request
    3. A deliberate timeout
*/

let a = 1;
console.log(a);

const fs = require("fs");

/*

 JavaScript thread -> (ask os) ->  give me content of file
 OS -> Read the file content
 OS -> return the content -> JavaScript thread

*/

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log("Data read from the file is: ");
  console.log(data);
});

let ans = 0;
for (let i = 0; i < 1000; i++) {
  ans += i;
}

console.log(ans);

/* 
  What are promises?
    1. Just syntactical sugar
    2. Just a more readable way to write async functions 

*/

/* 
This approach uses a callback
You have created a function where other people can send a callback
This is good, but could lead to
*/
function myOwnSetTtmeout(fn, duration) {
  setTtmeout(fn, duration);
}
myOwnSetTtmeout(function () {
  console.log("ht there");
}, 1000);

/* -------------------------------------------------------------------------------------------------------- */

// Callback Syntax

function someFunction1(callback) {
  callback("Hi Yadnesh");
}

async function main1() {
  someFunction1(function (value) {
    console.log(value);
  });
}

// Promise -> ( Then Syntax )

function someFunction2() {
  let p = new Promise(function (resolve) {
    resolve("Hi Dr");
  });
  return p;
}

function main2() {
  someFunction2().then(function (value) {
    console.log(value);
  });
}

// Async/Await Syntax

function someFunction3() {
  let p = new Promise(function (resolve) {
    resolve("Hi Mahesh");
  });
  return p;
}

async function main3() {
  const value = await someFunction3();
  console.log(value);
}

// main1();
// main2();
main3();
