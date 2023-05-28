function getCurrentTime() {
	const apiKey = 'PQ78RM49TFQH';
	const apiUrl = `https://api.timezonedb.com/v2.1/list-time-zone?key=PQ78RM49TFQH&format=xml`;


	fetch(apiUrl)
		.then(response => response.text())
		.then(data => {
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(data, 'text/xml');
			const timeZoneElement = xmlDoc.getElementsByTagName('zoneName')[0];
			const currentTimeElement = xmlDoc.getElementsByTagName('formatted')[0];

			if (timeZoneElement && currentTimeElement) {
				const timeZone = timeZoneElement.textContent;
				const currentTime = currentTimeElement.textContent;

				const currentTimeElement = document.getElementById("current-time");
				currentTimeElement.textContent = `Time Zone: ${timeZone}, Current Time: ${currentTime}`;
			} else {
				throw new Error('Invalid XML structure or missing elements.');
			}
		})
		.catch(error => {
			console.log('An error occurred while fetching the time zone:', error);
		});
}

getCurrentTime();