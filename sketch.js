//namespacing or nicknaming
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


//created seperate engine and world for the ABG
var world,engine;
//created two objects
var ground;
var ball;

function setup() {
  //it is used to create a canvas/base
  createCanvas(800,400);

  //creating the ABG engine from the main Engine class
  engine = Engine.create();
  //the world of my ABG should be same as engine's world
  world = engine.world;

  //manipulated the property so that the ground doesn't fall
  options = {
    isStatic :true
  }

  //created ground object from the Bodies class
  ground = Bodies.rectangle(400,380,800,50,options);
  //we are adding ground and it's world to the main World class
  World.add(world,ground);

  //manipulated the property so that the ball bounces
  ballOptions = {
    restitution : 0.8
  }

  //created ball object from the Bodies class
  ball = Bodies.circle(400,80,20,ballOptions);
  
  //we are adding ball and it's world to the main World class
  World.add(world,ball);
  
}

function draw() {
  //adding the background to the canvas
  background("blue"); 
  
  //it keeps updating the engine
  Engine.update(engine);

  //it keeps the rectangle in the center of the canvas
  rectMode(CENTER);
  //displays a rectangle
  rect(ground.position.x,ground.position.y,800,50);

  //it makes circle touch the ground
  ellipseMode(RADIUS);
  //displays a circle
  ellipse(ball.position.x,ball.position.y,20,20);

 
}