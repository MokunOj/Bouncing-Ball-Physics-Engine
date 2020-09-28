var car,wall
var speed,weight

speed = random(55,90);
weight = random(400,1500);

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,1000)
  wall.shapeColor = "black"
}

function draw() {
  background("red");  
  drawSprites();
}