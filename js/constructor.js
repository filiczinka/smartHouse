export class System {
	constructor(name) {
		this.name = name;
		this.state = 'Off';
	}
	turnOn() {
		this.state = 'On';
		console.log(this.name + ' ввімкнено');
	}
	turnOff() {
		this.state = 'Off';
		console.log(this.name + ' Вимкнено');
	}
	openDoor() {
		this.state = 'open';
		console.log('Двері відчинено!');
	}

	closeDoor() {
		this.state = 'close';
		console.log('Двері зачинено!');
	}
	setTemperature(temp) {
		this.temp = temp;
		console.log(`Температуру встановлено на ${temp}°C.`);
	}
}

export const system = new System('My Smart Home');