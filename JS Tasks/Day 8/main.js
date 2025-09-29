import DataFetcher, { greetUser } from "./utils.js";

// 1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.

console.log(greetUser("Sasa"));

// 2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.

const task = new Promise((resolves) => {
  setTimeout(() => {
    resolves("Task Completed");
  }, 2000);
});
task.then((result) => {
  console.log(result);
});

// 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".

async function waitAndGreet() {
  await new Promise((resolves) => {
    setTimeout(resolves, 1000);
  });
  return "Welcome!";
}
waitAndGreet().then(console.log);

// 4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.

async function userData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let x = await response.json();
  console.log(x.name);
  console.log(x.email);
}
userData();

// 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.

async function posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await response.json();
  return posts.slice(0, 3).map((pos) => pos.title);
}
posts().then(console.log);

// 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.

function timerPromise() {
  let p = Promise.resolve();
  for (let i = 1; i <= 3; i++) {
    p = p.then(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            console.log(i);
            resolve();
          }, 1000);
        })
    );
  }
}

timerPromise();

// 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.

function validJson(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.log(error);
  }
}

console.log(validJson('{"name": "Omar"}'));
console.log(validJson("{name: Omar}"));

// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.

async function fetchData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/todos"
  );
  const data = await response.json();
  return data.filter((data) => data.completed).length;
}
fetchData().then((count) => console.log(count));

// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.

const api = new DataFetcher();
api.getUser(1).then((user) => console.log(user));
