class Polygon {
    constructor(x,y,radius){
        var options = {
            'restitiution': 0.5,
            'friction': 1.0,
            'density': 1.0
        }
        this.body = Bodies.circle(x,y, radius, options );
        this.radius = radius;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        
        imageMode(CENTER)
        ellipseMode(CENTER);
        image(this.image,0,0,40,40);
        pop()
    }
}