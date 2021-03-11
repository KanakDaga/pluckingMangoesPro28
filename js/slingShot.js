class SlingShot{
    constructor(bodyA, pointB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.03,
            length:20
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling)
        this.pointB = pointB;
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
}