import { loadCurrentWeather } from "./currentWeather.js"

//pentru a accesa acest list element mergem in DOM si il accesam
//adaugam si export pentru a fi accesat din alta parte
export const initialLocation = document.getElementById("bucharest").textContent;
console.log(initialLocation);
 
const locationLabelEl = document.getElementById("location-label");
const locationsListEl = document.getElementById("locations-list");

const handleLocationsListClick = async (e) => {
    const locationName = e.target.childNodes[0].textContent;

    const { isOk, weather } = await loadCurrentWeather(locationName);

    if (isOk) {
        console.log(weather);
    }

    locationLabelEl.textContent = locationName;
}

locationsListEl.addEventListener('click', handleLocationsListClick);

locationLabelEl.textContent = initialLocation;