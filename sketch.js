var wall, thickness;
var bullet, speed, weight;
var thickness;
var damage;

function setup(){
  createCanvas(1400, 400);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
  console.log("Damage: ", damage);

  bullet = createSprite(50, 200, 20, 20);
  bullet.velocityX = speed;
}

function draw(){
  background("black");

  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;

    if (damage > 10){
      wall.shapeColor = color(255,0,0);
    }

    if (damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}
