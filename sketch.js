
// variable - can change
// constant - cannot change
//Matter.js - Engine, World, Bodies 
// namespacing - giving a smaller name , like a nickname
// Matter.Bodies.rectangle - Bodies.rectangle
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;

var box1;
var box2;
var box3;
var box4;

var pig1;
var pig2;
var pig3;

var log1;
var log2;
var log3;
var log4;

var bird;

var backgroundImage;

function preload(){

backgroundImage = loadImage("sprites/bg.png");

}
function setup() {
  createCanvas(1200,400);

  //creating an engine
  engine = Engine.create();
  // attaching world to engine
  world = engine.world;
  // starting the engine
  Engine.run(engine);

  box1 = new Box(600,350,60,60);
  box2 = new Box(800,350,60,60);
  box3 = new Box(600,270,60,60);
  box4 = new Box(800,270,60,60);
  
  ground = new Ground(600,390,1200,20);
  
  pig1 = new Pig(700,350);
  pig2 = new Pig(700,270);
  pig3 = new Pig(700,190);
  
  log1 = new Log(700,310,260,PI/2);
  log2 = new Log(700,230,260,PI/2);
  log3 = new Log(650,160,135,PI/6);
  log4 = new Log(750,160,135,-PI/6);

  bird = new Bird(100,20)
  
}

function draw() {
  background(backgroundImage);  

  rectMode(CENTER);
  

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();

  pig1.display();
  pig2.display();
  pig3.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  bird.display();
}