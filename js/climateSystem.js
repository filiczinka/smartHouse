import { toggleConditioner } from "./buttons.js";

export class ClimateSystem {
	constructor(temp, airConditioner) {
		this.temp = temp;
		this.airConditioner = airConditioner;
	}
	setTemperature(temp) {
		this.temperature = temp;
		console.log(`Температуру встановлено на ${temp}°C.`);
	}
	turnOnConditioner() {
		this.airConditioner = true;
		console.log('Кондиціонер ввімкнено!');
	}
	turnOffConditioner() {
		this.airConditioner = false;
		console.log('Кондиціонер вимкнено!');
	}
}


const climateSystem = new ClimateSystem("Climate");
const condBtn = document.querySelector('.conditioner__btn');
condBtn.addEventListener('click', function activeClimate() {
	toggleConditioner();
});

const tempBtn = document.querySelector('.temperature__btn');
tempBtn.addEventListener('click', function tempState() {
	const currentTemp = document.getElementById('temperature__input').value;
	if (currentTemp === '' || currentTemp > 33 || currentTemp < 16) {
		alert(' Вкажіть значення температури від 16 до 33!');
	} else {
		climateSystem.setTemperature(currentTemp);
		tempBtn.innerHTML = 'Задано';
	}
});