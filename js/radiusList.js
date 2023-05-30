const optionContainer = document.querySelector('.option__container');
const optionItems = Array.from(optionContainer.getElementsByClassName('option__item'));
const radius = 220; // Радіус кола
const centerX = 880; // Центр кола по осі X
const centerY = 270; // Центр кола по осі Y
const totalItems = optionItems.length;
const angle = (2 * Math.PI) / totalItems; // Кут між елементами

for (let index = 0; index < optionItems.length; index++) {
  const item = optionItems[index];
  const itemAngle = angle * index;

  const x = Math.round(centerX + radius * Math.cos(itemAngle)) + 'px';
  const y = Math.round(centerY + radius * Math.sin(itemAngle)) + 'px';

  item.style.position = 'absolute';
  item.style.left = x;
  item.style.top = y;
}