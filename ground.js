class ground{
	constructor(x,y,width,height,image,createBody){
		var options={
			isStatic:true			
		}
		this.x = x;
		this.y = y;
		this.width = width;
        this.height = height;
		this.image = image;
		if (createBody){
			this.body =Bodies.rectangle(x, y, width, height , options);
 			World.add(world, this.body);
		}

	}
	display(option){
		if (option){
			push();
			//translate(groundPosition.x, groundPosition.y);
			imageMode(CENTER)
			image(this.image, 600,300,this.width, this.height);
			pop();
		} else {
			var groundPosition=this.body.position;
			push();
			translate(groundPosition.x, groundPosition.y);
			rectMode(CENTER);
			fill("black");
			rect(0,0,this.width, this.height);
			pop();
		}
			
	}

}