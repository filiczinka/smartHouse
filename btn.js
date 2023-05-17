const btn = document.querySelector('button');

btn.addEventListener('click', randomColorBg);

function randomColorBg() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const newColor = this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	return newColor;
}

btn.addEventListener('click', createNewTab);

function createNewTab() {
	setTimeout(function () {
		window.open('addHome.js', '_blank');
	},
		500);
}