class boy {
  constructor(x, y) {
    var options = {
      isStatic: true,
      density: 1
    }
    this.body = Bodies.rectangle(x, y, 50, 100, options);
    this.image = loadImage("Plucking mangoes/boy.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(0, 0);
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 150, 300)
    pop();
  }
}