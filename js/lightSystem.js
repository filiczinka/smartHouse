import { activeBtn, offBtn, activeImg, offImg } from "./buttons.js";

export class LightSystem {
	constructor(name) {
		this.name = name;
		this.state = 'off';
	}
	turnOn() {
		this.state = 'On';
		console.log('Cвітло ввімкнено');
	}
	turnOff() {
		this.state = 'Off';
		console.log('Cвітло Вимкнено');
	}
}

export const light = new LightSystem('Cвітло');

//on off light
const lightBtnOn = document.querySelector('.light__on-btn');
const lightImg = document.querySelector('.light');

lightBtnOn.addEventListener('click', function activeLight() {
	activeBtn(lightBtnOff, lightBtnOn);
	activeImg(lightImg);
	light.turnOn();
	console.log(light);
});

const lightBtnOff = document.querySelector('.light__off-btn');

lightBtnOff.addEventListener('click', function offLight() {
	offBtn(lightBtnOn, lightBtnOff);
	offImg(lightImg);
	light.turnOff();
	console.log(light);
});