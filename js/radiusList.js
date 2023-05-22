const container = document.querySelector('.option__container');
container.style.display = 'none';
const items = Array.from(document.querySelectorAll('.option__item'));

function radiusOptionList() {
  const radiusX = 200; // Радіус по осі X
  const radiusY = 150; // Радіус по осі Y
  const centerX = 825; // Координата центру по осі X
  const centerY = -350; // Координата центру по осі Y
  const startAngle = -Math.PI / 2;
  const angleStep = (Math.PI * 2) / items.length;

  items.forEach((item, index) => {
    const angle = startAngle + index * angleStep;
    const x = centerX + radiusX * Math.cos(angle);
    const y = centerY + radiusY * Math.sin(angle);

    const distance = 60; // Відстань між елементами
    const offsetX = distance * Math.cos(angle);
    const offsetY = distance * Math.sin(angle);

    container.style.display = 'block';
    item.style.position = 'absolute';
    item.style.left = `${x + offsetX}px`;
    item.style.top = `${y + offsetY}px`;
  });
}