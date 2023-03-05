let ship;
let enemies = [];
let lasers = [];

let pos;
let dir;
let velocity;
let force;
let d;

function setup() {
  createCanvas(windowWidth, windowHeight);

  pos = createVector(width / 2, height / 2);
  velocity = createVector(0, 0);
  dir = PI + PI / 2;

  ship = new Ship();

  for (let i = 0; i < 10; i++) {
    enemies.push(new Enemy());
  }

  for (let i = 0; i < 0; i++) {
    lasers.push(new Laser());
  }
}

function keyPressed() {
  if (keyIsDown(75)) {
    lasers.push(new Laser(ship.pos, ship.dir));
  }
}

function draw() {
  clear();
  background("black");

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].animate();
    enemies[i].update();
    enemies[i].boundaries();
  }

  for (let i = 0; i < lasers.length; i++) {
    lasers[i].animate();
    lasers[i].update();

    for (let j = 0; j < enemies.length; j++) {
      if (lasers[i].hits(enemies[j])) {
        enemies.splice(j, 1);
        enemies.push(new Enemy());
      }
    }
  }

  ship.animate();
  ship.move();
  ship.update();
  ship.boundaries();
}
