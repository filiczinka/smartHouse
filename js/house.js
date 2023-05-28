import { LightSystem, light } from "./lightSystem.js";
import { ClimateSystem } from "./climateSystem.js";
import { CameraSystem } from "./camera.js";
import { DoorSystem } from "./door.js";
import { SecuiritySystem } from "./secuirity.js";
import { InternetSystem } from "./wi-fi.js";

export class SmartHouse {
	constructor(name) {
		this.name = name;
	}
	getStatus() {
		return {
			LightSystem: light.state,
		};
	}
}

export const smartHouse = new SmartHouse('My Smart House');
const actuallyBtn = document.querySelector('.actually-btn');

actuallyBtn.addEventListener('click', function actuallyState() {
	actuallyBtn.classList.add('active');
	smartHouse.getStatus();
	console.log(smartHouse);
})
