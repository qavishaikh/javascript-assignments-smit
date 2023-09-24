// Taking input from the user
const input = prompt("Enter a character (number or string):");

// Get the ASCII code of the input character
const charCode = input.charCodeAt(0);

// Check if the input is a number
if (!isNaN(input)) {
    document.write("The input is a number.", input);
} 
// Check if the input is an uppercase letter
else if (charCode >= 65 && charCode <= 90) {
    document.write("The input is an uppercase letter.", input);
} 
// Check if the input is a lowercase letter
else if (charCode >= 97 && charCode <= 122) {
    document.write("The input is a lowercase letter.", input);
} 
// Handle invalid input
else {
    document.write("Invalid input. Please enter a character (number or string).", input);
}
