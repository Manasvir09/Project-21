
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_option={
       isStatic:false,
	   friction:0,
	   density:1.2
	}
	ball=Matter.Bodies.circle(20,900,30,ball_option);
	World.add(world,ball);

    var ground_option={
		isStatic:true,
		friction:0,
		density:1.2
	 }
	 ground=Matter.Bodies.rectangle(500,995,1000,20,ground_option);
	 World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,60,60)
  rect(500,995,1000,20);

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball, ball.position,{x:80,y:-80})
	}
}

