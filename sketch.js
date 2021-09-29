// declare the constant variable here

// declare the global variable here
var backgroundImg;
var jetImg;
var earthImg;
var earth;
var alienrocketImg,alienrocket,asteroid,asteroidImg;
// load images and animation in the preload function
function preload(){
   backgroundImg = loadImage("images/background.jpg");
   jetImg = loadImage("images/rocket2.png");
   earthImg= loadImage("images/earth.png");
   alienrocketImg=loadImage("images/alienrocket2.png");
   asteroidImg=loadImage("images/asteroid3.png");
   
}

function setup(){
   createCanvas(800,500)

    // create sprite objects for spaceshuttle
    spacefighterjets=createSprite(150,400,10,10);
    spacefighterjets.addImage(jetImg);
    spacefighterjets.scale=0.2;
    push();
    spacefighterjets.rotation=30;
    pop();
     
   earth=createSprite(0,500,10,10);
    earth.addImage(earthImg);
    earth.scale=0.4;

    alienrocket=createSprite(600,100,10,10);
    alienrocket.addImage(alienrocketImg);
    alienrocket.scale=0.3;
   push();
   alienrocket.rotation=135;
  pop();
     asteroid=createSprite(500,100,10,10)
     asteroid.addImage(asteroidImg);
     asteroid.scale=0.2
}

function draw(){

    background(backgroundImg);
  
    drawSprites();
}
