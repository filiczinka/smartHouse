const resultElement = document.getElementById("current-time");

// Функція для отримання актуального часу за ключем API
function getCurrentTime() {
	fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=PQ78RM49TFQH&format=json&by=zone&zone=Europe/Kyiv`)
		.then(response => response.json())
		.then(data => {
			const currentTime = data.formatted;
			resultElement.textContent = `Time Zone: ${timeZone}, Current Time: ${currentTime}`;
		})
		.catch(error => {
			console.log("Помилка при отриманні часу:", error);
		});
}

getCurrentTime();