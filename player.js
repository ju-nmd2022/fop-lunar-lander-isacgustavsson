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
}
