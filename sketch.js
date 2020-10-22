
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	roof = new Roof(width/2, 150, width/2, 50)
	bobObject1 = new Bob(width/2 - 110, 450, 55);
	bobObject2 = new Bob(width/2 - 55, 450, 55);
	bobObject3 = new Bob(width/2, 450, 55);
	bobObject4 = new Bob(width/2 + 55, 450, 55);
	bobObject5 = new Bob(width/2 + 110, 450, 55);


	bobDiameter = 40;
	

	rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2, 0) 
	rope2=new Rope(bobObject2.body,roof.body,-bobDiameter*1, 0) 
	rope3=new Rope(bobObject3.body,roof.body,0, 0) 
	rope4=new Rope(bobObject4.body,roof.body,bobDiameter*1, 0) 
	rope5=new Rope(bobObject5.body,roof.body,bobDiameter*2, 0)


	var render = Render.create({ 
		element: document.body, 
		engine: engine, 
		options: { 
			width: 1200, 
			height: 700, 
			wireframes: false 
		} 
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  

  drawSprites();
 
}

function keyPressed() {

	if(keyCode === 	UP_ARROW){


		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-150, y:50});

	}
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}