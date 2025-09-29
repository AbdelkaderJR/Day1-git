// 1. Predict (in comments) the output order of this code, then run to verify.
// console.log(a());
// var b = function () {
//   return "B";
// };
// function a() {
//   return "A";
// }
// console.log(b());
//    After verifying, explain (one short line) why a works before definition and b does not.

//The Answer will be
//A
//B
//Becasue function a() is declared function so it will be hoisted completelly
// b does not because function expressions are hoisted as variables only

// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).
// function sum(a, b) {
//   return a + b;
// }

// let x = function (a, b) {
//   return a + b;
// };

// console.log(sum(4, 3));
// console.log(x(4, 3));

// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.

// var factorial = function fact(n) {
//   if (n <= 1) return 1;
//   return n * fact(n - 1);
// };
// console.log(factorial(5));

// console.log(typeof fact);

// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.

// function showInfo() {
//   console.log(arguments.length);
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// showInfo();

// showInfo("Abdo", 10);

// showInfo(1, 2, 3, 4, 5);

// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.

// function mutate(x, y) {
//   console.log("Before:");
//   console.log(`x = ${x} y = ${y}`);
//   console.log(`arguments[0] = ${arguments[0]} arguments[1] = ${arguments[1]}`);

//   x = x * 2;
//   y = y + 5;

//   console.log("After:");
//   console.log(`x = ${x} y = ${y}`);
//   console.log(`arguments[0] = ${arguments[0]} arguments[1] = ${arguments[1]}`);
// }
// mutate(10, 20);

//result

// Before:
//  x = 10 y = 20
//  arguments[0] = 10 arguments[1] = 20
// After:
//  x = 20 y = 25
// arguments[0] = 20 arguments[1] = 25

// In non-strict mode, parameters and arguments[i] are linked So reassigning x and y also changes arguments[0] and arguments[1], In strict mode, they are independent

// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().

// function sumAll() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// console.log(sumAll(5, 5, 5));
// console.log(sumAll());

// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.

// function sumAll() {
//   return [].reduce.call(
//     arguments,
//     (a, c) => {
//       return a + c;
//     },
//     0
//   );
// }

// console.log(sumAll(5, 4, 6));
// console.log(sumAll());

// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.

// function describeValue() {
//   switch (arguments.length) {
//     case 0:
//       return `none`;
//     case 1:
//       return `one: ${arguments[0]}`;
//     case 2:
//       return `two: ${arguments[0]} , ${arguments[1]}`;
//     default:
//       return "too many";
//   }
// }

// console.log(describeValue());
// console.log(describeValue(44));
// console.log(describeValue(44, 10));

// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.

// let funcs = [
//   function (n) {
//     return n + 10;
//   },
//   function (n) {
//     return n * 2;
//   },
//   function (n) {
//     return n - 4;
//   },
// ];

// let start = 10;

// for (let i = 0; i < funcs.length; i++) {
//   start = funcs[i](start);
// }

// console.log(start);

// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.

// function makeMultiplier(factor) {
//   return function (n) {
//     return n * factor;
//   };
// }
// let double = makeMultiplier(5);
// let triple = makeMultiplier(5);

// console.log(double(10));
// console.log(triple(10));

// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.

// function once(fn) {
//   let done = false;
//   let value;
//   return function () {
//     if (!done) {
//       done = true;
//       value = fn();
//     }
//     return value;
//   };
// }

// function greet() {
//   console.log("First time");

//   return "Abdoo";
// }

// let runOnce = once(greet);

// console.log(runOnce());
// console.log(runOnce());
// console.log(runOnce());

// 12. (Bonus) Modify once so subsequent calls return the FIRST result (like a memo of zero-arg function). Keep original version comment above for comparison.

// function once(fn) {
//   let done = false;
//   let value;
//   return function () {
//     if (!done) {
//       done = true;
//       value = fn();
//     }
//     return value;
//   };
// }

// function onceMemo(fn) {
//   let value;
//   let called = false;
//   return function () {
//     if (!called) {
//       value = fn();
//       called = true;
//     }
//     return value;
//   };
// }

// function greet() {
//   console.log("Running greet");
//   return "Abdo";
// }

// let runOnce = onceMemo(greet);

// console.log(runOnce());
// console.log(runOnce());
// console.log(runOnce());

// 13. (Bonus) Implement makeCounter(start) that returns { inc: fn, dec: fn, value: fn }. State stays private. Demonstrate two independent counters.

// function makeCounter(start) {
//   let count = start;
//   return {
//     inc: function () {
//       count++;
//     },
//     dec: function () {
//       count--;
//     },
//     value: function () {
//       return count;
//     },
//   };
// }

