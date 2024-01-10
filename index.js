import { loadCurrentWeather } from "./currentWeather.js";
import { buildWeatherSection } from "./sections/weather.js";
//pentru a accesa acest list element mergem in DOM si il accesam
//adaugam si export pentru a fi accesat din alta parte


const initApp = async () => {
    const initialLocation = document.getElementById("bucharest").textContent;
    const locationLabelEl = document.getElementById("location-label");
    const locationsListEl = document.getElementById("locations-list");

    const { isOk, weather } = await loadCurrentWeather(initialLocation);

    if (isOk) {
        console.log(weather);
        buildWeatherSection(weather);
    }

    const handleLocationsListClick = async (e) => {
        const locationName = e.target.childNodes[0].textContent;
        const { isOk, weather } = await loadCurrentWeather(locationName);

        if (isOk) {
            console.log(weather);
            buildWeatherSection(weather);
        }

        locationLabelEl.textContent = locationName;
}

locationsListEl.addEventListener('click', handleLocationsListClick);

locationLabelEl.textContent = initialLocation;
};

initApp();