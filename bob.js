class Bob
{
    constructor(x,y,r)
    {
               var options={
                isStatic:false,
                restitution:0.3,
                friction:0.5,
                density:1.2
             }
             this.x=x
            this.y=y
             this.r=r
   
             this.body=Bodies.circle(this.x, this.y, this.r/2,options);
       World.add(this.body, world);
 }
 display()
 {
 var paperpos=this.body.position;

 push()
 translate(paperpos.x, paperpos.y);
 rectMode(CENTER)
 strokeWeight(3);
 fill(255,0,255)
 rect(0,0,15,15);
 pop()


 }




}