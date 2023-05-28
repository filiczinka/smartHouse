function getCurrentTime() {
	const apiKey = 'PQ78RM49TFQH';
	const apiUrl = `http://api.timezonedb.com/v2.1/list-time-zone?key=${apiKey}&format=xml`;

	fetch(apiUrl)
		.then(response => response.text())
		.then(data => {
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(data, 'text/xml');
			const timeZone = xmlDoc.getElementsByTagName('zoneName')[0].textContent;

			const currentTimeElement = document.getElementById("current-time");
			currentTimeElement.textContent = timeZone;
		})
		.catch(error => {
			console.log('An error occurred while fetching the time zone:', error);
		});
}

getCurrentTime();



