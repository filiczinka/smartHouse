const btn = document.querySelector('button');

btn.addEventListener('click', function () {
	const newColor = randomColorBg();
	btn.style.backgroundColor = newColor;
});

function randomColorBg() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', createNewTab);

	function createNewTab() {
		setTimeout(function () {
			window.open('addHome.js', '_blank');
		},
			500);
	}