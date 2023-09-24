// Task 1
// const input = prompt("Enter a character (number or string):");

// const charCode = input.charCodeAt(0);

// if (!isNaN(input)) {
//     document.write("The input is a number.", input);
// } 
// else if (charCode >= 65 && charCode <= 90) {
//     document.write("The input is an uppercase letter.", input);
// } 
// else if (charCode >= 97 && charCode <= 122) {
//     document.write("The input is a lowercase letter.", input);
// } 
// else {
//     document.write("Invalid input. Please enter a character (number or string).", input);
// }


//Task 2
const input1 = prompt("Enter the first integer:");
const num1 = parseInt(input1);

const input2 = prompt("Enter the second integer:");
const num2 = parseInt(input2);

if (!isNaN(num1) && !isNaN(num2)) {
    if (num1 > num2) {
        document.write(`The larger integer is: ${num1}`);
    } else if (num2 > num1) {
        document.write(`The larger integer is: ${num2}`);
    } else {
        document.write("The two integers are equal.");
    }
} else {
    document.write("Invalid input. Please enter two valid integers.");
}
