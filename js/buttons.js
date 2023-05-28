import { secuirityBtn, secuirity } from "./secuirity.js";
import { System } from "./constructor.js";

//кнопки активного та пасивного стану
export function activeBtn(event1, event2) {
	event1.classList.remove('off');
	event2.classList.add('active');
}

export function offBtn(event1, event2) {
	event1.classList.remove('active');
	event2.classList.add('off');
}

export function activeImg(event) {
	event.classList.add('active');
	event.classList.remove('off');
}

export function offImg(event) {
	event.classList.add('off');
	event.classList.remove('active');
}


//кнопка ввімкн та вимкнення кондиціонеру
export function toggleConditioner() {
	const button = document.querySelector(".conditioner__btn");
	const tempImg = document.querySelector('.temperature');
	const climateSystem = new System("Climate");
	const audioCond = document.querySelector('#cond');
	if (button.classList.contains("active")) {
		button.classList.remove("active");
		button.classList.add("off");
		button.innerHTML = 'Вимкнено';
		offImg(tempImg);
		climateSystem.turnOff();
		console.log(climateSystem);
		pauseAudio(audioCond);
	} else {
		button.classList.remove("off");
		button.classList.add("active");
		button.innerHTML = 'Ввімкнено';
		activeImg(tempImg);
		climateSystem.turnOn();
		console.log(climateSystem);
		playAudio(audioCond);
	}
}

//кнопка Alarm
const secuirityImg = document.querySelector('.secuirity');
let isRed = true;
function changeColor() {
	secuirityImg.style.backgroundColor = isRed ? 'red' : 'white';
	secuirityBtn.style.backgroundColor = isRed ? 'red' : 'white';
	isRed = !isRed;
}

export function playAudio(audio) {
	audio.play();
}

export function pauseAudio(audio) {
	audio.pause();
}

let intervalAlarm;
export function toggleSecuirity() {
	const button = document.querySelector(".secuirity__btn");
	const secuirityImg = document.querySelector('.secuirity');
	const audioAlarm = document.getElementById("audio__alarm");
	if (button.classList.contains("active")) {
		button.classList.remove("active");
		button.classList.add("off");
		button.innerHTML = 'Вимкнено';
		offImg(secuirityImg);
		secuirity.turnOff();
		clearInterval(intervalAlarm);
		pauseAudio(audioAlarm);
	} else {
		button.classList.remove("off");
		button.classList.add("active");
		button.innerHTML = 'Ввімкнено';
		activeImg(secuirityImg);
		secuirity.turnOn();
		intervalAlarm = setInterval(changeColor, 500);
		playAudio(audioAlarm);
	}
}