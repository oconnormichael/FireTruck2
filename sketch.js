var firet, firetImage, water, waterImage, waterGroup, house, houseImage, flame, flameImage, flameGroup, flame2, flame2Image, flameGroup2, flame3, flame3Image, flameGroup3;
var gameState = "pause";
var item1, score, miss, high, buy, buyImage, item2, buy2, buy2Image;
var gameState = "play";
var shop, shopImage, timeball, timeball2;

function preload() {
  firetImage = loadImage("firetruck.png");
  houseImage = loadImage("houses.png");
  flameImage = loadImage("fire.png");
  waterImage = loadImage("water.png");
  flame2Image = loadImage("fire2.png");
  flame3Image = loadImage("fire3.png");
  shopImage = loadImage("shop.png");
  buyImage = loadImage("buy.png");
  buy2Image=loadImage("buy2.png");
}


function setup() {
  createCanvas(600, 600);
  timeball = createSprite(0, 0, 10, 10);
  timeball2= createSprite(0,0,10,10);

  

  house = createSprite(300, 300, 600, 600);
  house.addImage(houseImage);
  house.scale = 1;


  firet = createSprite(300, 500, 20, 20);
  firet.addImage(firetImage);
  firet.scale = 0.3;

  bar = createSprite(300, 600, 600, 1);
  bar.visible = false;

  shop = createSprite(300, 300, 600, 600);
  shop.addImage(shopImage);
  shop.visible = false;

  buy = createSprite(124, 104, 109, 112);
  buy.addImage(buyImage);
  buy.visible = false;
  
  buy2=createSprite(267,104,109,112);
  buy2.addImage(buy2Image);
  buy2.visible=false;

  flameGroup = new Group();
  waterGroup = new Group();
  water2Group = new Group();
  flameGroup2 = new Group();
  flameGroup3 = new Group();
  flameGroup1_1= new Group();
  flameGroup1_2= new Group();
  flameGroup1_3= new Group();
  score = 0;
  miss = 0;
  high = 0;
  item1 = 0;
  item2=0;
}

