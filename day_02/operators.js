// Task-1 : Write a program to add two numbers and log the result to the console.

const num1 = 23;
const num2 = 65;

console.log(num1 + num2);

// Task-2 : Write a program to subtract two numbers and log the result to the console.

const sellingPrice = 199;
const costPrice = 69;

console.log(sellingPrice - costPrice);

// Task-3 : Write a program to multiply two numbers and log the result to the console.

const length = 99;
const width = 43;

console.log(length * width);

// Task-4 : Write a program to divide two numbers and log the result to the console.

const mango = 45;
const person = 8;

console.log(mango/person);

// Task-5 : Write a program to find the remainder when one number is divided by another and log the result to the console.

const student = 10;
const chocolate = 43;

const remainderChocolate = (chocolate % student);
console.log(remainderChocolate);

// Task-6 : use the += operator to add a number to a variable and log the result to the console.

let marks = 43;
marks += 10;

console.log(marks);

// Task-7 : Use the -= operator to subtract a number from a variable and log the result to the console.

let money = 87;
money -= 30;

console.log(money);

// Task-8 : Write a program to compare two numbers using > and < and log the result to the console.

const height1 = 23;
const height2 = 34;

console.log(`Is ${height1} grater than ${height2} : `, (height1 > height2));
console.log(`Is ${height1} less than ${height2} : `, (height1 < height2));

// Task-9 : Write a program to compare two numbers useing >= and <= and log the result to the console.

const ramsHeight = 34;
const rajusHeight = 45;

console.log(`is ${ramsHeight} Greater than or equal to ${rajusHeight}`, (ramsHeight >= rajusHeight));
console.log(`is ${ramsHeight} less than or equal to ${rajusHeight}`, (ramsHeight <= rajusHeight));

// Task-10 : Write a program to compare two numbers using == and === and log the result to the console.

const speedOne = "99";
const speedTwo = 99;

console.log(speedOne == speedTwo);
console.log(speedOne === speedTwo);  // output will be false because there  data tyes is different.

// Task-11 : Write a program that uses the && operator to combine two conditions and log the result to the console.

const isRaining = true;
const isSunny = false;

console.log(isRaining && isSunny);

// Task-12 : Write a program that uses the || operator to combine two conditions and log the result to the console.

const isSunday = true;
const isTodaySchool = false;

console.log(isSunday || isTodaySchool);

// Task-13 : Write a program that uses the ! operator to negate a condition and log the result to the console.

const samuAge = 34;
const pinkiAge = 34;

console.log(!(samuAge == pinkiAge));

// Task-14 : Write a program the uses the ternary operator to check if a number is positive or negative and log the result to the console.

const temperature = -90;
(temperature > 0)? console.log("positive temp.") : console.log("negative temp.");

// Feature Request: 
//1. Arithmetic Operations Script: Write a script that performs basic arithmetic operation(addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

function basicArithmeticOperations(numA, numB){
    console.log(`${numA} + ${numB} = `, (numA + numB));
    console.log(`${numA} - ${numB} = `, (numA - numB));
    console.log(`${numA} * ${numB} = `, (numA * numB));
    console.log(`${numA} / ${numB} = `, (numA / numB));
    console.log(`Remainder of ${numA} % ${numB} = `, (numA % numB));
}

const priceOne = 34;
const priceTwo = 5;

basicArithmeticOperations(priceOne, priceTwo);

//2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, loggin the result.

function basicComparisonAndLogical(one, two){
    const graterThan = (one > two);
    const lessThan = (one < two);

    const graterThanOrEqual = (one >= two);
    const lessThanOrEqual = (one <= two);

    const equalTo = (one == two);

    console.log(`${one} > ${two} = `, graterThan);
    console.log(`${one} < ${two} = `, lessThan);
    console.log(`${one} >= ${two} = `, graterThanOrEqual);
    console.log(`${one} <= ${two} = `, lessThanOrEqual);
    console.log(`${one} == ${two} = `, equalTo);
    console.log(`${graterThan} && ${graterThanOrEqual} = `, (graterThan && graterThanOrEqual));
    console.log(`${lessThanOrEqual} || ${lessThan} = `, (lessThan || lessThanOrEqual));
    console.log(`!(${one} == ${two}) = `, !equalTo);
}

basicComparisonAndLogical(45,45);

//3. Ternary Operator Script: Write a script that use the ternary operator to determine if a number is positive or negative and log the result.

function typeofNumber(num){
    (num > 0)? console.log(`given number is positive : ${num}`) : console.log(`given number is negative : ${num}`);
}

typeofNumber(-34);
