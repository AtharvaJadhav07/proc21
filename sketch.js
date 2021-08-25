
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;

var ground_wall,left_wall,right_wall,ball;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


 


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball_options={
		isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
		
		 }
	
		

	ball= Bodies.circle(20,340,20,ball_options);
 World.add(world,ball);

 ground=new wall(width/2,670,width,20);

 left_wall=new wall(1100,600,20,120);
 
 right_wall=new wall(1350,600,20,120);

Engine.run(engine);
	
	

	




}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
 ground.show();
left_wall.show();
right_wall.show();
  
  drawSprites();
 
}
function keyPressed(){

if(keyCode==UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});

}


}




