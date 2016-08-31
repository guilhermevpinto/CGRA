function MyColumn(scene, slices, stacks) 
{
 	CGFobject.call(this,scene);
		
	this.first = 0;

	this.cilindro = new MyCylinder(scene, slices, stacks);
	this.cilindro.initBuffers();

	this.topo = new MyCircle(scene, slices);
	this.topo.initBuffers();


	this.columnAppearance = new CGFappearance(this.scene);
	this.columnAppearance.loadTexture("./resources/images/col.png");
	this.columnAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.columnAppearance.setDiffuse(0.8, 0.8, 0.8, 1);
	this.columnAppearance.setSpecular(0.4, 0.4, 0.4, 1);
	this.columnAppearance.setShininess(30);

	this.material = new CGFappearance(this.scene);
	this.material.setAmbient(0.5, 0.5, 0.5, 1);
	this.material.setDiffuse(0.5, 0.5, 0.5, 1);
	this.material.setSpecular(0.5, 0.5, 0.5, 1);
	this.material.setShininess(40);

 };

 MyColumn.prototype = Object.create(CGFobject.prototype);
 MyColumn.prototype.constructor = MyColumn;

 MyColumn.prototype.display = function() {

	this.scene.pushMatrix();
	this.scene.rotate(Math.PI/2, 1, 0, 0);
	this.material.apply();
	this.topo.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.columnAppearance.apply();
	this.scene.rotate(Math.PI / 2, 1, 0, 0);
	this.scene.scale(1, 1, 8);
	this.cilindro.display();
	this.scene.popMatrix();

	

 };
