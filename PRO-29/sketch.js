const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
    polygon_img=loadImage("polygon.png");
}

function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground();
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);

    //LEVEL ONE
    block1 = new Block(300,275,30,40);
    console.log(block1);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);

    //level two
    block8 = new Block(330,275,30,40);
    block9 = new Block(360,275,30,40);
    bloc10 = new Block(390,275,30,40);
    block11 = new Block(420,275,30,40);
    block12 = new Block(450,275,30,40);

    //level three
    block13 = new Block(360,275,30,40);
    block14 = new Block(390,275,30,40);
    block15 = new Block(420,275,30,40);
    //top
    block16 = new Block(390,275,30,40);

    //set for second stand
    //level one
    block1 = new Block(640,175,30,40);
    block2 = new Block(670,175,30,40);
    block3 = new Block(700,175,30,40);
    block4 = new Block(730,175,30,40);
    block5 = new Block(760,175,30,40);
    //level two
    block6 = new Block(670,175,30,40);
    block7 = new Block(700,175,30,40);
    block8 = new Block(730,175,30,40);
    //top
    block9 = new Block(700,175,30,40);

    //ball holder with slings
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingShot = new Slingshot(this.ball,{x:100,y:200});
}