function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  background(16, 100, 0);
  rectMode(CENTER);

  for (let i = 0; i < 200; i++) {
    main();
  }

  frameRate(30);
}

function draw() {
  main();
}

function main() {
  const factor = random([6, 8, 10, 12]);
  const rect_width = width / factor;
  const rect_height = height / factor;

  for (let i = 0; i < 5; i++) {
    noStroke();
    fill(random([0, 16, 60]), 100, 100);
    rect(random(width), random(height), rect_width, rect_height);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0, 100, 0);
}