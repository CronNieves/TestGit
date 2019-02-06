const location = 'montevideo,uy';
const api_key = '1212a61672658d813070d540a6504e88';
const url_base_weather = 'https://api.openweathermap.org/data/2.5/weather';
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;//&units=metric
