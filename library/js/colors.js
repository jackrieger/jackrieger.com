'use strict';

// Color Library

// Existing DOM Elements

const container = document.querySelector('#colors #container');
const sort_display = document.querySelector('#sort_display');

// State

const sort_active = 'Oldest';
const sort_mode = ['Newest', 'Oldest', 'Saturation', 'Similarity'];

// Data

const colors = [ 
  '0000ff',
  '00ff00',
  '00ffff',
  'ffff00',
  '64ff64',
  'f9f7f3',
  '018eff',
  'bcf6bf',
  'd6dbff',
  '00ffd9',
  '00ff6a',
  '6085ff',
  '#e3eeda'
];

// Functionality

function sortColors() {
  // ...
  sort_display.innerText = `Sort: ${sort_active}`;
}

function printColors() {
  colors.forEach(function (color) {
    const hex = `#${color}`;

    // create DOM elements
    const cell = document.createElement('div');
    const color_name = document.createElement('span');
    
    // set DOM element attributes
    cell.id = hex;
    cell.classList.add('cell');
    color_name.classList.add('color_name');
    color_name.innerText = hex;

    // set dynamic DOM element styles
    color_name.style.backgroundColor = hex;

    // add elements to document
    cell.appendChild(color_name);
    container.appendChild(cell);
  });
}

// Initialization

(function init() {
  sortColors();
  printColors();
}());