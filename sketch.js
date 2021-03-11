
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2=new mango(1100,200,30);
	mango3=new mango(1000,150,30);
	mango4=new mango(1200,130,30);
	mango5=new mango(1030,50,30);
	mango6=new mango(955,245,30);
	mango7=new mango(900,170,30);
	mango8=new mango(1210,230,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  stoneObj=new Stone(235,420,30);

  slingShot = new SlingShot(stoneObj.body,{x:235,y:420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!

  textSize(30)
  text("Press space for a second chance", 120,100);

  image(boy ,200,340,200,300);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  groundObject.display();
  stoneObj.display();

  slingShot.display();

  detectollision(mango1, stoneObj);
  detectollision(mango2, stoneObj);
  detectollision(mango3, stoneObj);
  detectollision(mango4, stoneObj);
  detectollision(mango5, stoneObj);
  detectollision(mango6, stoneObj);
  detectollision(mango7, stoneObj);
  detectollision(mango8, stoneObj);

}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stoneObj.body, {x:235,y:420});
    slingShot.attach(stoneObj.body);
  }
}
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function detectollision(Lmango, Lstone){
  mangoBodyPosition = Lmango.body.position;
  stoneBodyPosition = Lstone.body.position;

  var distance = dist (stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
      if(distance<=Lmango.r+Lstone.r){
        Matter.Body.setStatic(Lmango.body, false);
    }
}
