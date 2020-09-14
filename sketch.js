var rect1,rect2;

function setup() {
  createCanvas(800,400);
 rect1=createSprite(200,200,100,50);
 rect2=createSprite(300,100,50,100);
  rect1.shapeColor="blue";
  rect2.shapeColor="blue";
  
  rect1.debug= true;
  rect2.debug= true;
}

function draw() {
  background(0);
  
  rect2.x=World.mouseX;
  rect2.y=World.mouseY;

  if(rect2.x-rect1.x<=rect2.width/2+rect1.width/2
    &&rect1.x-rect2.x<=rect1.width/2+rect2.width/2
    &&rect2.y-rect1.y<=rect2.height/2+rect1.height/2
    &&rect1.y-rect2.y<=rect1.height/2+rect2.height/2){
    rect1.shapeColor="green";
    rect2.shapeColor="white"

  }
  else{
    rect1.shapeColor="blue";
    rect2.shapeColor="blue";
     

  }
   
  drawSprites();
}