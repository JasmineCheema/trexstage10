var trex,trex_anim,edges,ground,ground2;
var iground,iground2;
var rand;
function preload()
{
    trex_anim=loadAnimation("trex1.png","trex3.png","trex4.png")
    ground=loadImage("ground2.png")
}

function setup()
{
      createCanvas(600,200);
      trex=createSprite(50,180,20,30)
      trex.addAnimation("tr",trex_anim)
      ground2=createSprite(300,180,600,20)
      ground2.addImage("g2",ground)
      iground=createSprite(300,186,600,10)
      iground.visible=false
       iground2=createSprite(300,38,600,5)
      iground2.visible=false
      edges=createEdgeSprites()
      trex.scale=0.7
       console.log("Hello")
}

function draw()
{
      background("white");
      ground2.velocityX=-4
      
  rand = Math.round(random(1,100));
  console.log(rand);

      if(ground2.x<0)
      {
          ground2.x=ground2.width/2
      }

      if(keyDown("space")&&trex.y>=148.1)
      {
          trex.velocityY=-10
          trex.velocityX=0
      }

      trex.velocityY=trex.velocityY+0.5

      trex.collide(iground)  
      trex.collide(iground2)
  spawnclouds();
     drawSprites();
}
function spawnclouds()
{
  
  
  
  
  
} 