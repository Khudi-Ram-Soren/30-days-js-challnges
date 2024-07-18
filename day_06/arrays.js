// Task-1 : Create an aray of numbers from 1 to 5 and log the array to the console.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Task-2 : Access the first and last elements of the array and log them to the console.

console.log("first element of numbers array : ", numbers[0]);
console.log("last element of numbers array : ", numbers[numbers.length - 1]);

// Task-3 : Use the push method to add a new number to the end of the array and log the updated array.

numbers.push(7);
console.log("updated numbers array  : ", numbers);

// Task-4 : Use the pop method to remove the last element from the array and log the updated array.

const animals = ["dog", "cat", "goat", "cow", "horse"];

animals.pop();
console.log("updated animals array : ", animals);

// Task-5 : use the shift method to remove the first element from the array and log the updated array.

const cars = ["BMW","TATA", "Ferrari", "Bugati", "Tesla"];

cars.shift();
console.log("Updated array of cars : ", cars);

// Task-6 : Use the unshift method to add a new number to the begining of the array and log the updated array.

const wholeNumbers = [0, 1, 2, 3, 4, 5];

wholeNumbers.unshift(45);
console.log("updated array : ", wholeNumbers);

// Task-7 : Use the map method to create a new array where each number is doubled and log the new array.

const customNumbers = [1, 2, 3, 4, 5, 6, 7];
const updatedCustomNumbers = [];

customNumbers.map((value) => {
    for(let i = 1; i <=2; i++){
        updatedCustomNumbers.push(value);
    }
});

console.log("created new array : ", updatedCustomNumbers);

// Task-8 : Use the filter method to create a new array with only even nmbers and log the new array.

const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 22, 33, 5];

const newMixedNumbers = mixedNumbers.filter((value) => (value % 2 == 0));
console.log(newMixedNumbers);

// Task-9 : Use the reduce method to calculate the sum of all numbers in the array and log the result.
const newNumbersArry = [1, 2, 3, 4, 5, 8, 6, 7];
const initialValue = 0;
const sumOfValue = newNumbersArry.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumOfValue);

// Task-10 : Use a for loop to iterate over the array and log each element to the console.

const fruits = ["apple", "mango", "papaya", "banana", "coconut"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Task-11 : Use the forEach method to iterate over the array and log each element to the console.

fruits.forEach((value) => {
    console.log(value);
})

// Task-12 : Create a two-dimensionsl array(matrix) and log the entire array to the console.

const subjectAndMarks = [["math", "phys", "chem", "bio", "hindi"], [99, 54, 67, 33, 100]];
console.log(subjectAndMarks);

// Task-13 : Access and log a specific element from the two-dimensionsl array.

console.log(subjectAndMarks[0][2]);
console.log(subjectAndMarks[1][2]);

