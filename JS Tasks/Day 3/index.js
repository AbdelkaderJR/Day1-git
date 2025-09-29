/**
 ---
BOM (Browser Object Model)
**/

// //1. Open a new window with a specific URL and size, then close it after 3 seconds using JavaScript.
// var newWindow = window.open(
//   "https://www.google.com",
//   "_blank",
//   "width=600,height=400"
// );

// setTimeout(() => {
//   if (newWindow) {
//     newWindow.close();
//   }
// }, 3000);
// 2. Display the browser's user agent string in an alert.

// alert("User agent" + navigator.userAgent);

// 3. Use `navigator` to detect if the browser is online or offline and log the result.

// console.log(navigator.onLine);

// 4. Write code to reload the current page after 5 seconds.

// setTimeout(() => {
//   location.reload();
// }, 5000);

// 5. Get the current page URL, protocol, and hostname using `location` and log them.

// console.log(location.href);
// console.log(location.protocol);
// console.log(location.hostname);

// 6. Use `history` to go back one page, then forward one page (write the code, don't actually run it).

// history.back()
// history.forward()

// 7. Show the screen width and height in a div -change the div content- on the page.

// var div = document.getElementById("q7");
// width = screen.width;
// height = screen.height;
// div.textContent =
//   "Screen width: " + width + "px, Screen height: " + height + "px";

// 8. Use `setTimeout` to change the content of a hyperlink -a- with a new content after 2 seconds, and provide a button to cancel it.

// var link = document.getElementById("q8");

// var timeout = setTimeout(() => {
//   link.textContent = "The New Text";
// }, 2000);

// function cancelBtn() {
//   clearTimeout(timeout);
//   console.log("NewText is cancled");
// }

// 9. Use `setInterval` to update the time  on the page title every second, and a button to stop it.

// function getCurrentTime() {
//   return new Date().toLocaleTimeString();
// }

// var intervalId = setInterval(function () {
//   document.title = getCurrentTime();
// }, 1000);

// function stopTime() {
//   clearInterval(intervalId);
//   console.log("Time stopped");
// }
// 10. Show a confirm dialog asking "Do you want to continue?" and log the user's choice("user said yes", "user said no").

// if (confirm("Do you want to continue?")) {
//   console.log("User said yes");
// } else {
//   console.log("User said no");
// }

// ---
// DOM Traversal (Nodes, Elements, Collections)

// 11. Select the first `<ul>` in the document and log its `childNodes` and `children` properties. Explain the difference in a comment.

// var ul = document.querySelector("ul");
// console.log("childNodes:", ul.childNodes);
// console.log("children:", ul.children);

// 12. Write a function that logs the tag names of all direct child elements of `<body>`.

// function child() {
//   var bodyChildren = document.body.children;
//   for (var i = 0; i < bodyChildren.length; i++) {
//     console.log(bodyChildren[i].tagName);
//   }
// }

// child();

// 13. Given a parent element, loop through its `childNodes` and log only the nodes that are elements (not text/comments).

// function elementNode(parent) {
//   parent.childNodes.forEach((node) => {
//     if (node.nodeType === Node.ELEMENT_NODE) {
//       console.log(node);
//     }
//   });
// }
// var parentElement = document.querySelector("ul");
// elementNode(parentElement);

// 14. Use `firstChild` and `firstElementChild` on a container and explain the difference in a comment.

// var container = document.getElementById("container");

// var firstChild = container.firstChild;
// console.log(firstChild);

// var firstElementChild = container.firstElementChild;
// console.log(firstElementChild);

// 15. Write code to get all `<li>` elements inside a `<ul>` using `children` and explain the difference.

// var ul = document.getElementById("ul");
// console.log(ul.children); //Display HTML Collections only
// console.log(ul.childNodes); //Display All Texts,elements

// 17. Write a function that logs all sibling elements of a given element (excluding itself).

// function logElements(element) {
//   var parent = element.parentElement;
//   var siblings = parent.children;

//   for (var i = 0; i < siblings.length; i++) {
//     if (siblings[i] !== element) {
//       console.log(siblings[i]);
//     }
//   }
// }
// var el = document.querySelector("li");
// logElements(el);

// 18. Use `nextSibling` and `nextElementSibling` to traverse from the first child to the last child of a `<ul>`, logging each node.

// var ul = document.getElementById("ul");

// console.log("Using nextSibling:");
// var node = ul.firstChild;
// while (node) {
//   console.log(node);
//   node = node.nextSibling;
// }

// console.log("Using nextElementSibling:");
// var element = ul.firstElementChild;
// while (element) {
//   console.log(element);
//   element = element.nextElementSibling;
// }
// 19. Count how many element children a given node has (not using `children.length`).
// function countElementChildren(node) {
//   var count = 0;
//   node.childNodes.forEach((child) => {
//     if (child.nodeType === Node.ELEMENT_NODE) {
//       count++;
//     }
//   });
//   return count;
// }

// var ul = document.querySelector("ul");
// console.log(countElementChildren(ul));

// 20. Write a function that takes the first form element and logs the names and values of all its input fields using the `elements` collection.
// function logFormInputs() {
//   var form = document.forms[0];
//   for (var i = 0; i < form.elements.length; i++) {
//     var element = form.elements[i];
//     if (element.name) {
//       console.log(element.name);
//       console.log(element.value);
//     }
//   }
// }
// window.onload = logFormInputs;
// 21. Access all forms in the document using `document.forms` and log their names.

// var forms = document.forms;

// for (var i = 0; i < forms.length; i++) {
//   console.log(forms[i].name || `Form ${i + 1} has no name`);
// }

// 22. Access all images in the document using `document.images` and log their `src` attributes.
// var images = document.images;

// for (var i = 0; i < images.length; i++) {
//   console.log(images[i].src);
// }

// 23. Write a function that takes a form and disables all its input fields using the `elements` collection.

// function disableInput(form) {
//   for (var i = 0; i < form.elements.length; i++) {
//     form.elements[i].disabled = true;
//   }
// }
// var myForm = document.forms[0];
// disableInput(myForm);

// 24. Use `Array.from` to convert `document.images` to an array and filter images with width > 100px.

// var imagesArray = Array.from(document.images);

// var largeImages = imagesArray.filter((img) => img.width > 100);

// console.log(largeImages);
