// 1. Select the first <div> on the page using getElementsByTagName and log its innerHTML.

// var x = document.getElementsByTagName("div")[0];
// console.log(x.innerHTML);

// 2. Using getElementById change the text of #my-p to "Hello DOM".

// var x = (document.getElementById("my-p").textContent = "Hello DOM");

// 3. Use querySelector to select the element with class "target-div" and log its nodeName.

// var x = document.querySelector(".target-div");
// console.log(x.nodeName);

// 4. Use querySelectorAll to count how many <div> elements exist; log the count.

// var x = document.querySelectorAll("div");
// console.log(x.length);

// 5. Use getElementsByName on the email input (name="user-email") and set its value to "user@test.com".

// var x = (document.getElementsByName("user-email")[0].value = "user@test.com");

// 6. Check if the text input has a "name" attribute; if not add name="user-name" via setAttribute.

// var x = document.querySelector('input[type="text"]');
// if (!x.hasAttribute("name")) {
//   x.setAttribute("name", "user-name");
// }
// 7. Append the string " - UPDATED" to the existing innerText of #my-p (keep original text).

// var x = document.getElementById("my-p");
// x.innerText += " New Text";

// 8. Create Images slider that work automatically and with next/prev/start/stop buttons.    ------
// var images = [
//   "resources/photo1.jfif",
//   "resources/photo2.jfif",
//   "resources/photo3.webp",
//   "resources/photo4.jpg",
//   "resources/photo5.jpg",
// ];

// var currentIndex = 0;
// var sliderInterval = null;

// var imageElement = document.getElementById("slider-image");

// function showImage(index) {
//   imageElement.src = images[index];
// }

// function nextImage() {
//   currentIndex = (currentIndex + 1) % images.length;
//   showImage(currentIndex);
// }

// function prevImage() {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   showImage(currentIndex);
// }

// function startSlider() {
//   if (!sliderInterval) {
//     sliderInterval = setInterval(nextImage, 2000);
//   }
// }

// function stopSlider() {
//   clearInterval(sliderInterval);
//   sliderInterval = null;
// }
// startSlider();
// 9. Set the placeholder of the text input to "Type your full name" using setAttribute.

// var x = document.querySelector('input[type="text"]');
// x.setAttribute("placeholder", "Type your full name");

// 10. Log whether the email input has attribute "required"; if missing add it.

// var x = document.querySelector('input[type="email"]');
// if (x.hasAttribute("required")) {
//   console.log("required attribute exists");
// } else {
//   console.log("missed");
//   x.setAttribute("required", "");
// }

// 11. Write function getSelectedValue(selectId) returning the current selected option value.

// function getSelectedValue(selectId) {
//   var x = document.getElementById("my-select");
//   return x.value;
// }
// console.log(getSelectedValue("my-select"));

// 12. Loop through all options of the select and log each option's text and value.

// var x = document.getElementById("my-select");
// for (var option of x.options) {
//   console.log(option.text, option.value);
// }

// 13. Programmatically select the option with value "EG".

// var x = document.getElementById("country");
// x.value = "EG";

// 14. Create function selectByText(selectId, text) that selects the first option whose text matches exactly.

// function selectByText(selectId, text) {
//   var x = document.getElementById("country");

//   for (var option of x.options) {
//     if (option.text == text) {
//       x.value == option.value;
//       break;
//     }
//   }
// }
// selectByText("country", "United kingdom");

// 15. Replace innerHTML of #div-2 with a <p><b>Bold Text</b></p> (ensure bold renders, not printed literally).

// document.getElementById("div-2").innerHTML = "<p><b>Bold Text</b></p>";

// 16. Add classes class-a and class-b to #div-2 then remove class-b (using classList).

// var x = document.getElementById("div-2");

// x.classList.add("class-a", "class-b");
// x.classList.remove("class-b");

// 17. Toggle class "hidden" on #div-2 twice; comment final visibility.

// var x = document.getElementById("div-2");

// x.classList.toggle("hidden"); //hidded
// x.classList.toggle("hidden"); //displayed

// 18. Create function insertAfter(refNode, newNode) that inserts newNode immediately after refNode.

// function insertAfter(refNode, newNode) {
//   refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
// }
// var ref = document.getElementById("ref");
// var newEl = document.createElement("p");
// newEl.textContent = "New content";
// insertAfter(ref, newEl);

// 19. Create a new <div> saying "Dynamic Box" with yellow background and append inside #div-2.

// var newDiv = document.createElement("div");
// newDiv.textContent = "Dynamic Box";
// newDiv.style.backgroundColor = "yellow";

// document.getElementById("div-2").appendChild(newDiv);

// 20. Insert a new <p> BEFORE the first child of #div-2 (insertBefore).

// var parent = document.getElementById("div-2");
// var p = document.createElement("p");
// p.textContent = "This is a new paragraph";

// var firstChild = parent.firstChild;
// parent.insertBefore(p, firstChild);

// 21. Insert a <span> with text "AFTER END" right after #div-2 using insertAdjacentHTML.

// var div2 = document.getElementById("div-2");

// div2.insertAdjacentHTML("afterend", "<span>AFTER END</span>");

// 22. Form onsubmit: prevent default and log values of text, email, and select inputs.

