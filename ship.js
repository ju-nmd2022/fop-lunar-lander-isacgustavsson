class Ship {
  constructor() {
    this.pos = pos;
    this.s = 20;
    this.dir = dir;
    this.velocity = velocity;
    this.force = force;
  }

  animate() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.dir + PI / 2);
    fill("black");
    stroke("magenta");
    triangle(-this.s, this.s, this.s, this.s, 0, -this.s);
    pop();
  }

  move() {
    if (keyIsDown(32)) {
      this.force = p5.Vector.fromAngle(this.dir);
      this.force.mult(0.4);
      this.velocity.add(this.force);
    }

    if (keyIsDown(65)) {
      this.dir -= 0.1;
    }

    if (keyIsDown(68)) {
      this.dir += 0.1;
    }
  }

  update() {
    this.pos.add(this.velocity);
    this.velocity.mult(0.97);
  }

  boundaries() {
    if (this.pos.x > width) {
      this.pos.x = 0;
    } else if (this.pos.x < 0) {
      this.pos.x = width;
    }

    if (this.pos.y > height) {
      this.pos.y = 0;
    } else if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }
}
