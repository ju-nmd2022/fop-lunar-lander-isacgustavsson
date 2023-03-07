let racetrack;
let player;
let force;
let img;

let startScreen = true;
let gameScreen = false;
let gameOverScreen = false;

function setup() {
  createCanvas(800, 600);

  img = loadImage("images/60parsecs.png");

  racetrack = new Racetrack();
  player = new Player();
}

function screenChanger() {
  if (startScreen === true) {
    image(img, 0, 0);
  }

  if (keyCode === 13) {
    startScreen = false;
    gameScreen = true;
  }

  if (gameOverScreen === true) {
    background("black");
  }

  if (gameScreen === true) {
    setInterval(stressor, 60000);
  }
}

function stressor() {
  gameOverScreen = true;
}

function draw() {
  clear();
  background("black");

  if (gameScreen === true) {
    racetrack.animate();
    racetrack.update();
    racetrack.boost();

    player.animate();
    player.update();
    player.move();
    player.boost();
  }

  screenChanger();
}
