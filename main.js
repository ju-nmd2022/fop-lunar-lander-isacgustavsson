let racetrack;
let player;
let force;
let img;
let song;
let keys = [];

let d;

let startScreen = false;
let gameScreen = true;
let gameOverScreen = false;

function preload() {
  song = loadSound("sounds/LowRider.mp3");
}

function setup() {
  createCanvas(800, 600);

  img = loadImage("images/60parsecs.png");

  racetrack = new Racetrack();
  player = new Player();

  for (let i = 0; i < 0; i++) {
    keys[i] = new Key();
  }

  keySpawner();
}

function screenChanger() {
  if (startScreen === true) {
    image(img, 0, 0);
  }

  if (keyCode === 13) {
    startScreen = false;
    gameScreen = true;
    //song.play();
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

function keySpawner() {
  keys.push(new Key(-30, -150));
  keys.push(new Key(-30, -1400));
  keys.push(new Key(-300, -2100));
  keys.push(new Key(-1500, -2100));
  keys.push(new Key(-2200, -2100));
  keys.push(new Key(-2400, -1500));
  keys.push(new Key(-2750, -1500));
  keys.push(new Key(-2750, -2400));
  keys.push(new Key(-2800, -2900));
  keys.push(new Key(-3200, -2900));
  keys.push(new Key(-3500, -2700));
  keys.push(new Key(-3130, -2200));
  keys.push(new Key(-3450, -1750));
  keys.push(new Key(-3550, -1440));
  keys.push(new Key(-3400, -1100));
  keys.push(new Key(-3550, -600));
  keys.push(new Key(-3150, 0));
  keys.push(new Key(-2900, -250));
  keys.push(new Key(-2400, -150));
  keys.push(new Key(-1600, -150));
  keys.push(new Key(-1580, +400));
}

function draw() {
  clear();
  background("black");
  screenChanger();

  if (gameScreen === true) {
    racetrack.animate();
    racetrack.update();
    racetrack.boost();

    player.animate();
    player.update();
    player.move();
    player.boost();

    for (let i = 0; i < keys.length; i++) {
      keys[i].animate();

      if (player.hits(keys[i])) {
        keys.splice(i, 1);
      }
    }
  }
}
