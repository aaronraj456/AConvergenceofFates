const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backg1;
var ground;

var gameState = "Chapter1";

var player;
var forestNight;
var painting;
var Forest1;
var Forest2;
var Forest3;
var Desert1;
var Desert2;
var Desert3;
var ruins;
var Plains1;
var Plains2;
var Plains3;
var CrystalCave1;
var CrystalCave2;
var CrystalCave3;
var MagmaCavern1;
var MagmaCavern2;
var DiamondForest1;
var DreamForest1;
var EclipseStanding;
var Fruit1;
var zoneMode;
var Graveyard;
var IvyStanding;
var Lampfruit;
var LavaCave1;
var LavaCave2;
var lushtree;
var oldSword;
var fossilTooth;

var object1;

var skill1;
var skill2;
var skill3;
var skill4;
var skill5;
var fire;
var ice;
var fireSkill;
var flag = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;
var flag5 = false;
var objectFlag = false;

var playerX = 50;
var playerY = 440;
var bgFlag = false;
var bgImage;
var bgState;

function preload() {
  backg1 = loadImage("Photos/back1.jpg");
  forestNight = loadImage("Photos/backNight.JPG");
  painting = loadImage("Photos/prophet'sPaint.png");
  fireSkill = loadImage("Photos/FireButton.png");
  Forest1 = loadImage("Photos/SecretForest1.png");
  Forest2 = loadImage("Photos/SecretForest2.png");
  Forest3 = loadImage("Photos/SecretForest3.png");
  Desert1 = loadImage("Photos/Desert1.png");
  Desert2 = loadImage("Photos/Desert2.png");
  Desert3 = loadImage("Photos/Desert3.png");
  ruins = loadImage("Photos/Ruins1.png");
  Plains1 = loadImage("Photos/Plains1.png");
  Plains2 = loadImage("Photos/Plains2.png");
  Plains3 = loadImage("Photos/Plains3.png");
  CrystalCave1 = loadImage("Photos/CrystalCave1.png");
  CrystalCave2 = loadImage("Photos/CrystalCave2.png");
  CrystalCave3 = loadImage("Photos/CrystalCave3.png");
  DiamondForest1 = loadImage("Photos/DiamondForest.png");
  DreamForest1 = loadImage("Photos/DreamForest1.png");
  EclipseStanding = loadImage("Photos/EclipseStanding.png");
  Fruit1 = loadImage("Photos/Fruit1.png");
  Graveyard = loadImage("Photos/Graveyard2.png");
  IvyStanding = loadImage("Photos/IvyStanding.png");
  Lampfruit = loadImage("Photos/Lampfruit.png");
  LavaCave1 = loadImage("Photos/LavaCave1.png");
  LavaCave2 = loadImage("Photos/LavaCave2.png");
  lushtree = loadImage("Photos/LushfruitTreeT1.png");
  oldSword = loadImage("Photos/oldSword.png");
  fossilTooth = loadImage("Photos/Tooth.png");
}

function setup() {
  createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 500, 2000, 30);
  player = new PC1(50, 440, 60, 100);

  fire = new ShootFire(
    player.body.position.x + 20,
    player.body.position.y,
    50,
    50
  );
  ice = new ShootIce(
    player.body.position.x + 20,
    player.body.position.y,
    50,
    50
  );

  skill1 = createButton("Fire");
  //skill1.position(800,450);
  skill1.mousePressed(() => {
    flag = true;
  });

  skill2 = createButton("Frost");
  skill2.mousePressed(() => {
    flag2 = true;
  });

  skill3 = createButton("Cloak of deception");
  skill3.mousePressed(() => {
    flag3 = true;
  });

  skill4 = createButton("Lunar Frenzy");
  skill4.mousePressed(() => {
    flag4 = true;
  });

  skill5 = createButton("Hover");
  skill5.mousePressed(() => {
    flag5 = true;
  });

  object1 = new Object1(450, 30, 60, 120);

  zoneMode = 0;
  bgState = "Forest";
  //getBackgroundImage(bgState);
}

function draw() {
  //background(bgImage);
  //getBackgroundImage(bgState);
  Engine.update(engine);

  ground.display();
  player.display();
  object1.display();

  //getBackgroundImage(bgState);
  if(flag = true){
    fire.display();
  }

  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 20;
    Matter.Body.setPosition(player.body, { x: playerX, y: playerY });
  }

  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 10;
    Matter.Body.setPosition(player.body, { x: playerX, y: playerY });
  }

  if(flag5 === true){
    playerY -= 10
    Matter.Body.setPosition(player.body, { x: playerX, y: playerY });
  }

  if(keyIsDown(DOWN_ARROW)){
    Matter.Body.setPosition(player.body, { x: playerX, y: playerY });
    flag5 = false;
  }

  // Forest1 // CrystalCave1, // CrystalCave2 //Desert1

  if (player.body.position.x >= 1000) {
    //setBgState(bgState);
    playerX = 50;
    playerY = 440;
    Matter.Body.setPosition(player.body, { x: playerX, y: playerY });
    //getBackgroundImage(bgState);
  }

 
  if (Matter.Detector.canCollide(player.body, object1.body)) {
    objectFlag = true;
  }

  if(objectFlag === true){
    textSize(20);
    fill("Red");
    text(
      "Fat plump leaves suggest evolution in a desert, however these juicy, tasty plants can be found everywhere",
      200,
      200
    );
  }
  
}

function getBackgroundImage(bgState1) {
  switch (bgState1) {
    case "Forest":
      bgImage = Forest1;
      break;
    case "Forest2":
      bgImage = Forest2;
      break;
    case "Forest3":
      bgImage = Forest3;
      break;
    case "CrystalCave1":
      bgImage = CrystalCave1;
      break;
    case "CrystalCave2":
      bgImage = CrystalCave2;
      break;
    case "CrystalCave3":
      bgImage = CrystalCave3;
      break;
    case "Desert1":
      bgImage = Desert1;
      break;
    case "Desert2":
      bgImage = Desert2;
      break;
    case "Desert3":
      bgImage = Desert3;
      break;
    default:
      bgImage = Forest1;
      break;
  }
}

function setBgState(state) {
  console.log(state);
  switch (state) {
    case "Forest":
      bgState = "Forest2";
      break;
    case "Forest2":
      bgState = "Forest3";
      break;
    case "Forest3":
      bgState = "CrystalCave1";
      break;
    default:
      bgState = "Forest";
      break;
  }
}
