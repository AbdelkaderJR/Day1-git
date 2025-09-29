// numbers > .toFixed(), toPrecision(), parseFloat(), parseInt() , 0.1+0.2

// strings > .length, .slice(), .substring(), .toUpperCase(), .toLowerCase(),  .trim(), .indexOf(), .lastIndexOf(), .split()

// Math > .round(), .floor(), .ceil(), .abs(), .sqrt(), .pow(), .max(), .min(), .PI, random int

// arrays > .push(), .pop(), .shift(), .unshift(), .splice(), .sort(), .reverse(), .forEach(), .map(), .slice(), .filter(), .reduce()

// Boolean

// Date >> self Study

// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.
// var str = "258.90"
// var num = parseInt(str)
// console.log(num);
// var floatNum = parseFloat(str)
// console.log(floatNum);

//2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.
// var x = 7.45678
// var num = +x.toFixed(2)
// console.log(num,typeof(num));

// 3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.
// var str = 'abc'
// console.log(isNaN(str)); //returns true

// console.log(isNaN(null)); //returns false for a non-number.

//4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.

// var x = 0.1 + 0.2
// console.log(x == 0.3); // false
// console.log(typeof(x.toFixed(1)));
// var newValue = +x.toFixed(1)
// console.log(newValue == 0.3); //true

//5. Write a function to safely parse a string that may contain trailing text (e.g. "120px") returning the integer part or null if it starts with non-digit.

// var parseStr = (n) => {
//   var strToNum = parseInt(n);
//   if (isNaN(strToNum)) {
//     return null;
//   } else {
//     return strToNum;
//   }
// };

// console.log(parseStr("120px"));

// 6. Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comments).

// var isFiniteNumber = (value) => {
//   if (Number.isFinite(value)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isFiniteNumber(Infinity));

// 7. Remove leading and trailing spaces from the string "   hello world  ".

// var str = "   hello world  ";
// var newStr = str.trim();
// console.log(newStr);

//8. Get the substring "script" from "javascript" using two different methods (slice + substring).

// var str = "javascript";

// var newStr = str.substring(4, 10);
// console.log(newStr);

// var newStr2 = str.slice(4, 10);
// console.log(newStr2);

//9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).

// var str = "Banana Mania";

// var newStr = str
//   .toLowerCase()
//   .split("")
//   .filter((e) => e == "a");
// console.log(newStr.length);

//10. Write a function reverseString(s) without using array reverse (iterate backwards).

// var reverseString = (str) => {
//   var newStr = "";

//   for (var i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// };

// console.log(reverseString("Banana"));

//11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".

// var capitalizeWords = (sentence) => {
//   var newStr = sentence
//     .split(" ")
//     .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
//     .join(" ");
//   return newStr;
// };
// console.log(capitalizeWords("hello there friend"));

//12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.

// var extractDomain = (url) => {
//   var start = url.indexOf("://");
//   start = start !== -1 ? start + 3 : 0;

//   var end = url.indexOf("/", start);
//   return end !== -1 ? url.slice(start, end) : url.slice(start);
// };

// console.log(extractDomain("https://example.com/path/to/page"));

//13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).

// function naiveIndexOf(haystack, needle) {
//   for (var i = 0; i <= haystack.length - needle.length; i++) {
//     var match = true;
//     for (var j = 0; j < needle.length; j++) {
//       if (haystack[i + j] !== needle[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(naiveIndexOf("hello", "ll"));

// 14. Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.

// var s = "hello";
// if ((s.toUpperCase = "HELLO")) {
//   console.log("match");
// }

// // = makes the value be assigned to s.toUpperCase not to compare between them
// // to compare between them use == or ===
// if (s.toUpperCase == "HELLO") {
//   console.log("match");
// }

//15. Create an array of the numbers 1..5, then push 6 and unshift 0.
// var arr = [];
// for (var i = 1; i <= 5; i++) {
//   arr.push(i);
// }
// console.log(arr);
// arr.push(6);
// console.log(arr);
// arr.unshift(0);
// console.log(arr);

//16. Remove the last element and store it. Remove the first element and store it.

// var arr = [1, 2, 3, 4, 5];
// var lastElement = arr.join("").slice(-1);
// console.log(+lastElement);

// var firstElement = arr.join("").slice(0, 1);
// console.log(+firstElement);

//17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.

// var arr = [10, 20, 30, 40, 50];
// var newArr = arr.slice(0, 3);
// console.log(newArr);

//18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].

// var arr = [1, 2, 3, 4, 5];

// arr.splice(2, 2, "a", "b");

// console.log(arr);

//19. Demonstrate the difference between slice and splice on the same starting array (show original after each).

//Slice don't change the original array it rerurns a new array with the selected values
// var arr = [1, 2, 3, 4, 5, 6, 7];
// var newArr = arr.slice(0, 2);
// console.log(newArr);

//Splice modifies the original array by adding/removing and modifying original array

// var arr2 = [1, 2, 3, 4, 5, 6, 7];
// arr2.splice(0, 2);
// console.log(arr2);

//20. Create a sparse array by assigning index 7 on a fresh [] then log length.

// var arr = [];
// arr[7] = "Abdo";
// console.log(arr.length);

//21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).

// var compact = (array) => {
//   result = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i]) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// };
// console.log(compact([1, 3, 6, 7, 8, false]));

//22. Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .

