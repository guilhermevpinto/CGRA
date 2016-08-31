
function MyWindow(scene, minS, maxS, minT, maxT) {
	CGFobject.call(this,scene);
	
	this.minS = minS;
	this.maxS = maxS;
	this.minT = minT;
	this.maxT = maxT;
	this.scene = scene;
	
	this.left = new MyQuad(scene, minS, maxS/256, minT, maxT);
	this.top = new MyQuad(scene, maxS/256, 255*maxS/256, minT, maxT/256);
	this.right = new MyQuad(scene, 255*maxS/256, maxS, minT, maxT);
	this.bottom = new MyQuad(scene, minS/256, 255*maxS/256, 255*maxT/256, maxT);
	this.top_edge = new MyQuad(scene, 2*maxS/256, 254*maxS/256, 2*maxT/256, 80*maxT/256);
	this.bottom_edge = new MyQuad(scene, 2*maxS/256, 254*maxS/256, 242*maxT/256, 254*maxT/256);
	this.left_edge = new MyQuad(scene, 2*maxS/256, 12*maxS/256, 88*maxT/256, 240*maxT/256);
	this.right_edge = new MyQuad(scene, 246*maxS/256, 252*maxS/256, 88*maxT/256, 240*maxT/256);
	this.center_edge = new MyQuad(scene, 116*maxS/256, 138*maxS/256, 88*maxT/256, 240*maxT/256);
	this.left_window = new MyQuad(scene, 12*maxS/256, 118*maxS/256, 88*maxT/256, 238*maxT/256);
	this.right_window = new MyQuad(scene, 138*maxS/256, 244*maxS/256, 88*maxT/256, 238*maxT/256);
	
	this.open = false;
	this.windowStep = 0.01;
	this.windowWidthFactor = 1;
	
	this.wallWidth = 2/7;
	this.wallHeight = 1/4;
	
	this.initBuffers();

};

MyWindow.prototype = Object.create(CGFobject.prototype);
MyWindow.prototype.constructor = MyWindow;

MyWindow.prototype.display = function() {
	
	this.scene.pushMatrix();
	this.scene.scale(this.wallWidth, 1, 0.1);
	this.scene.translate(0.5, 0.5, 0);
	this.left.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
	this.scene.translate(1-this.wallWidth, 0, 0);
	this.scene.scale(this.wallWidth, 1, 0.1);
	this.scene.translate(0.5, 0.5, 0);
	this.right.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
	this.scene.translate(this.wallWidth, 1-this.wallHeight, 0);
	this.scene.scale(1-2*this.wallWidth, this.wallHeight, 0.1);
	this.scene.translate(0.5, 0.5, 0);
	this.top.display(); 
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
	this.scene.translate(this.wallWidth, 0, 0);
	this.scene.scale(1-2*this.wallWidth, this.wallHeight, 0.1);
	this.scene.translate(0.5, 0.5, 0);
	this.bottom.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
	this.scene.translate(this.wallWidth, 1-this.wallHeight - 0.15, 0);
	this.scene.scale(1-2*this.wallWidth, 0.15, 0.1);
	this.scene.translate(0.5, 0.5, 0);
	this.top_edge.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
	this.scene.translate(+this.wallWidth, this.wallHeight, 0);
	this.scene.scale(1-2*this.wallWidth, 0.04, 0.1);
	this.scene.translate(0.5, 0.5, 0);
	this.bottom_edge.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
	this.scene.translate(this.wallWidth, this.wallHeight + 0.04, 0);
	this.scene.scale(0.02, 1-2*this.wallHeight - 0.19, 0.1);
	this.scene.translate(0.5, 0.5, 0);
	this.left_edge.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(1-this.wallWidth - 0.015, this.wallHeight + 0.04, 0);
	this.scene.scale(0.015, (1 - 2*this.wallHeight) - 0.19, 0.1);
	this.scene.translate(0.5, 0.5, 0);
	this.right_edge.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(this.wallWidth + 0.2, this.wallHeight + 0.04, 0);
	this.scene.scale(0.03, (1 - 2*this.wallHeight) - 0.19, 0.1);
	this.scene.translate(0.5, 0.5, 0);
	this.center_edge.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
	this.scene.translate(this.wallWidth + 0.02, this.wallHeight + 0.04, 0);
	this.scene.scale((1-(this.wallWidth*2 + 0.065))*0.5 * this.windowWidthFactor, (1 - 2*this.wallHeight) - 0.19, 0.1);
	this.scene.translate(0.5, 0.5, 0);
	this.left_window.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
	this.scene.translate(1 - this.wallWidth - 0.015 - ((1-(this.wallWidth*2 + 0.065))*0.5 + 0.01) * this.windowWidthFactor, this.wallHeight + 0.04, 0);
	this.scene.scale(((1-(this.wallWidth*2 + 0.065))*0.5 + 0.01) * this.windowWidthFactor, (1 - 2*this.wallHeight) - 0.19, 0.1);
	this.scene.translate(0.5, 0.5, 0);
	this.right_window.display();
	this.scene.popMatrix();

};

MyWindow.prototype.updateWindowWidth = function(state)
{
	if(state && this.windowWidthFactor > 0)
		this.windowWidthFactor -= this.windowStep;
	else if(!state && this.windowWidthFactor < 1)
		this.windowWidthFactor += this.windowStep;
		
};

