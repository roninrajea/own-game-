var wast, backgroundImg, dustbin, road, title, form, game

function preload() {
  dustbin = loadImage("assets/dustbin.png");
  road = loadImage("assets/road.png");
  wast = loadImage("assets/wast.png");
  backgroundImg = loadImage("assets/background.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //database = firebase.database();
  game = new Game();
  game.start();

}


function draw() {
  background(backgroundImg);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

