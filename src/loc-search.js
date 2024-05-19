import { getWeather } from './get-weather.js';

const locationForm = document.querySelector('#location-form');
const locationInput = document.querySelector('#location-input');

function searchLocation() {
	locationForm.addEventListener('submit', async (event) => {
		event.preventDefault();
		const location = locationInput.value || 'London'; //default location
		console.log(getWeather(location));
		await getWeather(location);
	});
}

searchLocation();

export { searchLocation };
