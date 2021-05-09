var h,m,s,ha,ma,sa;
function setup() {
  createCanvas(600,600);
 
  angleMode(DEGREES)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  //predefined functions
  h =hour();
  m =minute();
  s =second();
 //translating psotiton
  translate(300,300);
  //rotating 90 degrees anticlockwise
  rotate(-90);

  //seconds  
  sa = map(s,0,60,0,360);
  push();
  rotate(sa);
  stroke(255,0,0);
  strokeWeight(5);
  line(0,0,100,0);
  pop();
  
  //minutes
  ma = map(m,0,60,0,360);
  push();
  rotate(ma);
  stroke(0,255,0);
  strokeWeight(6);
  // translate(400,200);
  line(0,0,80,0);
  pop();
  //noFill();
  
  /*h%12 divides the time with 12 and 
  remainder is the time in hours for
  the hour hand to move*/
  ha = map(h%12,0,12,0,360);
  push();
  rotate(ha);
  stroke(0,0,255);
  strokeWeight(7);
  // translate(400,200);
  line(0,0,60,0);
  pop();
 
  //drawing the arcs along with
  // the hands of clock moving

  noFill();
  stroke(0,0,255);
  strokeWeight(7);
  arc(0,0,310,310,0,ha);
  stroke(0,255,0);
  strokeWeight(6);
  arc(0,0,290,290,0,ma);
  stroke(255,0,0);
  strokeWeight(5);
  arc(0,0,270,270,0,sa);
  
 
  drawSprites();
  rotate(90);
  
  noStroke();
  fill(147,247,191);
  textSize(48);
  text("TIME never STOPS!",-200,-200);
  textSize(24);
  text("The time is "+h+" hours "+m+" minutes "+s+" seconds",-200,200);
}