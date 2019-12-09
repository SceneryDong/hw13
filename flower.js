function Flower(x, y) {
  this.x = x;
  this.y = random(0,200);
  this.r = 20;

  this.xdir = 1;

  this.disappear = function() {
    this.y = this.r + 400; 
  }

  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.show = function() {
    noStroke();
    fill(150);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

}
