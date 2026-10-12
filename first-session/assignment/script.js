const bookTitle = "Ralia The Sugar Girl";
const author = "    Damilola    ";
const borrowerName = null;
let returnDate;

let numberOfAvailableCopies = 10;
numberOfAvailableCopies = 6;

console.log(bookTitle);
console.log(author);
console.log(numberOfAvailableCopies);
console.log(borrowerName);
console.log(returnDate);





const book = {
    title: "Ochacho Money",
    price: 500.00,
    isAvailable: true,
}

console.log(book.title);
console.log(book.price);
console.log(book.isAvailable);

console.log(typeof(book.title));
console.log(typeof(book.price));
console.log(typeof(book.isAvailable));

const books = ["romance", "Mystery", "Fantasy"]

console.log(books[2])

books[0] = "thriller";

console.log(books)

//strings

console.log(bookTitle.length);
console.log(bookTitle.toLowerCase());
console.log(bookTitle.toUpperCase());
console.log(bookTitle.slice(0, 3));
console.log(bookTitle.indexOf("l"));
console.log(author.trim());