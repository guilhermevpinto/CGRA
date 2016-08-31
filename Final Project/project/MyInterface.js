/**
 * MyInterface
 * @constructor
 */
 
 
function MyInterface(scene) {
	//call CGFinterface constructor 
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
	
	CGFinterface.prototype.init.call(this, application);
	
	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui
	
	this.gui = new dat.GUI();

	this.gui.add(this.scene, 'GUI');	

	// add a group of controls (and open/expand by default)
	
	var lights=this.gui.addFolder("Luzes");
	lights.open();
	lights.add(this.scene, 'LeftBoardLight');
	lights.add(this.scene, 'RightBoardLight');
	lights.add(this.scene, 'LampLight');
	lights.add(this.scene, 'OutsideLight')
	

	var clock=this.gui.addFolder("Relógio");
	clock.open();
	clock.add(this.scene, 'Clock');	
	
	
	var robot=this.gui.addFolder("Robot");
	robot.open();
	robot.add(this.scene, 'MovementSpeed', 0, 0.5);
	robot.add(this.scene, 'RotationSpeed', 0, 0.1);
	robot.add(this.scene, 'RobotAppearancesList', ['1', '2']);
	
	var room=this.gui.addFolder("Room");
	room.open();
	room.add(this.scene, 'FloorAppearancesList', ['1', '2', '3']);
	room.add(this.scene, 'WallAppearancesList', ['1', '2', '3']);
	room.add(this.scene, 'LandscapeAppearancesList', ['1', '2', '3']);
	room.add(this.scene, 'WindowOpen');

	return true;
};


// Check key codes e.g. here: http://www.asciitable.com/

// for better cross-browser support, you may also chaaaeck suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp

MyInterface.prototype.processKeyDown = function(event) {
	
	this.scene.robot.controller.updateDownKeyController(String.fromCharCode(event.keyCode));
	
};


MyInterface.prototype.processKeyUp = function(event) {
	
	this.scene.robot.controller.updateUpKeyController(String.fromCharCode(event.keyCode));
	
};
