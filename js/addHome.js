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
	newElement.textContent = optionRooms.options[optionRooms.selectedIndex].textContent;
	selectedRooms.appendChild(newElement);

	let elementDeleteBtn = document.createElement('button');
	elementDeleteBtn.textContent = 'Видалити';
	elementDeleteBtn.addEventListener('click', function () {
		newElement.remove();``
	});
	newElement.appendChild(elementDeleteBtn);

	newElement.style.fontFamily = "'Yanone Kaffeesatz', sans-serif";
	newElement.style.fontWeight = '400';
	newElement.style.listStyle = 'none';
});

divText.appendChild(h2);
divText.appendChild(optionRooms);
divText.appendChild(selectBtn);
divText.appendChild(selectedRooms);
section.append(divText, divPhoto);
body.insertBefore(section, body.firstChild);
divPhoto.appendChild(img);