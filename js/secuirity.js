import { activeBtn, offBtn, activeImg, offImg, toggleSecuirity } from "./buttons.js";
import { System } from "./constructor.js";

export const secuirity = new System('ALARM');

export const secuirityBtn = document.querySelector('.secuirity__btn');

//toogle on off alarm
secuirityBtn.addEventListener('click', function activeSecuirity() {
	toggleSecuirity();
	console.log(secuirity);
});