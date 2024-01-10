import { apiKey, baseUrl } from "./constants.js";
//aici implementam functia care sa aduca datele , ea primeste orasul ca si parametru
//pentru ca folosim datele din constants trebuie sa le importam 

//aceasta functie este async pentru ca aici facem conexiunea cu server de la open weather 
//pentru a aduce datele pe format json
export const loadCurrentWeather = async (location) =>  {
    try {
        const weatherWrl = `${baseUrl}weather/?q=${location}&units=metric&lang=Ro&appid=${apiKey}`;
        const response = await fetch(weatherWrl);
        const weather = await response.json();

        if (response.status === 200) {
            return {
                isOk: true,
                weather,
            };
        }

        return {
            isOk: false
        };

    } catch {
        return {
            isOk: false,
         }
    }   
}
