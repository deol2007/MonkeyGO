var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var bananaGroup, obstacleGroup
var survivalTime;
var obstacleImage

function preload() {
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  monkey = createSprite(100, 170, 10, 10)
  ground = createSprite(300, 200, 500, 10)
  ground.x = ground.width / 2;
  obstacleGroup = createGroup();
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.09
  survivalTime = 0
}


function draw() {
  background("blue")
  text("Survival Time: " + survivalTime, 200, 50);
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  survivalTime = Math.ceil(frameCount / frameRate())
  ground.velocityX = -6
  if (keyDown("space")) {
    monkey.velocityY = -6
  }
  monkey.velocityY = monkey.velocityY + 0.8

  ground.visible = flase
  monkey.collide(ground);

  spawnObstacles();
  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600, 165, 10, 40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage)

    obstacle.scale = 0.18;
    obstacle.lifetime = 300;

    obstacleGroup.add(obstacle);
  }
}