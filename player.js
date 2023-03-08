class Player {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.dir = PI + PI / 2;
    this.s = 30;
    this.force = force;
    this.d = d;
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
    translate(this.pos.x + width / 2 - 26, this.pos.y + height / 2);
    rotate(this.dir);
    noStroke();
    fill("royalblue");
    strokeWeight(2);
    rect(-this.s - 15, -this.s, this.s * 3, this.s * 2 - 10, 15);
    push();
    noStroke();
    fill(0);
    rect(-35, -42, 22, 12, 2);
    rect(-35, 20, 22, 12, 2);
    rect(10, -40, 22, 10, 2);
    rect(10, 20, 22, 10, 2);

    // Stripes //

    rect(-this.s - 15, -19, this.s * 3, 10, 0);
    rect(-this.s - 15, 0, this.s * 3, 10, 0);

    // back window //
    push();
    fill(0, 220);
    rect(-28, -25, 20, 40, 3);
    pop();

    // front window //

    rect(11, -25, 10, 41, 4);

    // side windows //

    rect(-5, -26, 14, 4, 2);
    rect(-5, 13, 14, 4, 2);
    pop();

    // brake lights //

    push();
    noStroke();
    fill("red");
    rect(-45, -1, 3, 13, 3);
    rect(-45, -21, 3, 13, 3);
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

  hits(keys) {
    this.d = dist(this.pos.x, this.pos.y, keys.pos.x, keys.pos.y);

    if (this.d < this.s - keys.s + 80) {
      return this.d;
    }
  }
}
