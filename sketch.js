var hypnoticBall, database;
var position;
var playerCount;
var gameState = 0;
var form,game,player;
var allPlayers


function setup(){
  database = firebase.database();
  createCanvas(500,500);

game = new Game();
game.getState();
game.start();
}

function draw(){
  if(playerCount===4){
    game.updateState(1)
  }
if(gameState===1){
  game.play();
}
}
