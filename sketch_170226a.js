var snakeX = 305;
var snakeY = 205;
var xSpeed = 10;
var ySpeed = 0;
var snakeDirection = 1; //0 is up, right is 1. down is 2, left is 3 - same order as CSS margins/padding

var gameOver = false;

var xPositions = [];
var yPositions = [];
var snakeSections = [];
var counter = 0;

var appleX = 0
var appleY = 0

function setup() {
  createCanvas(600, 400);
  moveApple();
}


function draw() {
  background(0);
  
  stroke(100);
  noFill();
  text(snakeSections.length, 10, 20);
  
  if(gameOver == false) {
    drawSnake();
  
  
    if(counter > 0) {
      for(var j = 1; j < snakeSections.length; j++) {
        snakeSections[j].display();
      }
    }
  }
  //apple
  fill(255,0,0);
  noStroke();
  rect(appleX+5, appleY+5, 10, 10)
  
  
  if(appleX+5 == snakeX && appleY+5 == snakeY) {
     addSections();
     moveApple();
  }
}

function keyPressed() {
   if(keyCode == LEFT_ARROW && (snakeDirection != 1 && snakeDirection != 3)) {
     ySpeed = 0;
     xSpeed = -10;
     snakeDirection = 3;
   }
   else if(keyCode == RIGHT_ARROW && (snakeDirection != 1 && snakeDirection != 3)) {
     ySpeed = 0;
     xSpeed = 10;
     snakeDirection = 1;
   }
   else if(keyCode == UP_ARROW && (snakeDirection != 2 && snakeDirection != 0)) {
     ySpeed = -10;
     xSpeed = 0;
     snakeDirection = 0;
   }
   else if(keyCode == DOWN_ARROW && (snakeDirection != 2 && snakeDirection != 0)) {
     print(snakeDirection)
     ySpeed = 10;
     xSpeed = 0;
     snakeDirection = 2;
   }
}

function moveApple() {
  appleX = (Math.round((Math.random())*59))*10//(Math.round((Math.random()+1)*6))*10
  appleY = (Math.round((Math.random())*39))*10//(Math.round((Math.random()+1)*4))*10
  
  console.log(appleX + " " + appleY)
}