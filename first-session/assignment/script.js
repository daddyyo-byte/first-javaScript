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


//class task

const title = "Welcome to our coding club";

console.log(title.includes("coding"));
console.log(title.startsWith("welcome"));
console.log(title.endsWith("club"));
console.log(title.substring(15, 21));

// 2.

const Books = "Books are useful. Books are exciting.";
console.log(Books.replace("Books", "Stories"));
console.log(Books.replaceAll("Books", "Stories"));

// 3. 
const colours =  "red,blue,green";
console.log(colours.split(","));

// 4.

const number =  "42";
console.log(number.padStart(4,"00"))
console.log(number.padEnd(4,"00"))

// 5

const word1 = "happy";
const word2 = "ending";

const result = word1.concat(" ", word2);

console.log(result);
console.log(result.repeat(2));
console.log(result.charAt(1));

//6

//practice Tasks:

const greeting1 = "Good";
const greeting2 = "morning";
const solution  = greeting1 + " " + greeting2;
console.log(solution)

const visitorName = "Chidi";
const solution1 = "Welcome" + " " + visitorName;
console.log(solution1);

const customerName = "Zainab";
const ticketCount = 3;
const eventName = "Music Night";
const bookingMessage =  customerName + " booked " + ticketCount + " tickets for " + eventName + ".";
const SecondMessage = customerName.concat(" booked ", ticketCount, " tickets for ", eventName, ".");

console.log(bookingMessage);

console.log(SecondMessage);

//class task 2

const name1 = "ochacho money";
const age1 = 18;
const course = "fullstack";
const Intro = `Hi, i'm ${name1} and i'm ${age1}. I have got news guys, i'm studying ${course} at TechStudio`;

console.log(Intro)

// 3. Create productName, price, and quantity.

const productName = "Aquarite";
const price = 200.00;
const quantity = 4;

console.log(`${productName} is ${price} multiplied by ${quantity} which is 400.00 as the total cost.`);
console.log(`Welcome ${name1}`)






