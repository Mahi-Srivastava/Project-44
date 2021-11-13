var bg,bgimg,player,shooterimg,shootershooting
var zombie,zombieimg
var heart1,heart2,heart3
var heart1img,heart2img,heart3img
var zombiegroup
var life = 3
var bullets = 70
var gameState = "fight"
var lose,winning,explosionsound

function preload(){
  bgimg = loadImage("assets/bg.jpeg")
  heart1img = loadImage("assets/heart_1.png")
  heart2img = loadImage("assets/heart_2.png")
  heart3img = loadImage("assets/heart_3.png")
  zombieimg = loadImage("assets/zombie.png")
  shooterimg = loadImage("assets/shooter_2.png")
  shootershootingimg = loadImage("assets/shooter_3.png")
  lose = loadSound("assets/lose.mp3")
  winning = loadSound("assets/win.mp3")
  explosionsound = loadSound("assets/explosion.mp3")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  bg = createSprite(displayWidth/2 -20,displayHeight/2 -40,20,20)
  bg.addImage(bgimg)
  bg.scale = 1.1
  
  player = createSprite(displayWidth-1350,displayHeight-300,50,50)
  player.addImage(shooterimg)
  player.scale = 0.5

  heart1 = createSprite(displayWidth-150,40,20,20)
  heart1.addImage(heart1img)
  heart1.scale = 0.2
  heart1.visible = false

  heart2 = createSprite(displayWidth-140,40,20,20)
  heart2.addImage(heart2img)
  heart2.scale = 0.2
  heart2.visible = false

  heart3 = createSprite(displayWidth-120,40,20,20)
  heart3.addImage(heart3img)
  heart3.scale = 0.2
}

function draw(){
 background(0)

  
  
  drawSprites()
}


  