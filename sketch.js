var car,wall;
var speed,weight;
var deformation = 0.5*weight*speed*speed/22509;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(50,200,50,50)
  car.velocityX = speed;
  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor = color (80,80,80);
}

function draw() {
  background(255,255,255);
  if(car.isTouching(wall)){
    car.collide(wall)
    deformation = 0.5*weight*speed*speed/22500;
    if (deformation<100) {
    car.shapeColor = 'green'  
    }
    if (deformation<180 && deformation>100) {
      car.shapeColor = 'yellow'
    }
    if (deformation<100) {
    car.shapeColor = 'red'  
    }
    }
  drawSprites();
}
