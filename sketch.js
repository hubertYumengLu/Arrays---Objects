let shapes = []
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(200);
  for (let shape of shapes) {
    fill(shape.color)
    if (shape.shapeType === 'square') {
      rect(shape.x - 50, shape.y - 50, 100, 100);
    }
    if (shape.shapeType == 'circle') {
      circle(shape.x, shape.y, 100);
    }
    if (shape.shapeType == 'triangle'){
      triangle(shape.x, shape.y - 35, shape.x + 50, shape. y + 35, shape.x - 50, shape.y + 35)
    }
  }
}
function mousePressed() {
  addAShape();
}
function addAShape() {
  shape1 = {
    x: mouseX,
    y: mouseY,
    color: random(['red', 'blue', 'green']),
    shapeType: random(['square', 'circle', 'triangle'])
  }
  shapes.push(shape1);
}
function keyPressed(){
  if (shapes != []){
    deleteAShape()
  }
}
function deleteAShape(){
  shapes = shorten(shapes)
}