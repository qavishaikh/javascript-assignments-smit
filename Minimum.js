// Prompt the user for three numbers and store them in variables
var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));
var num3 = parseInt(prompt("Enter the third number:"));

// Check if all numbers are equal
if (num1 === num2 && num2 === num3) {
  console.log("All three numbers are equal: " + num1);
} else if (num1 <= num2 && num1 <= num3) {
  console.log(num1 + " is the Smallest number.");
} else if (num2 <= num1 && num2 <= num3) {
  console.log(num2 + " is the smallest number.");
} else {
  console.log(num3 + " is the smallest number.");
}
