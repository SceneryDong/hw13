function Ship() {
  this.x = width/2;
  this.xdir = 0;

  this.show = function() {
    fill(255);
    triangle(this.x-40, height, this.x+40, height, this.x,height-40);
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function(dir) {
    this.x += this.xdir*5;
  }

}
