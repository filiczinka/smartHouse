const body = document.querySelector('body');
const optionRooms = document.getElementById('rooms');
const selectBtn = document.getElementById('add-home__select__button');

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


divText.appendChild(h2);
divText.appendChild(optionRooms);
divText.appendChild(selectBtn);
section.append(divText, divPhoto);
body.insertBefore(section, body.firstChild);
divPhoto.appendChild(img);