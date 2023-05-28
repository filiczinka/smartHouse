import { activeBtn, offBtn, activeImg, offImg, playAudio, pauseAudio } from "./buttons.js";
import { System } from "./constructor.js";

export const door = new System('Двері');

const doorBtnOn = document.querySelector('.door__open');
const doorImg = document.querySelector('.door');
const doorBtnOff = document.querySelector('.door__close');
const audioDoor = document.querySelector('#door');

doorBtnOn.addEventListener('click', function openDoor() {
	activeBtn(doorBtnOff, doorBtnOn);
	activeImg(doorImg);
	door.openDoor();
	playAudio(audioDoor);
	console.log(door);
});

doorBtnOff.addEventListener('click', function closeDoor() {
	offBtn(doorBtnOn, doorBtnOff);
	offImg(doorImg);
	door.closeDoor();
	playAudio(audioDoor);
	console.log(door);
});