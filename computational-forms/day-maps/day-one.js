const data = [{
  time: 112100,
  direction: 303,
}, {
  time: 112654,
  direction: 32,
}, {
  time: 113057,
  direction: 12,
}, {
  time: 113251,
  direction: 112,
}, {
  time: 113610,
  direction: 48,
}, {
  time: 113740,
}];

const draw_scale = 0.5;
const north_reset = -90;

let myTurtle;

function setup() {
  createCanvas(600, 600);
  myTurtle = new Turtle();

  writeData();
}

function draw() {
  background(250, 248, 240);

  noFill();
  stroke(100, 100, 255);
  strokeWeight(2);
  strokeCap(ROUND);

  myTurtle.penUp();
  myTurtle.moveTo(width/2, 500);

  myTurtle.penDown();

  for (let i = 0; i < data.length; i++) {
    myTurtle.turnTo(data[i].direction + north_reset);
    
    push();
    strokeWeight(0);
    fill(100, 100, 255);
    textSize(10);
    if (data[i].direction !== undefined) {
      text(data[i].direction + 'º', myTurtle.x + 10, myTurtle.y);
    }
    pop();
    
    if (i !== data.length - 1) {
      const distance = data[i + 1].time - data[i].time;
      myTurtle.moveForward(distance * draw_scale);
    }
    
  }

  noLoop();
}

function keyPressed() {
  if (key === 'S') {
    save('canvas.jpg');
  }
}

function writeData() {
  const div = document.createElement('div');
  div.innerHTML = `<pre>${JSON.stringify(data, null, "\t")}</pre><br>`;
  document.body.appendChild(div);

  const img = document.createElement('img');
  img.src = 'day-map-compass.png';
  document.body.appendChild(img);
}