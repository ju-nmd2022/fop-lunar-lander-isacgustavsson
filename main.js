let racetrack;
let player;
let force;
let img;

function setup() {
  createCanvas(800, 600);

  racetrack = new Racetrack();
  player = new Player();
}

class Player {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.dir = PI + PI / 2;
    this.s = 30;
    this.force = force;
  }

  update() {
    this.pos.add(this.vel);
    this.vel.mult(0.965);
  }

  boost() {
    this.force = p5.Vector.fromAngle(this.dir);
    this.force.mult(0.65);

    if (keyIsDown(32)) {
      this.vel.add(this.force);
    }
  }

  animate() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.dir);
    noStroke();
    fill("royalblue");
    strokeWeight(2);
    rect(-this.s - 15, -this.s, this.s * 3, this.s * 2 - 10, 15);
    push();
    noStroke();
    fill("black");
    rect(-35, -43, 22, 12, 2);
    rect(-35, 21, 22, 12, 2);
    rect(10, -43, 22, 12, 2);
    rect(10, 21, 22, 12, 2);

    rect(-5, -20, 20, 30, 4);
    pop();
    pop();
  }

  move() {
    if (keyIsDown(65)) {
      this.dir -= 0.1;
    } else if (keyIsDown(68)) {
      this.dir += 0.1;
    }
  }

  bounds() {
    if (this.pos > racetrack.pos) {
      console.log("ouch");
    }
  }
}

class Racetrack {
  constructor() {
    this.start = loadImage("images/Start.png");
    this.straightRoad = loadImage("images/straightRoad.png");
    this.curvedRoad = loadImage("images/curvedRoad.png");
    this.curvedRoad2 = loadImage("images/curvedRoad2.png");
    this.finish = loadImage("/images/finish.png");

    this.pos = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.dir = PI / 2;
    this.s = 0;
  }

  update() {
    this.pos.sub(this.vel);
    this.vel.mult(0.965);
  }

  boost() {
    this.force = p5.Vector.fromAngle(player.dir);
    this.force.mult(0.65);

    if (keyIsDown(32)) {
      this.vel.add(this.force);
    }
  }

  animate() {
    translate(this.pos.x, this.pos.y);

    push();
    image(this.start, 171, -0, 400, 200);
    rotate(1.57);
    image(this.straightRoad, 200, -570, 400, 400);
    image(this.straightRoad, -399, -570, 400, 400);
    image(this.straightRoad, -800, -570, 400, 400);
    image(this.straightRoad, -1200, -570, 400, 400);
    image(this.straightRoad, -1600, -570, 400, 400);
    image(this.curvedRoad, -1983, -569, 410, 400);

    push();
    rotate(1.57);
    image(this.straightRoad, -197, 1581, 596, 400);
    image(this.straightRoad, 400, 1581, 400, 400);
    image(this.straightRoad, 800, 1581, 400, 400);
    image(this.straightRoad, 1205, 1581, 605, 400);
    pop();

    image(this.curvedRoad2, -1979, 1785, 400, 400);

    image(this.straightRoad, -1605, 1786, 400, 400);

    push();
    rotate(1.56);
    image(this.curvedRoad, 1772, 900, 400, 400);
    pop();
    push();
    rotate(3.1);
    image(this.curvedRoad, 965, -2478, 400, 400);
    pop();

    push();
    rotate(-0.001);
    image(this.straightRoad, -1634, 2130, 400, 400);
    pop();

    image(this.straightRoad, -2030, 2131, 400, 400);
    image(this.straightRoad, -2430, 2131, 400, 400);
    image(this.curvedRoad, -2800, 2132, 400, 400);

    push();
    rotate(1.57);
    image(this.straightRoad, 2505, 2403, 400, 400);
    pop();

    push();
    rotate(PI + PI / 2);
    image(this.curvedRoad, -3281, -2801, 400, 400);
    image(this.curvedRoad2, -3281, -2455, 400, 400);
    pop();

    image(this.curvedRoad, -2454, 2534, 400, 400);

    image(this.straightRoad, -2079, 2534, 400, 400);

    push();
    rotate(PI);
    image(this.curvedRoad2, 1305, -2935, 400, 400);
    pop();

    push();
    rotate(PI + PI / 2);
    image(this.curvedRoad, -3282, -1704, 400, 400);
    pop();

    image(this.straightRoad, -1330, 2883, 400, 400);
    image(this.straightRoad, -930, 2883, 400, 400);
    image(this.straightRoad, -530, 2883, 400, 400);
    image(this.straightRoad, -130, 2883, 400, 400);

    push();
    rotate(PI + PI / 2);
    image(this.curvedRoad2, -3283, 245, 400, 400);
    pop();

    push();
    rotate(PI / 2);
    image(this.curvedRoad, 2535, -646, 400, 400);
    pop();

    image(this.curvedRoad2, -102, 2534, 400, 400);

    push();
    rotate(PI / 2);
    image(this.straightRoad, 2159, -297, 400, 400);
    image(this.straightRoad, 1759, -297, 400, 400);
    image(this.straightRoad, 1359, -297, 400, 400);
    pop();

    image(this.curvedRoad, -102, 984, 400, 400);

    image(this.straightRoad, 272, 983, 400, 400);

    push();
    rotate(PI / 2);
    image(this.finish, 985, -874, 400, 200);
    pop();

    image(this.straightRoad, 875, 984, 400, 400);

    push();
    rotate(PI);
    image(this.curvedRoad, -1650, -1383, 400, 400);
    pop();

    push();
    rotate(PI / 2);
    image(this.straightRoad, 608, -1651, 400, 400);
    image(this.straightRoad, 208, -1651, 400, 400);
    image(this.straightRoad, -196, -1651, 420, 400);
    pop();

    push();
    rotate(PI / 2);
    image(this.curvedRoad, -570, -1650, 400, 400);
    pop();

    image(this.straightRoad, 600, -570, 676, 400);

    pop();
  }
}

function draw() {
  clear();
  background("black");

  racetrack.animate();
  racetrack.update();
  racetrack.boost();

  player.animate();
  player.update();
  player.move();
  player.boost();
  player.bounds();
}
