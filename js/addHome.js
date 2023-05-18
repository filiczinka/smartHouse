const body = document.querySelector('body');
const optionRooms = document.getElementById('rooms');
const selectBtn = document.getElementById('add-home__select__button');
const selectedRooms = document.getElementById('selected-rooms');

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

selectBtn.addEventListener('click', function () {
	let newElement = document.createElement('li');
	newElement.className = 'new__items';
	newElement.textContent = optionRooms.options[optionRooms.selectedIndex].textContent;
	selectedRooms.appendChild(newElement);

	let elementDeleteBtn = document.createElement('button');
	elementDeleteBtn.className = 'delete__elem-btn btn';
	elementDeleteBtn.textContent = 'Вилучити';
	elementDeleteBtn.addEventListener('click', function () {
		newElement.remove();
		elementDeleteBtn.remove();
	});
	selectedRooms.appendChild(elementDeleteBtn);

	newElement.style.fontFamily = "'Yanone Kaffeesatz', sans-serif";
	newElement.style.fontWeight = '400';
	newElement.style.listStyle = 'none';

	addButton();
});


const  createBtn = document.createElement('button');
createBtn.className = 'create__btn btn';
createBtn.textContent = 'Створити';

function addButton() {
	if (selectedRooms.children.length > 0) {
		divText.appendChild(createBtn);
	} else if (selectedRooms.children.length === 0) {
		createBtn.remove();
	}
}

createBtn.addEventListener('click', function createNewTab() {
	setTimeout(function () {
		window.open('../myHome.html', '_target');
	},
		500);
});


divText.appendChild(h2);
divText.appendChild(optionRooms);
divText.appendChild(selectBtn);
divText.appendChild(selectedRooms);
section.append(divText, divPhoto);
body.insertBefore(section, body.firstChild);
divPhoto.appendChild(img);