function setup() {
  createCanvas(800,400);
  
  wall = createSprite(400, 200, 50, 50);
  wall.shapeColor = "blue"
  
  object = createSprite(200, 200, 50, 50);
  object.shapeColor = "red"

}

function draw() {
  background(255,255,255);  
  drawSprites();

object.x = mouseX;
object.y = mouseY;

if(object.x - wall.x < wall.width / 2 + object.width / 2 && wall.x - object.x < wall.width / 2 + object.width / 2
  && object.y - wall.y < wall.height / 2 + object.height / 2 && wall.y - object.y < wall.height / 2 + object.height / 2 ){

  object.shapeColor = "black" 
  wall.shapeColor = "black"

}

else{

  wall.shapeColor = "blue" 
  object.shapeColor = "red"

}









}