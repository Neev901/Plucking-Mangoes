class tree {
  constructor(x, y) {
    var options = {
      isStatic: true,
      density: 1
    }
    this.body = Bodies.rectangle(x, y, 100, 100, options);
    this.image = loadImage("Plucking mangoes/tree.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(0, 0);
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 300, 450)
    pop();
  }
}