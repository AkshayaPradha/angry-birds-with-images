class Ground {
    constructor(x,y,width,height){
       this.width = width;
       this.height = height;
       this.image = loadImage("sprites/ground.png");
       
       var options = {
           isStatic : true,
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       World.add(world,this.body);


    }
     
    display(){

        imageMode(CENTER)
        var pos = this.body.position;

        image(this.image,pos.x,pos.y,this.width,this.height)


    }

}