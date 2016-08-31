/**
 * MyTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTable(scene, minS, maxS, minT, maxT) {
	CGFobject.call(this,scene);

	this.minS = minS||0;
 	this.maxS = maxS||1;
 	this.minT = minT||0;
 	this.maxT = maxT||1;

	this.cube=new MyUnitCubeQuad(this.scene, this.minS, this.maxS, this.minT, this.maxT);
	this.cube.initBuffers();


};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;


MyTable.prototype.display = function() 
{

	
	//desenho do tampo
	this.scene.pushMatrix();
	this.scene.translate(0, 3.5 + 0.3/2, 0);
	this.scene.scale(5, 0.3, 3);
	this.scene.textures.tableAppearance.apply();
	this.cube.display();
	this.scene.popMatrix();

	//desenho das pernas
	this.scene.pushMatrix();

	this.scene.textures.metalAppearance.apply();
	
	//traseria-esquerda 
	this.scene.pushMatrix();
	this.scene.translate(-2.5 + 0.15, 3.5/2, -1.5 + 0.15);
	this.scene.scale(0.3, 3.5, 0.3);
	this.cube.display();
	this.scene.popMatrix();

	//traseira-direita
	this.scene.pushMatrix();
	this.scene.translate(2.5 - 0.15, 3.5/2, -1.5 + 0.15);
	this.scene.scale(0.3, 3.5, 0.3);
	this.scene.textures.metalAppearance.apply();
	this.cube.display();
	this.scene.popMatrix();

	//dianteira-esquerda
	this.scene.pushMatrix();
	this.scene.translate(-2.5 + 0.15, 3.5/2, 1.5 - 0.15);
	this.scene.scale(0.3, 3.5, 0.3);
	this.cube.display();
	this.scene.popMatrix();

	//dianteira-direita
	this.scene.pushMatrix();
	this.scene.translate(2.5 - 0.15, 3.5/2, 1.5 - 0.15);
	this.scene.scale(0.3, 3.5, 0.3);
	this.cube.display();
	this.scene.popMatrix();


	this.scene.popMatrix();
};