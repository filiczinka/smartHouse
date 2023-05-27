import { ClimateSystem } from "./climateSystem.js";

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
	const climateSystem = new ClimateSystem("Climate");
	if (button.classList.contains("active")) {
		button.classList.remove("active");
		button.classList.add("off");
		button.innerHTML = 'Вимкнено';
		offImg(tempImg);
		climateSystem.turnOffConditioner();
	} else {
		button.classList.remove("off");
		button.classList.add("active");
		button.innerHTML = 'Ввімкнено';
		activeImg(tempImg);
		climateSystem.turnOnConditioner();
	}
}