class bob{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.9,
			friction:0.5,
			density:1.2

		}
		this.x = x;
		this.y = y;
		this.r = r
		this.body = Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var bobPosition = this.body.position;		

			push()
			translate(bobPosition.x, bobPosition.y);
			rectMode(CENTER)
			
			fill("pink");
			ellipse(0,0,this.r, this.r);
			pop();
			
	}

};