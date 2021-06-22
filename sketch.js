var fish_img;
var back_img;
var shark, shark_img;
var score = 0;
var fishGroup;
var edges;


function preload(){
  back_img = loadImage("images/ocean.jpg")
  shark_img = loadImage("images/shark.png")
  fish_img = loadImage("images/nemo.png")
  
}

function setup() {
  createCanvas(800,400);

  shark = createSprite(400,200,20,20);
  shark.addImage("shark", shark_img);
  shark.scale = 0.20;

  fishGroup = new Group;

  edges = createEdgeSprites();
}


function draw() {
  background(back_img);  
  fill("black");
  text(score, 50, 375);


  if(keyIsDown(UP_ARROW)){

    shark.y = shark.y-7


  } else if(keyIsDown(DOWN_ARROW)){

    shark.y = shark.y+7

  }

  if(fishGroup.isTouching(shark)){
    
    fishGroup.destroyEach();
    score = score+1;
    
  }

  fish();
  shark.collide(edges);


  drawSprites();
}

function fish(){

    if(frameCount % 100 === 0) {
      var fishes = createSprite(800, Math.round(random(0,400)), 20, 20);
      fishes.addImage("fish", fish_img);
      

    fishes.velocityX = -6-(score/5);
    fishes.scale=0.09
    console.log(fishes.velocityX)
    fishGroup.add(fishes);
    
  }
}