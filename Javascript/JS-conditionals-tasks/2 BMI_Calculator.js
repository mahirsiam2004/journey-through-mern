/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
let weight = 40;
let height = 1.75;
const ans = weight / height;
if (ans < 18) {
  console.log("you are underweight");
} else if (ans >= 18.5 && ans <= 24.9) {
  console.log("you are normal");
} else if (ans >= 25 && ans <= 29.9) {
  console.log("you are overweight");
} else console.log("you are obese");
