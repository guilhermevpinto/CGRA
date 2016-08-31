function MyCircle(scene, slices) {
 	CGFobject.call(this,scene);
	
	this.slices=slices;

 	this.initBuffers();
 };

 MyCircle.prototype = Object.create(CGFobject.prototype);
 MyCircle.prototype.constructor = MyCircle;

 MyCircle.prototype.initBuffers = function() {

	this.indices = [];
 	this.vertices = [];
 	this.normals = [];
 	this.texCoords = [];

	var i = 1;
	var radStep = 2 * Math.PI / (this.slices);


	this.vertices.push(0, 0, 0);
	this.normals.push(0, 0, -1);
	this.texCoords.push(0.5, 0.5);

	for (var slice = 0; slice < this.slices; slice++)
	{
		this.vertices.push(Math.cos(slice * radStep), Math.sin(slice * radStep), 0);

		this.normals.push(0, 0, -1);
		
		this.texCoords.push(Math.cos(i * radStep) * 0.5 + 0.5, Math.sin(i * radStep) * 0.5 + 0.5);

		i++;

	}

	for (var slice = 0; slice < this.slices; slice++)
	{
		if (slice + 1 == this.slices)
		this.indices.push(slice + 1, 0, 1);
		else this.indices.push(1 + slice, 0, 2 + slice);
	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };