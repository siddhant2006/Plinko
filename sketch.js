const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var stand;
var divisionHeight=300;
var particles = [];
var plinkos = [];
var divisions = [];
function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  stand = new Ground(400,790,800,20);
}

function draw() {
  background(0); 
  Engine.update(engine); 

  for(i=0;i<plinkos.length;i++)
  {
    plinkos[i].display();
  }

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2+10), 10,10));
  }

  for(i=0;i<particles.length;i++)
  {
    particles[i].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
 
  stand.display();
}