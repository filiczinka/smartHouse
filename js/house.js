export class SmartHouse {
	constructor(name) {
		this.name = name;
		this.component = [];
	}

	addComponent(component) {
		this.component.push(component);
	}

	removeComponent(component) {
		const index = this.component.indexOf(component);
		if (index !== -1) {
			this.component.splice(index, 1);
		}
	}
}

export const smartHouse = new SmartHouse('My Smart House');
