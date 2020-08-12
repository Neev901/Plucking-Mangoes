class Mango{
  constructor(x,y){
    var options={
      isStatic:true,
      restitution:0,
      friction:1
    }
    this.body= Bodies.circle(x,y,20,options)
    World.add(world, this.body)
    this.x=x;
    this.y=y;
    this.image= loadImage("Plucking mangoes/mango.png")
  }
  display(){
    push();
    translate(0,0) 
    imageMode(CENTER);
    image(this.image, this.x, this.y, 50, 50) 
    pop();
  }
}