class Form {

  constructor() {
 this.input = createInput("").attribute("placeholder", "Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
   

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Bounce Ball Game");
    this.title.position(displayWidth/2 - 350, 0);
    this.title.style('font-size', '70px');
    this.title.style('color', 'skyblue');
    this.input.position(displayWidth/2 - 160 , displayHeight/2 - 80);
    this.input.style('width', '200px');
    this.input.style('height', '20px');
    this.input.style('background', 'lavender');
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.button.position(800,500);
    this.button.style('width', '200px');
    this.button.style('height', '40px');
    this.button.style('background', 'lightpink');
    this.reset.position(displayWidth-300,20);

    

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.greeting.style('color', 'lightgreen');
      this.greeting.style('font-size', '100px');
    });
    
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    
    database.ref("/").update({
      players: null,
      finishedPlayers: 0,
    });});
  }
}
