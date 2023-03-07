let racetrack;
let player;
let force;
let img;
let song;
let keys = [];
let keyChain = 0;
let stressor = 5;
let monoton;

let d;

let startScreen = true;
let gameScreen = false;
let gameOverScreen = false;
let winScreen = false;

function preload() {
  song = loadSound("sounds/LowRider.mp3");

  monoton = loadFont("fonts/Monoton-Regular.ttf");
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

    if (keyCode === 13) {
      startScreen = false;
      gameScreen = true;
      //song.play();
    }
  }

  if (gameScreen === true) {
    if (frameCount % 350 === 0 && stressor > 0) {
      stressor--;
    }

    if (stressor === 0) {
      gameScreen = false;
      gameOverScreen = true;
    }
  }

  if (gameOverScreen === true) {
    background("black");

    push();
    fill("red");
    textFont(monoton);
    stroke("red");
    strokeWeight(1.5);
    textSize(110);
    text("GAME OVER", width / 2 - 390, height / 2 - 185);
    pop();

    fill("red");
    textFont(monoton);
    stroke("red");
    strokeWeight(0.5);
    textSize(42);
    text("You ran out of time", width / 2 - 250, height / 2 - 85);

    textSize(42);
    textFont(monoton);
    text("Play Again?", width / 2 - 150, height / 2 + 100);
    text("Press Enter to restart", width / 2 - 280, height / 2 + 200);

    if (keyCode === 13) {
      gameOverScreen = false;
      gameScreen = true;
      window.location.reload();
    }
  }

  if (keyChain == 21) {
    winScreen = true;
  }

  if (winScreen === true) {
    gameScreen = false;
    background("black");
    push();
    fill("red");
    textFont(monoton);
    stroke("red");
    strokeWeight(1.5);
    textSize(120);
    text("YO U    W I N  !", width / 2 - 375, height / 2 + -100);
    pop();

    push();
    fill("red");
    textFont(monoton);
    stroke("red");
    strokeWeight(1);
    textSize(62);
    text("Play Again?", width / 2 - 230, height / 2 + 50);
    pop();

    push();
    fill("red");
    textFont(monoton);
    stroke("red");
    strokeWeight(0.4);
    textSize(42);
    text("Press enter to restart", width / 2 - 300, height / 2 + 200);
    pop();
  }

  if (winScreen === true) {
    if (keyCode === 13) {
      winScreen = false;
      gameScreen = true;
      location.reload();
    }
  }
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
        keyChain += 1;
        console.log(keyChain);
      }
    }
  }

  screenChanger();
}
