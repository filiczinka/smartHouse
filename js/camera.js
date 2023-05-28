import { activeBtn, offBtn, activeImg, offImg } from "./buttons.js";
import { System } from "./constructor.js";
export const camera = new System('Камери');

const cameraBtnOn = document.querySelector('.camera__on-btn');
const cameraImg = document.querySelector('.camera');
const cameraBtnOff = document.querySelector('.camera__off-btn');

cameraBtnOn.addEventListener('click', function onCamera() {
	activeBtn(cameraBtnOff, cameraBtnOn);
	activeImg(cameraImg);
	camera.turnOn();
	console.log(camera);
});

cameraBtnOff.addEventListener('click', function offCamera() {
	offBtn(cameraBtnOn, cameraBtnOff);
	offImg(cameraImg);
	camera.turnOff();
	console.log(camera);
});