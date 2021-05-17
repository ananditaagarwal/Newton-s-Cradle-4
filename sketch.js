
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob (200, 550, 100);
	bob2 = new Bob (300, 550, 100);
	bob3 = new Bob (400, 550, 100);
	bob4 = new Bob (500, 550, 100);
	bob5 = new Bob (600, 550, 100);
	roof = new Roof(400, 200, 600, 40);
	rope1 = new Rope(bob1.body, {x:200, y:200});
	rope2 = new Rope(bob2.body, {x:300, y:200});
	rope3 = new Rope(bob3.body, {x:400, y:200});
	rope4 = new Rope(bob4.body, {x:500, y:200});
	rope5 = new Rope(bob5.body, {x:600, y:200});

	Engine.run(engine);
}


function draw() {

  background("white");
  Engine.update(engine);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}