// var form = document.getElementById("my-form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   var username = form.querySelector('input[type="text"]').value;
//   var email = form.querySelector('input[type="email"]').value;
//   var selectValue = form.querySelector("#my-select").value;

//   console.log(username);
//   console.log(email);
//   console.log(selectValue);
// });

// 23. Add input event on the text input that logs its length whenever it changes.

// var textInput = document.querySelector('input[type="text"]');

// textInput.addEventListener("input", function () {
//   console.log(textInput.value.length);
// });

// 24. Write validateEmailSimple(value) returning true if value contains both '@' and '.'; add 2 passing / 2 failing examples (comments).

// function validateEmailSimple(value) {
//   return value.includes("@") && value.includes(".");
// }

// console.log(validateEmailSimple("abdelkader@gmail.com"));
// console.log(validateEmailSimple("abdo.jr@mail.co"));

// console.log(validateEmailSimple("abdo.com"));
// console.log(validateEmailSimple("abdelkader@examplecom"));

// 25. Create an element, append it to #div-2, then remove it using parent.removeChild(child).

// var newElem = document.createElement("p");
// newElem.textContent = "I am a new paragraph";

// var parentDiv = document.getElementById("div-2");

// parentDiv.appendChild(newElem);

// parentDiv.removeChild(newElem);

// 25. Create an element, append it to <div id="wrapper">
//   <p id="first">First</p>
//   <p id="second">Second</p>
// </div>

// var newPara = document.createElement("p");
// newPara.textContent = "I am a new paragraph";

// var wrapper = document.getElementById("wrapper");

// wrapper.appendChild(newPara);

// 26. Clone #div-2 , set clone id="div-2-clone", and insert it after original using insertAfter.

// var div2 = document.getElementById("div-2");

// var clone = div2.cloneNode(true);

// clone.id = "div-2-clone";

// div2.parentNode.insertBefore(clone, div2.nextSibling);

// 27. Highlight all text & email inputs (green border) in a function highlightInputs(form) and call it on DOMContentLoaded.

// function highlightInputs(form) {
//   var inputs = form.querySelectorAll('input[type="text"], input[type="email"]');

//   inputs.forEach((input) => {
//     input.style.border = "2px solid green";
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   var form = document.getElementById("my-form");
//   highlightInputs(form);
// });

// 28. Build function buildCard(title, content) returning <div class="card"> with an <h3> and <p>; append two cards to body.

// function buildCard(title, content) {
//   var card = document.createElement("div");
//   card.className = "card";

//   var heading = document.createElement("h3");
//   heading.textContent = title;

//   var paragraph = document.createElement("p");
//   paragraph.textContent = content;

//   card.appendChild(heading);
//   card.appendChild(paragraph);

//   return card;
// }

// document.body.appendChild(buildCard("Card 1", "This is the first card."));
// document.body.appendChild(buildCard("Card 2", "This is the second card."));

// 29. Add delegated click listener on body logging when a .card is clicked.

// function buildCard(title, content) {
//   var card = document.createElement("div");
//   card.className = "card";

//   var heading = document.createElement("h3");
//   heading.textContent = title;

//   var paragraph = document.createElement("p");
//   paragraph.textContent = content;

//   card.appendChild(heading);
//   card.appendChild(paragraph);

//   return card;
// }

// document.body.appendChild(buildCard("Card 1", "This is the first card."));
// document.body.appendChild(buildCard("Card 2", "This is the second card."));

// document.body.addEventListener("click", function (event) {
//   var card = event.target.closest(".card");
//   if (card) {
//     console.log("Card clicked:", card.querySelector("h3").textContent);
//   }
// });

// 30. Reflection (comment): Which two tasks were most challenging and why?

//No 28 ->Because I had to remember how to use createElement, set text, and append elements step by step instead of using innerHTML.
//No 29 Because I needed to understand event delegation and how to use event.target.closest(".card") to detect clicks on cards instead of attaching listeners one by one.

// 31. create and unordered list dynamically with at 10 items, the odd list items should have class "odd" and even items "even", -create the two classes in your CSS file-

// var ul = document.createElement("ul");

// for (var i = 1; i <= 10; i++) {
//   var li = document.createElement("li");
//   li.textContent = "Item " + i;

//   if (i % 2 !== 0) {
//     li.className = "odd";
//   } else {
//     li.className = "even";
//   }

//   ul.appendChild(li);
// }

// document.body.appendChild(ul);

//32- form contains 3 inputs name,email,city(select option)
//when write name in input it appears in other div
//when write email in input it appears also in other div

// var nameInput = document.getElementById("nameInput");
// var emailInput = document.getElementById("emailInput");
// var citySelect = document.getElementById("citySelect");

// var nameOutput = document.getElementById("nameOutput");
// var emailOutput = document.getElementById("emailOutput");
// var cityOutput = document.getElementById("cityOutput");

// nameInput.addEventListener("input", function () {
//   nameOutput.textContent = nameInput.value;
// });

// emailInput.addEventListener("input", function () {
//   emailOutput.textContent = emailInput.value;
// });

// citySelect.addEventListener("change", function () {
//   cityOutput.textContent = citySelect.value;
// });
