import { System } from "./constructor.js";

class SmartTV extends System {
	constructor(name) {
		super(name);
		this.isOn = false;
		this.currentChannel = 1;
		this.volume = 20;
		this.channels = {
			1: 'Інтер',
			2: 'Україна',
			3: '1+1',
			4: 'НТН',
			5: 'К-1',
			6: 'UA:Перший',
			7: 'ICTV',
			8: 'СТБ',
			9: 'ТЕТ',
			10: 'К-2',
			11: 'Новий',
			12: 'M1',
			13: 'Прямий',
			14: '5 канал',
			15: 'UA:Культура',
			16: 'Україна 24',
		}
	}

	turnOn() {
		this.isOn = true;
		console.log(`${this.name} ввімкнений`);
	}

	turnOff() {
		this.isOn = false;
		console.log(`${this.name} вимкнений`);
	}

	showChannels() {
		if (this.isOn) {
			const modal = document.getElementById('modal');
			const modalContent = modal.querySelector('.modal-content');

			modal.style.display = 'block';
			modalContent.innerHTML = '';
			const showChannel = Object.values(this.channels);
			for (let i = 0; i < showChannel.length; i++) {
				const channel = showChannel[i];
				const button = document.createElement('button');
				button.className = 'modal__content';
				button.textContent = channel;
				button.addEventListener('click', () => {
					console.log(`Ви вибрали канал ${channel}`);
					modal.style.display = 'none';
				});
				modalContent.appendChild(button);
			}
		} else {
			console.log('TV вимкнено');
		}
	}

	channelUp() {
		if (this.isOn) {
			const keys = Object.keys(this.channels);
			const currentValue = this.channels[keys[this.currentChannel]];
			console.log(currentValue);
			this.currentChannel = (this.currentChannel + 1) % keys.length;
		} else {
			console.log('TV вимкнено.');
		}
	}

	channelDown() {
		if (this.isOn) {
			const keys = Object.keys(this.channels);
			const currentValue = this.channels[keys[this.currentChannel]];
			console.log(currentValue);
			this.currentChannel = (this.currentChannel - 1 + keys.length) % keys.length;
		} else {
			console.log('TV вимкненою');
		}
	}

	volumeUp() {
		if (this.isOn) {
			this.volume++;
			console.log(`Звук підвищено до ${this.volume}.`);
		} else {
			console.log('TV вимкнено.');
		}
	}

	volumeDown() {
		if (this.isOn) {
			this.volume--;
			console.log(`Звук знижено до ${this.volume}.`);
		} else {
			console.log('TV вимкнено.');
		}
	}
}

export const tv = new SmartTV("TV");
let tvIsOn = true;
//ввімкнення TV
const tvPowerButton = document.querySelector('.tv-power-button');
tvPowerButton.addEventListener('click', () => {
	if (tvIsOn) {
		tv.turnOff();
		tvIsOn = false;
	} else {
		tv.turnOn();
		tvIsOn = true;
	}
});

//кнопка показати канали
const showChannelsButton = document.querySelector('.tv-show-channels');
showChannelsButton.addEventListener("click", () => {
	tv.showChannels();
});

//канал вперед
const channelUpButton = document.querySelector('.tv-channel-up-button');
channelUpButton.addEventListener("click", () => {
	tv.channelUp();
});

//канал назад
const channelDownButton = document.querySelector('.tv-channel-down-button');
channelDownButton.addEventListener("click", () => {
	tv.channelDown();
});

//звук більше
const volumeUpButton = document.querySelector('.tv-volume-up-button');
volumeUpButton.addEventListener("click", () => {
	tv.volumeUp();
});

//звук менше
const volumeDownButton = document.querySelector('.tv-volume-down-button');
volumeDownButton.addEventListener("click", () => {
	tv.volumeDown();
});