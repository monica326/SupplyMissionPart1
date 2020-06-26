const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var supply;
var helicopter;
var bucket;
var helicopterImage;
function preload()
{
   helicopterImage = loadImage("helicopter.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    supply=createSprite(350,100,100,100);
   supply.scale = 0.5;

   helicopter=createSprite(350,100,50,20);
   helicopter.addImage(helicopterImage);
   helicopter.scale = 0.8;
   
   
}

function draw(){
    background(0);
   

   if(keyDown("DOWN_ARROW"))
{
   supply.velocityY=2;
}

drawSprites();

}