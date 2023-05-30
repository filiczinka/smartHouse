import { activeBtn, activeImg, offBtn, offImg, playAudio, pauseAudio } from "./buttons.js";
import { System } from "./constructor.js";

export const climateSystem = new System('Температура');
const tempImg = document.querySelector('.temperature');

//задати температуру
const tempBtn = document.querySelector('.temperature__btn');
tempBtn.addEventListener('click', function tempState() {
	const currentTemp = document.getElementById('temperature__input').value;
	if (currentTemp === '' || currentTemp > 33 || currentTemp < 16) {
		alert(' Вкажіть значення температури від 16 до 33!');
		console.log(climateSystem);
		throw 'Задана температура не відповідає значенню від 16 до 33!';
	} else {
		tempBtn.addEventListener('click', function activeLight() {
			activeBtn(tempBtnOff, tempBtn);
			activeImg(tempImg);
			climateSystem.turnOn();
			climateSystem.setTemperature(currentTemp);
			tempBtn.innerHTML = 'Задано';
			console.log(climateSystem);
		});
	}
});

//кнопка вимкнення опалення
const tempBtnOff = document.querySelector('.temperature__btnOff');
tempBtnOff.addEventListener('click', function offLight() {
	offBtn(tempBtn, tempBtnOff);
	offImg(tempImg);
	climateSystem.turnOff();
	climateSystem.temp = 0;
	console.log(climateSystem);
});


//кнопка ввімкн та вимкнення кондиціонеру
export const condSystem = new System('Кондиціонер');
function toggleConditioner() {
	const button = document.querySelector(".conditioner__btn");
	const tempImg = document.querySelector('.temperature');
	const audioCond = document.querySelector('#cond');
	if (button.classList.contains("active")) {
		button.classList.remove("active");
		button.classList.add("off");
		button.innerHTML = 'Вимкнено';
		offImg(tempImg);
		condSystem.turnOff();
		console.log(condSystem);
		pauseAudio(audioCond);
	} else {
		button.classList.remove("off");
		button.classList.add("active");
		button.innerHTML = 'Ввімкнено';
		activeImg(tempImg);
		condSystem.turnOn();
		console.log(condSystem);
		playAudio(audioCond);
	}
}

const condBtn = document.querySelector('.conditioner__btn');
condBtn.addEventListener('click', function activeClimate() {
	toggleConditioner();
});