import { activeBtn, offBtn, activeImg, offImg } from "./buttons.js";
import { SmartHouse, smartHouse } from "./house.js";

export class SecuiritySystem extends SmartHouse {
	constructor(name) {
		super(name);
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
smartHouse.addComponent(secuirity);

export const secuirityBtn = document.querySelector('.secuirity__btn');

//toogle on off alarm
secuirityBtn.addEventListener('click', function activeSecuirity() {
	toggleSecuirity();
	console.log(secuirity);
});