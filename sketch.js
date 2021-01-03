var fruit;
var f1Img,f2Img,f3Img,f4Img;
var sword,swordImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score =0;
var fruitGroup,enemyGroup;
var enemey,enemyImg;
var gameOver,gameOverImg;


function preload(){
  f1Img = loadImage("fruit1.png");
  f2Img = loadImage("fruit2.png");
  f3Img =loadImage("fruit3.png");
  f4Img = loadImage("fruit4.png");
  swordImg = loadImage("sword.png")
  enemyImg = loadImage("alien1.png","alien2.png");
  gameOverImg = loadImage("gameover.png");
}

function setup()
{
  createCanvas(600,400);
  sword = createSprite(100,160)
  sword.addImage(swordImg);
  sword.scale =0.5;
   
  fruitGroup = new Group();
  enemyGroup = new Group();
}

function draw(){
  background("lightyellow");
  text("Score: "+ score,400,50);
  
  if(gameState === PLAY)
  {
  sword.x = World.mouseX;
  sword.y = World.mouseY;
  fruits();
  createenemy(); 
    if(fruitGroup.isTouching(sword))
    {
      score = score +1;
      fruitGroup.destroyEach();
    }
  }
  
  if(enemyGroup.isTouching(sword))
    {
     gameState = END;
     fruitGroup.destroyEach();
     enemyGroup.destroyEach();
     fruitGroup.setVelocityXEach(0);
     enemyGroup.setVelocityXEach(0) 
     sword.addImage(gameOverImg);
     sword.x = 300;
     sword.y = 200;
    }
  drawSprites();
}



function fruits()
{ 
  if(frameCount %60 === 0)
  {
  fruit = createSprite(600,200,10,10);
  var rand = Math.round(random(1,4));
  console.log(rand);
  switch(rand)
    {
      case 1: fruit.addImage(f1Img);
              break;
      case 2: fruit.addImage(f2Img);
              break;
      case 3: fruit.addImage(f3Img);
              break;
      case 4:fruit.addImage(f4Img);
              break;
     default:break;        
    }
  fruit.scale = 0.2;
  fruit.velocityX = -6;
  fruit.y = Math.round(random(50,350)); 
  fruit.lifetime = 100;
  fruitGroup.add(fruit);  
  }
}



function createenemy()
{
  if(frameCount %200 === 0)
  {
  enemy = createSprite(600,200,10,10);
  enemy.addAnimation("running",enemyImg)  
  enemy.scale = 0.8;
  enemy.velocityX = -6;
  enemy.y = Math.round(random(100,300)); 
  enemy.lifetime = 100;
  enemyGroup.add(enemy); 
  } 
}


