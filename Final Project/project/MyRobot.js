/**
 * MyRobot
 * @constructor
 */
function MyRobot(scene, minS, maxS, minT, maxT) 
{
	CGFobject.call(this,scene);

	this.scene = scene;
	this.x = 8.5;
	this.z = 10.5;
	this.angle = Math.PI * 1.1;

	this.leftWeel = new MyWeel(this.scene, 25, 1);
	this.rightWeel = new MyWeel(this.scene, 25, 1);
	this.body = new MyCylinderSphere(this.scene, 25, 1, 25, 10, 2, 0.8);
	this.leftArm = new MyArm(this.scene, 25, 1, 25, 10, 0.5, 0.25);
	this.rightArm = new MyArm(this.scene, 25, 1, 25, 10, 0.5, 0.25);

	this.controller = new MyRobotController(this.scene);

	this.movementSpeed = 0;
	this.rotationSpeed = 0;

	this.leftArmZ = 0;
	this.leftArmX = 0;
	this.rightArmZ = 0;
	this.rightArmX = 0;

	this.rightArmWait = 0;

	this.armAngleStepZ = Math.PI*0.025;
	this.armAngleStepX = Math.PI*0.025;

	this.action = 0; // 0->default(movement)  1->hello
	this.helloCounter = 0;

	this.currAppearance = 'null';

	this.initBuffers();

};

MyRobot.prototype = Object.create(CGFobject.prototype);
MyRobot.prototype.constructor = MyRobot;

MyRobot.prototype.display = function() {
	this.scene.pushMatrix();

	this.scene.rotate(Math.PI/2, 0, 1, 0);

	this.scene.pushMatrix();
	this.scene.translate(0,this.body.height + 1.5,0);
	this.body.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0,0,0.8)
	this.leftWeel.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0,0,-1.6)
	this.rightWeel.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0, 3, 1);
	this.scene.rotate(this.leftArmZ, 0, 0, 1);
	if(this.currAppearance != 'null')
		this.currAppearance.arms.apply();
	this.leftArm.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0, 3, -1);
	this.scene.rotate(this.rightArmX, 1, 0, 0);
	this.scene.rotate(this.rightArmZ, 0, 0, 1);
	if(this.currAppearance != 'null')
		this.currAppearance.arms.apply();
	this.rightArm.display();
	this.scene.popMatrix();

	this.scene.popMatrix();


};

MyRobot.prototype.updatePosition = function() 
{	
	if(this.controller.Wkey)
		this.movementSpeed = +this.scene.MovementSpeed;
	else if(this.controller.Skey)
		this.movementSpeed = -this.scene.MovementSpeed;

	if(this.controller.Akey)
		this.rotationSpeed = +Math.PI*this.scene.RotationSpeed;
	else if(this.controller.Dkey)
		this.rotationSpeed = -Math.PI*this.scene.RotationSpeed;

	this.x += Math.sin(this.angle)*this.movementSpeed;
	this.z += Math.cos(this.angle)*this.movementSpeed;

	if(this.helloCounter != 0)
		this.action = 1;

	this.updateWeels();

	this.updateArms();
};

MyRobot.prototype.updateTexture = function(texture) {
	this.body.updateTexture(texture);
	this.rightWeel.updateTexture(texture);
	this.leftWeel.updateTexture(texture);
	this.currAppearance = texture;
};

MyRobot.prototype.updateWeels = function()
{
	if(Math.abs(this.rotationSpeed) >= Math.PI*0.001)
	{
		this.angle += this.rotationSpeed;
		this.rotationSpeed *= 0.9;
		this.leftWeel.rotate(-this.rotationSpeed);
		this.rightWeel.rotate(this.rotationSpeed);
	}
	else this.rotationSpeed = 0;


	if(Math.abs(this.movementSpeed) >= 0.01)
	{
		this.movementSpeed *= 0.95;
		this.leftWeel.rotate(this.movementSpeed);
		this.rightWeel.rotate(this.movementSpeed);

	}
	else this.movementSpeed = 0;
};

MyRobot.prototype.updateArms = function()
{
	this.leftArmMovement();
	this.rightArmMovement();

};

MyRobot.prototype.rightArmMovement = function()
{
	if(this.action == 0)
	{
		if(this.rightArmWait == 1)
		{
			if(this.leftArmZ <= Math.PI*0.05 && this.leftArmZ >= -Math.PI*0.05)
			{
				this.leftArmZ = 0;
				this.rightArmWait = 0;
			}
		}
		else 
		{
			this.rightArmZ = -this.leftArmZ;

			if(this.rightArmZ <= 0)
				this.rightArm.angleZ = this.rightArmZ;
		}
	}
	else if(this.action == 1)
	{
		if(this.rightArmZ != 0)
		{
			this.rightArmZ = -this.leftArmZ;

			if(Math.abs(this.rightArmZ) <= Math.PI*0.05)
				this.rightArmZ = 0;

			this.rightArm.angleZ = this.rightArmZ;
		}

		if(this.rightArmZ == 0)
			this.rightArmHello();

	}
};

MyRobot.prototype.leftArmMovement = function()
{
	if(this.movementSpeed != 0)
		this.leftArmZ -= this.armAngleStepZ * (this.movementSpeed / this.scene.MovementSpeed);
	else if(this.leftArmZ != 0)
	{
		if(this.leftArmZ <= Math.PI*0.01 && this.leftArmZ >= -Math.PI*0.01)
			this.leftArmZ = 0;
		else if((this.leftArmZ > 0 && this.armAngleStepZ < 0) || (this.leftArmZ < 0 && this.armAngleStepZ > 0))
		{
			this.armAngleStepZ = -this.armAngleStepZ;
			this.leftArmZ -= this.armAngleStepZ*0.1;
		}
		else 
			this.leftArmZ -= this.armAngleStepZ*0.1;
	}

	if(this.leftArmZ <= 0)
		this.leftArm.angleZ = this.leftArmZ;

	if(this.leftArmZ >= Math.PI/4 || this.leftArmZ <= -Math.PI/4)
		this.armAngleStepZ = -this.armAngleStepZ;
};

MyRobot.prototype.rightArmHello = function()
{

	if(this.rightArmX >= 7*Math.PI/8) //altura maxima do braço
	{
		this.armAngleStepX = -this.armAngleStepX;
		this.helloCounter--;
	}
	else if(this.rightArmX <= 6*Math.PI/8 && this.helloCounter != 3 && this.helloCounter != 0)
		this.armAngleStepX = -this.armAngleStepX;

	this.rightArmX += this.armAngleStepX;

	if(this.armAngleStepX > 0 && this.rightArmX >= 6*Math.PI/8 && this.rightArmX <= 7*Math.PI/8)
		this.rightArm.angleX += Math.PI*0.05;
	else if(this.armAngleStepX < 0 && this.rightArmX >= 6*Math.PI/8 && this.rightArmX <= 7*Math.PI/8)
		this.rightArm.angleX += -Math.PI*0.05;

	if (this.armAngleStepX < 0 && this.rightArmX <= Math.PI*0.05)
	{
		this.rightArmX = 0;
		this.rightArm.angleX = 0;
		this.armAngleStepX = Math.PI*0.025;
		this.action = 0;
		this.rightArmWait = 1;
	}

	this.rightArmZ = 0;
};
