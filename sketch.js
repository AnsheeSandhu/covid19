
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var covidGroup

function preload()
{
	backgroundImage=loadImage("bg.jpg");
	readysoldier=loadImage("c1.png")
	attackSoldier=loadImage("c2.png")
	covidImage=loadImage("covid.png");
	
}

function setup() {
	createCanvas(800, 500);
	score=0;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 soldier=createSprite(100,400,20,20);
 soldier.addImage(readysoldier);
 soldier.scale=0.8
 soldier.setCollider("circle",50,90,70);
 //soldier.debug=true;

 covidGroup = createGroup();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  if(gameState===PLAY){
	  if(keyDown("right")){
		  soldier.addImage(attackSoldier);
	  }
	  if(keyDown("left")){
		  soldier.addImage(readysoldier);
	  }
	  if(keyDown("up")){
		  soldier.y=soldier.y-4
	  }
	  if(keyDown("down")){
		  soldier.y=soldier.y+4
	  }

	  if (covidGroup.isTouching(soldier))
	  {
		  covidGroup.destroyEach();
		  score=score+1
	  }
  }
  

 // soldier.display();
  drawSprites();

  if (frameCount % 90 === 0) {
    var covid = createSprite(600,120,40,10);
    covid.y = Math.round(random(80,500));
    covid.addImage(covidImage);
    covid.scale = 0.2;
    covid.velocityX = -5;
    covid.setCollider("circle",0,0,50)
 //   covid.debug=true
    
     //assign lifetime to the variable
    covid.lifetime = 200;
    covidGroup.add(covid);
  }
  textSize(30)
  fill("yellow");
  stroke("green")
  text("Score: "+ score, 200,45);
  textSize(30)
  fill("green");
  stroke("yellow")
  text("Fight the Corona virus with the sword of Vaccine",70,70);
  textSize(20)
  fill("green");
  stroke("yellow")
  text("Hint: Touch the virus with sword",100,90);
}




