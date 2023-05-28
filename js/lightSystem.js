import { activeBtn, offBtn, activeImg, offImg, pauseAudio, playAudio } from "./buttons.js";
import { System } from "./constructor.js";

export const light = new System('Cвітло');

//on off light
const lightBtnOn = document.querySelector('.light__on-btn');
const lightImg = document.querySelector('.light');
const audioLight = document.querySelector('#audio__light');
const audioLightOff = document.querySelector('#audio__lightOff');

lightBtnOn.addEventListener('click', function activeLight() {
	activeBtn(lightBtnOff, lightBtnOn);
	activeImg(lightImg);
	light.turnOn();
	playAudio(audioLight);
	console.log(light);
});

const lightBtnOff = document.querySelector('.light__off-btn');

lightBtnOff.addEventListener('click', function offLight() {
	offBtn(lightBtnOn, lightBtnOff);
	offImg(lightImg);
	light.turnOff();
	pauseAudio(audioLightOff);
	console.log(light);
});