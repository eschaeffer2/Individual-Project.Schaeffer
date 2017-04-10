
/*    Project: Individual Project Chapter 3
      Author: Eric Schaeffer
      Date: 3/13/2017
      Purpose: Give a list of items for purchase and calculate a total of the items selected. 
*/ 

// array filled with the products
var products = ["Preformance T-Shirt ($15.00)", "Preformance Shorts ($20.00)", "Team Sweatshirt ($25.00)", "Team Sweatpants ($20.00)", "Salisbury Lacrosse Hat ($10.00)"];
//array of labels for products
var labels = document.getElementsByTagName("label")
//total of purchases
var itemTotal = 0;
// rate of sales tax
var salesTaxRate = .06;
//grand total
var orderTotal = 0;
var items = document.getElementsByTagName("input");

//list the products that customer can choose from.
function listProducts() {
    for (var i=0; i < 5; i++) {
      labels[i].innerHTML=products[i]; 
    }
}

//function to calculate the total for the order.
function calcTotal() {
  for (var i=0; i<6; i++) { 
    if (items[i].checked) {
      itemTotal += (items[i].value * 1);
    }
}
  //calculate order total with sales tax
orderTotal = itemTotal + (itemTotal * salesTaxRate);          
document.getElementById("total").innerHTML = "Your total is $" + orderTotal.toFixed(2) + ". Thank you for shopping!";
}

//event listener. 
var submitButton = document.getElementById("submit");
if (submitButton.addEventListener){
  submitButton.addEventListener("click", calcTotal, false);
} else if (submitButton.attachEvent) {
  submitButton.attachEvent("onclick", calcTotal);
}














