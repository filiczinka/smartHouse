class SmartHouse {
	constructor(name) {
		this.name = name;
		this.component = [];
	}

	turnOn() {
		this.state = "on";
		console.log(`${this.name} is turned on`);
	}

	turnOff() {
		this.state = "off";
		console.log(`${this.name} is turned off`);
	}

	addComponent(component) {
		this.component.push(component);
	}

	removeComponent(component) {
		const index = this.component.indexOf(component);
		if (index !== -1) {
			this.component.splice(index, 1);
		}
	}
	getHouseStatus() {
		return {
			isActive: this.isActive,
			door: this.doorsSensors,
			videoSurveillance: this.videoSurveillance,
			motionSensors: this.motionSensors,
		};
	}
}