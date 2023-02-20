let startScreen = false;
let gameScreen = true;
let gameOverScreen;

let playerMoving = false;

let bullets = [];
let enemies = [];
let ship;
let dir;

function setup() {
  createCanvas(600, 600);

  ship = new Ship(width / 2 - 25, height - 60, 50);

  for (let i = 0; i < 0; i++) {
    bullets[i] = new Bullet(x, y, r);
  }

  for (let i = 0; i < 0; i++) {
    enemies[i] = new Enemy(random(0, 50), 0, random(30, 50));
  }

  setInterval(spawner, 1000);
}

class Ship {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.moving = false;
  }

  show() {
    noFill();
    stroke("magenta");
    strokeWeight(1);
    rect(this.x, this.y, this.r);
  }

  move() {
    if (keyIsDown(68) && this.x < 540) {
      playerMoving = true;
      this.x += 10;
    } else if (keyIsDown(65) && this.x > 10) {
      playerMoving = true;
      this.x -= 10;
    }
  }
}

class Bullet {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.destroyed = false;
  }

  show() {
    noStroke();
    fill("magenta");
    circle(this.x, this.y, this.r);
  }

  move() {
    this.y -= 20;
  }

  hits(other) {
    let d = dist(this.x, this.y, other.x, other.y);

    return d < this.r + other.r;
  }

  destroy() {
    this.destroyed = true;
  }
}

class Enemy {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  show() {
    noFill();
    stroke(random(0, 256), random(0, 256), random(0, 256));
    circle(this.x, this.y, this.r);
  }

  move() {
    this.y += 2;
    this.x -= random(-5, 5);
  }
}

function keyPressed() {
  if (keyCode === 32) {
    {
      let bullet = new Bullet(ship.x + 20, ship.y + 0, 10);
      bullets.push(bullet);
    }
  }
}

function spawner() {
  let enemy = new Enemy(random(50, 550), 0, random(10, 30));
  enemies.push(enemy);
}

function draw() {
  if (startScreen == true) {
    clear();
    background("black");
    noFill();
    stroke(random(0, 256), random(0, 256), random(0, 256));
    rect(width / 2 - 200, height / 2 - 200, 400, 400);
    push();
    fill("white");
    text("GAMESCREEN STARTS HERE", 205, 150, 200, 200);
    pop();
  }

  if (gameScreen == true) {
    startScreen = false;
    clear();
    background("black");

    ship.show();
    ship.move();

    for (let i = 0; i < enemies.length; i++) {
      enemies[i].show();
      enemies[i].move();

      if (enemies[i].y > 600) {
        alert("game over");
      }
    }

    for (let i = 0; i < bullets.length; i++) {
      bullets[i].show();
      bullets[i].move();

      for (let j = 0; j < enemies.length; j++) {
        if (bullets[i].hits(enemies[j])) {
          bullets[i].destroy();
          enemies.splice(j, 1);
        }
      }
    }

    for (let i = 0; i < bullets.length; i++) {
      if (bullets[i].destroyed) {
        bullets.splice(i, 1);
      }
    }
  }
}
