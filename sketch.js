var y1,y2,y3,y4;
var sprites=[]
function setup()
{
  createCanvas(400,400);
  y1=createSprite(75,100,30,30);
  y2=createSprite(150,250,30,30);
  y3=createSprite(300,300,30,30);
  y4=createSprite(350,150,30,30);
  sprites=[y1,y2,y3,y4];
  console.log(sprites[0].position.x);
  console.log(sprites[2].position.y);
}

function draw() 
{
background(51);

drawSprites();
}

