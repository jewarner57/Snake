var moveTimer = setInterval(moveSnake, 60);

function moveSnake() {
   snakeX += xSpeed;
   snakeY += ySpeed;
   
   if(snakeX > width || snakeX < 0 || snakeY > height || snakeY < 0) {
     gameOver = true;
   }
   
   xPositions.unshift(snakeX)
   yPositions.unshift(snakeY)
}

function drawSnake() {
  rectMode(CENTER)
  noStroke();
  fill(0, 255, 100)
  rect(snakeX, snakeY, 10, 10);
}

function addSections() {
  for(var i = 0; i < 3; i++) {
    counter += 1;
    snakeSections[counter] = new Snake();
  }
}

function Snake() {
  
   this.sectionNumber = counter
  
   this.display = function() {
      rect(xPositions[this.sectionNumber], yPositions[this.sectionNumber], 10, 10);
      if(xPositions[this.sectionNumber] == snakeX && yPositions[this.sectionNumber] == snakeY) {
        gameOver = true;
      }
   }  
}