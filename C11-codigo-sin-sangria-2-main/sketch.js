var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var nube,nibe;
var moltre,moltres

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png");
    nibe=loadImage("nube.png");
    moltre=loadImage("moltres.png");
}

function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    //create invisible pisotion
    invisibleGround = createSprite (200,190,400,10);
    invisibleGround.visible = false;

}
function draw() {
    background(220);
    //jump when the space button is pressed
    if (keyDown("space") &&  trex.y >= 80) {
        trex.velocityY = -10; 
    }
    trex.velocityY = trex.velocityY + 0.8
    if (ground.x < 0) {
        ground.x = ground.width / 2; 
    }
    trex.collide(invisibleGround);
    //trex.collide(nube);
    nubes ();
   ave();
    //trex.collide(top);
    drawSprites();
}
    function nubes () { 
        if(frameCount % 60 === 0 ){
            nube = createSprite (600,random (0,100),40,10);
            nube.addImage("nibe",nibe);
            nube.scale = 0.05;
            nube.velocityX = -3;
            nube.depth=trex.depth;

        } 
        
    
        
    }
    function ave () {
        if(frameCount % 60 === 0){
            moltres = createSprite (600,random(0,150),40,10);
            moltres.addImage("moltre",moltre) ;
            moltres.scale = 0.2 ;
            moltres.velocityX=-5;
            //  moltres.velocityY=-4;
        }

    }
