var oxygenMuhs1 , oxygenMuhs1Img;
var oxygenMuhs2 , oxygenMuhs2Img;
var oxygenMuhs3 , oxygenMuhs3Img;

function preload(){
  //loading images for oxygen
  
  oxygenMuhs1Img = loadImage("oxygenMuhs1.png");
  oxygenMuhs2Img = loadImage("oxygenMuhs2.png");
  oxygenMuhs3Img = loadImage("oxygenMuhs3.png");

}
function setup(){
createCanvas(3000,3000)
  // creating sprite image for oxygen available in chennai hospital no.1
oxygenMuhs1 = createSprite(600, 400,150,150);
oxygenMuhs1.addImage(oxygenMuhs1Img);

// creating sprite image for oxygen available in chennai hospital no.2
oxygenMuhs2 = createSprite(600, 1100,150,150);
oxygenMuhs2.addImage(oxygenMuhs2Img);


// creating sprite image for oxygen available in chennai hospital no.3
oxygenMuhs3 = createSprite(600, 1800,150,150);
oxygenMuhs3.addImage(oxygenMuhs3Img);

}

function draw(){
  background("purple")
  drawSprites();
}