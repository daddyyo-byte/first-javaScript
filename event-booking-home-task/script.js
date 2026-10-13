const guestName = "   Amina Yusuf   ";
const eventName = "Creative Meetup";
const eventDate = "24 October 2026";
const venue = "Lagos Community Hall";
const activities = "Design,Photography,Writing";
const bookingId = "83";
const ticketPrice = 2500;
const ticketQuantity = 2;

// Task 1

const cleanName = guestName.trim();
console.log(cleanName.toUpperCase());
console.log(cleanName.toLowerCase());
console.log(cleanName.length);
console.log(cleanName.charAt(0));
console.log(eventName.includes("Meetup"));
console.log(eventName.indexOf("Meetup"));
console.log(eventName.substring(0, 8));
console.log(activities.split(","));

const formattedBookingId = bookingId.padStart(4,"00");
console.log(formattedBookingId);
console.log(bookingId.padEnd(4, "00"));
console.log("see you there ".repeat(3));


 const bookingMessage = "Welcome, " + guestName + " ! " + " Your booking for " + eventName + " on " + eventDate + venue + " has been received. " + "We look forward to seeing you!";
 const secondMessage = "Welcome,".concat(guestName, " ! ",  " Your booking for ", eventName , " on ", eventDate, venue , " has been received., " , "We look forward to seeing you!");

 console.log(bookingMessage);
 console.log(secondMessage);

 const bookingSummary = `${guestName} booked 2 tickets for ${eventName} on ${eventDate} at ${venue}. The booking ${formattedBookingId} is 0083, and the total cost is ${ticketPrice * ticketQuantity}.`;
 console.log(bookingSummary)

 console.log(eventName.replace("Creative",  "Community"));
 console.log(eventName)