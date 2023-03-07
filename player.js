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
    rect(-35, -42, 22, 12, 2);
    rect(-35, 20, 22, 12, 2);
    rect(10, -42, 22, 12, 2);
    rect(10, 20, 22, 12, 2);

    // Stripes //

    rect(-this.s - 15, -19, this.s * 3, 10, 0);
    rect(-this.s - 15, 0, this.s * 3, 10, 0);

    // back window //
    push();
    fill(0, 220);
    rect(-24, -24, 20, 40, 3);

    // front window //

    rect(10, -24, 10, 40, 4);

    // side windows //

    rect(-4, -26, 14, 4, 2);
    rect(-4, 13, 14, 4, 2);
    pop();

    // headlights //
    push();
    noStroke();
    fill("red");
    rect(-45, -1, 2, 13, 3);
    rect(-45, -20, 2, 13, 3);
    pop();

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
