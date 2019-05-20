// Menu

var menu_button = document.getElementById('menu_button');
var menu_list = document.getElementById('menu_list');

function expandMenu() {
  menu_list.classList.toggle('active');
}

menu_button.addEventListener('click', expandMenu);

// Counter

var shape_count = 0;
var shape_counter = document.getElementById('shape_counter');

function updateShapeCount() {
  shape_count += 1;
  shape_counter.innerHTML = shape_count;
}

// Circle & Square Buttons

var circle_button = document.getElementById('circle_button');
var square_button = document.getElementById('square_button');

function makeCircle() {
  var circle = document.createElement('div');
  circle.classList.add('circ');
  document.body.appendChild(circle);
  updateShapeCount();
}

function makeSquare() {
  var square = document.createElement('div');
  square.classList.add('rect');
  document.body.appendChild(square);
  updateShapeCount();
}

circle_button.addEventListener('mouseover', makeCircle);
square_button.addEventListener('mouseover', makeSquare);