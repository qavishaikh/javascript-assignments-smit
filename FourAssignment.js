const userInput = prompt("Enter a time (e.g., 8:00 AM):");

if (userInput === "8:00 AM") {
    document.write(`<h1>At ${userInput}, Operating System Class Till "8:60 AM"</h1>`);
} else if (userInput === "9:00 AM") {
    document.write(`<h1>At ${userInput}, Database System Management Class Till "9:60 AM"</h1>`);
} else if (userInput === "10:00 AM") {
    document.write(`<h1>At ${userInput}, IT Project Management Class Till "10:60 AM"</h1>`);
} else if (userInput === "11:00 AM") {
    document.write(`<h1>At ${userInput}, Probability Statistics Class Till "11:60 AM"</h1>`);
} else if (userInput === "12:00 PM") {
    document.write(`<h1>At ${userInput}, Break Time Till "12:30 PM"</h1>`);
} else if (userInput === "12:30 PM") {
    document.write(`<h1>At ${userInput}, Python Programming Class Till "1:30 PM"</h1>`);
} else if (userInput === "1:30 PM") {
    document.write(`<h1>At ${userInput}, It's time to go home!</h1>`);
} else {
    document.write(`<h1>Bhai, time to sahi se dekho: ${userInput}.</h1>`);
}
