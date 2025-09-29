// 1- Write a function that greets a user, using a default parameter for the name.

function greets(name = "Abdelkader") {
  return `Hello, ${name}`;
}
console.log(greets());

console.log(greets("Abdo"));

// 2- Write a function that calculates the total price with a default tax rate parameter.
function calc(price, taxRate = 0.2) {
  totalPrice = price + price * taxRate;
  return totalPrice;
}
console.log(calc(100));
console.log(calc(100, 0.3));

// 3- Write a function that creates a user object, using a default role parameter.

function userObj(name, role = "user") {
  return { name, role };
}

console.log(userObj("Omar"));
console.log(userObj("Omar", "Admin"));

// 4- Write a function that multiplies any number of arguments using the rest operator.

function multiplyNum(...num) {
  return num.reduce((a, c) => a * c, 1);
}
console.log(multiplyNum(2, 3, 4));

// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.

function testfn(first, ...num) {
  const sum = num.reduce((a, c) => a + c, 0);
  return first * sum;
}

console.log(testfn(2, 2, 3, 6));

// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
function strArray(...strs) {
  return strs;
}
console.log(strArray("A", "B", "D", "O"));

// 7- Create a new array by combining two arrays using the spread operator.

let firstArr = [1, 2, 3, 4];
let secondArr = [5, 6, 7, 8];
let combineArr = [...firstArr, ...secondArr];
console.log(combineArr);

// 8- Copy an array using the spread operator.
let arr1 = [2, 3, 4];
let copyArr = [...arr1];
console.log(copyArr);

// 9- Merge two objects into one using the spread operator.
let obj1 = {
  name: "Abdelkader",
  age: 23,
};
let obj2 = {
  city: "Alexandria",
  serve: "Navy Army",
};

let mergedObjects = {
  ...obj1,
  ...obj2,
};
console.log(mergedObjects);

// 10- Update a property in an object using the spread operator to create a new object.

let obj3 = {
  name: "Abdo",
  age: 23,
};
let newObj = {
  ...obj3,
  age: 24,
};
console.log(newObj);

// 11- Destructure an array to get the first and second elements into variables.

let desArr = [1, 5, 10, 20];
const [first, second] = desArr;
console.log(first, second);

// 12- Destructure an array to get the first element and the rest into another array.
let desArr2 = [3, 5, 1, 2, 4, 3];
const [firstNum, ...newArr] = desArr2;
console.log(firstNum);
console.log(newArr);

// 13- Destructure an object to extract two properties into variables.

let newObj2 = {
  name: "Abdo",
  age: 23,
};
const { name, age } = newObj2;
console.log(name, age);

// 14- Destructure an object and rename the extracted properties.
let newObj3 = {
  name: "Abdo",
  age: 23,
};
const { name: userName, age: myAge } = newObj2;
console.log(userName, myAge);

// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.

function myObj(newObj5) {
  return Object.values(newObj5);
}
let newObj5 = { name: "Abdo", city: "Alex" };
console.log(myObj(newObj5));
