const trip_one = [{
  time: 082943,
  direction: 56,
}, {
  time: 083015,
  direction: 150,
}, {
  time: 083324,
  direction: 59,
}, {
  time: 083639,
  direction: 221,
}, {
  time: 083758,
  direction: 48,
}, {
  time: 084712,
  direction: 194,
}, {
  time: 084718,
  direction: 96,
}, {
  time: 085342,
  direction: 205,
}, {
  time: 085400,
  direction: undefined,
}];

const trip_two = [{
  time: 101911,
  direction: 194,
}, {
  time: 102033,
  direction: 302,
}, {
  time: 102344,
  direction: 15,
}, {
  time: 102745,
  direction: 287,
}, {
  time: 102746,
  direction: undefined,
}];

const trip_three = [{
  time: 123604,
  direction: 28,
}, {
  time: 123845,
  direction: 325,
}, {
  time: 124321,
  direction: 192,
}, {
  time: 124451,
  direction: 345,
}, {
  time: 124752,
  direction: undefined,
}];

const trip_four = [{
  time: 130306,
  direction: 63,
}, {
  time: 132236,
  direction: 192,
}, {
  time: 132502,
  direction: 273,
}, {
  time: 132814,
  direction: 218,
}, {
  time: 132937,
  direction: 302,
}, {
  time: 133048,
  direction: 189,
}, {
  time: 133747,
  direction: 121,
}, {
  time: 133821,
  direction: 189,
}, {
  time: 134013,
  direction: 109,
}, {
  time: 134400,
  direction: undefined,
}];

const trip_five = [{
  time: 182248,
  direction: 355,
}, {
  time: 182600,
  direction: 40,
}, {
  time: 182831,
  direction: 5,
}, {
  time: 182920,
  direction: undefined,
}];

const trip_six = [{
  time: 184422,
  direction: 48,
}, {
  time: 184445,
  direction: 136,
}, {
  time: 184950,
  direction: 29,
}, {
  time: 185820,
  direction: undefined,
}];

const trip_seven = [{
  time: 213800,
  direction: 255,
},{
  time: 214229,
  direction: 218,
}, {
  time: 214504,
  direction: 251,
}, {
  time: 214825,
  direction: 217,
}, {
  time: 215020,
  direction: 255,
}, {
  time: 215400,
  direction: undefined,
}];

const draw_scale = 0.2;
const north_reset = -90;

let myTurtle;

function setup() {
  createCanvas(800, 800);
  myTurtle = new Turtle();

  writeData();
}

function draw() {
  background(250, 248, 240);

  noFill();
  strokeWeight(2);
  strokeCap(ROUND);

  myTurtle.penUp();
  myTurtle.moveTo(25, 600);

  myTurtle.penDown();

  stroke(100, 100, 255);
  drawMap(trip_one);

  stroke(255, 100, 255);
  drawMap(trip_two);

  stroke(255, 0, 100);
  drawMap(trip_three);

  stroke(0, 255, 255);
  drawMap(trip_four);

  stroke(0, 255, 0);
  drawMap(trip_five);

  stroke(100, 40, 20);
  drawMap(trip_six);

  stroke(0, 100, 100);
  drawMap(trip_seven);

  noLoop();
}

function drawMap(trip) {
  for (let i = 0; i < trip.length; i++) {
    myTurtle.turnTo(trip[i].direction + north_reset);

    push();
    strokeWeight(0);
    fill(0);
    textSize(8);
    if (trip[i].direction !== undefined) {
      text(trip[i].direction + 'º', myTurtle.x + 10, myTurtle.y);
    }
    pop();

    if (i !== trip.length - 1) {
      let distance = trip[i + 1].time - trip[i].time;
      if (trip[i].direction === undefined) {
        distance = 0;
      }
      myTurtle.moveForward(distance * draw_scale);
    }

  }
}

function keyPressed() {
  if (key === 'S') {
    save('canvas.jpg');
  }
}

function writeData() {
  const div = document.createElement('div');
  div.innerHTML = `<pre>${JSON.stringify(trip_one, null, "\t")}</pre><br><pre>${JSON.stringify(trip_two, null, "\t")}</pre><br><pre>${JSON.stringify(trip_three, null, "\t")}</pre><br><pre>${JSON.stringify(trip_four, null, "\t")}</pre><br><pre>${JSON.stringify(trip_five, null, "\t")}</pre><br><pre>${JSON.stringify(trip_six, null, "\t")}</pre><br><pre>${JSON.stringify(trip_seven, null, "\t")}</pre>`;
  document.body.appendChild(div);
}