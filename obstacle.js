class obstacle{
    constructor(x, y, width, height){
        var options= {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/base.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
    }
    display(){
        var obstaclePos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(obstaclePos.x, obstaclePos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
    }
}