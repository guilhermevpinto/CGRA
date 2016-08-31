function MyWeel(scene, slices, stacks) 
{
 	CGFobject.call(this,scene);
		
	this.scene = scene;

	this.roda = new MyCylinder(scene, slices, stacks);
	this.roda.initBuffers();

	this.frente = new MyCircle(scene, slices);
	this.frente.initBuffers();

	this.tras = new MyCircle(scene, slices);
	this.tras.initBuffers();

	this.rotation = 0;
	
	this.currAppearance = 'null';

 };

 MyWeel.prototype = Object.create(CGFobject.prototype);
 MyWeel.prototype.constructor = MyWeel;

 MyWeel.prototype.display = function() {

	this.scene.pushMatrix();
	
	this.scene.translate(0, 0.8, 0);
	this.scene.scale(0.8,0.8,0.8);
	this.scene.rotate(this.rotation, 0, 0, 1);
	
	this.scene.pushMatrix();
	if(this.currAppearance != 'null')
		this.currAppearance.rim.apply();
	this.frente.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	if(this.currAppearance != 'null')
		this.currAppearance.tire.apply();
	this.roda.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.rotate(Math.PI, 1, 0, 0);
	this.scene.translate(0,0,-1);
	if(this.currAppearance != 'null')
		this.currAppearance.rim.apply();
	this.tras.display();
	this.scene.popMatrix();

	this.scene.popMatrix();

 };
 
 MyWeel.prototype.rotate = function(velocity) {
	 
	 this.rotation += velocity;
 };

 
 MyWeel.prototype.updateTexture = function(texture)
 {
	 this.currAppearance = texture;
 };
