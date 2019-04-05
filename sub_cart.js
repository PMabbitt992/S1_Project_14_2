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
//Load setupCart on window load
window.onload = setupCart;


function setupCart() {
      //Set addButtons to the elemnts with class addButton 
      var addButtons = document.getElementsByClassName('addButton');
      //For each item in addButtons, and a click event listener
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].addEventListener("click", addItem);
      }
}

function addItem(e) {
      //Food item is equal to the target buttons next elemnt
      var foodItem = e.target.nextElementSibling;
      //Food ID is equal to the food item ID
      var foodID = foodItem.id;
      // food description clones food item for use in the cart
      var foodDescription = foodItem.cloneNode(true);
      //cartBox is the element where the cart items will appear
      var cartBox = document.getElementById("cart");
      //diplucateOrder default false
      var duplicateOrder = false;

      //for each last element after cartBox that is not null...
      for (var n = cartBox.firstElementChild; n = n.nextElementSibling; n !== null) {
            //...check if the id is equal to foodID
            if (n.id === foodID) {
                  //if so, add to the text content of the first child and set duplicate order to true
                  duplicateOrder = true;
                  n.firstElementChild.textContent++;
                  break;
            }
      }

      if (duplicateOrder === false) {
            //if duplicate order is still false, create a new order count box and add it and the food description to cartBox
            var orderCount = document.createElement("span");
            orderCount.textContent = 1;
            foodDescription.prepend(orderCount);
            cartBox.appendChild(foodDescription);
      }




}