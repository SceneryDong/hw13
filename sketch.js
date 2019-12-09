var ship;
var flowers = [];
var drops = [];

function preload() {
  soundFormats("wav");
  mySound = loadSound("shoot.wav");
}


function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  // drop = new Drop(width/2, height/2);
  for (var i = 0; i < 10; i++) {
    flowers[i] = new Flower(i * 50 + 20, 60);
  }
}

function draw() {
  background(10);
  ship.show();
  ship.move();

  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    for (var j = 0; j < flowers.length; j++) {
      if (drops[i].hits(flowers[j])) {
        mySound.play()
        flowers[j].disappear();
        drops[i].evaporate();
      }
    }
  }

  var edge = false;
  var lose = false
  var temp = 1;


  for (var i = 0; i < flowers.length; i++) {
    flowers[i].show();
    flowers[i].move();
    if (flowers[i].x > width || flowers[i].x < 0) {
      edge = true;
    }
    if (flowers[i].y >= height - 50 && flowers[i].y <= 400) {
      lose = true;
    }

    if (flowers[i].y < 400) {
      temp = 0;
    }

  }

  if (edge) {
    for (var i = 0; i < flowers.length; i++) {
      flowers[i].shiftDown();
    }
  }


  if (lose) {
    fill(255)
    textSize(30)
    text("Be careful next time!", 200, 200)
  }

  if (temp) {
    fill(255)
    textSize(30)
    text("Congratulations!", 200, 200)
    // flowers[i].y == random (0,200)
  }


  for (var i = drops.length - 1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }

  }


}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}


function keyPressed() {
  if (key === ' ') {
    var drop = new Drop(ship.x, height - 40);
    drops.push(drop);
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
