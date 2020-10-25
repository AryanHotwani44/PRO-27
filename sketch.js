
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2,bob3,bob4,bob5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bob1 = new Bob(100,670,10,10)
	bob2 = new Bob(100,670,10,10)
	bob3 = new Bob(100,670,10,10)
	bob4 = new Bob(100,670,10,10)
	bob5 = new Bob(100,670,10,10)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



