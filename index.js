let item=["Milk", "Cocoa", "Salad", "Carrots","Tomatoes", "Ready meals"]
let price=[1.2, 2, 2, 2, 2.5, 5]
for (var i=0; i<item.length; i++){
var namestring = item[i]+ ": " + " £"+price[i].toFixed(2)
console.log(namestring )
}