function draw() {
  console.log(item1)
  background("white");

  house.visible = true;


  if (gameState === "play") {

    shop.visible = false;
    buy.visible = false;
buy2.visible = false;
    if (keyDown("S")) {
      gameState = "pause";
    }
    if (keyDown("LEFT")) {
      firet.x = firet.x - 9;
    }
    if (keyDown("RIGHT")) {
      firet.x = firet.x + 9;
    }
    water();
    water2();
    flame();
    flame2();
    flame3();
    flame1_1()
    flame1_2()
    flame1_3()
    if (flameGroup.isTouching(waterGroup)) {
      flameGroup.destroyEach();
      waterGroup.destroyEach();
      score = score + 1;
    }

    if (flameGroup2.isTouching(waterGroup)) {
      flameGroup2.destroyEach();
      waterGroup.destroyEach();
      score = score + 3;
    }
    if (flameGroup3.isTouching(waterGroup)) {
      flameGroup3.destroyEach();
      waterGroup.destroyEach();
      score = score + 5;
    }
    if (flameGroup.isTouching(water2Group)) {
      flameGroup.destroyEach();
      water2Group.destroyEach();
      score = score + 1;
    }

    if (flameGroup2.isTouching(water2Group)) {
      flameGroup2.destroyEach();
      water2Group.destroyEach();
      score = score + 3;
    }
    if (flameGroup3.isTouching(water2Group)) {
      flameGroup3.destroyEach();
      water2Group.destroyEach();
      score = score + 5;
    }

    if (flameGroup.isTouching(bar)) {
      if (high < score) {
        high = score;
      }
      score = score = 0;
      flameGroup.destroyEach();
      miss = miss + 1;
    }
    if (flameGroup2.isTouching(bar)) {
      if (high < score) {
        high = score;
      }
      score = score = 0;
      flameGroup2.destroyEach();
      miss = miss + 1;

    }
    if (flameGroup3.isTouching(bar)) {
      if (high < score) {
        high = score;
      }
      score = score = 0;
      flameGroup3.destroyEach();
      miss = miss + 1;

    }

  if (flameGroup1_1.isTouching(waterGroup)) {
      flameGroup1_1.destroyEach();
      waterGroup.destroyEach();
      score = score + 2;
    }

    if (flameGroup1_2.isTouching(waterGroup)) {
      flameGroup1_2.destroyEach();
      waterGroup.destroyEach();
      score = score + 6;
    }
    if (flameGroup1_3.isTouching(waterGroup)) {
      flameGroup1_3.destroyEach();
      waterGroup.destroyEach();
      score = score + 10;
    }
    if (flameGroup1_1.isTouching(water2Group)) {
      flameGroup1_1.destroyEach();
      water2Group.destroyEach();
      score = score + 2;
    }

    if (flameGroup1_2.isTouching(water2Group)) {
      flameGroup1_2.destroyEach();
      water2Group.destroyEach();
      score = score + 6;
    }
    if (flameGroup1_3.isTouching(water2Group)) {
      flameGroup1_3.destroyEach();
      water2Group.destroyEach();
      score = score + 10;
    }

    if (flameGroup1_1.isTouching(bar)) {
      if (high < score) {
        high = score;
      }
      score = score = 0;
      flameGroup1_1.destroyEach();
      miss = miss + 1;
    }
    if (flameGroup1_2.isTouching(bar)) {
      if (high < score) {
        high = score;
      }
      score = score = 0;
      flameGroup1_2.destroyEach();
      miss = miss + 1;

    }
    if (flameGroup1_3.isTouching(bar)) {
      if (high < score) {
        high = score;
      }
      score = score = 0;
      flameGroup1_3.destroyEach();
      miss = miss + 1;

    }
    
  }
  if (gameState === "pause") {
    if (timeball > 1) {
      buy.visible = true;
    }
    if (timeball2 > 1) {
      buy2.visible = true;
    }
    shop.visible = true;


    if (keyDown("A") && (score >= 25) && (timeball.x < 1)) {
      item1 = item1 + 1;
      score = score - 25;
      timeball = timeball.x + 10;

    }
    
    if (keyDown("B") && (score >= 30) && (timeball2.x < 1)) {
      item2 = item2 + 1;
      score = score - 30;
      timeball2 = timeball2.x + 10;

    }

    if (keyDown("C")) {
      gameState = "play";

    }
    flameGroup.destroyEach();
    flameGroup2.destroyEach();
    flameGroup3.destroyEach();
    flameGroup1_1.destroyEach();
    flameGroup1_2.destroyEach();
    flameGroup1_3.destroyEach();
  waterGroup.destroyEach();
    water2Group.destroyEach();
  }

  drawSprites();
  fill("green");
  textSize(20);
  text("Score:" + score, 500, 60);
  fill("red");
  text("Missed:" + miss, 490, 90);
  fill("yellow");
  text("High Score:" + high, 453, 30)


}



function flame() {
 if(item2===0){ if (frameCount % 50 === 0) {
    var flame = createSprite(200, -140)
    flame.x = Math.round(random(100, 400))
    flame.addImage(flameImage)
    flame.scale = 0.08;
    flame.velocityY = 10;
    flame.lifetime = 900;
    flame.setCollider("circle", 0, 150, 240);
    flame.debug = false;
    if (score > 50) {
      flame.velocityY = 15;
    }
    flameGroup.add(flame);
  }
}
}
function flame2() {
  if(item2===0){if (score > 10) {
    if (frameCount % 300 === 0) {
      var flame2 = createSprite(200, -140)
      flame2.x = Math.round(random(100, 400))
      flame2.addImage(flame2Image)
      flame2.scale = 0.08;
      flame2.velocityY = 15;
      flame2.lifetime = 900;
      flame2.setCollider("circle", 0, 150, 240);
      flame2.debug = false;
      if (score > 50) {
        flame2.velocityY = 20;
      }
      flameGroup2.add(flame2);
    }
  }
}
}
function flame3() {
 if(item2===0){ if (score > 25) {
    if (frameCount % 500 === 0) {
      var flame3 = createSprite(200, -140)
      flame3.x = Math.round(random(100, 400))
      flame3.addImage(flame3Image)
      flame3.scale = 0.08;
      flame3.velocityY = 20;
      flame3.lifetime = 900;
      flame3.setCollider("circle", 0, 150, 240);
      flame3.debug = false;
      if (score > 50) {
        flame3.velocityY = 25;
      }
      flameGroup3.add(flame3);
    }
  }
}
}

