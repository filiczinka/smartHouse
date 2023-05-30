import { activeBtn, offBtn, activeImg, offImg, playAudio, pauseAudio } from "./buttons.js";
import { System } from "./constructor.js";

export const door = new System('Двері');
const doorImg = document.querySelector('.door');
const audioDoor = document.querySelector('#door');

//відчинити двері
const doorBtnOn = document.querySelector('.door__open');
doorBtnOn.addEventListener('click', function openDoor() {
	activeBtn(doorBtnOff, doorBtnOn);
	activeImg(doorImg);
	door.openDoor();
	playAudio(audioDoor);
	console.log(door);
});

//зачинити двері
const doorBtnOff = document.querySelector('.door__close');
doorBtnOff.addEventListener('click', function closeDoor() {
	offBtn(doorBtnOn, doorBtnOff);
	offImg(doorImg);
	door.closeDoor();
	playAudio(audioDoor);
	console.log(door);
});