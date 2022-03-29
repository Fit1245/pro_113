function preLoad(){

}
function setup() {
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
  }
  function draw() {
      image(video,50,50,550,350);

      fill(0,128,0);
  stroke(0,128,0);
  circle(50,50,40);

  fill(128,0,0);
  stroke(128,0,0);
    rect(70,45,549,10);

    fill(0,128,0);
    stroke(0,128,0);
    circle(600,50,40);

    fill(128,0,0);
    stroke(128,0,0);
    rect(595,70,10,320);


    fill(0,128,0);
    stroke(0,128,0);
    circle(50,400,40);
  
    fill(128,0,0);
    stroke(128,0,0);
      rect(70,400,549,10);
  
      fill(0,128,0);
      stroke(0,128,0);
      circle(600,400,40);

      fill(128,0,0);
    stroke(128,0,0);
    rect(595,30,10,0);

    stroke(128,0,0);
    rect(45,70,10,310);
    stroke(128,0,0);
    rect(595,70,10,310);


}
function take_snapshot() {
 
  save("student_name.png")
}

    
    