function flame1_1() {
  if(item2===1){if (frameCount % 50 === 0) {
    var flame1_1 = createSprite(200, -140)
    flame1_1.x = Math.round(random(100, 400))
    flame1_1.addImage(flameImage)
    flame1_1.scale = 0.08;
    flame1_1.velocityY = 10;
    flame1_1.lifetime = 900;
    flame1_1.setCollider("circle", 0, 150, 240);
    flame1_1.debug = false;
    if (score > 50) {
      flame1_1.velocityY = 15;
    }
    flameGroup1_1.add(flame1_1);
  }
}
}
function flame1_2() {
   if(item2===1){if (score > 10) {
    if (frameCount % 300 === 0) {
      var flame1_2 = createSprite(200, -140)
      flame1_2.x = Math.round(random(100, 400))
      flame1_2.addImage(flame2Image)
      flame1_2.scale = 0.08;
      flame1_2.velocityY = 15;
      flame1_2.lifetime = 900;
      flame1_2.setCollider("circle", 0, 150, 240);
      flame1_2.debug = false;
      if (score > 50) {
        flame1_2.velocityY = 20;
      }
      flameGroup1_2.add(flame1_2);
    }
  }
}
}
function flame1_3() {
  if(item2===1){ if (score > 25) {
    if (frameCount % 500 === 0) {
      var flame1_3 = createSprite(200, -140)
      flame1_3.x = Math.round(random(100, 400))
      flame1_3.addImage(flame3Image)
      flame1_3.scale = 0.08;
      flame1_3.velocityY = 20;
      flame1_3.lifetime = 900;
      flame1_3.setCollider("circle", 0, 150, 240);
      flame1_3.debug = false;
      if (score > 50) {
        flame1_3.velocityY = 25;
      }
      flameGroup1_3.add(flame1_3);
    }
  }
}
}
function water() {
  if (item1 === 0) {
    if (keyDown("space")) {
      var water = createSprite(firet.x, firet.y - 10, 10, 10)
      water.addImage(waterImage);
      water.velocityY = -10;
      water.lifetime = 15;
      water.scale = 0.05;
      water.setCollider("circle", 0, 0, 100)
      waterGroup.add(water);

      if (keyDown("a") && "space") {
        water.velocityY = -8;
        water.velocityX = -6;
        water.lifetime = 10;
        water.scale = 0.05;
      }
      if (keyDown("d") && "space") {
        water.velocityY = -8;
        water.velocityX = 6;
        water.lifetime = 10;
        water.scale = 0.05;
      }
    }
  }
}

function water2() {
  if (item1 === 1) {
    if (keyDown("space")) {
      var water2 = createSprite(firet.x, firet.y - 10, 10, 10)
      water2.addImage(waterImage);
      water2.velocityY = -10;
      water2.lifetime = 30;
      water2.scale = 0.05;
      water2.setCollider("circle", 0, 0, 100)
      water2Group.add(water2);

      if (keyDown("a") && "space") {
        water2.velocityY = -8;
        water2.velocityX = -6;
        water2.lifetime = 25;
        water2.scale = 0.05;
      }
      if (keyDown("d") && "space") {
        water2.velocityY = -8;
        water2.velocityX = 6;
        water2.lifetime = 25;
        water2.scale = 0.05;
      }
    }
  }
}