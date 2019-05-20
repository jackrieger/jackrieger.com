// PROGRAM NOTES

// This is a bigger picture overview of what our program 
// does. For more detailed information about syntax and 
// JavaScript itself, see technical-notes.js.

// Menu

// Find the menu button in our HTML document. Store this in 
// a variable so we can manipulate it with JavaScript.

var menu_button = document.getElementById('menu_button');

// Do the same thing with the menu list.

var menu_list = document.getElementById('menu_list');

// Make a function that will expand the menu when clicked, 
// to show the menu items.

function expandMenu() {
  // Toggle the 'active' class on the menu. In our CSS we 
  // have a class called menu_list.active that has the 
  // menu_list shown, instead of hidden. So when we toggle 
  // that class, we show and hide the menu items.

  menu_list.classList.toggle('active');
}

// Add an event listener to the menu button so that it 
// knows to run the expandMenu function when clicked.

menu_button.addEventListener('click', expandMenu);

// Counter

// Make a variable to hold the number of times the user has 
// made a new shape. Also make a variable for the HTML 
// element that will display the number.

var shape_count = 0;
var shape_counter = document.getElementById('shape_counter');

// Make a function that increases shape_count by 1 and 
// updates the content inside of the HTML element that 
// displays the number.

function updateShapeCount() {
  shape_count += 1;
  shape_counter.innerHTML = shape_count;
}

// Circle & Square Buttons

// Find the circle_button and square_button in our HTML 
// document. Store these in a variables so we can 
// manipulate them with JavaScript.

var circle_button = document.getElementById('circle_button');
var square_button = document.getElementById('square_button');

// Make a function that will create a new circle div and 
// append it to the document body.

function makeCircle() {
  // Create the div.
  var circle = document.createElement('div');

  // Give the div a CSS class of 'circ'.
  circle.classList.add('circ');

  // Append this new div to the document body.
  document.body.appendChild(circle);

  // Call the function `updateShapeCount` so that the
  // overall shape count will increase by 1 and update on 
  // the page.
  updateShapeCount();
}

// Do the same as above, except with a square.

function makeSquare() {
  var square = document.createElement('div');
  square.classList.add('rect');
  document.body.appendChild(square);
  updateShapeCount();
}

// Add event listeners to the buttons labeled "Make circle" 
// and "Make square". The "Make circle" text will call the 
// makeCircle function on a click, causing the function to 
// make a new circle and add it to the document. The "Make 
// square" text will call the makeSquare function when the 
// mouse goes over it, causing the function to make a new 
// square and add it to the document.

circle_button.addEventListener('click', makeCircle);
square_button.addEventListener('mouseover', makeSquare);