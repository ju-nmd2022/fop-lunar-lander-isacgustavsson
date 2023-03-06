let racetrack;
let player;
let force;
let img;

function setup() {
  createCanvas(800, 600);

  racetrack = new Racetrack();
  player = new Player();
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
}
