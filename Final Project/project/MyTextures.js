function MyTextures(scene) 
{
	CGFobject.call(this,scene);

	
	// Materials
	this.black = new CGFappearance(scene);
	this.black.setAmbient(0,0,0,1);
	this.black.setDiffuse(0,0,0,1);
	this.black.setSpecular(0,0,0,1);
	this.black.setShininess(120);

	this.white = new CGFappearance(scene);
	this.white.setAmbient(0.9,0.9,0.9,1);
	this.white.setDiffuse(0.9,0.9,0.9,1);
	this.white.setSpecular(0.9,0.9,0.9,1);	
	this.white.setShininess(120);
	
	this.grey = new CGFappearance(scene);
	this.grey.setAmbient(0.3,0.3,0.3,1);
	this.grey.setDiffuse(0.3,0.3,0.3,1);
	this.grey.setSpecular(0.3,0.3,0.3,1);	
	this.grey.setShininess(120);

	this.materialParede1 = new CGFappearance(scene);
	this.materialParede1.setDiffuse(1, 0.625, 0.477, 1);
	this.materialParede1.setSpecular(1, 0.625, 0.477, 1);
	this.materialParede1.setShininess(50);

	this.materialParede2 = new CGFappearance(scene);
	this.materialParede2.setDiffuse(0.977, 0.5, 0.445, 1);
	this.materialParede2.setSpecular(0.977, 0.5, 0.445, 1);
	this.materialParede2.setShininess(50);

	this.materialParede3 = new CGFappearance(scene);
	this.materialParede3.setDiffuse(0.8, 0.359, 0.359, 1);
	this.materialParede3.setSpecular(0.8, 0.359, 0.359, 1);
	this.materialParede3.setShininess(50);
	
	this.materialLamp = new CGFappearance(scene);
	this.materialLamp.setDiffuse(1, 1, 1);
	this.materialLamp.setSpecular(0, 0, 0);
	this.materialLamp.setShininess(100);

	this.woodAppearance = new CGFappearance(scene);
	this.woodAppearance.loadTexture("./resources/images/wood.png");
	this.woodAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.woodAppearance.setDiffuse(0.8, 0.359, 0.359, 1);
	this.woodAppearance.setSpecular(0.2, 0.2, 0.2, 1);
	this.woodAppearance.setShininess(50);

	this.windowAppearance = new CGFappearance(scene);
	this.windowAppearance.loadTexture("./resources/images/window.png");
	this.windowAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.windowAppearance.setDiffuse(0.9, 0.9, 0.9, 1);
	this.windowAppearance.setSpecular(0, 0, 0, 1);
	this.windowAppearance.setShininess(50);

	this.slideAppearance = new CGFappearance(scene);
	this.slideAppearance.loadTexture("./resources/images/mona.png");
	this.slideAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.slideAppearance.setDiffuse(0.8, 0.8, 0.8, 1);
	this.slideAppearance.setSpecular(0.2, 0.2, 0.2, 1);
	this.slideAppearance.setShininess(10);

	this.boardAppearance = new CGFappearance(scene);
	this.boardAppearance.loadTexture("./resources/images/doge.png");
	this.boardAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.boardAppearance.setDiffuse(0.5, 0.5, 0.5, 1);
	this.boardAppearance.setSpecular(0.4, 0.4, 0.4, 1);
	this.boardAppearance.setShininess(10);

	this.brickAppearance = new CGFappearance(scene);
	this.brickAppearance.loadTexture("./resources/images/tijolo.png");
	this.brickAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.brickAppearance.setDiffuse(0.5, 0.5, 0.5, 1);
	this.brickAppearance.setSpecular(0.4, 0.4, 0.4, 1);
	this.brickAppearance.setShininess(10);
	
	this.stoneWallAppearance = new CGFappearance(scene);
	this.stoneWallAppearance.loadTexture("./resources/images/wallStone.png");
	this.stoneWallAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.stoneWallAppearance.setDiffuse(0.5, 0.5, 0.5, 1);
	this.stoneWallAppearance.setSpecular(0.4, 0.4, 0.4, 1);
	this.stoneWallAppearance.setShininess(10);
	
	this.graffitiAppearance = new CGFappearance(scene);
	this.graffitiAppearance.loadTexture("./resources/images/graffiti.png");
	this.graffitiAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.graffitiAppearance.setDiffuse(0.5, 0.5, 0.5, 1);
	this.graffitiAppearance.setSpecular(0.4, 0.4, 0.4, 1);
	this.graffitiAppearance.setShininess(10);
	
	this.landscape1Appearance = new CGFappearance(scene);
	this.landscape1Appearance.loadTexture("./resources/images/landscape1.png");
	this.landscape1Appearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.landscape1Appearance.setSpecular(0.5, 0.5, 0.5, 1);
	this.landscape1Appearance.setShininess(50);
	this.landscape1Appearance.setDiffuse(0.5, 0.5, 0.5, 1);
	
	this.landscape2Appearance = new CGFappearance(scene);
	this.landscape2Appearance.loadTexture("./resources/images/landscape2.png");
	this.landscape2Appearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.landscape2Appearance.setSpecular(0.5, 0.5, 0.5, 1);
	this.landscape2Appearance.setShininess(50);
	this.landscape2Appearance.setDiffuse(0.5, 0.5, 0.5, 1);
	
	this.landscape3Appearance = new CGFappearance(scene);
	this.landscape3Appearance.loadTexture("./resources/images/landscape3.png");
	this.landscape3Appearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.landscape3Appearance.setSpecular(0.5, 0.5, 0.5, 1);
	this.landscape3Appearance.setShininess(50);
	this.landscape3Appearance.setDiffuse(0.5, 0.5, 0.5, 1);
	
	this.rimAppearance = new CGFappearance(scene);
	this.rimAppearance.loadTexture("./resources/images/rim.jpg");
	this.rimAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.rimAppearance.setSpecular(0.5, 0.5, 0.5, 1);
	this.rimAppearance.setShininess(100);
	this.rimAppearance.setDiffuse(0.5, 0.5, 0.5, 1);
	
	this.cageAppearance = new CGFappearance(scene);
	this.cageAppearance.loadTexture("./resources/images/Cage.png");
	this.cageAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.cageAppearance.setSpecular(0.5, 0.5, 0.5, 1);
	this.cageAppearance.setShininess(50);
	this.cageAppearance.setDiffuse(0.5, 0.5, 0.5, 1);
	
	this.faceRobotAppearance = new CGFappearance(scene);
	this.faceRobotAppearance.loadTexture("./resources/images/faceRobot.png");
	this.faceRobotAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.faceRobotAppearance.setSpecular(0.5, 0.5, 0.5, 1);
	this.faceRobotAppearance.setShininess(50);
	this.faceRobotAppearance.setDiffuse(0.5, 0.5, 0.5, 1);
	
	this.patern1Appearance = new CGFappearance(scene);
	this.patern1Appearance.loadTexture("./resources/images/pattern1.jpg");
	this.patern1Appearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.patern1Appearance.setSpecular(0.5, 0.5, 0.5, 1);
	this.patern1Appearance.setShininess(50);
	this.patern1Appearance.setDiffuse(0.5, 0.5, 0.5, 1);
	
	this.patern2Appearance = new CGFappearance(scene);
	this.patern2Appearance.loadTexture("./resources/images/pattern2.png");
	this.patern2Appearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.patern2Appearance.setSpecular(0.5, 0.5, 0.5, 1);
	this.patern2Appearance.setShininess(50);
	this.patern2Appearance.setDiffuse(0.5, 0.5, 0.5, 1);
	
	this.armyAppearance = new CGFappearance(scene);
	this.armyAppearance.loadTexture("./resources/images/army.png");
	this.armyAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.armyAppearance.setSpecular(0.5, 0.5, 0.5, 1);
	this.armyAppearance.setShininess(50);
	this.armyAppearance.setDiffuse(0.5, 0.5, 0.5, 1);
	
	this.armyArmsAppearance = new CGFappearance(scene);
	this.armyArmsAppearance.loadTexture("./resources/images/armyArms.png");
	this.armyArmsAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.armyArmsAppearance.setSpecular(0.5, 0.5, 0.5, 1);
	this.armyArmsAppearance.setShininess(50);
	this.armyArmsAppearance.setDiffuse(0.5, 0.5, 0.5, 1);
	
	this.grassApperarance = new CGFappearance(scene);
	this.grassApperarance.loadTexture("./resources/images/grass.png")
	this.grassApperarance.setSpecular(0.5, 0.5, 0.5, 1);
	this.grassApperarance.setShininess(50);
	this.grassApperarance.setDiffuse(0.5, 0.5, 0.5, 1);
	
	this.sandAppearance = new CGFappearance(scene);
	this.sandAppearance.loadTexture("./resources/images/sand.png");
	this.sandAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.sandAppearance.setDiffuse(0.8, 0.359, 0.359, 1);
	this.sandAppearance.setSpecular(0.8, 0.359, 0.359, 1);
	this.sandAppearance.setShininess(50);
	
	this.tableAppearance = new CGFappearance(this.scene);
	this.tableAppearance.loadTexture("./resources/images/table.png");
	this.tableAppearance.setDiffuse(0.543, 0.27, 0.074, 1);
	this.tableAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.tableAppearance.setShininess(50);
	
	this.metalAppearance = new CGFappearance(this.scene);
	this.metalAppearance.loadTexture("./resources/images/metal.png");
	this.metalAppearance.setDiffuse(0.5, 0.5, 0.5, 1);
	this.metalAppearance.setSpecular(0.8,0.8,0.8,1);	
	this.metalAppearance.setShininess(50);
	
	

};
