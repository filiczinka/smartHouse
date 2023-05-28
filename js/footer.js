function getCurrentTime() {
	const apiKey = 'PQ78RM49TFQH';
	const apiUrl = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=Europe/Kiev`;

	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			if (data.formatted) {
				const currentTimeElement = document.getElementById("current-time");
				currentTimeElement.textContent = data.formatted;
			} else {
				console.log('Не вдалося отримати актуальну годину та дату.');
			}
		})
		.catch(error => {
			console.log('Сталася помилка при отриманні актуальної години та дати:', error);
		});
}

getCurrentTime();


