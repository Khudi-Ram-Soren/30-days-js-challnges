// Task-1 : Use template literals to create a string tha includes variables for a person's name and age, and log the string to the console.

let name = "raju soren";
let age = 30;

console.log(`Hii ${name} your age is ${age}`);

// Task-2 : Create a multi-line string using template literals and log it to the console.

let santense = (`Rtia : Hey Tina? Is it you? \n
Tina : Oh Rita! How are you? it's been a long time. \n
Rita : I am fine, What abut you? Yes, We last met during the board exams. \n
Tina : I'am good too. \n`);

console.log(santense);

// Task-3 : Use Array destructuring to extract the first and second elements froman array of numbers and log them to the console.

const numberArr = [1, 2, 3, 4, 5, 6, 7];
const [firstValue, Secondvalue] = numberArr;

console.log("First Value : ", firstValue);
console.log("Second Value : ", Secondvalue);

// Task-4 : Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
    title: "Shape of things to come",
    author: "H.G Wells"
}

const {title, author} = book;
console.log("title : ",title);
console.log("autor : ",author);

// Task-5 : Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const animals = ["dog", "horse", "cow", "dear"];
const fruits = ["mango", "apple", "banana", ...animals];
console.log(fruits);

// Task-6 : Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sumOfNumbers(...rest){
    const arbitrarayNum = rest;
    let sumOfNum = 0;
    let check;

    for(let i = 0; i < arbitrarayNum.length; i++){
        check = arbitrarayNum[i];
        if(typeof check != "number"){
            return (`${check} is Invalid. Please input arbitrary number`);
        }
    }

    arbitrarayNum.map((value) => {
        sumOfNum = sumOfNum + value;
    })

    return sumOfNum;

}


const sumnumber = sumOfNumbers(1,2,3,4,56, "5");
console.log("sum of numbers is : ", sumnumber);

// Task-7 : Write a functio that takes two parameters and returns their product, with the second parameter having a default value of 1. log the result of calling this function with and without the second parameter.

function productOfTwoNumbers(num1, num2 = 1){
    return (num1 * num2);
}

let withSecondParam = productOfTwoNumbers(3, 5);
let withoutSecondParam = productOfTwoNumbers(45);

console.log("with the second parameter : ", withSecondParam);
console.log("without the second parameter : ", withoutSecondParam);

// Task-8 : Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let animalName = "duke";
let color = "white";
let ageOfAnimal = 4;
let tailentOfAnimal = function (){
    console.log(`my dog name is ${this.animalName} and it's color is ${this.color} and age is ${this.ageOfAnimal}`);
}

const myAnimal = {animalName, color, ageOfAnimal, tailentOfAnimal};
console.log(myAnimal);

// Task-9 : Create an object with computed property names based on variables and log the object to the console.

const key1 = "occupation";
const key2 = "name";
const key3 = "class";
const key4 = "roll";

const dataOfSchool = {
    [key1] : "student",
    [key2] : "Rajat",
    [key3] : "IX",
    [key4] : 7
}

console.log(dataOfSchool);