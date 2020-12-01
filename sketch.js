
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground ,groundImage, invisibleGround;
var survivaltime=0;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
createCanvas(600,600);
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running) ;
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2
  
invisibleGround = createSprite(400,355,900,10);
invisibleGround.visible = false;
    

  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() {
background("aqua");
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:+score,500,50")
  
  stroke("black");
  textSize(20);
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME:"+survivaltime, 100 ,50);
    
    if (ground.x < 200){
      ground.x = ground.width/2;
    }
  
  if (keyDown("space")&& monkey.y >= 100){
    monkey.velocityY=-12;
    
  }
    monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(invisibleGround);
  
  
  
  
  
 banana();
obstacle();
   
  
drawSprites();
  
}
 function banana(){
   
 if (frameCount % 80=== 0) {
    var banana = createSprite(600,200,40,10);
    banana.y = Math.round(random(120,200));
 
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 200;
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;
    
   
    bananaGroup.add(banana);
       
  }
   
   
   
   
 }







function obstacle(){
  
   if (frameCount % 300=== 0) { 
    var obstacle = createSprite(600,330,10,40);
    obstacle.lifetime=200;
 
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
   
    
    
   
    obstacleGroup.add(obstacle);
       
  }
  
  
  
  
  
  
  
  
}





