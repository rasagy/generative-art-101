var n, c, s;

function setup() {
  createCanvas(300,300);
  frameRate(30);
  colorMode(HSB, 100);
  background(0);
  
  n=1;
  c=1;
  s=10;
  
  inputDay=createInput();
  inputDay.position(10,10);
  inputMonth=createInput();
  inputMonth.position(10,30);
  inputYear=createInput();
  inputYear.position(10,50);
  
  
  button = createButton('Make my Birthday poster!');
  button.position(10, 70);
  button.mousePressed(makeBirthdayPoster);
}

function draw() {
  background(0);
  for(i=0;i<n;i=i+1) {
    fill(map(c,1,12,0,100), 90, 90); 
    ellipse(map(i,0,31,20,width-20), mouseY, s);
  }
}

function makeBirthdayPoster() {
  n=inputDay.value();
  c=inputMonth.value();
  s=2016-inputYear.value();
}