class penguin extends obstacle{
    constructor(x,y){
        super(x,y, 100, 100);
        this.image = loadImage("Images/penguin.png");
    }
}