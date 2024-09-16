function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("black");
    stroke("blue");
    fill("pink");
    
    if(mouseIsPressed){ 
    rect(mouseX, mouseY, 20, 35);
    }
    
    
  } 