// var age = prompt("Enter Your Age")
// if (age >= 1 && age <= 8){
//     document.write("You Get Ticket Free Lucj free")
// }
// else if(age >= 9 && age <= 20){
//     document.write("You get half ticket free lunch free")
// }
// else if(age >= 21 && age <= 30){
//     document.write("Yfor you not free every thing")
// }
// else if(age >= 31 && age <= 50){
//     document.write("You get ticket free lucn free and extra transport free")
// }
// else if(age > 50){
//     document.write("Bas ab Allah Allah karo")
// }
// else if(age > 100){
//     document.write("Ham apse milna ha ")
// }

// var num1 = +prompt("Enter First number")
// if (num1.toString().charCodeAt(0) >= 48 && num1.toString().charCodeAt(0) <= 57) {
//     // document.write("enter good data")
//     var operator = prompt("Enter Operator")
//    if(operator== "+"){
//     var num2 = +prompt("enter second number")
//     var res = num1+num2
//     document.write("a + b is "+ res)
//    }
//    else if(operator=="-"){
//     var num2 = +prompt("enter second number")
//     var res = num1-num2
//     document.write("a - b is "+ res)

//    }
//    else if(operator=="*"){
//     var num2 = +prompt("enter second number")
//     var res = num1*num2
//     document.write("a * b is "+ res)

//    }
//    else if(operator=="/"){
//     var num2 = +prompt("enter second number")
//     var res = num1/num2
//     document.write("a / b is "+ res)

//    }
//    else{
//     document.write("masla kiya ha bhai")
//    }
   
// }
// else {
//     document.write("bhai data sei enter nhi kiya ")
// }

// var obtainMarks = +prompt("enter obtain marks")
// var totalmarks = +prompt("enter Total  marks")
// if(obtainMarks>0 && totalmarks >0){
//     if(totalmarks >= obtainMarks){
//         var percentage = obtainMarks/totalmarks*100
//         // document.write("<h1>total marks"+totalmarks+"</h1><h1>obtain marks"+obtainMarks+"</h1><h1> Percentage : "+percentage+"</h1>")
//         document.write("<h1>total marks"+totalmarks+"</h1>")
//         document.write("<h1>Obtain marks"+obtainMarks+"</h1>")
//         document.write("<h1>percentage"+percentage+"</h1>")
//         if(percentage>80){
//             document.write("<h1>Grade A1</h1>")
//         }
//         else if(percentage>70 && percentage<=80){
//             document.write("<h1>Grade A</h1>")
//         }
//         else if(percentage>60 && percentage<=70){
//             document.write("<h1>Grade B</h1>")
//         }
//         else if(percentage>50 && percentage<=60){
//             document.write("<h1>Grade C</h1>")
//         }
//         else if(percentage>40 && percentage<=50){
//             document.write("<h1>Grade D</h1>")
//         }
//         else {
//             document.write("<h1>bhai dekha lya yrr</h1>")
//         }
        

//     }
//     else{
//         document.write("please enter correct data")
//     }

// }
// else if(obtainMarks==0 ) {
//     document.write("you fail ")
// }
// else{
//     document.write("yr data sei enter karoo")
// }

var input = prompt("Enter a number:");

var number = parseFloat(input);

if (!isNaN(number)) {
    if (number > 0) {
        document.write("The number is positive.");
    } else if (number < 0) {
        document.write("The number is negative.");
    } else {
        document.write("The number is zero.");
    }
} else {
    document.write("Invalid input. Please enter a valid number.");
}

