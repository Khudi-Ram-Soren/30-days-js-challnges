// Task-1 : Write a program to print numbers form 1 to 10 using a for loop.

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Task-2 : Write a program to print the multiplication tale of 5 using a for loop.

let table = 5; 

for(let i = 1; i <= 10; i++){
    console.log(`${i} * ${table} = `,(i * table));
}

// Task-3 : Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let num = 1;
let sumOfNum = 0;

while(num <= 10){
    sumOfNum = (sumOfNum + num);
    num++;
}

console.log("sum of 1 to 10 is : ", sumOfNum);

// Task-4 : Write a program to print numbers from 10 to 1 using a while loop.

let numTwo = 10;

while(numTwo >= 1){
    console.log(numTwo);
    numTwo--;
}

// Task-5 : Write a program to print numbers from 1 to 5 using a do...while loop.

let numThree = 1;

do {
    console.log(numThree);
    numThree++;

} while (numThree <= 5);

// Task-6 : Write a program to calculate the factorial of a number using a do..while loop.

let numFour = 5;
const factorialOf = numFour;
let factorial = 1;

do {
    factorial = factorial * numFour;
    numFour--;
} while (numFour >= 1);

console.log(`Factorial of ${factorialOf}! is : `, factorial);

// Taks-7 : Write a program to print a pattern using nested for loops.

let star = "";
for( let i = 1; i <= 5; i++){
    star = "";
    for(let j = 1; j <= i; j++){
        star += "*\t";
    }
    console.log(star);
}

// Task-8 : Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for(let i = 1; i <= 10; i++){
    if(i == 5){
        continue;
    }
    console.log(i);
}

// task-9 : Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for(let i = 1; i <= 10; i++){
    if(i == 7){
        break;
    }
    console.log(i);
}