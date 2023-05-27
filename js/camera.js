import { activeBtn, offBtn, activeImg, offImg } from "./buttons.js";

class CameraSystem {
	constructor(name) {
		this.name = name;
		this.camera = false;
	}
	turnOnCamera() {
		this.camera = true;
		console.log('Камери ввімкнено!');
	}

	turnOffCamera() {
		this.camera = false;
		console.log('Камери вимкнено!');
	}
}

const camera = new CameraSystem('Камери');
const cameraBtnOn = document.querySelector('.camera__on-btn');
const cameraImg = document.querySelector('.camera');
const cameraBtnOff = document.querySelector('.camera__off-btn');

cameraBtnOn.addEventListener('click', function onCamera() {
	activeBtn(cameraBtnOff, cameraBtnOn);
	activeImg(cameraImg);
	camera.openDoor();
	console.log(camera);
});

cameraBtnOff.addEventListener('click', function offCamera() {
	offBtn(cameraBtnOn, cameraBtnOff);
	offImg(cameraImg);
	camera.closeDoor();
	camera.log(camera);
});