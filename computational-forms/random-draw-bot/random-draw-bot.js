var c; 
var x;
var y;
var s;
var shift;
var xShift;
var yShift;
var dir;

/* Deck */
var deck = [0, 35, 145, 185, 240, 300, 360];
var position = 0;

function valueFromDeck() {
  var v = deck[position];
  position++;
  if (position == deck.length) {
    deck = shuffle(deck);
    position = 0;
  }
  return v;
}

function shift() {
  return random(1,20);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  background(0, 100, 0);

  deck = shuffle(deck);

  c = valueFromDeck();

  if (c == 360) {
    c = valueFromDeck();
  }

  x = (random(windowWidth) + random(windowWidth)) / 2;
  y = (random(windowHeight) + random(windowHeight)) / 2;

  direction();

  shiftX();
  shiftY();

}

function direction() {
  dir = random(-1, 1);
  if (dir < 0.3 && dir > -0.3) {
    dir = random(-1, 1);
  }
}

function shiftX() {
  xShift = random(-2,2);
}

function shiftY() {
  yShift = random(-2,2);
}

setInterval(direction, 5000);
setInterval(shiftX, 2000);
setInterval(shiftY, 4000);

function draw() {

  if (c == 360) {
    fill(360, 100, 0);
  } else {
    fill(c, 100, 100);
  }
  
  noStroke();
  s = 30;
  ellipse(x, y, s, s);

  if (x > width) {
    c = valueFromDeck();
    dir = dir * -1;
  } 

  if (x < 0) {
    c = valueFromDeck();
    dir = dir * -1;
  } 

  if (y > height) {
    c = valueFromDeck();
    dir = dir * -1;
  }

  if (y < 0) {
    c = valueFromDeck();
    dir = dir * -1;
  } 

  if (xShift > 0 && yShift < 0) {
    shiftX();
    shiftY();
  }

  if (xShift < 0 && yShift > 0) {
    shiftX();
    shiftY();
  } 

  x = x + (xShift * dir);
  y = y + (yShift * dir);

}