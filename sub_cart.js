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
      var addButtons = document.getElementsByClassName('addButton');
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].addEventListener("click", addItem);
      }
}

function addItem(e) {
      var foodItem = e.target.nextElementSibling;
      var foodID = foodItem.id;
      var foodDescription = foodItem.cloneNode(true);
      var cartBox = document.getElementById("cart");
      var duplicateOrder = false;

      //check current id against past food id to see if there is a duplicate. If yes, add 1 to orderCount(?) and skip duplicate order
 
      if (duplicateOrder === false) {
            var orderCount = document.createElement("span");
            orderCount.textContent = 1;
      }
      foodDescription.prepend(orderCount);
      cartBox.appendChild(foodDescription); 
   
}