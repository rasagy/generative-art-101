var a;
var b;

function setup() {
  createCanvas(300,300);
  frameRate(30);
  colorMode(HSB, 100);
  background(0);
  a=0;
  b=50;
}

function draw() {
  background(0,0.1);
  fill(map(a,0,2,0,100), 90, 90);
  ellipse(sin(a*PI)*(b)+width/2,cos(a*PI)*(b)+height/2,mouseX/10+15);
  a=a+0.01;
  b=b+random(1)-0.5;
  if(a>2) a=0;
}

function mousePressed() {
  saveCanvas(frameCount+".png",'png');
}