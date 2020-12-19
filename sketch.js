
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var basket1sprite,basket2sprite,basket3sprite

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ground_options={
		isStatic : true
	}

	engine = Engine.create();
	world = engine.world;

	basket1body= Bodies.rectangle(595,700,240,10);
  rect(basket1body.position.x,basket1body.position.y,200,10)
	basket2body = Bodies.rectangle (490,660,10,100)
	rect(basket2body.position.x,basket2body.position.y,10,100,ground_options)
	basket3body = Bodies.rectangle(700,645,10,100,ground_options)
	rect(basket3body.position.x,basket3body.position.y,10,100)
	World.add(world,basket1body)
	World.add(world,basket2body)
	World.add(world,basket3body)

	
	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

	paper = Bodies.circle(100, 650, 20 , options );
	World.add(world,paper)

	var ground_options={
		isStatic : true
	}

	
	ground = Bodies.rectangle (width/2,height,800,10,ground_options)
	World.add(world,ground)

	
   
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  

	
	ellipse(paper.position.x,paper.position.y,20,20)
	rect(ground.position.x,ground.position.y,800,10)
	rect(basket1body.position.x,basket1body.position.y,240,10)
	rect(basket2body.position.x,basket2body.position.y,10,100)
	rect(basket3body.position.x,basket3body.position.y,10,100)
	

	


	

  
  drawSprites();
 
}

function keyPressed(){
	
	if (keyCode === UP_ARROW){
		console.log("veydant")
		Matter.Body.applyForce(paper,paper.position,{x:45,y:-85});
	}
}



