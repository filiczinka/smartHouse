const body = document.querySelector('body');
const optionRooms = document.getElementById('rooms');
const selectBtn = document.getElementById('add-home__select__button');
const selectedRooms = document.getElementById('selected-rooms');
const formText = document.createElement('div');
formText.className = 'form-text';

const divPhoto = document.createElement('div');
const img = document.createElement('img');
img.src = '../img/banner.png';

const section = document.createElement('section');
section.className = 'add-home container';


const h2 = document.createElement('h2');
h2.className = 'add-home__title';
h2.textContent = 'НАЛАШТУВАННЯ';

const divText = document.createElement('div');
divText.className = 'add-home__form';

const createBtn = document.createElement('button');
function addButton() {
	if (selectedRooms.children.length > 0) {
		createBtn.className = 'create__btn btn';
		createBtn.textContent = 'Створити';
		formText.appendChild(createBtn);
	} else {
		createBtn.remove();
	}
}

const selectedRoomIds = [];
let createRoomList = selectBtn.addEventListener('click', function () {
	const selectedRoom = optionRooms.options[optionRooms.selectedIndex].value;
	const selectedRoomLabel = optionRooms.options[optionRooms.selectedIndex].textContent;

	if (!selectedRoomIds.includes(selectedRoom)) {
		selectedRoomIds.push(selectedRoom);

		const newElement = document.createElement('li');
		newElement.className = 'new__items';
		newElement.style.fontFamily = "'Yanone Kaffeesatz', sans-serif";
		newElement.style.fontWeight = '400';
		newElement.style.listStyle = 'none';
		newElement.textContent = selectedRoomLabel;
		selectedRooms.appendChild(newElement);

		const elementDeleteBtn = document.createElement('button');
		elementDeleteBtn.className = 'delete__elem-btn btn';
		elementDeleteBtn.textContent = 'Вилучити';
		elementDeleteBtn.addEventListener('click', function () {
			const index = selectedRoomIds.indexOf(selectedRoom);
			if (index > -1) {
				selectedRoomIds.splice(index, 1);
			}

			newElement.remove();
			elementDeleteBtn.remove();

			addButton();
		});
		selectedRooms.appendChild(elementDeleteBtn);

		addButton();
	}
});

let clickCreateBtn = createBtn.addEventListener('click', function createNewTab() {
	console.log(selectedRoomIds);
	formText.style.display = 'none';
	radiusOptionList();
});

divText.appendChild(formText);

formText.appendChild(h2);
formText.appendChild(optionRooms);
formText.appendChild(selectBtn);
formText.appendChild(selectedRooms);

section.appendChild(divText);
section.appendChild(divPhoto);
body.insertBefore(section, body.firstChild);
divPhoto.appendChild(img);