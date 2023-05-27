import { activeBtn, offBtn, activeImg, offImg } from "./buttons.js";

class DoorSystem{
	constructor(name) {
		this.name = name;
		this.state = 'close';
	}
	openDoor() {
		this.state = 'open';
		console.log('Двері відчинено!');
	}

	closeDoor() {
		this.state = 'close';
		console.log('Двері зачинено!');
	}
}

const door = new DoorSystem('Двері');
const doorBtnOn = document.querySelector('.door__open');
const doorImg = document.querySelector('.door');
const doorBtnOff = document.querySelector('.door__close');

doorBtnOn.addEventListener('click', function openDoor() {
	activeBtn(doorBtnOff, doorBtnOn);
	activeImg(doorImg);
	door.openDoor();
	console.log(door);
});

doorBtnOff.addEventListener('click', function closeDoor() {
	offBtn(doorBtnOn, doorBtnOff);
	offImg(doorImg);
	door.closeDoor();
	console.log(door);
});