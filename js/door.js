import { activeBtn, offBtn, activeImg, offImg } from "./buttons.js";

class InternetSystem extends SmartHouse {
	constructor(state) {
		this.state = state;
		this.doorsSensors = false;
	}
	openDoor() {
		this.door = true;
		console.log('Двері відчинено!');
	}

	closeDoor() {
		this.door = false;
		console.log('Двері зачинено!');
	}
}

const smartHouse = new SmartHouse("My Smart Home");
smartHouse.addComponent(door);

const door = new DoorSystem('Wi-Fi');
const doorBtnOn = document.querySelector('.door__on-btn');
const doortImg = document.querySelector('.door');
const doorBtnOff = document.querySelector('.door__off-btn');

doorBtnOn.addEventListener('click', function openDoor() {
	activeBtn(doorBtnOff, doorBtnOn);
	activeImg(doorImg);
	door.turnOnInternet();
	console.log(door);
});

internetBtnOff.addEventListener('click', function closeDoor() {
	offBtn(internetBtnOn, internetBtnOff);
	offImg(internetImg);
	internet.turnOffInternet();
	console.log(internet);
});