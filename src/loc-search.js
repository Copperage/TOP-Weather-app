const { getWeather } = require('./get-weather.js');

const locationForm = document.querySelector('#location-form');
const locationInput = document.querySelector('#location-input');
const submitButton = document.querySelector('button');

function searchLocation() {
	locationForm.addEventListener('submit', async (event) => {
		event.preventDefault();
		const location = locationInput.value;
		console.log(getWeather(location));
		await getWeather(location);
	});
}

searchLocation();

module.exports = { searchLocation };
