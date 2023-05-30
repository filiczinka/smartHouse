import { light } from "./lightSystem.js";
import { climateSystem, condSystem } from "./climateSystem.js";
import { door } from "./door.js";
import { camera } from "./camera.js";
import { internet } from "./wi-fi.js";
import { secuirity } from "./secuirity.js";

//кнопка актуального стану
const actuallyBtn = document.querySelector('.actually-btn');
actuallyBtn.addEventListener('click', function actuallyState() {
	actuallyBtn.classList.add('active');
	alert(`Cвітло: ${light.state}! - Температура: ${climateSystem.temp}! - Кондиціонер: ${condSystem.state}! - WI-FI: ${internet.state}! - Двері: ${door.state}! - Відеоспостереження: ${camera.state}! - Сигналізація: ${secuirity.state}!`);
	console.log(`Cвітло: ${light.state}! - Температура: ${climateSystem.temp}! - Кондиціонер: ${condSystem.state}! - WI-FI: ${internet.state}! - Двері: ${door.state}! - Відеоспостереження: ${camera.state}! - Сигналізація: ${secuirity.state}!`);
	console.log({ light, climateSystem, condSystem, door, camera, internet, secuirity });
})
