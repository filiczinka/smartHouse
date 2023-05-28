import {  activeBtn, offBtn, activeImg, offImg } from "./buttons.js";
import { System } from "./constructor.js";

export const internet = new System('Wi-Fi');

const internetBtnOn = document.querySelector('.wi-fi__on-btn');
const internetImg = document.querySelector('.wi-fi');
const internetBtnOff = document.querySelector('.wi-fi__off-btn');

internetBtnOn.addEventListener('click', function activeInternet() {
	activeBtn(internetBtnOff, internetBtnOn);
	activeImg(internetImg);
	internet.turnOn();
	console.log(internet);
});

internetBtnOff.addEventListener('click', function offInternet() {
	offBtn(internetBtnOn, internetBtnOff);
	offImg(internetImg);
	internet.turnOff();
	console.log(internet);
});