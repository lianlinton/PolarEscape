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

		this.image = loadAnimation("Images/polar/p1.png","Images/polar/p2.png","Images/polar/p3.png","Images/polar/p4.png","Images/polar/p5.png","Images/polar/p6.png","Images/polar/p7.png","Images/polar/p8.png");
	}
	display(){
			
		var bearPos=this.body.position;		

		push();
		translate(bearPos.x, bearPos.y);
		imageMode(CENTER)
		animation(this.image, 0 , 0, this.width, this.height);
		pop();
			
	}

}

