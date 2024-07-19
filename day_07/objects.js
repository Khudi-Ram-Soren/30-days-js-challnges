// Task-1 : Create an object representing a book wiht properties like title, author, and year, and log the object to the console.

const book = {
    title: "A Tale of Two Cites",
    autohr: "Charles Dickens",
    year: 1859
}

console.log(book);

// Task-2 : Access and log the title and author properties of the book object.

console.log("title : ", book.title);
console.log("author : ", book.autohr);

// Task-3 : Add a method to the book object that return a string wiht the book's title and author, and log the result of calling this method.

book.DetailsOfBook = function(){
    return (`${this.autohr} is the author of ${this.title}`);
}

const result = book.DetailsOfBook();
console.log(result);

// Task-4 : Add a method to the book object that takes a prameter(year) and updates the book's year property, then log the updated object.

book.changePublishedYear = function(inputYear){
    this.year = inputYear;
}

book.changePublishedYear(2024);
console.log("updated book Obj : ", book);

// Task-5 : Create a nested object representing a library with properties like name and books(an array of book objects), and log the library object to the console.

const library = {
    name: "National Library",
    books: [
        {
            title: "War and Peace",
            author: "Leo Tolstoy"
        },
        {
            title: "Ulysses",
            author: "James Joyce"
        },
        {
            title: "Utopia",
            author: "Sir Thomas Moor"
        },
        {
            title: "Waste Land",
            author: "T.S Eliot"
        },
    ]
}

console.log(library);

// Task-6 : Access and log the name of the library and the titles of all the books in the library.

console.log("Name of the library : ", library.name);
library.books.map((value, index) => {
    console.log(`Book ${index + 1} title : ${value.title}`);
})

// Task-7 : Add a method to book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

book.anotherLog = function(){
    return (`${this.title} is published in ${this.year}`);
}

const anotherResult = book.anotherLog();
console.log(anotherResult);

// Task-8 : Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (const key in book) {
    console.log(`${key} : ${book[key]}}`);
}

// Task-9 : Use Object.keys and object.values methods to log all the keys and values of the book object.

const keysOfBook = Object.keys(book);
const valuesOfBook = Object.values(book);

console.log("Keys of Book : ", keysOfBook);
console.log("Values of Book : ", valuesOfBook);