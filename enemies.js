class Enemy {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.velocity = p5.Vector.random2D();
    this.dir = PI / 2;
    this.s = 50;
  }

  update() {
    this.pos.add(this.velocity);
    this.dir += 0.08;
  }

  animate() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.dir);
    noFill();
    stroke("cyan");
    rect(-25, -25, this.s, this.s);
    pop();
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
