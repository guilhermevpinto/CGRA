function MyCylinderSphere(scene, slicesC, stacksC, slicesS, stacksS, height, ray) 
{
 	CGFobject.call(this,scene);
		
	this.scene = scene;
	this.height = height;
	this.ray = ray;

	this.cilindro = new MyCylinder(scene, slicesC, stacksC);
	this.cilindro.initBuffers();

	this.topo = new MySemiSphere(scene, slicesS, stacksS);
	this.topo.initBuffers();

	this.fundo = new MySemiSphere(scene, slicesS, stacksS);
	this.fundo.initBuffers();
	
	this.currAppearance = 'null';

 };

 MyCylinderSphere.prototype = Object.create(CGFobject.prototype);
 MyCylinderSphere.prototype.constructor = MyCylinderSphere;

 MyCylinderSphere.prototype.display = function() {

	
	 
	this.scene.pushMatrix();
	this.scene.scale(this.ray, this.height, this.ray);
	this.scene.rotate(Math.PI/2, 1,0,0);
    if(this.currAppearance != 'null')
    	this.currAppearance.body.apply();
	this.cilindro.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.scale(this.ray, this.ray, this.ray);
	this.scene.rotate(2*Math.PI/5, 0, 1, 0);
    if(this.currAppearance != 'null')
    	this.currAppearance.head.apply(); 	
	this.topo.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0,-this.height,0);	
	this.scene.rotate(Math.PI, 0,0,1);
	this.scene.scale(this.ray, this.ray, this.ray);
	if(this.currAppearance != 'null')
    	this.currAppearance.body.apply(); 
	this.fundo.display();
	this.scene.popMatrix();


 };

MyCylinderSphere.prototype.updateTexture = function(texture) {
	
	this.currAppearance = texture;
	
};