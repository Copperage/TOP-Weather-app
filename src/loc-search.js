import { getWeather } from './get-weather.js';

const locationForm = document.querySelector('#location-form');
const locationInput = document.querySelector('#location-input');

function searchLocation() {
	locationForm.addEventListener('submit', async (event) => {
		event.preventDefault();
		let location = locationInput.value.trim();

		if (!location) {
			alert('Please enter a location');
			return;
		}

		await getWeather(location);
	});
}

export { searchLocation };