// function deepClone1D(a) {
//   var clone = [];
//   for (var i = 0; i < a.length; i++) {
//     clone[i] = a[i];
//   }
//   return clone;
// }

// var copy = deepClone1D([1, 2, 3, 4]);

// console.log(copy);

//23. Map [1,2,3] to their squares using map.

// var arr = [1, 2, 3];

// var newArr = arr.map((e) => e * e);
// console.log(newArr);

//24. Filter [5,10,15,20] to keep values >= 12.

// var arr = [5, 10, 15, 20];

// var newArr = arr.filter((e) => e >= 12);

// console.log(newArr);

//25. Reduce [2,4,6] to product.

// var arr = [2, 4, 6];
// var newArr = arr.reduce((a, c) => a + c, 0);
// console.log(newArr);

//26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.

// var arraySum = (a) => {
//   return a.reduce((a, c) => a + c, 0);
// };

// var arraySumLoop = (a) => {
//   var sum = 0;
//   for (var i = 0; i < a.length; i++) {
//     sum += a[i];
//   }
//   return sum;
// };

// var arr = [1, 2, 3, 4, 5];

// console.log(arraySum(arr));
// console.log(arraySumLoop(arr));

//27. Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first letters) without using map (use for loop).

// var names = ["Ali", "Sara", "Kareem"];
// var arr = [];

// for (var i = 0; i < names.length; i++) {
//   arr.push(names[i][0]);
// }

// console.log(arr);

//28. Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.

// var unique = (a) => {
//   var result = [];

//   for (var i = 0; i < a.length; i++) {
//     var isDuplicate = false;

//     for (var j = 0; j < result.length; j++) {
//       if (a[i] === result[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }

//     if (!isDuplicate) {
//       result.push(a[i]);
//     }
//   }

//   return result;
// };

// console.log(unique([1, 2, 3, 3, 4, 5, 5]));

//29. Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).

// function flatten1(arr) {
//   var result = [];

//   for (var i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       for (var j = 0; j < arr[i].length; j++) {
//         result.push(arr[i][j]);
//       }
//     } else {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(flatten1([1, [2, 3], [4], 5]));

//31. Create object person with name and age; add a new property city after creation.

// var obj = {
//   name: "Abdo",
//   age: 23,
// };
// obj.property = "Alexandria";

// console.log(obj);

// //32. Access a property via bracket notation with a dynamic key variable.

// console.log(obj["property"]);

//33. Write function countKeys(obj) returning number of own enumerable properties (use for-in).

// function countKeys(obj) {
//   var count = 0;
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       count++;
//     }
//   }
//   return count;
// }

// var user = {
//   name: "Abdo",
//   age: 23,
// };

// console.log(countKeys(user));

//39. List (as comments) 5 different values that coerce to false in ES5.

// 1- 0
// 2- false
// 3- null
// 4- undefined
// 5- NaN

//40. safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.

// var safeToBoolean =(v)=> {
//   return v === true || v === "true" || v === 1 || v === "1";
// }

// console.log(safeToBoolean(true));

//41. Create a Date for Jan 1, 2025 00:00 local.

// var date = new Date(2025, 0, 1, 0, 0, 0);

// console.log(date);

//42. Get the current year from new Date().

// var currentYear = new Date().getFullYear();
// console.log(currentYear);

//43. Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).

// function daysBetween(d1, d2) {
//   var x = 1000 * 60 * 60 * 24;
//   var diff = d2.getTime() - d1.getTime();
//   return Math.floor(diff / x);
// }

// var d1 = new Date(2024, 11, 3);
// var d2 = new Date(2025, 8, 22);

// console.log(daysBetween(d1, d2));

//44. Generate a random integer 1..100.

// var x = Math.floor(Math.random() * 100) + 1;
// console.log(x);

//45. Round 4.567 to nearest integer, round down, and round up (three results).

// var x = 4.567;

// var rounded = Math.round(x);
// var down = Math.floor(x);
// var up = Math.ceil(x);

// console.log(rounded, down, up);

//46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).

// var randomIntArray = (n, min, max) => {
//   var arr = [];
//   for (var i = 0; i < n; i++) {
//     var x = Math.floor(Math.random() * (max - min + 1)) + min;
//     arr.push(x);
//   }
//   return arr;
// };

// console.log(randomIntArray(5, 1, 10));

//56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).

// var parsePriceList =(str)=> {
//   var result = {};
//   var items = str.split(";");
//   for (var i = 0; i < items.length; i++) {
//     var parts = items[i].split(":");
//     result[parts[0]] = parseFloat(parts[1]);
//   }
//   return result;
// }
// console.log(parsePriceList("Apple:2.50;Orange:1.75;Banana:3"));

//57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.

// var filterAndSortNumbers = (mixedArray) => {
//   var arr = [];
//   for (var i = 0; i < mixedArray.length; i++) {
//     if (typeof mixedArray[i] === "number" && isFinite(mixedArray[i])) {
//       arr.push(mixedArray[i]);
//     }
//   }
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   return arr;
// };

// var input = [
//   3,
//   "5",
//   NaN,
//   10,
//   Infinity,
//   -2,
//   null,
//   7.2,
//   undefined,
//   0,
//   -Infinity,
//   4,
//   {},
//   3.14,
// ];
// var output = filterAndSortNumbers(input);

// console.log(output);
