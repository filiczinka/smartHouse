const body = document.querySelector('body');
const section = document.createElement('section');
const divText = document.createElement('div');
const h2 = document.createElement('h2');
const divPhoto = document.createElement('div');
const img = document.createElement('img');

h2.className = 'add__home-title';
h2.textContent = 'Налаштування';


divText.appendChild(h2);
section.append(divText, divPhoto);
body.insertBefore(section, body.firstChild);
divPhoto.appendChild(img);