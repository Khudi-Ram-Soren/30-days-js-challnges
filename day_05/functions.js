// Task-1 : Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOrOddNumber(num){
    if((num % 2) == 0){
        console.log(`${num} is an even number`);
    } else {
        console.log(`${num} is an odd number`);
    }
}

let inputNumber = 181;
checkEvenOrOddNumber(inputNumber);

// Task-2 : Write a function to calculate the square of a number and return the result.

function squareOfNumber(num){
    return (num*num);
}

let inputNumberTwo = 7;
const result = squareOfNumber(inputNumberTwo);
console.log(result);

// Task-3 : Write a function expression to find the maximum of two numbers and log the result to the console.

const maximumOfTwoNumber = function(num1, num2){
    if(num1 > num2){
        console.log(`${num1} is grater than ${num2}`);
    } else {
        console.log(`${num2} is grater than ${num1}`);
    }
}

let numberOne = 34;
let numberTwo = 87;

maximumOfTwoNumber(numberOne, numberTwo);

// Task-4 : Write a function expression to concatenate two strings and return the result.

const concatTwoStrings = function(strOne, strTwo){
    return (`${strOne}${strTwo}`);
}

let firstName = "raju ";
let lastName = "soren";

let funllName = concatTwoStrings(firstName, lastName);
console.log(funllName);

// Task-5 : Write an arrow function to calculate the sum of two numbers and return the result.

const sumOfTwoNumbers = (num1, num2) => {
    return (num1 + num2);
}

let priceOne = 45;
let priceTwo = 45;

const resultOfSum = sumOfTwoNumbers(priceOne, priceTwo);
console.log(resultOfSum);

// Task-6 : Write an arrow function to check if a string contains a specific character and return a boolean value.

const checkCharAtString = (char, inputString) => {
    if( typeof char !== "string" ){
        return console.log("Invalid character");
    }else if( char.length > 1) {
        return console.log("Invalid character");
    }

    if( typeof inputString !== "string"){
        return console.log("Invalid String");
    }else if(!( char.length >= 1)) {
        return console.log("Invalid String");
    }

    for(let i = 0; i < inputString.length; i++){
        if(inputString[i] === char){
            return true;
        }
    }

    return false;
}

let bigString = "hi i am raju";
let chars = "u";

const resultCheckChar = checkCharAtString(chars, bigString);
console.log(resultCheckChar);

// Task-7 : Write a function that takes two parameters and returns their product, Provide a default value for the second parameter.

function productOfTwoNumber(num1, num2 = 2){
    return (num1 * num2);
}

let inputNumberThree = 23;
let inputNumberFour = 3;

const resultProduct = productOfTwoNumber(inputNumberThree, inputNumberFour);
console.log(resultProduct);

// Task-8 : Write a function that takes a person's name and age returns a greeting message. Provide a default value for the age.

function greetingMessage(entername, age = 16){
    return (`Hi ${entername} your age is ${age} and wellcome to 1% club`);
}

let name = "raju";
let age =  34;

const message = greetingMessage(name, age);
console.log(message);

// Task-9 : Write a higher-order function that takes a function and number, and calls the function that many times.

function higherOrderfun(fn, inpNumber){
    for(let i = 1; i <= inpNumber; i++){
        fn();
    }
}

function demoFunction () {
    console.log("hello world!");
}

higherOrderfun(demoFunction, 3);

// Task-10 : Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function anotherHigherOrderfun(fn, fntwo, value){
    fntwo(fn(value));
}

function demofunOne(num){
    return num;
}

function demofunTwo(Inum){
    console.log(Inum);
}

anotherHigherOrderfun(demofunOne, demofunTwo, "Mohan");