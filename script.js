const gameContainer = document.getElementById('gameContainer');
const ctx = gameContainer.getContext("2d");

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.rotation = 0; 
  
  }


  draw(filled=true, color="black", lineWidth='4') {
    ctx.rotate(this.rotation)
    ctx.clearRect(0, 0, gameContainer.width, gameContainer.height);
    
    ctx.beginPath();
    
    
    if (filled) {
    
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);  
      
    }
    else {
      ctx.lineWidth = lineWidth
      ctx.strokeStyle = color;
      ctx.rect(this.x, this.y, this.width, this.height);

      
    }
    

    
    ctx.stroke();
    
    
  }
  
}

var rect = new Rect(10, 10, 30, 30);

window.requestAnimationFrame(gameLoop);

lastDt = new Date();


rect.rotation = 20;
function gameLoop() {

  var curDt = new Date();
  
  var fps = 1000 / (curDt - lastDt);
  
  lastDt = curDt;


  rect.x += 1;
  
  //rect.rotation = 20 * Math.PI / 180;
  
  rect.draw(filled=false, color='green', lineWidth='4');
 
  window.requestAnimationFrame(gameLoop);
  
  
}
gameLoop()
