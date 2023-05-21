const container = document.querySelector('.option__container');
const items = Array.from(document.querySelectorAll('.option__item'));

const radiusX = 200; // Радіус по осі X
const radiusY = 150; // Радіус по осі Y
const centerX = 170; // Координата центру по осі X
const centerY = 0; // Координата центру по осі Y
const startAngle = -Math.PI / 2;
const angleStep = (Math.PI * 2) / items.length;

items.forEach((item, index) => {
  const angle = startAngle + index * angleStep;
  const x = centerX + radiusX * Math.cos(angle);
  const y = centerY + radiusY * Math.sin(angle);

  const distance = 60; // Відстань між елементами
  const offsetX = distance * Math.cos(angle);
  const offsetY = distance * Math.sin(angle);

  item.style.position = 'absolute';
  item.style.left = `${x + offsetX}px`;
  item.style.top = `${y + offsetY}px`;
});
