import { activeBtn, offBtn, activeImg, offImg, pauseAudio, playAudio } from "./buttons.js";
import { System } from "./constructor.js";

export const light = new System('Cвітло');
const lightImg = document.querySelector('.light');
const audioLight = document.querySelector('#audio__light');

//кнопка ввімкнення
const lightBtnOn = document.querySelector('.light__on-btn');
lightBtnOn.addEventListener('click', function activeLight() {
	activeBtn(lightBtnOff, lightBtnOn);
	activeImg(lightImg);
	light.turnOn();
	playAudio(audioLight);
	console.log(light);
});

//кнопка вимкнення
const lightBtnOff = document.querySelector('.light__off-btn');
lightBtnOff.addEventListener('click', function offLight() {
	offBtn(lightBtnOn, lightBtnOff);
	offImg(lightImg);
	light.turnOff();
	pauseAudio(audioLight);
	console.log(light);
});