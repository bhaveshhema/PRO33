var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var snow = [];

function preload () {
  bg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bg);
  Engine.update(engine);
  if (frameCount % 60 === 0){
    snow.push(new Snow(random(0,800),0))
  }

  for (var k = 0; k < snow.length; k++) {
    snow[k].display();
  } 
}