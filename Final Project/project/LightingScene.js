var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

function LightingScene() {

	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);

	this.initCameras();

	this.initLights();

	this.enableTextures(true);

	this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	// Scene elements
	this.table = new MyTable(this, 0, 1, 0, 1);
	this.wall = new MyQuad(this, 0, 1, 0, 1);
	this.back_wall = new MyQuad(this, 0, 1, 0, 1);
	this.boardA = new Plane(this, BOARD_A_DIVISIONS);
	this.boardB = new Plane(this, BOARD_B_DIVISIONS);
	this.column = new MyColumn(this, 20, 20);
	this.clock = new MyClock(this, 12, 1);
	this.robot = new MyRobot(this);
	this.lamp = new MySemiSphere(this, 25, 25);
	this.lampTop = new MyCircle(this, 25, 25);
	this.paisagem = new MyQuad(this, 0, 1, 0, 1);
	this.window = new MyWindow(this, 0, 1, 0, 1);

	this.textures = new MyTextures(this);

	this.materialDefault = new CGFappearance(this);

	this.setUpdatePeriod(1);

	this.LeftBoardLight=true; 
	this.RightBoardLight=true;
	this.LampLight=true;
	this.OutsideLight=true;
	
	this.Clock = true;
	
	this.MovementSpeed=0.25;
	this.RotationSpeed=0.05;
	this.RobotAppearancesList = ['1', '2'];
	
	this.WindowOpen = false;
	this.FloorAppearancesList = ['1', '2', '3'];
	this.WallAppearancesList = ['1', '2', '3'];
	this.LandscapeAppearancesList = ['1', '2', '3'];
	
	this.floorAppearance = this.textures.woodAppearance;
	this.wallAppearance = this.textures.brickAppearance;
	this.landscapeAppearance = this.textures.landscape1Appearance;
	
	this.robotAppearances = [];
	this.currRobotAppearance = 0;
	this.textureSet = 0;

	this.robotAppearances[0] = 
	{
			head: this.textures.cageAppearance,
			body: this.textures.patern1Appearance, 
			arms: this.textures.patern2Appearance,
			rim:  this.textures.rimAppearance,
			tire: this.textures.black
	};
	this.robotAppearances[1] = 
	{
			head: this.textures.faceRobotAppearance,
			body: this.textures.armyAppearance,
			arms: this.textures.armyArmsAppearance,
			rim:  this.textures.rimAppearance,
			tire: this.textures.black
	};
};

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0.5,0.5,0.5, 1.0);

	this.shader.bind();

	// Positions for four lights
	this.lights[0].setPosition(4, 6, 1, 1);
	this.lights[1].setPosition(10.5, 6, 1, 1);
	this.lights[2].setPosition(7.5, 7.2, 7.5, 1);
	this.lights[3].setPosition(-10, 8, 7.5, 1);

	//LeftBoardLight
	this.lights[0].setAmbient(0, 0, 0, 1);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1,1,1,1);
	this.lights[0].enable();

	//RightBoardLight
	this.lights[1].setAmbient(0, 0, 0, 1);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[1].setSpecular(1,1,1,1);
	this.lights[1].enable();

	//LampLight
	this.lights[2].setAmbient(0.7,0.7,0.7, 1);
	this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setSpecular(1,1,1,1);
	this.lights[2].enable();

	//OutsideLight
	this.lights[3].setAmbient(0.2, 0.2, 0.2, 1);
	this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[3].setSpecular(0.8,0.8,0.8,1);
	this.lights[3].setConstantAttenuation(0);
	this.lights[3].setLinearAttenuation(0.075);
	this.lights[3].setQuadraticAttenuation(0);
	this.lights[3].setVisible(true);
	this.lights[3].enable();


	this.shader.unbind();
};

LightingScene.prototype.updateLights = function() {

	if(!this.LeftBoardLight)
		this.lights[0].disable();
	else this.lights[0].enable();

	if(!this.RightBoardLight)
		this.lights[1].disable();
	else this.lights[1].enable();
	
	if(!this.LampLight)
		this.lights[2].disable();
	else this.lights[2].enable();

	if(!this.OutsideLight)
		this.lights[3].disable();
	else this.lights[3].enable();
	
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();
}


