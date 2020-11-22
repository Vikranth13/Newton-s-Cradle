class Top
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
		this.x = x;
		this.y = y;
		this.width = width
		this.height = height
		this.body = Bodies.rectangle(x, y, width, height , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var topPos = this.body.position;		

			push()
			translate(topPos.x, topPos.y);
			rectMode(CENTER)
			fill("black");
			rect(0,0,this.width, this.height);
			pop()
			
	}

}