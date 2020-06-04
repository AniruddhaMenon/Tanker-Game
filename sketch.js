const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
var tanker,ball1,ball2,shooter;

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(300,390,10000,40);
    tanker = new Tanker(300,380,150,30);
    ball1 = new Ball(500,-20,25);
    ball2 = new Ball(750,-30,25);  
    ball3 = new Ball(900,-20,25);
    ball4 = new Ball(600,-30,25);  
    shooter = new Shooter();                                                                                             
}

function draw() {
   background("black");
   Engine.update(engine);
   ground.display();
   ball1.display();
   ball2.display();
   ball3.display();
   ball4.display();
   shooter.display();
   tanker.display();
}

 function keyPressed() {
  if (keyCode === 37) {
      Matter.Body.setAngle(shooter.body);

  } else if (keyCode === 39) {
  }
}
 

function keyReleased() {

}