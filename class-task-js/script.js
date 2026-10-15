// let weight = 25;

// if(weight <= 0  || weight >= 22.5){
//     console.log("invalid weight");
// }
// else if(weight <= 2){
//     console.log("charge: #1,500");
// }
// else if(weight <= 5){
//     console.log("charge: #3,000");
// }
// else{
//     console.log("charge: #5,000");
// }

// let studentName = prompt("Enter your Fullname");
// let score = Number( prompt("Enter your score"));
// let grade;
// let remark;

// if(studentName.trim() === "" || score === null || score < 0 || score > 100){
//     grade = "N/A"
//     remark = "Invalid input"
// }
// else if(score < 40){
//     grade = "F"
//     remark = "Fail"
// }
// else if(score < 50){
//     grade = "D"
//     remark = "Fair"
// }
// else if(score < 60){
//     grade = "C"
//     remark = "Good"
// }
// else if(score < 70){
//     grade = "B"
//     remark = "Very Good"
// }
// else{
//     grade = "B"
//     remark = "Very Good"
// }

// console.log(grade, remark)

// let status;

// if(grade === "N/A"){
//     status = "Please enter a Valid score number btw 0 and 100";
// }
// else if(score > 40){
//     status = "Congratulations You passed!"

// }
// else{
//     status = "Sorry, You Failed... Try Again";
// }

// console.log(status)

// if(score < 0 || score > 100){
//     grade = "N/A"
//     remark =  "Invalid Score"
// }
// else if(score < 40){
//     grade = "F"
//     remark = "Fail"
// }
// else if(score < 50){
//     grade = "D"
//     remark = "Fair"
// }
// else if(score < 60){
//     grade = "C"
//     remark = "Good"

// }
// else if(score < 70){
//     grade = "B"
//     remark = "Very Good"
// }
// else{
//     grade = "A"
//     remark = "Excellent"
// }

// let result;

// if(grade === "N/A"){
//     result = "Please enter a Valid score number btw 0 and 100";
// }
// else if(score > 40){
//     result = "Congratulations You passed!"

// }
// else{
//     result = "Sorry, You Failed... Try Again";
// }

// // alert(`${studentName}, your score is ${score}. Grade:${grade} Remark: ${remark}`);

// console.log(`${studentName}, your score is ${score}. Grade:${grade} Remark: ${remark}`);

// console.log(result)

// 1. Nested Conditions: ATM Withdrawal

// const balance = 5000;
// const withdrawalAmount = 5000;
// const enteredPin = 2468;

// The correct PIN is "2468".
// Check the PIN first. If it is correct, check the withdrawal amount:
// - Zero or negative: "Enter a valid amount"
// - Greater than the balance: "Insufficient funds"
// - Otherwise: "Withdrawal successful" and display the remaining balance
// If the PIN is incorrect, display "Incorrect PIN".

// if(enteredPin === 24658){
//     if(withdrawalAmount <= 0){
//         console.log("Enter a valid amount");
//     }
//     else if(withdrawalAmount > balance){
//         console.log("Insufficient funds")
//     }
//     else{
//         console.log("Withdrawal successful");
//         console.log("Remaining Balance ",  balance - withdrawalAmount);
//     }
// }
// else{
//     console.log("incorrect PIN")
// }

// assignment

// let customerAge = Number(prompt("Enter Age"));
// let ticketMessage = customerAge <= 12 ?  "Children's discount applied!" :  "Regular ticket price applies.";
// console.log(ticketMessage);

// 2.

// "Welcome to FreshBite Restaurant!"
// const welcome = "Welcome to FreshBite Restaurant!";
// console.log(welcome);

// const foodOption = prompt("Enter your option");
// const appreciation = "Thank you for your order!";

// switch (foodOption.trim().toLowerCase()) {
//   case "rice":
//     console.log("Selected Meal: Rice");
//     console.log("Price: ₦3500");
//     console.log(appreciation);
    
//     break;

//   case "beans":
//     console.log("Selected Meal: beans");
//     console.log("Price: ₦2500");
//     console.log(appreciation);
//     break;

//   case "yam":
//    console.log("Selected Meal: yam");
//     console.log("Price: ₦3000");
//     console.log(appreciation);
//     break;

//   case "spaghetti":
//     console.log("Selected Meal: spaghetti");
//     console.log("Price: ₦4000");
//     console.log(appreciation);
//     break;

//   default:
//     console.log("Sorry, this meal is unavailable.");
//     break;
// }

// 3. 

// let studentName1 = prompt("Enter your Full name");
// let examScore = Number(prompt("Enter your exam score"));
// let attendance = Number(prompt("Enter your attendance score"));

// if(examScore < 0 || examScore > 100 || studentName1.trim() === "" 
// || examScore === null || attendance === null || Number.isNaN(examScore) || Number.isNaN(attendance)
// ){
//     console.log("invalid input, Ensure you type values btw 0 and 100.")
// }
// else if(examScore < 80 && attendance < 90){
//     console.log("You do not qualify for a scholarship.")
// }
// else{
//     console.log("Congratulations! You qualify for a scholarship.")
// }





