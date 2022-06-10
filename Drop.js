class Drop {
    constructor(x, y){
        var options = {
            friction: 0.1
        }
        this.rain = Bodies.circle(x, y, 5, options);
        this.radius = 1;
        World.add(world, this.rain) 
    }
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

    display(){
    push()
    var position = this.body.position;
    translate(position.x, position.y);
    fill("darkBlue");
    ellipseMode(RADIUS);
    ellipse(0, 0, position.x, position.y);
    pop()

    }
}