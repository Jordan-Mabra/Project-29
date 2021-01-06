class Slingshot {
    constructor(bodyA ,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffnes: 0.05,
            length: 100
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            stroke("black");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}