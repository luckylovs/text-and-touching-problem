var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var obstacles;
var s;
var f2;
var score  = 0;
var form, player, game;
var Health ;
var balls, ball1, ball2, ball3, ball4,Fire,fire,slime,Slime;
var i, track, ball1_img, ball2_img, ball3_img, ball4_img;
var fireball,fireball_img,slimeball,slimeball_img;


function preload(){
  stone = loadImage("images/s1.png");
 Fire = loadImage("images/fire.png")
  ball1_img = loadAnimation("images/Basketball.png","images/Basketball1.png","images/Basketball2.png");
  ball2_img = loadAnimation("images/Soccerball.png","images/Soccerball1.png","images/Soccerball2.png");
  ball3_img = loadAnimation("images/Volleyball.png","images/Volleyball1.png","images/Volleyball2.png");
  ball4_img = loadAnimation("images/woodenball.png","images/woodenball1.png","images/woodenball2.png");
  track = loadImage("images/road.jpg");
  fireball_img = loadAnimation("images/fireball.png","images/fireball1.png","images/fireball2.png")
  Slime = loadImage("images/slime.png")
  slimeball_img = loadAnimation("images/Slime Ball.png","images/Slime Ball1.png","images/Slime Ball2.png")
  
}

function setup(){
  canvas = createCanvas(displayWidth-150,displayHeight-180);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 
  yVel = 0;
  xVel = 0;
  obstacles=createGroup();

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  for(i=0;i<5;i++)
  {
    w=random(200,950);
    h=random(-height*4,height-300);
  f1 = createSprite(w,h);
  f1.addImage("s1",stone);
  obstacles.add(f1);
 }

 for(i=0;i<5;i++)
 {
   w=random(200,950);
   h=random(-height*4,height-300);
   f2 = createSprite(w,h);
   f2.setCollider("circle",0,0,600);
   f2.debug="true";
   f2.addImage("fire",Fire);
   f2.scale = 0.2
   
 }
 for(i=0;i<5;i++)
 {
   w=random(300,1000);
   h=random(-height*6,height-400);
   f3 = createSprite(w,h);
   f3.setCollider("circle",0,0,600);
  f3.debug="true";
   f3.addImage("slime",Slime);
   f3.scale = 0.2
   
 }


}

function draw(){
   //start the game
   
   textSize(21);
   text("score:"+score,200,300); 
  
   //start the game
   if (playerCount === 4 ) {
     game.update(1);
     
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
     console.log("End");
   }}
 
  
