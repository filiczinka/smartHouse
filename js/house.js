import { light } from "./lightSystem.js";
import { climateSystem } from "./climateSystem.js";
import { door } from "./door.js";
import { camera } from "./camera.js";
import { internet } from "./wi-fi.js";
import { secuirity } from "./secuirity.js";

const actuallyBtn = document.querySelector('.actually-btn');

actuallyBtn.addEventListener('click', function actuallyState() {
	actuallyBtn.classList.add('active');
	alert(`Cвітло: ${light.state}! - Температура: ${climateSystem.temp}! - Кондиціонер: ${climateSystem.state}! - WI-FI: ${internet.state}! - Двері: ${door.state}! - Камери: ${camera.state}! - Сигналізація: ${secuirity.state}!`);
	console.log({ light, climateSystem, door, camera, internet, secuirity });
})
