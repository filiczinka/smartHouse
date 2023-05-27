import { toggleConditioner } from "./buttons";

class ClimateSystem {
	constructor(temp) {
		this.temp = temp;
	}
	setTemperature(temp) {
		this.temperature = temp;
		console.log(`Температуру встановлено на ${temp}°C.`);
	}
}


const button = document.querySelector(".conditioner__btn");
button.addEventListener('click', toggleConditioner);