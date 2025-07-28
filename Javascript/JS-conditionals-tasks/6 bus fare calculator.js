/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 25;           
let isStudent = true;   
let regularFare = 800;
let finalFare;

if (age < 10) {
  finalFare = 0;
  console.log("Children under 10: Ticket is free.");
} else if (isStudent) {
  finalFare = regularFare * 0.5;
  console.log("Student Discount: 50% off.");
} else if (age >= 60) {
  finalFare = regularFare * 0.85;
  console.log("Senior Citizen Discount: 15% off.");
} else {
  finalFare = regularFare;
  console.log("Regular Ticket Fare applies.");
}

console.log(`Final Ticket Fare: ${finalFare} tk`);
