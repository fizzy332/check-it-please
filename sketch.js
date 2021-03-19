const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var raindrops;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
raindrop1=new dro(200,200)


}

function draw(){
    background(0)

   if(frameCount%20===0){
    raindrops1 .display();
   }
}
function ran(){
    if(this.raindrop1.position.y>height){
        Matter.Body.setPosition(this.raindrop1,{x:random(0,400),y:random(0,400)})
    }
}

