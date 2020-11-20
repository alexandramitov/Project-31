var groundBody;




function setup() {
  createCanvas(480,500);
  createSprite(400, 200, 50, 50);

  groundBody = new Ground(10,10,480,500);



}

function draw() {
  background(10,10,10);  

  groundBody.display();

  drawSprites();
}