// task-1 : Declare a variables using var, assign it a number and log the value to console

var number = 369;
console.log(number);

// task-2 : Declare a variaable using let, assign it a string, and log the value to the console

let fruit = "mango"
console.log(fruit);

// task-3 : Declare a variable using const, assign it a boolean value, and log the value to the console

const isLoggedIn = false;
console.log(isLoggedIn);

// task-4 : Create a varibles of different data types(number, string, boolean, object, array) and log each variable's type using the typeof operator

const price = 199;
const hero = "ironmen";
const isCorrect = true;

const studentData = {
    name: "Khudi Ram Soren",
    age: 16,
    class: 1
}

const animals = ["horse", "cow", "goat"];

console.table([typeof price, typeof hero, typeof isCorrect, typeof studentData, typeof animals]);

// task-5 :Declare a variable using let, assign it an initial value, reassign a new value, and log both value to the console

let carName = "mercedes";
console.log("value of carName is : ", carName);

carName = "monkey";
console.log("value of carName is : ", carName);

// task-6 : Try reassigning a variable declared with const and observe the error.

const city = "ranchi";
city = "delhi"; // we can't reassign a value to const because of const variable is not reassignable in javaScript

// Feature Request: 
// 1. Variable Types Console Log: Write a script that declares variables of different data types and log both the value and type of each variable to the console.

function valueAndType(argument){
    let arraysValueElement, arraysTypeofElement;

    if(!Array.isArray(argument) && typeof argument === "object"){
        arraysValueElement = Object.values(argument);

    } else if(Array.isArray(argument)){
        arraysTypeofElement = 'array'
    }

     this.Value = arraysValueElement??argument;
     this.DataType = arraysTypeofElement??typeof argument;
}

function logValueOfVariablesAndDatatype (...variables){

    let newAssignedVaribles = []

    if(variables[0].length > 0 && typeof variables[0] === "object"){
        const realValue = variables[0].flat(Infinity);

        realValue.forEach(element => {
            newAssignedVaribles.push(new valueAndType(element));
        });

        console.table(newAssignedVaribles);

    } else {
        variables.forEach(element => {
            newAssignedVaribles.push(new valueAndType(element));
        });

        console.table(newAssignedVaribles);
    }
}

logValueOfVariablesAndDatatype(number, fruit, animals, isLoggedIn, studentData);





