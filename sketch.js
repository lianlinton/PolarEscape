
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var polarBearObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	polarBearObject = new polarBear(200,200, 100, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  polarBearObject.display();
  drawSprites();
 
}



