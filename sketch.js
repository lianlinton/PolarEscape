const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var polarBearObject,groundObject,backgroundImg;
var iceCubeObject, puddleObject, sealObject, penguinObject, foxObject;
var invisibleGroundObject, baseImage; 

function preload(){
	backgroundImg = loadImage("Images/background.jpg");	
	baseImage = loadImage("Images/base.png");
}

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

	
	var ground1 = createSprite(400, 200, 800, 10);
	ground1.velocityX = -4;
	ground1.setAnimation(backgroundImg);
	ground1.scale = 1;
	ground1.x = ground1.width/2;

	/*
	var ground2 = createSprite(200, 390, 800, 10);
	ground2.visible = false;
	*/

	//Create the Bodies Here.
	polarBearObject = new polarBear(200,200, 0.1, 0.1);
	groundObject = new ground(600, 300, 1200, 600, backgroundImg, false);
	invisibleGroundObject = new ground(600, 490, 1200, 50, baseImage, true);
	iceCubeObject = new iceCube(400,485);
	puddleObject = new puddle(500, 485);
	penguinObject = new penguin(600, 485);
	sealObject = new seal(700, 485);
	foxObject = new fox(800, 485);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  //groundObject.display(true);
  invisibleGroundObject.display(false);
  polarBearObject.display();
  iceCubeObject.display();
  puddleObject.display();
  penguinObject.display();
  sealObject.display();
  foxObject.display();
  drawSprites();
 
}



