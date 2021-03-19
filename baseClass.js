class baseclass  {
    constructor(x,y,radius){
    var options= {
        'friction':0.1,
        'restitution': 2
    }
    this.body=Bodies.circle(x,y,radius)
            
            World.add(world, this.body);
          }
          display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            fill(blue)
           ellipseMode(CENTER);
           ellipse( 0, 0,this.radius);
            pop();
          }
    }