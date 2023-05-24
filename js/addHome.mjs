const body = document.querySelector('body');
const chooseRooms = document.getElementById('rooms');
const addRoomToListBtn = document.getElementById('add-home__select__button');
const selectedRoomsList = document.getElementById('selected-rooms');
const form = document.createElement('div');
form.className = 'form';

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

//функція для кнопки 'створити'
const createBtn = document.createElement('button');
function addButton() {
	if (selectedRoomsList.children.length > 0) {
		createBtn.className = 'create__btn btn';
		createBtn.textContent = 'Створити';
		form.appendChild(createBtn);
	} else {
		createBtn.remove();
	}
}

const selectedRoomIds = [];
//виведення вибраних кімнат в список
addRoomToListBtn.addEventListener('click', function () {
	const selectedRoom = chooseRooms.options[chooseRooms.selectedIndex].value;
	const selectedRoomLabel = chooseRooms.options[chooseRooms.selectedIndex].textContent;
	const newElement = document.createElement('li');
	newElement.className = 'new__items';
	if (!selectedRoomIds.includes(selectedRoom)) {
		selectedRoomIds.push(selectedRoomLabel);
		newElement.textContent = selectedRoomLabel;
		selectedRoomsList.appendChild(newElement);

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
		selectedRoomsList.appendChild(elementDeleteBtn);

		addButton();
	}
});

const navTabs = document.createElement('div');
navTabs.className = 'nav-tabs';
divText.appendChild(navTabs);
navTabs.style.display = 'none';

//функція для виведення кімнат в nav tabs
function createElementsFromArray(arr) {
	const elements = [];
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		const newElement = document.createElement('h3');
		newElement.className = 'tabs-item';
		newElement.id = chooseRooms.options[chooseRooms.selectedIndex].value;
		newElement.textContent = selectedRoomIds[i] + ' ';
		elements.push(newElement);
		navTabs.appendChild(newElement);
	}
	return elements;
}


//очищення форми та перезапис
createBtn.addEventListener('click', function createNewTab() {
	console.log(selectedRoomIds);
	form.style.display = 'none';
	navTabs.style.display = 'flex';
	radiusOptionList();
	createElementsFromArray(selectedRoomIds);
});

divText.appendChild(form);

form.appendChild(h2);
form.appendChild(chooseRooms);
form.appendChild(addRoomToListBtn);
form.appendChild(selectedRoomsList);

section.appendChild(divText);
section.appendChild(divPhoto);
body.insertBefore(section, body.firstChild);
divPhoto.appendChild(img);