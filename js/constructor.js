export class System {
	constructor(name) {
		this.name = name;
		this.state = 'Off';
		this.loadState();
	}
	turnOn() {
		this.state = 'On';
		console.log(this.name + ' ввімкнено');
		this.saveState();
	}
	turnOff() {
		this.state = 'Off';
		console.log(this.name + ' Вимкнено');
		this.saveState();
	}
	openDoor() {
		this.state = 'open';
		console.log('Двері відчинено!');
		this.saveState();
	}

	closeDoor() {
		this.state = 'close';
		console.log('Двері зачинено!');
		this.saveState();
	}
	setTemperature(temp) {
		this.temp = temp;
		console.log(`Температуру встановлено на ${temp}°C.`);
		this.saveState();
	}
	saveState() {
		localStorage.setItem(this.name, JSON.stringify(this));
	}

	loadState() {
		const savedState = localStorage.getItem(this.name);
		if (savedState) {
			Object.assign(this, JSON.parse(savedState));
		}
	}
}

export const system = new System('My Smart Home');