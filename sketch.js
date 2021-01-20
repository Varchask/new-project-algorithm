var fixedRect, movingRect;
var f1,f2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  f1 = createSprite(200,200,80,30);
  f1.shapeColor = "green";
  f1.debug = true;
  f2 = createSprite(100,200,80,30);
  f2.shapeColor = "green";
  f2.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (collideMaster(movingRect,f1)){
      movingRect.shapeColor = "blue";
      f1.shapeColor = "blue";
  }
  else if(collideMaster(movingRect,f2))
  {
    movingRect.shapeColor = "red";
    f2.shapeColor = "red";
  }
  else if(collideMaster(movingRect,fixedRect))
  {
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }
   


  drawSprites();
}
