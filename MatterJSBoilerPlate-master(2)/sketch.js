const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function detectCollision(lmango, lstone) {
  var mangoBodyPostion = lmango.body.position;
  var stoneBodyPostion = lstone.body.position;

  var distance = dist(mangoBodyPostion.x, mangoBodyPostion.y, stoneBodyPostion.x, stoneBodyPostion.y);
  if (distance <= 200) {
    Matter.Body.setStatic(lmango.body, false);
  }
}




function preload() {

}

function setup() {
  var canvas = createCanvas(1200, 400);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(600, height, 1200, 40);
  stone1 = new Stone(350, 210, 50, 50);
  boy1 = new boy(400, 300)
  mango1 = new Mango(1000, 100);
  mango2 = new Mango(900, 175);
  mango3 = new Mango(1050, 25);
  mango4 = new Mango(1100, 175);
  mango5 = new Mango(1115, 100);
  mango6 = new Mango(925, 80)
  Tree = new tree(1000, 200)
  constrain = new constraint(stone1.body, { x: 350, y: 210 })

  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(51, 177, 255);

  ground.display();
  boy1.display();
  Tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone1.display();
  

  detectCollision(mango1, stone1);
  detectCollision(mango2, stone1);
  detectCollision(mango3, stone1);
  detectCollision(mango4, stone1);
  detectCollision(mango5, stone1);

  // Matter.Body.setStatic(mango1.body, false)



  drawSprites();

}

function mouseDragged() {

  Matter.Body.setPosition(stone1.body, { x: mouseX, y: mouseY })

}

function mouseReleased() {
  constrain.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Body.setPosition(stone1.body, { x: 350, y: 210 })
    constrain.join(stone1);
  }
}
