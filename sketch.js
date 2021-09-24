const Engine = Matter.Engine;
const World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
var snow = [];
var engine;
var world;
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
    snow.push(new Snow(random(50,750),10))
  }

  for (var k = 0; k < snow.length; k++) {
    snow[k].display();
  } 
}
