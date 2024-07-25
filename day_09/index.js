// Task-1 : Select an HTML element by its ID and change its text content.

const headerElem = document.getElementById("hello");
headerElem.innerText = "Hii this text have changed using by JS";

// Task-2 : Select an HTML element by its class and change its background color.

const task2Element = document.getElementsByClassName("task2");
task2Element[0].style.backgroundColor = "yellow";

// Task-3 : Create a new div element with some text content and append it to the body.

const body = document.getElementsByTagName("body").item(0);
const task3Emelent = document.createElement("div");
const textNodeForTask3 = document.createTextNode("hello this div is created by JS");
task3Emelent.appendChild(textNodeForTask3);
body.appendChild(task3Emelent);

// Task-4 : Create a new li element and add it to an existing ul list.

const task4Element = document.getElementById("task4");
const listIteam = document.createElement("li");
listIteam.innerText = "this Goat is created by js";
task4Element.appendChild(listIteam);

// Task-5 : Select an HTML element and remove it from the DOM.

const bodyForTask5 = document.getElementsByTagName("body").item(0);
const task5Element = document.getElementById("task5");
bodyForTask5.removeChild(task5Element);

// Task-6 : Remove the last child of a specific HTML element.

const elementOfTask6 = document.getElementById("task6");
const childrenElementOFTask6 = elementOfTask6.children;
const forRemoveChild = childrenElementOFTask6[childrenElementOFTask6.length - 1];
elementOfTask6.removeChild(forRemoveChild);

// Task-7 : Select an HTML element and change one of its attributes(e.g., src of an img tag).

const imageElemtenOfTask7 = document.getElementById("task7");
imageElemtenOfTask7.setAttribute("src", "./garden-4647544_1280.jpg");

// task-8 : Add and remove a CSS class to/from an HTML element.

const elementOfTask8 = document.querySelector("#headOftask8");
elementOfTask8.setAttribute("class", "funTask8");

const afterAddAttributes = document.getElementsByClassName("funTask8").item(0);
afterAddAttributes.style.color = "red";

const forRemoveAttributes = document.getElementById("headOftask8");
forRemoveAttributes.removeAttribute("class");

document.querySelector("#btn").addEventListener("click", function () {
    document.querySelector("#task9").innerText = "hii this is magic"
});

const mBox = document.querySelector("#magicBox");
mBox.addEventListener("mouseover", function(event){
    event.target.style.borderColor = "pink";
    setTimeout(() => {
        event.target.style.borderColor = "blue";
    },500)
})

