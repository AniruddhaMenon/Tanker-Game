class Tanker {
    constructor(x, y,width,height) {
        var options = {
        //isStatic: true
    
       }
       this.body = Bodies.rectangle(x,y,width,height);
       this.width = width;
       this.height = height;

       World.add(world,this.body);
       
      };
  
      display(){

        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(0,0);    

  
        stroke("black");
        strokeWeight(4);
        fill("yellow");
        ellipse(100,340,110,110);
  
        stroke("black");
        strokeWeight(4);
        fill("blue");
        rect(100,370,120,55);
        rect(100,395,120,40);
        pop();
        

  
      };
  }