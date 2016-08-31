 function MyRobotController(scene) {
 	CGFobject.call(this,scene);
 	this.scene = scene;
 	
	this.Wkey = false;
	this.Akey = false;
	this.Skey = false;
	this.Dkey = false;

 };

 MyRobotController.prototype = Object.create(CGFobject.prototype);
 MyRobotController.prototype.constructor = MyRobotController;

 MyRobotController.prototype.updateDownKeyController = function(key) {
	 
	 switch(key)
		{
			case "w":
				this.Wkey = true;
				this.Skey = false;
				break;
			case "W":
				this.Wkey = true;
				this.Skey = false;
				break;
			case "a":
				this.Akey = true;
				this.Dkey = false;
				break;
			case "A":
				this.Akey = true;
				this.Dkey = false;
				break;
			case "s":
				this.Skey = true;
				this.Wkey = false;
				break;
			case "S":
				this.Skey = true;
				this.Wkey = false;
				break;
			case "d":
				this.Dkey = true;
				this.Akey = false;
				break;
			case "D":
				this.Dkey = true;
				this.Akey = false;
				break;
			case "o":
				if(this.scene.robot.helloCounter == 0)
					this.scene.robot.helloCounter = 3;
				this.scene.robot.action = 1;
				break;
			case "O":
				if(this.scene.robot.helloCounter == 0)
					this.scene.robot.helloCounter = 3;
				this.scene.robot.action = 1;
				break;
			default: break;
		}
 };
 
 
 MyRobotController.prototype.updateUpKeyController = function(key) {

	 switch(key)
		{
			case "w":
				this.Wkey = false;
				break;
			case "W":
				this.Wkey = false;
				break;
			case "a":
				this.Akey = false;
				break;
			case "A":
				this.Akey = false;
				break;
			case "s":
				this.Skey = false;
				break;
			case "S":
				this.Skey = false;
				break;
			case "d":
				this.Dkey = false;
				break;
			case "D":
				this.Dkey = false;
				break;
			default: break;
		}
 };