// let c1 = makeCounter(22);
// let c2 = makeCounter(60);

// c1.inc();
// c1.inc();
// c2.dec();
// c2.dec();

// console.log(c1.value());
// console.log(c2.value());

// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call. Demonstrate separate instances.

// function makeAdder(start) {
//   let total = start;
//   return function (x) {
//     total += x;
//     return total;
//   };
// }

// let adder1 = makeAdder(10);
// let adder2 = makeAdder(200);

// console.log(adder1(10));
// console.log(adder1(4));
// console.log(adder1(8));

// console.log(adder2(20));
// console.log(adder2(5));
// console.log(adder2(10));

// 15. Implement memoize1(fn). Show it caches slowSquare(9) twice.

// function slowSquare(n) {
//   return n * n;
// }

// function memoize1(fn) {
//   const cache = {};
//   return function (x) {
//     if (cache[x] !== undefined) {
//       return cache[x];
//     }
//     const result = fn(x);
//     cache[x] = result;
//     return result;
//   };
// }

// const fastSquare = memoize1(slowSquare);

// console.log(fastSquare(9));
// console.log(fastSquare(9));

// 16. (Bonus) Implement memoizeN(fn) that supports any number of primitive args by joining them with '|' as a key. Show with add3(a,b,c).

// function add3(a, b, c) {
//   return a + b + c;
// }

// function memoizeN(fn) {
//   const cache = {};
//   return function (...args) {
//     const key = args.join("|");
//     if (!cache[key]) {
//       cache[key] = fn(...args);
//     }
//     return cache[key];
//   };
// }

// const fastAdd3 = memoizeN(add3);

// console.log(fastAdd3(5, 2, 10));
// console.log(fastAdd3(5, 2, 10));
// console.log(fastAdd3(7, 1, 4));
// console.log(fastAdd3(7, 1, 4));

// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.

// let user = {
//   name: "Abdoo",
//   sayHi: function () {
//     console.log("Hi " + this.name);
//   },
// };

// user.sayHi();

// let f = user.sayHi;
// f();

// When you call user.sayHi(), `this` refers to the user object, so this.name is "Abdoo".
// When you do let f = user.sayHi; and call f(), `this` is no longer the user object.
// In strict mode, `this` is undefined; in non-strict mode, it’s the global object.
// That’s why this.name becomes undefined and the output changes

// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.

// let user = {
//   name: "Abdoo",
//   sayHi: function () {
//     console.log("Hi " + this.name);
//   },
// };

// user.sayHi.call({ name: "Sara" });

// user.sayHi.apply({ name: "Sara" });

// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.

// let greeter = {
//   greet: function (greeting, sign) {
//     console.log(greeting + " " + this.name + sign);
//   },
// };
// greeter.greet.apply({ name: "Ali" }, ["Hello", "!"]);

// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.

// let greeter = {
//   greet: function (greeting, sign) {
//     console.log(greeting + " " + this.name + sign);
//   },
// };

// let greetLara = greeter.greet.bind({ name: "Lara" });

// greetLara("Hi", "!");
// greetLara("Welcome", "!");
// greetLara("Good morning", "!");

// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).

// let greeter = {
//   greet: function (greeting, sign) {
//     console.log(greeting + " " + this.name + sign);
//   },
// };

// function sayHello(obj, sign) {
//   greeter.greet.bind(obj, "Hello")(sign);
// }

// sayHello({ name: "Abdo" }, "!");
// sayHello({ name: "Ahmed" }, "*");
// sayHello({ name: "Omar" }, "!!");
// sayHello({ name: "Nour" }, "<#");

// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.

// function reverseArgs() {
//   let argsArray = Array.prototype.slice.call(arguments);

//   let reversed = argsArray.slice().reverse();

//   console.log("Original:", argsArray);
//   console.log("Reversed:", reversed);
// }

// reverseArgs(5, 1, 3, 4);

// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.

// let arr = [5, 2, 11, 7];

// let max1 = Math.max(...arr);
// console.log(max1);

// let max2 = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max2) {
//     max2 = arr[i];
//   }
// }
// console.log(max2);

// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.

// console.log(Math.max.call(null, 5, 2, 11, 7));
//call passes numbers individually; apply is better for arrays because it spreads them automatically.

// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.

// let name = "Abdo";
// let age = 23;

// console.log("User: " + name + " Age: " + (age + 1));

// console.log(`User: ${name} Age: ${age + 1}`);

// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.

// let x = "Hello";
// let y = "My Name is Abdelkader.";

// let template = `
// Title: ${x}
// Body: ${y}
// `;
// console.log(template);

// let old = "Title: " + x + "\nBody: " + y;
// console.log(old);

// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.

// if (true) {
//   var i = 10;
//   let j = 20;
//   console.log("Inside block:", i, j);
// }

// console.log("Outside block:", i);
// console.log(j);

//var leaks outside the block (function-scoped) while let is block-scoped, does not leak outside.

// 28. Write code that tries to log x before let x = 5;.

// console.log(x);
// let x = 5;

//Variables declared with let and const are not hoisted like var, accessing them before the declaration causes a Temporal Dead Zone (TDZ) error.

// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).

// const arr = [1, 2, 3];

// arr.push(6);
// console.log(arr);

// arr = [5, 6, 7]; //Uncaught TypeError: Assignment to constant variable.

// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].

// function square(n) {
//   return n * n;
// }

// const squareConcise = (n) => n * n;

// const squareFull = (n) => {
//   return n * n;
// };

// const arr = [1, 2, 3];
// const squaredArr = arr.map((n) => n * n);

// console.log(squareFull(5));
// console.log(squareConcise(8));
// console.log(squaredArr);

// 31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}). Show difference in how this works (stop after a few increments using clearInterval).

// let timer = {
//   count: 0,
//   startClassic: function () {
//     const intervalId = setInterval(function () {
//       console.log("Classic:", this.count);
//       this.count++;
//     }, 500);

//     setTimeout(() => clearInterval(intervalId), 2500);
//   },
//   startArrow: function () {
//     const intervalId = setInterval(() => {
//       console.log("Arrow:", this.count);
//       this.count++;
//     }, 500);

//     setTimeout(() => clearInterval(intervalId), 2500);
//   },
// };
// timer.startArrow();

// Classic function in setInterval has its own this → not bound to timer.

// Arrow function inherits this from surrounding context → refers to timer.

// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.

// const wrong = () => {
//   v: 10;
// };
// console.log(wrong());

// const correct = () => ({ v: 10 });
// console.log(correct());

// Arrow function with {} is seen as a block, not an object literal.

// Parentheses tell JS "this is an object to return".

// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).
// const user = {
//   name: "Abdo",
//   sayHi: () => {
//     console.log("Hi " + this.name);
//   },
// };

// user.sayHi();

// Arrow functions do not have their own this, not good for object methods that need dynamic this, because this will refer to the surrounding scope, not the object.

// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).

// function greet(name) {
//   return "Hi " + name + "!";
// }

// const greetArrow = (name) => "Hi " + name + "!";

// console.log(greetArrow("Abdo"));

// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).

// const add2 = (n) => n + 2;
// const times3 = (n) => n * 3;
// const minus1 = (n) => n - 1;

// function runPipeline(n, fns) {
//   let result = n;
//   for (const fn of fns) {
//     result = fn(result);
//   }
//   return result;
// }
// const result = runPipeline(5, [add2, times3, minus1]);

// console.log(result);

// 36. (write answers BEFORE running):
// var obj = {
//   n: 1,
//   inc: function () {
//     this.n++;
//     return this.n;
//   },
// };
// var inc = obj.inc;
// console.log(obj.inc());
// console.log(inc());
//    Explain both lines.

// obj.inc, this refers to obj, so obj.n is incremented from 1 → 2
// inc() would be NaN this' is no longer obj, it's undefined (strict) or window/global

// 37. Create many counters in a loop (e.g. 1000) and store them in an array. Comment on potential memory considerations of large closure arrays.
// function makeCounter() {
//   let count = 0;
//   return () => ++count;
// }

// const counters = [];
// for (let i = 0; i < 1000; i++) {
//   counters.push(makeCounter());
// }

// console.log(counters[0]());
// console.log(counters[0]());
// console.log(counters[999]());
//Each counter keeps its own `count` in memory. Having many (e.g., 1000+) closures uses more memory because each keeps its state alive.

// 38. Write safeFirst() that returns undefined if called with zero args else return array of the args.

// function safeFirst(...args) {
//   if (args.length === 0) return undefined;
//   return args;
// }

// console.log(safeFirst());
// console.log(safeFirst(1, 2, 3));
// console.log(safeFirst("a"));
// 39. factory(namesArray) returns object with a counter function for each name (all independent). Example: var counters = factory(['a','b']); counters.a(); counters.b();

// function factory(names) {
//   const result = {};
//   for (const name of names) {
//     let count = 0;
//     result[name] = () => ++count;
//   }
//   return result;
// }

// const counters = factory(["a", "b"]);
// console.log(counters.a());
// console.log(counters.a());
// console.log(counters.b());
// console.log(counters.b());

// 40. Write 2 things that were new or tricky today (comment).

// arrow functions and their behaviour with this
//memorization with multiple arguments
