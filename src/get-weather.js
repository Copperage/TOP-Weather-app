const weather = document.querySelector('#weather');

async function getWeather() {
	const url = `https://api.weatherapi.com/v1/current.json?key=42d3039f04ac4e4687c171843241405&q=London`;

	const response = await fetch(url, { mode: 'cors' });
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
		data.location.name +
		`, <br/>` +
		data.location.localtime +
		`, <br/> Feel's like
            ` +
		feelsLikeText.outerHTML +
		`, ` +
		data.current.condition.text;
}

getWeather();

module.exports = { getWeather };
