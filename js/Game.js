class Game {
          constructor(){
        
          }
        
          getState(){
            var gameStateRef  = database.ref('gameState');
            gameStateRef.on("value",function(data){
               gameState = data.val();
            })
        
          }
        
          update(state){
            database.ref('/').update({
              gameState: state
            });
          }
        
          async start(){
            if(gameState === 0){
              player = new Player();
              var playerCountRef = await database.ref('playerCount').once("value");
              if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
              }
              form = new Form()
              form.display();
            }
        
            ball1 = createSprite(100,200);
            ball1.setCollider("circle",0,0,60)
           ball1.debug="true";
            ball1.addAnimation("ball1",ball1_img);
            ball1.addAnimation("fireball",fireball_img);
            ball1.addAnimation("slimeball",slimeball_img);

            ball2 = createSprite(300,200);
            ball2.setCollider("circle",0,0,60)
            ball2.debug="true";
            ball2.addAnimation("ball2",ball2_img);
             ball2.addAnimation("fireball",fireball_img);
             ball2.addAnimation("slimeball",slimeball_img);

            ball3 = createSprite(500,200);
            
            ball3.setCollider("circle",0,0,60)
           ball3.debug="true";
            ball3.addAnimation("ball3",ball3_img);
             ball3.addAnimation("fireball",fireball_img);
             ball3.addAnimation("slimeball",slimeball_img);

            ball4 = createSprite(700,200);
            ball4.setCollider("circle",0,0,60)
           ball4.debug="true";
            ball4.addAnimation("ball4",ball4_img);
             ball4.addAnimation("fireball",fireball_img);
             ball4.addAnimation("slimeball",slimeball_img);

            balls = [ball1, ball2, ball3, ball4];

          }
        
          play(){
            form.hide();
        
            Player.getPlayerInfo();
            
            if(allPlayers !== undefined){
              //var index = 0;
            
              background(rgb(198, 135, 103));
              image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
              //index of the array
              var index =0;
        
              //x and y position of the balls
              var x =200;
              var y;
        
              for(var plr in allPlayers){
                //add 1 to the index for every loop
                index = index + 1 ;
                x = 200 + (index * 200) + allPlayers[plr].xPos;
                y = displayHeight - allPlayers[plr].distance ;
                
                balls[index-1].x = x;
                balls[index-1].y = y;
                textAlign(CENTER);
                textSize(20);
                fill("white")
                text(allPlayers[plr].name, balls[index - 1].x, balls[index - 1].y + 75);

                
                     
               
                if (index === player.index){
                  balls[index - 1].shapeColor = "red";
                  camera.position.x = displayWidth/2;
                  camera.position.y = balls[index-1].y;
                 
                 
                   if( balls[index - 1].isTouching(f2)){
                    balls[index-1].changeAnimation("fireball",fireball_img)
                    balls[index-1].scale=1
                    
                      yVel -= 0.9;
                      console.log("detected")
                      
                   } 
                  if(balls[index-1].isTouching(f3)){
                    balls[index-1].changeImage("slimeball",slimeball_img);
                  }
                }
               
    
              }
        
            }
        
     
              if(keyIsDown(UP_ARROW) && player.index !== null){
                player.distance +=20
                player.update();
              }

              if(keyIsDown(DOWN_ARROW) && player.index !== null){
                player.distance -=20
                player.update();
              }
                  if (keyIsDown(RIGHT_ARROW) && player.xPos<width/2+300) {
                    player.xPos += 5
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.xPos<width/2+300) {
                    player.xPos-= 5
                    player.update();
                }
              
            
        
          //move the ball
       
         
          //display sprites
          drawSprites();
         
        }
           
      
        }
