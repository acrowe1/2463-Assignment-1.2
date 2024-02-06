let x; 
let y; 
let dragging = false; 
let colors; 
let selectedColor; 
const size = 10; 

function setup() {
  createCanvas(1000,1000); 
  selectedColor = color('white');

  // Color options 
  colors = [new ColorSquare(0,0,color('red')),
            new ColorSquare(0,20,color('orange')), 
            new ColorSquare(0,40,color('yellow')), 
            new ColorSquare(0,60,color('limegreen')), 
            new ColorSquare(0,80,color('lightblue')), 
            new ColorSquare(0,100,color('blue')), 
            new ColorSquare(0,120,color('magenta')), 
            new ColorSquare(0,140,color('brown')),
            new ColorSquare(0,160,color('white')),
            new ColorSquare(0,180,color('black'))]; 
}

function draw() {

  for(let i = 0; i < colors.length; i++) {
    colors[i].draw(); 
  }

  stroke(selectedColor);
  fill(selectedColor);
  // Allows circle to follow mouse, but only draws when the mouse is being pressed
  x = mouseX; 
  y = mouseY; 
  if(dragging){
    circle(x,y,size);
  }
}

function mousePressed() {
  if (mouseX >= x && mouseX <= x + size && mouseY >= y && mouseY <= y + size) {
    dragging = true; 
  }

  let isInColorSquare = false; 
    for(let i = 0; i < colors.length; i++) {
        if(colors[i].contains(mouseX, mouseY)) {
            selectedColor = colors[i].fill; 
            isInColorSquare = true; 
        } 
    }
}

function mouseReleased() {
  dragging = false; 
}

function mouseDragged() {
  if(dragging) {
    x += mouseX - pmouseX; 
    y += mouseY - pmouseY;
  }
}

// Skeleton for color option creation 
class ColorSquare {
  constructor(x,y,fill) {
      this.x = x; 
      this.y = y; 
      this.fill = fill; 
  }

  draw() {
      stroke(225);
      fill(this.fill);
      square(this.x,this.y,20);
  }

  contains(x,y) {
      let insideX = x >= this.x && x <= this.x+100; 
      let insideY = y >= this.y && y <= this.y+100; 
      return insideX && insideY; 
  }
}
