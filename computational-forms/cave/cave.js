// noise_start of noise values
let noise_start;

// jaggedness
// very sensitive; lower = smoother
// useful range: 0.01-0.05
const noise_increment = 0.018;

// moves the entire cave up or down
const offsetY = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);

  noise_start = random(100000);
  
}

function draw() {
  background(0);

  stroke(240);
  strokeWeight(175);
  
  noFill();

  let noise_offset = noise_start;

  beginShape();

  // loop begins and ends 100 past the edges of the screen to hide the rendering of the line
  for (let x = -100; x < (width + 100); x++) {
    let y = noise(noise_offset);
    y = map(y, 0, 1, 0, (height - 70));
    vertex(x, y + offsetY);
    noise_offset += noise_increment;
  }

  endShape();

  noise_start += noise_increment;

}