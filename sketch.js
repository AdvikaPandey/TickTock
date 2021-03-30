var hr,mn,sc,scAngle,mnAngle,hrAngle;

function setup() {
  createCanvas(displayWidth,displayHeight);
  createSprite(400, 200, 50, 50);

  hr = hour();
  mn = minute();
  sc = second();

}

function draw() {
  background(255,255,255);  

angleMode(DEGREES);
scAngle = map(sc,0,60,0,360);
mnAngle = map(mn,0,60,0,360);
hrAngle = map(hr,0,60,0,360);

  drawSprites();
}
