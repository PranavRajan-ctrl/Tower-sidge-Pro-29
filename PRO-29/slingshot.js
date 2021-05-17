class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA :bodyA,
            pointB :pointB,
            stiffness:0.04,
            length:1
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);

    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.body.postion;
            var pointB = this.pointB;
            strokeWeight();
            stroke("turquoise");
            line(pointA.x, pointA.y, pointB.x, this.pointB.y);
        }
    }
}