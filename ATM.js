// var a  //declare
// var b = 20 //inilization
// console.log(a,b) //life save 

// var userName = "Ali";
// console.log(userName);

// var smit1Web1Rol1l1111 = 1128171
// console.log( typeof(count))

// var Data ="test"
// console.log(Data)
// var nametest = "Test"
// nametest.toLocaleUpperCase()

// string + number => concatenation
// - ,*,/ => number 
// var a="13q"
// var b = a-5
// console.log(b)
//nan

// var a=10
// var b= 20
// var add = a+b
// var sub = a-b
// var multi = a*b
// var div = a/b

// console.log(add,sub,multi,div)

// var a="10"
// var b= "20"
// var add = a+b
// var sub = a-b
// var multi = a*b
// var div = a/b

// console.log(add,sub,multi,div)


// var a="10"
// var b= 20
// var add = a+b
// var sub = a-b
// var multi = a*b
// var div = a/b

// console.log(add,sub,multi,div)


// var a="10a"
// var b= "20"
// var add = a+b
// var sub = a-b
// var multi = a*b
// var div = a/b

// console.log(add,sub,multi,div)

var p= prompt("Enter pKR")
console.log("User Inputs: ",p);
var fiveTho = p / 5000 ; //get five thousand
console.log("5000 :"+Math.floor(fiveTho))

var fiveTho = p%5000; //left 
// console.log(lefth)

var oneT = fiveTho / 1000 ; //get thousand
console.log("1000 :"+Math.floor(oneT))

var oneT = p%1000; //left 
// console.log(lefth)

var fiveT = oneT / 500 ; //get five hundred
console.log("500 :"+Math.floor(fiveT))

var th5 = p%500; //left 
// console.log(lefth)

var hund = th5 / 100 ; //get hundred
console.log("100 :"+Math.floor(hund))

var lefth = p%100; //left 
// console.log(lefth)

var fifty = lefth/50; //get 50
console.log(" 50 "+Math.floor(fifty))

var fiftyl= lefth%50; //left 
// console.log(fiftyl)

var ten = fiftyl/10; //10
console.log("10 : "+Math.floor(ten))

var fiftyl= fiftyl%10; //left 
console.log(fiftyl)