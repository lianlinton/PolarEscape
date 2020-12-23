class polarBear{
	constructor(x,y,width, height){
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
		}
		this.x=x;
		this.y=y;
        this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(this.x, this.y, this.width-50, this.height-50, options);
 		World.add(world, this.body);

		this.image = loadAnimation("/images/polar/p1.jpg","/images/polar/p2.jpg","/images/polar/p3.jpg","/images/polar/p4.jpg","/images/polar/p5.jpg","/images/polar/p6.jpg","/images/polar/p7.jpg","/images/polar/p8.jpg");
	}
	display(){
			
		var bearPos=this.body.position;		

		push();
		translate(bearPos.x, bearPos.y);
		imageMode(CENTER)
		image(this.image, 0 , 0, this.width, this.height);
		pop();
			
	}

}

