const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world; 

var ball;
var ground;

function setup() {
 createCanvas(800,400);

 engine=Engine.create();
  world=engine.world;

  var ball_options ={
    restitution: 0.2
  }
    var ground_options ={
      isStatic: true
  }
  ball=Bodies.circle(400,100,20,ball_options);
  World.add(world,ball);
  ground=Bodies.rectangle(400,390,800,40,ground_options);
  World.add(world,ground);

  console.log(ball.type)
}

function draw() {
  background(0);  
  Engine.update(engine);
  ellipseMode(RADIUS);
  rectMode(CENTER);
  
rect(ground.position.x, ground.position.y, 800, 40);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}