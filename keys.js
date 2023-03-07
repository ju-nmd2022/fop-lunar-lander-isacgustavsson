class Key {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.s = 20;
    this.dir = 0;
  }

  animate() {
    translate(this.pos.x, this.pos.y);
    rotate(this.dir);
    stroke(0, 100);
    fill("yellow");
    rect(width / 2 - 3, height / 2 + 4, this.s - 15, this.s + 8);
    circle(width / 2, height / 2, this.s);

    rect(width / 2 - 8, height / 2 + 18, 5, 8);

    push();
    fill(0);
    circle(width / 2, height / 2, this.s / 2);
    pop();
  }
}
