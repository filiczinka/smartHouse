import { activeImg, offImg, playAudio, pauseAudio } from "./buttons.js";
import { System } from "./constructor.js";

export const secuirity = new System('ALARM');
const secuirityBtn = document.querySelector('.secuirity__btn');

const secuirityImg = document.querySelector('.secuirity');
let isRed = true;
//кнопка Alarm
function changeColor() {
	secuirityImg.style.backgroundColor = isRed ? 'red' : 'white';
	secuirityBtn.style.backgroundColor = isRed ? 'red' : 'white';
	isRed = !isRed;
}

let intervalAlarm;
function toggleSecuirity() {
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

//toogle on off alarm
secuirityBtn.addEventListener('click', function activeSecuirity() {
	toggleSecuirity();
	console.log(secuirity);
});