// name
// store
// multiply 
// mike,laptop,mouse,keyboard,speaker,usb
// quantity => 4 
// 200

// laptop=>20000
// mouse,keyboard,mike=>200
// speaker,usb=>1000


var customerName = prompt("Enter Your Name")
var productName = prompt("Enter Product NAME")

if(productName.toLowerCase()== "mike" || productName.toUpperCase() == "keyboard" || productName.toLowerCase()=="mouse"){
    var price= 200
    var quantity =  +prompt("Enter Product Quantity")
    var res = price*quantity
    document.write(customerName +" Order :"+ productName + " quantity : "+ quantity+ " total : " + res )
}
else if(productName.toLowerCase()== "laptop" ){
    var price= 20000
    var quantity =  +prompt("Enter Product Quantity")
    var res = price*quantity
    document.write(customerName +" Order :"+ productName + " quantity : "+ quantity+ " total : " + res )
}

else if(productName.toLowerCase()== "speaker" || productName.toUpperCase() == "usb" ){
    var price= 1000
    var quantity =  +prompt("Enter Product Quantity")
    var res = price*quantity
    document.write(customerName +" Order :"+ productName + " quantity : "+ quantity+ " total : " + res )
}
else{
    document.write(productName+" not aviable in my store")
}

// var customer_name = prompt("Enter Your Name")
// var item = prompt("Enter the Item")

// if(item.toLocaleUpperCase()=="MIKE"||"KEYBOARD"||"MOUSE"){
//     var quantity = +prompt("Enter Quantity")
//     console.log("Your name: "+customer_name+"Your Item: "+item+"Your Quantity:"+quantity)
// }
// else{
//     console.log(customer_name)
// }