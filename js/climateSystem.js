import { toggleConditioner } from "./buttons.js";
import { System } from "./constructor.js";

export const climateSystem = new System('Температура');

//кнопка кондиціонеру
const condBtn = document.querySelector('.conditioner__btn');
condBtn.addEventListener('click', function activeClimate() {
	toggleConditioner();
});

//виставлення температури
const tempBtn = document.querySelector('.temperature__btn');
tempBtn.addEventListener('click', function tempState() {
	const currentTemp = document.getElementById('temperature__input').value;
	if (currentTemp === '' || currentTemp > 33 || currentTemp < 16) {
		alert(' Вкажіть значення температури від 16 до 33!');
		console.log(climateSystem);
	} else {
		climateSystem.setTemperature(currentTemp);
		tempBtn.innerHTML = 'Задано';
		console.log(climateSystem);
	}
});