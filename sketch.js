const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new floor(600,height,1200,20);
    block1 = new brick(1000, 300, 50,100);
    block2 = new brick(400, 300, 50, 100);
    block3 = new brick(1000, 200, 50,100);
    block4 = new brick(400, 200, 50,100);
    block5 = new brick(1000, 50, 50,100); 
    block6 = new brick(400, 50, 50,100);
    
    ball = new sphere(700, 250, 75,75);
   
    Swing = new shot(ball.body, {x:700,y:5});


    //log6 = new Log(230,180,80, PI/2);
    //slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    
    background(0);
    
        
    
    Engine.update(engine);
    //strokeWeight(4);
   
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    
    ball.display();
    Swing.display();
    //log6.display();
    //slingshot.display();
}

function mouseDragged(){
    
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}




