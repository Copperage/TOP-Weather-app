import './styles/style.css';
import { getWeather } from './get-weather.js';
import { searchLocation } from './loc-search.js';

getWeather('London');
searchLocation();

// <form id="location-form">
// <label for="location-input">Enter a location:</label>
// <input type="text" id="location-input" name="location-input" />
// <button type="submit">Get Weather</button>
// </form>
