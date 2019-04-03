"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Paige Mabbitt
   Date:  4.2.19 

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/
window.onload = setupCart;

function setupCart() {
      var addButtons = document.querySelectorAll("input.addButton");
      for (var i = 0; i < addButtons.length; i++) {
            addButtons.addEventListener("click", addItem());
      }
}

function addItem() {
      var foodItem = addButtons[i].nextElementSibiling.innerHTML;
      var foodID = foodItem.target.id;
      var foodDescription = foodItem.cloneNode(true);
      var cartBox = document.getElementById("cart");
      var duplicateOrder = false;
      var count = ""
      var countBox = document.createElement("span");
      cartBox.childNodes.appendChild(countBox);
      count.appendChild(count);
      for (var i = 0; i < cartBox.childNodes /*the child nodes of cartBox i think*/ ; i++) {
            if (i === foodID) {
                  count += 1;
                  duplicateOrder = true;
                  break;
            }
      }

      if (duplicateOrder === false) {
            var orderCount = document.createElement("span");
            orderCount.setAttribute("text", "1");
            foodDescription.appendChild(orderCount);
            cartBox.appendChild(foodDescription);
      }
}