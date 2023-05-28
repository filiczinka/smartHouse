import { activeBtn, offBtn, activeImg, offImg, toggleSecuirity } from "./buttons.js";

export class SecuiritySystem {
	constructor(name) {
		this.name = name;
		this.secuirity = 'false';
	}
	turnOnSecuirity() {
		this.secuirity = 'true';
		console.log('Ввімкнено ALARM!!!!  AAAAAAA!');
	}

	turnOffSecuirity() {
		this.secuirity = 'false';
		console.log('ALARM вимкнено! Все гуд!');
	}
}

export const secuirity = new SecuiritySystem('ALARM');

export const secuirityBtn = document.querySelector('.secuirity__btn');

//toogle on off alarm
secuirityBtn.addEventListener('click', function activeSecuirity() {
	toggleSecuirity();
	console.log(secuirity);
});