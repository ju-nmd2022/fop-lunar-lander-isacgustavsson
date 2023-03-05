class Laser {
  constructor(spos, angle) {
    this.s = 10;
    this.pos = createVector(spos.x, spos.y);
    this.velocity = p5.Vector.fromAngle(angle);
    this.velocity.mult(6);
    this.d = d;
  }

  update() {
    this.pos.add(this.velocity);
  }

  animate() {
    push();
    noFill();
    stroke(random(0, 256), random(0, 256), random(0, 256));
    circle(this.pos.x, this.pos.y, this.s);
    pop();
  }

  hits(enemies) {
    this.d = dist(this.pos.x, this.pos.y, enemies.pos.x, enemies.pos.y);

    if (this.d < enemies.s) {
      return this.d;
    }
  }
}