LightingScene.prototype.display = function() {
	this.shader.bind();


	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	this.updateProjectionMatrix();
	this.loadIdentity();

	this.applyViewMatrix();

	this.updateLights();

	this.materialDefault.apply();


	// Floor
	this.pushMatrix();
	this.translate(7.5, 0, 7.5);
	this.rotate(-90 * degToRad, 1, 0, 0);
	this.scale(15, 15, 1);
	this.floorAppearance.apply();
	this.wall.display();
	this.popMatrix();

	// Left Wall
	this.pushMatrix();
	this.rotate(Math.PI/2, 0, 1, 0);
	this.scale(15, 8, 1);
	this.translate(-1, 0, 0);
	this.textures.windowAppearance.apply();
	this.window.display();
	this.popMatrix();
	
	// Plane Wall
	this.pushMatrix();
	this.translate(7.5, 4, 0);
	this.scale(15, 8, 1);
	this.wallAppearance.apply();
	this.back_wall.display();
	this.popMatrix();

	// First Table
	this.pushMatrix();
	this.translate(5, 0, 8);
	this.table.display();
	this.popMatrix();

	// Second Table
	this.pushMatrix();
	this.translate(12, 0, 8);
	this.table.display();
	this.popMatrix();

	// Board A
	this.pushMatrix();
	this.translate(4, 4.5, 0.2);
	this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
	this.textures.slideAppearance.apply();
	this.boardA.display();
	this.popMatrix();

	// Board B
	this.pushMatrix();
	this.translate(10.5, 4.5, 0.2);
	this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
	this.textures.boardAppearance.apply();
	this.boardB.display();
	this.popMatrix();

	// Column1
	this.pushMatrix();
	this.translate(14, 6, 14);
	this.scale(1, 0.75, 1);
	this.column.display();
	this.popMatrix();

	// Column2
	this.pushMatrix();
	this.translate(14, 6, 1);
	this.scale(1, 0.75, 1);
	this.column.display();
	this.popMatrix();
	
	//Lamp
	this.pushMatrix();
	
	this.pushMatrix();
	this.translate(7.5, 8, 7.5);
	this.rotate(Math.PI/2, 1, 0, 0);
	this.textures.black.apply();
	this.lampTop.display();
	this.popMatrix();
	
	this.pushMatrix();
	this.translate(7.5, 8, 7.5);
	this.rotate(Math.PI, 1, 0, 0);
	if(this.LampLight)
		this.textures.white.apply();
	else 
		this.textures.grey.apply();
	this.lamp.display();
	this.popMatrix();
	
	
	this.popMatrix();

	//Clock
	this.pushMatrix();
	this.scale(0.5, 0.5, 0.5);
	this.translate(14.5, 14.25, 0.3);
	this.rotate(Math.PI, 0, 1, 0);
	this.clock.display();
	this.popMatrix();

	//Robot
	this.pushMatrix();
	this.translate(this.robot.x, 0, this.robot.z);
	this.rotate(this.robot.angle, 0, 1, 0);
	this.robot.display();
	this.popMatrix();

	//Landscape
	this.pushMatrix();
	this.translate(-10, 3, 7.5);
	this.rotate(Math.PI/2, 0, 1, 0);
	this.scale(30, 16, 1);
	this.landscapeAppearance.apply();
	if(this.OutsideLight)
		this.paisagem.display();
	this.popMatrix();

	this.shader.unbind();
};


LightingScene.prototype.update = function(currTime) 
{
	this.updateClock(currTime);
	this.updateRobotTextures();
	this.updateWindowWall();
	this.robot.updatePosition();
	this.updateRoom();
};

LightingScene.prototype.updateClock = function(currTime) 
{
	if(this.Clock)
		this.clock.update(currTime);
	else this.clock.first = 0;
	
};

LightingScene.prototype.updateRobotTextures = function() 
{
	if(this.RobotAppearancesList == '1' && this.currRobotAppearance != 0)
	{
		this.currRobotAppearance = 0;
		this.textureSet = 0;
	}
	else if(this.RobotAppearancesList == '2' && this.currRobotAppearance != 1)
	{
		this.currRobotAppearance = 1;
		this.textureSet = 0;
	}

	if(this.textureSet == 0)
	{
		this.robot.updateTexture(this.robotAppearances[this.currRobotAppearance]);
		this.textureSet = 1;
	}
};

LightingScene.prototype.updateWindowWall = function() 
{
	if(this.WindowOpen && this.window.windowWidthFactor > 0)
		this.window.updateWindowWidth(this.WindowOpen);
	else if(!this.WindowOpen && this.window.windowWidthFactor < 1)
		this.window.updateWindowWidth(this.WindowOpen);
	
};

LightingScene.prototype.updateRoom = function ()
{ 
	if(this.FloorAppearancesList == '1')
		this.floorAppearance = this.textures.woodAppearance;
	else if(this.FloorAppearancesList == '2')
		this.floorAppearance = this.textures.grassApperarance;
	else if(this.FloorAppearancesList == '3')
		this.floorAppearance = this.textures.sandAppearance;
	
	if(this.WallAppearancesList == '1')
		this.wallAppearance = this.textures.brickAppearance;
	else if(this.WallAppearancesList == '2')
		this.wallAppearance = this.textures.stoneWallAppearance;
	else if(this.WallAppearancesList == '3')
		this.wallAppearance = this.textures.graffitiAppearance;

	if(this.LandscapeAppearancesList == '1')
		this.landscapeAppearance = this.textures.landscape1Appearance;
	else if(this.LandscapeAppearancesList == '2')
		this.landscapeAppearance = this.textures.landscape2Appearance;
	else if(this.LandscapeAppearancesList == '3')
		this.landscapeAppearance = this.textures.landscape3Appearance;
	
};

LightingScene.prototype.GUI = function ()
{ 
};