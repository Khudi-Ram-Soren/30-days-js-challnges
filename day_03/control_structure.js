// Task-1 : Write a program to check if a number is positive, negative, or zero, and log the result to the consle.

let number = -76;
if((typeof number) !== "number"){
    console.log("Input datatype is not a number");
} else if(number === 0) {
    console.log(`${number} is zero`);
} else if(number > 0) {
    console.log(`${number} is positive`);
} else if(number < 0) {
    console.log(`${number} is negative`);
}

// Task-2 : Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 18;

if(age >= 18){
    console.log(`your age is ${age} and you are eligible to vote.`);
} else if(age < 18 && age >= 13) {
    console.log(`your age is ${age} and you are not eligible to vote.`);
} else if(age < 13 && age >= 1) {
    console.log(`your age is ${age} and you are not eligible to vote and right now you should to go to school.`);
}else {
    console.log("Invalid age")
}

// Task-3 : Write a program to find the largest of three numbers using nested if-else statements.

let numOne = 445;
let numTwo = 654;
let numThree = 596;

if(numOne > numTwo) {

    if(numOne > numThree) {
        console.log("largest number is : ",numOne);
    }

} else if( numTwo > numOne) {

    if(numTwo > numThree) {
        console.log("largest number is : ",numTwo);
    }

} else if(numThree > numOne) {

    console.log(numThree);
    if(numThree > numTwo) {
        console.log("largest number is : ", numThree);
    }

} 

// task-4 : Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let weekDay = 7;

switch (weekDay) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day : Input day should be (1 - 7)");
        break;
}

// Task-5 : Write a program that uses a switch case to assign grade ("A", "B", "C", "D", "F") bsed on a Score and log the grade to the console.

let score = 40;

switch(true){
    case (score <= 100 && score >= 90):
        console.log(`Score ${score} = Grade A`);
        break;
    case (score < 90 && score >= 75):
        console.log(`Score ${score} = Grade B`);
        break;
    case (score < 75 && score >= 60):
        console.log(`Score ${score} = Grade C`);
        break;
    case (score < 60 && score >= 40):
        console.log(`Score ${score} = Grade D`);
        break;
    case (score < 40 && score >= 1):
        console.log(`Score ${score} = Grade F`);
        break;
    default:
        console.log("Invalid Score : Score should be between 1 to 100");
        break;
}

// Task-6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let inpuNum = 34;

(0 == (inpuNum % 2))? console.log(`${inpuNum} is Even Number`) : console.log(`${inpuNum} is Odd Number`);

// Task-7 : Write a program to check if a year is a leap year using myltiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2000;

if(0 == (year % 100)){
    if((year % 4) == (year % 400)){
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
} else if( 0 == (year % 4)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}

