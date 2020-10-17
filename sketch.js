function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 300, 50, 80);
  fixedRect.shapeColor="green"
  movingRect=createSprite(400,200,80,30);
  fixedRect.shapeColor="green"
  bts1=createSprite(100,100,50,50);
  bts2=createSprite(200,100,50,50);
  bts3=createSprite(300,100,50,50);
  bts4=createSprite(400,100,50,50);
  bts4.velocityY=3;
  fixedRect.velocityY=-3;
}

function draw() {
  background(255,255,255);
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  console.log(movingRect.x)
  if(isTouching(movingRect,bts1)){
    bts1.shapeColor="blue";
    movingRect.shapeColor="blue";
  }

  else{
    bts1.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  bounceOff(bts4,fixedRect);
  drawSprites();
}
