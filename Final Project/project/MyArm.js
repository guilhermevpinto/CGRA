function MyArm(scene, slicesC, stacksC, slicesS, stacksS, height, ray) 
{
	CGFobject.call(this,scene);

	this.scene = scene;
	this.height = height;

	this.upper = new MyCylinderSphere(scene, slicesC, stacksC, slicesS, stacksS, height, ray);
	this.lower = new MyCylinderSphere(scene, slicesC, stacksC, slicesS, stacksS, height, ray);

	this.angleX = 0;
	this.angleZ = 0;
};

MyArm.prototype = Object.create(CGFobject.prototype);
MyArm.prototype.constructor = MyArm;

MyArm.prototype.display = function() {

	this.scene.pushMatrix();
	this.upper.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
	this.scene.translate(0, -this.height, 0);
	this.scene.rotate(this.angleX, 1, 0, 0);
	this.scene.rotate(this.angleZ, 0, 0, 1);
	this.lower.display();
	this.scene.popMatrix();
};