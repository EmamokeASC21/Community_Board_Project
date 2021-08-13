let states;
let losing_state;
let losing_screen_message = "You Lose!"
let start_screen;
let start_screen_message = "START"
let game_screen;


let playerXPos = 400;
let playerYPos = 400;
//let playerX
let playerXDirection = 1;
let playerYDirection = 1;

let enemyXPos = 250;
let enemyYPos = 250;
let enemyXSpeed;
let enemyYSpeed;
let enemyXDirection = 1;
let enemyYDirection = 1;

let coinXPos;
let coinYPos;

let playerLeft, playerRight, playerTop, playerBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;
let coinLeft, coinRight, coinTop, coinBottom;

function setup() {
  if (states == start_screen) {
    background(255, 0, 0);
    textSize(50);
    text(start_screen_message, 250, 250);
  }
  if (states == game_screen) {
    createCanvas(500, 500);
    background(0);


    enemyXSpeed = 1;
    enemyYSpeed = 2;
    coinXPos = random(0, 490);
    coinYPos = random(0, 490);
    enemyXPos = random(0, 470);
    enemyYPos = random(0, 470);
  }


  let gameCanvas = createCanvas(500, 500);
  gameCanvas.parent("game");
  background(0);


  enemyXSpeed = 1;
  enemyYSpeed = 2;
  coinXPos = random(0, 490);
  coinYPos = random(0, 490);
  enemyXPos = random(0, 470);
  enemyYPos = random(0, 470);
}

function draw() {
  background(0);

  fill(255, 0, 0);
  square(enemyXPos, enemyYPos, 30); //enemy: player needs to avoid

  enemyXPos += enemyXSpeed * enemyXDirection;
  enemyYPos += enemyYSpeed * enemyYDirection;

  if (enemyXPos < 10 || enemyXPos > 470) {
    enemyXDirection *= -1;
  }
  if (enemyYPos < 10 || enemyYPos > 470) {
    enemyYDirection *= -1;
  }

  fill(255, 0, 0);
  square(enemyXPos, enemyYPos, 30); //enemy: player needs to avoid

  enemyXPos += enemyXSpeed * enemyXDirection;
  enemyYPos += enemyYSpeed * enemyYDirection;

  if (enemyXPos < 10 || enemyXPos > 470) {
    enemyXDirection *= -1;
  }
  if (enemyYPos < 10 || enemyYPos > 470) {
    enemyYDirection *= -1;
  }



  fill(0, 255, 0)
  square(playerXPos, playerYPos, 30); //player

  if (keyIsDown(LEFT_ARROW)) {
    playerXPos -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerXPos += 3;
  }
  if (keyIsDown(UP_ARROW)) {
    playerYPos -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerYPos += 3;
  }

  if (playerXPos < 10 || playerXPos > 475) {
    playerXDirection *= -1;
  }
  if (playerYPos < 10 || playerYPos > 475) {
    playerYDirection *= -1;
  }

  if (playerXPos && playerYPos == coinXPos && coinYPos) {

  }


  fill(255, 255, 23);
  stroke(5);
  ellipse(coinXPos, coinYPos, 10, 10); //coin: player needs to collect*/


  playerLeft = playerXPos - 15;
  playerRight = playerXPos + 15;
  playerTop = playerYPos - 15;
  playerBottom = playerYPos + 15;

  enemyLeft = enemyXPos - 15;
  enemyRight = enemyXPos + 15;
  enemyTop = enemyYPos - 15;
  enemyBottom = enemyYPos + 15;

  coinLeft = coinXPos - 5;
  coinRight = coinXPos + 5;
  coinTop = coinYPos - 5;
  coinBottom = coinYPos + 5;

  if (playerLeft > coinRight || playerRight < coinLeft || playerTop > coinBottom || playerBottom < coinTop) {
    //console.log("not touching");
  } else {
    console.log("Coin collected");
    console.log(coinXPos);
    console.log(coinYPos);
    coinXPos = random(0, 500);
    coinYPos = random(0, 500);
    console.log(coinXPos);
    console.log(coinYPos);
    enemyXSpeed += 1
    enemyYSpeed += 1
  }


  if (playerLeft > enemyRight || playerRight < enemyLeft || playerTop > enemyBottom || playerBottom < enemyTop) {
    //console.log("not touching");
  } else {
    console.log("touching");
    background(0);
    fill(random(255), random(255), random(255));
    textSize(22);
    text("You lose!", 140, 480);
  }
}

function mouseClicked() {
    if (mouseX && mouseY == start_screen_message) {
      game_screen
    }
}