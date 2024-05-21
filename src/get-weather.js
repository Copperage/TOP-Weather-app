import { searchLocation } from './loc-search.js';
const weather = document.querySelector('#weather');

async function getWeather(location) {
	const apiKey = '42d3039f04ac4e4687c171843241405';
	const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
		location
	)}`;

	try {
		const response = await fetch(url, { mode: 'cors' });

		if (!response.ok) {
			throw new Error(
				'Network response returned NOT ok: ' + response.statusText
			);
		}

		const data = await response.json();

		const feelsLikeText = document.createElement('span');
		feelsLikeText.textContent = data.current.feelslike_c + '°C';

		if (data.current.feelslike_c < 10) {
			feelsLikeText.classList.add('cold');
		} else if (data.current.feelslike_c > 30) {
			feelsLikeText.classList.add('hot');
		} else {
			feelsLikeText.classList.add('normal');
		}

		weather.innerHTML =
			`${data.location.name}, <br/>` +
			`${data.location.localtime}, <br/>` +
			`Feels like ${feelsLikeText.outerHTML}, ` +
			`${data.current.condition.text}`;
	} catch (error) {
		console.error('Fetch error: ', error);
		weather.innerHTML = 'Failed to retrieve weather data.';
	}
}

export { getWeather };
