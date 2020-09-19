const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



//Create variables here
var dog, happyDogImage, dogImage, database, foodS, foodStock, bark, nom, timer2, add, feed, fedTime, lastFed, food, feed, time,ding;
var timer = null;
var imm;
var foodoid;

function preload() {
  happyDogImage = loadImage("cookiedog2.png");
  //ding = loadSound("Coin.wav")
  dogImage = loadImage("hungrydog.png");
  //dogImage = loadImage(".png");
  bark = loadSound("Dog1.wav");
  nom = loadSound("recording1.wav");
  imm = loadImage('Untitled.png');

}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1200, 500);
  dog = createSprite(width / 2, height / 2 + 50, 100, 100);
  dog.addImage(dogImage);
  dog.scale = 0.4;
  database = firebase.database();
  foodStock = database.ref('Food');
  lastFed = database.ref('lastFedA');

  //console.log(foodStock + "");
  foodStock.on('value', readStock);
  lastFed.on('value', readStock2);

  // foodStock.on("value",20);
  food = new Food();
  food.preload();
  feed = createButton("Feed Dog")
  feed.position(550, 50)
  feed.mousePressed(feedDog);
  feed = createButton("Add Food")
  feed.position(450, 50)
  feed.mousePressed(addFood);
}



function draw() {

  Engine.update(engine);
  //console.log(hour());
  if (timer === null) {
    bark.play();
    timer = 0;

  }

  background("rgb(46,139,87)");
  food.Display(foodS);

  drawSprites();
  textSize(30);
  fill("white");
  text("Biscuit packs left : " + foodS, 20, 50);
  //text("Press the up arrow to feed the dog biscuits !", 660, 50)
  //add styles here
  //nom.play();
text("Last Fed : " + lastFed+" (24hr format)",800,50);
  
  if (timer > 0) {
    if (foodS != 0) {


    }
    timer = timer - 1
  } else {
    dog.addImage(dogImage);

  }
  if (timer === 1) {
    bark.play();
  }
  if (timer2 < 0) {
    timer2 = timer2 - 1;
    fill("black");
    textSize(200);
    text("Refilling...", 250, 250);

  }
}





function readStock(dat) {
  //console.log(data.val());
  foodS = dat.val();
  //console.log(foodS);
}

function readStock2(dat) {
  //console.log(data.val());
  lastFed = dat.val();
  console.log(lastFed);
}
function writeStock(x) {
  if (x >= 1) {
    x = x - 1;
  }

  database.ref("/").set({
    Food: x,
    lastFedA: hour()

  })
}
function feedDog() {
  if (foodS != 0) {
    nom.play();
    food.Display(foodStock - 1);

    dog.addImage(happyDogImage);
  }
  writeStock(foodS);
  timer = 60;
}
function addFood() {
  foodS = foodS + 1;
 // ding.play();

  database.ref("/").set({
    Food: foodS,
    lastFedA: lastFedA


  })
}