let item=["Milk", "Cocoa", "Salad", "Carrots","Tomatoes", "Ready meals"]
let price=[1.2, 2, 2, 2, 2.5, 5]
let item1=[]
let price1=[]
item1.push(prompt("Add an item:"))
price1.push(prompt("Add the price of the item:"))
item.push([item1])
price.push([price1])
for (var i=0; i<item.length; i++){
var namestring = item[i]+ ": " + " £"+price[i].toFixed(2)
console.log(namestring )
}
for (let total of item){
    total+= price
    console.log("The total is: "+ total)

}



