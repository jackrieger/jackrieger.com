// TECHNICAL NOTES

// //
//
// A double forward slash signals a comment in JavaScript. 
// A comment is a place for you to write about your program 
// for yourself or for others. Comments will not be read by 
// the JavaScript program, so you can write whatever you 
// want. It is good to remember that programs are often 
// read by humans, so notes are very helpful.

// ``
//
// In these notes the usage of backticks `` signifies that 
// the word is something I want to signal as special, but 
// is not actually meant to be typed in backticks when you
// are programming.

var menu_button = document.getElementById('menu_button');

// Lettercase
//
// Pay very close attention to lettercase in JavaScript. 
// Typing `Var` will cause an error. `var` will not cause 
// an error. `Document` is different than `document`. It is
// that particular.

// var
//
// The word `var` is a variable statement. It signals that 
// the following word will be the name of a variable and if 
// there is an = sign, it will place the value on the right 
// into the variable.
//
// `var` is a reserved word in JavaScript. You cannot use 
// it for any other purpose. For example, if you named a 
// variable or function `var` it would break your program:
//
// function var() {}
// var var = "my variable";
//
// These will throw errors and cause everything to break.

// menu_button
//
// `menu_button` is our name for this variable. It could 
// have been named anything we want, besides JavaScript's 
// reserved words. However, the word `menu_button` is nice 
// because it says exactly what it represents.

// =
//
// The equal sign is the assignment operator. It is a 
// symbol that you are storing the value on the right into 
// the variable on the left. A more accurate symbol would 
// have been a left-facing arrow:
//
// var menu_button <- document.getElementById('menu_button')
//
// but the creator of JavaScript chose the = sign. This use 
// of this sign is not the same as in mathematics. When 
// testing equivalence, as in 2 = 1 + 1, you actually use a 
// triple equal sign, `===`. You will learn more about this 
// if you begin using conditional statements, like 
// `if...else`.

// document.getElementById()
//
// This is a method call. A method is a function that is 
// stored in an object. In this situation, `getElementById` 
// is the method and `document` is the object. To call 
// means that you are telling the function to do its task. 
// Use parentheses `()` to call a function or method.
//
// The `document` object is built-in to the browser. It is 
// a standardized part of JavaScript available for you to 
// use. It has many properties and methods.
//
// Conceptually, behind the scenes, this exists:
//
// var document = {
//   ...
//   ...
//   ...
//   getElementById: function () {
//      ...
//   }
// }

// getElementById('your_id_name')
//
// `getElementById` looks up an HTML element by the id name
// you provide in the parentheses.

// Dot Notation
//
// The syntactic way you access something inside an object 
// is through dot notation.
//
// var my_object = {
//   name: 'Steve',
//   myMethod: function () {}
// }
// 
// `my_object.name` will return 'Steve'
// `my_object.myMethod()` will call `myMethod`

// camelCase
//
// You will frequently see programs that use camelCase. 
// camelCase is the stylistic practice of writing compound 
// words with no spaces in between and capitalizing each 
// new word without capitalizing the first word.
// 
// thisIsWhatCamelCaseLooksLike
// getElementsByClassName
// myFunctionName
//
// In programming, spaces are important. Back in the early 
// days, computers were limited in memory, so programmers 
// tried to be as economical as possible by not using 
// spaces. As a result, many subsequent programming 
// languages adopted the practice of limiting spaces by 
// forcing certain things to be space-less.
//
// For example, if you try to name a function with spaces:
//
// function my function with spaces () {
//   ...
// }
//
// it won't work. The same goes for variable names. Maybe 
// one day we will have a language that allows spaces.
//
// You will also frequently see underscores `_` for the 
// same reason. Personally, I like camelCase for functions 
// and words_with_underscores for variables. This style 
// allows me to see what things are functions and what are 
// variables just by looking at them.

// Semicolons
//
// The rules for semicolons are confusing. You learn a lot 
// more about where to use them just by writing programs.
//
// Here are some common places to put them:
//
// End of Variable Declaration & Assignment
//
// var i = 5;             
//  
// End of Function Call
//
// alert("hi");
//
// Here are places to avoid them:
//
// End of Function Statement
//
// function () {
//   ...
// }
//
// End of Loops
//
// for () {
//   ...
// }
//
// End of Conditional Statements
//
// if (...) {
//   ...
// } else {
//   ...
// }

var menu_list = document.getElementById('menu_list');

// Same as above with `menu_button`.

function expandMenu() {

  // function
  //
  // A function encloses a set of statements. It is a named 
  // section that performs a specific task when you ask it 
  // to. You ask it to run when you call it later on like // this:
  //
  // expandMenu();
  //
  // However you can call a function in multiple ways; in 
  // this program we set it as the result of a click event 
  // on the menu (last line of this file, not counting 
  // comments).

  menu_list.classList.toggle('active');

  // .classList.toggle('my_class')
  //
  // `.classList` is part of the Element object, which is 
  // part of the DOM API. You can use it to read and modify 
  // an element's CSS classes. In this case, `.toggle()` 
  // allows you to toggle a class on and off.
}

menu_button.addEventListener('click', expandMenu);

// addEventListener()
//
// `addEventListener` is part of the EventTarget object, 
// which is a part of the DOM API. The DOM API also houses 
// the `document` object, in addition to many other useful 
// objects. `addEventListener` is a method.
//
// You give two parameters inside the parentheses: the type
// of event to listen for, and a function for what to do
// when the event is registered by that element. In this 
// case, the type of event is 'click' and the function is 
// expandMenu. It will run when the menu_button element 
// registers a click from the user.