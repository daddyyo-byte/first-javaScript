// 1. simple if statement

let batteryLevel = 80;

if(batteryLevel < 20){
    console.log("Low battery! Please charge your device");
}

//2. Calculate a Cinema Bill

const ticketPrice = "2500";
const ticketCount = 3;
const budget = 10000;

//Convert ticketPrice to a number and calculate the total cost.

const total = Number(ticketPrice) + ticketCount + budget;
console.log(total);
console.log(total.toFixed(2));

if(total >= budget){
    console.log("Booking affordable");
    console.log("Booking affordable");
}
else{
    console.log("Not enough money");
    console.log("Not enough money");
}

//3. Practise Math Methods

const measurement = 7.68;

console.log(Math.round(measurement));
console.log(Math.floor(measurement));
console.log(Math.ceil(measurement));

const num1 = 28;
const num2= 93;
const num3 = 16;

console.log(Math.min(num1,num2,num3));
console.log(Math.max(num1,num2,num3));

// 4 Check Library Access

const hasLibraryCard = true;
const hasGuestPass = false;
const isSuspended = false;

// A person can enter if they have a library card or a guest pass, and are not suspended.

const canEnter =  (hasLibraryCard || hasGuestPass) && !isSuspended;

if(canEnter){
    console.log("Access Granted");
}
else{
    console.log("Access Denied");
}

// 5

let distance = 0;

if (distance >= 0 && distance <= 5){
    console.log(`Delivery: ₦500`);
}
else if(distance > 5 && distance <= 15){
    console.log(`Delivery: ₦1000`);
}
else{
    console.log(`Delivery: Unavailable`);
}