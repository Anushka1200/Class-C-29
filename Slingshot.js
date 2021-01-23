class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.imagesling1 = loadImage("sprites/sling1.png");
        this.imagesling2 = loadImage("sprites/sling2.png");
        this.imagesling3 = loadImage("sprites/sling3.png");

       
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            if(pointA.x<220){
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
                image(this.imagesling3,pointA.x-25,pointA.y-10,12,30)
    
            }  else {
                strokeWeight(4);
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y);
                image(this.imagesling3,pointA.x+25,pointA.y-10,12,30)
            }
           

        }
        image(this.imagesling1,200,20);
        image(this.imagesling2,170,20);

        
    }
    
}