function preload(){
  redImage= loadImage("red 3.png")
  blueImage= loadImage("blue 1.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  red= createSprite(random(50,1500), 40, 50, 50);
  red.addImage(redImage);
  red.scale= 0.2;
  blue= createSprite(random(50,1500), 40, 50, 50);
  blue.addImage(blueImage);
  blue.scale= 0.2
  player= createSprite(1000, 850, 50,50)
  

}

function draw() {
  background(255,255,255);
  red.velocityY=20
  blue.velocityY=20

  if(keyDown(RIGHT)){
    player.x=player.x+20
  }
  if(keyDown(LEFT)){
    player.x=player.x-20
  }


  drawSprites();
}