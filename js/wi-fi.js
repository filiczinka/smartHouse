import {  activeBtn, offBtn, activeImg, offImg } from "./buttons.js";
import { System } from "./constructor.js";

export const internet = new System('Wi-Fi');

//вімкнення wi-fi
const internetImg = document.querySelector('.wi-fi');
const internetBtnOn = document.querySelector('.wi-fi__on-btn');
internetBtnOn.addEventListener('click', function activeInternet() {
	activeBtn(internetBtnOff, internetBtnOn);
	activeImg(internetImg);
	internet.turnOn();
	console.log(internet);
});

//вимкнення wi-fi
const internetBtnOff = document.querySelector('.wi-fi__off-btn');
internetBtnOff.addEventListener('click', function offInternet() {
	offBtn(internetBtnOn, internetBtnOff);
	offImg(internetImg);
	internet.turnOff();
	console.log(internet);
});