var ghost,ghost_running,ghostImage;
var doors,doorImage;
var tower,towerImage;
var climber,climberImage;
var invisibleobstacle;

var obstaclesGroup;
var climbersGroup,doorsGroup;

var gameState="play";

function preload(){
  ghostImage=loadAnimation("ghost-jumping.png","ghost-standing.png");
  doorImage=loadImage("door.png");
  towerImage=loadImage("tower.png");
 climberImage=loadImage("climber.png") ;
}

function setup(){
 createCanvas(600,600) ;
  
  
  
  tower=createSprite(300,300);
  tower.addImage(towerImage);
   tower.velocityY=5;
  
  climbersGroup=new Group();
  doorsGroup=new Group();
  obstaclesGroup=new Group();
  
  ghost=createSprite(250,300,20,20);
  ghost.addAnimation("running",ghostImage);
  ghost.scale=0.5;
  
  
}

function draw(){
  
  background("red");
    
  
  if(gameState==="play"){
     if(keyDown("right_arrow")){
    ghost.x=ghost.x+5;
  }
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-5;
  }
  if(keyDown("space")){
    ghost.velocityY=-5;
  }
    
     Spawndoors();
    
     if(ghost.isTouching(climbersGroup)){
    ghost.velocityY=0;
  }
     if(tower.y>400){
    tower.y=300 ;
  }
  
  ghost.velocityY=ghost.velocityY+0.5;
  
  }
  
 if(ghost.isTouching(obstaclesGroup)){
   ghost.destroy();
   gameState="end";
   
 }
 
  
  drawSprites();
  
  if(gameState==="end"){
    stroke("black");
    fill("black")
    textSize(30);
    text("GAMEOVER",230,300);
  }
}

function Spawndoors(){
    
  if(frameCount%200===0){
    
    
    doors=createSprite(300,-25)
    doors.addImage(doorImage);
    doors.velocityY=5;
    doors.x=Math.round(random(100,300))
    climber=createSprite(300,-30)
    climber.addImage(climberImage);
    climber.velocityY=5;
    climber.x=doors.x;
    invisibleobstacle=createSprite(300,250)
    invisibleobstacle.velocityY=5;
    invisibleobstacle.visible=false;
    
    obstaclesGroup.add(invisibleobstacle);
    climbersGroup.add(climber);
    doorsGroup.add(doors);
  }
  
}