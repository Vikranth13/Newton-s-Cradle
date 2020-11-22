
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	t1 = new Top (250,100,60,20);
	t2 = new Top (310,100,60,20);
	t3 = new Top (370,100,60,20);
	t4 = new Top (430,100,60,20);
	t5 = new Top (490,100,60,20);

	b1 = new bob(250,400,60);
	b2 = new bob(310,400,60);
	b3 = new bob(370,400,60);
	b4 = new bob(430,400,60);
	b5 = new bob(490,400,60);

	l1 = new chain(t1.body, b1.body);
	l2 = new chain(t2.body, b2.body);
	l3 = new chain(t3.body, b3.body);
	l4 = new chain(t4.body, b4.body);
	l5 = new chain(t5.body, b5.body);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  t1.display();
  t2.display();
  t3.display();
  t4.display();
  t5.display();

  b1.display();
  //b1.setCollider("circle",0,0,60);
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  l1.display();
  l2.display();
  l3.display();
  l4.display();
  l5.display();

  //force();
  drawSprites();
 
}
function keyPressed() {
if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(b1.body,b1.body.position,{x:-250,y:-255}); } 
} 



