import { activeBtn, offBtn, activeImg, offImg } from "./buttons.js";
import { System } from "./constructor.js";
export const camera = new System('Камери');

const cameraImg = document.querySelector('.camera');

//ввімкнути камери
const cameraBtnOn = document.querySelector('.camera__on-btn');
cameraBtnOn.addEventListener('click', function onCamera() {
	activeBtn(cameraBtnOff, cameraBtnOn);
	activeImg(cameraImg);
	camera.turnOn();
	console.log(camera);
});

//вимкнути камери
const cameraBtnOff = document.querySelector('.camera__off-btn');
cameraBtnOff.addEventListener('click', function offCamera() {
	offBtn(cameraBtnOn, cameraBtnOff);
	offImg(cameraImg);
	camera.turnOff();
	console.log(camera);
});