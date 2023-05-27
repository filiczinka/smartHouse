import {  activeBtn, offBtn, activeImg, offImg } from "./buttons.js";

class InternetSystem {
	constructor(name) {
		this.name = name;
		this.state = 'off';
	}
	turnOnInternet() {
		this.state = 'On';
		console.log('Wi-Fi ввімкнено');
	}
	turnOffInternet() {
		this.state = 'Off';
		console.log('Wi-Fi вимкнено');
	}
}

const internet = new InternetSystem('Wi-Fi');
const internetBtnOn = document.querySelector('.wi-fi__on-btn');
const internetImg = document.querySelector('.wi-fi');
const internetBtnOff = document.querySelector('.wi-fi__off-btn');

internetBtnOn.addEventListener('click', function activeInternet() {
	activeBtn(internetBtnOff, internetBtnOn);
	activeImg(internetImg);
	internet.turnOnInternet();
	console.log(internet);
});

internetBtnOff.addEventListener('click', function offInternet() {
	offBtn(internetBtnOn, internetBtnOff);
	offImg(internetImg);
	internet.turnOffInternet();
	console.log(internet);
});