const RUN = true;

const rules = {
  // non-terminal
  "start" : [
    ["second", "circle", "second"],
    ["second", "dash", "second"],
  ],
  "second" : [
    ["third", "circle", "third"],
    ["third", "dash", "third"],
  ],
  "third" : [
    ["dash", "dash"],
    ["circle", "dash"],
  ],
  // terminal
  "circle" : [
    ["~"], ["~"], ["~"], ["~"], ["*"]
  ],
  "dash" : [
    ["-"], ["-"], ["~"], ["|"]
  ]
};

function expand(start, expansion) {
  let pick;

  if (rules[start]) {
    pick = random(rules[start]);
    for (let i = 0; i < pick.length; i++) {
      expand(pick[i], expansion);
    }
  } else {
    expansion.push(start);
  }

  return expansion.join(' ');
} 

function setup() {
  noCanvas();
  frameRate(10);
}

function draw() {
  if (RUN) {
    create();
  }
}

function create() {
  const start = "start";
  const expansion = [];
  const result = expand(start, expansion);
  const p = document.createElement('p');
  p.innerText = result;
  const wrapper = document.querySelector('#wrapper');
  wrapper.insertAdjacentElement('afterbegin', p)
}