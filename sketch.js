var canvas;
var music;
var ball;
var wall1;
var wall2;
var wall3;
var wall4;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(770,600);

    //create 4 different surfaces
     wall1=createSprite(670,580,180,20);
     wall1.shapeColor=color("green");

     wall2=createSprite(480,580,180,20);
     wall2.shapeColor=color("red");

     wall3=createSprite(290,580,180,20);
     wall3.shapeColor=color("yellow");

     wall4=createSprite(100,580,180,20);
     wall4.shapeColor=color("blue");
     //create box sprite and give velocity
     
     ball=createSprite(380,50,40,40);
     
     ball.shapeColor=color("white");
     ball.velocityY=9;
     ball.velocityX=-1;
     
    }

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges= createEdgeSprites();
     ball.bounceOff(edges);
     
    if(wall1.isTouching(ball)&& ball.bounceOff(wall1)){
        ball.shapeColor="green";
        music.play();
    }

    if(wall2.isTouching(ball)){
        ball.shapeColor="red";
        ball.velocityY=0;
        ball.velocityX=0;
        music.stop();
    }

    if(wall3.isTouching(ball)&& ball.bounceOff(wall3)){
        ball.shapeColor="yellow";
        music.play();
    }

    if(wall4.isTouching(ball)&& ball.bounceOff(wall4)){
        ball.shapeColor="blue";
        music.play();
    }

  drawSprites();
}



















