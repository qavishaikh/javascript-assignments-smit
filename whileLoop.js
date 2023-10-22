store_list = ["laptop", "mouse", "speaker", "chair", "table", "fan"]
food_list = ["burger", "chips", "pizza", "roti roll", "pasta", "cake"]

var i = true //loop 
var user_order = 0 //complete 


while (i) {
    alert(store_list)
    let inp = prompt(`enter First Item from List `)
    var getitem = false ///flag
    for (let data of store_list) {
        if (data == inp) {
            user_order += 1
            getitem = true;
            alert("Yes You get Item from my store")
            let input_again = prompt("if you want again order ")
            if (input_again.toLowerCase().substring(0,1)  == "y") {
                i = true
            }
            else {
                if (user_order >= 2) {
                    var get_item = (Math.random()*6).toFixed()
                    alert(`wow you get this item free \n ${food_list[get_item]}`)
                    i = false
                }
                i= false
            }
        }
    }
    if(user_order>=1){
        if (getitem == false) {
            let input_again = prompt("you order not complete you want again order")
            if (input_again.toLowerCase().substring(0,1) == "y") {
                i = true
            }
            else {
                if (user_order >= 2) {
                    var get_item = (Math.random()*6).toFixed()
                    alert(`wow you get this item free \n ${food_list[get_item]}`)
                    i = false
    
                }
                i = false
            }
        }
    }
    else{
        alert("not present this item")
        i=false
    }
   

}


// 3