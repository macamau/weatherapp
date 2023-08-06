const d = new Date();
let hour = d.getHours();
let minute = d.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[d.getDay()];
document.getElementById("actual").innerHTML = `${day}, ${hour}:${minute}`;

function search(event) {
  event.preventDefault();
  let locationInput = document.querySelector("#location-input");
  let searchLocationInput = document.querySelector("#search-location-input");
  locationInput.innerHTML = searchLocationInput.value.toUpperCase();
}
let form = document.querySelector("form");
form.addEventListener("submit", search);

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#maintemp");
  temperatureElement.innerHTML = `${temperature}°C`;
  let minTemperature = Math.round(response.data.main.temp_min);
  let minTemperatureElement = document.querySelector("#minTemp");
  minTemperatureElement.innerHTML = `Min: ${minTemperature}°C`;
  let maxTemperature = Math.round(response.data.main.temp_max);
  let maxTemperatureElement = document.querySelector("#maxTemp");
  maxTemperatureElement.innerHTML = `Max: ${maxTemperature}°C`;
}

function showForecast(response) {}

function showPos(event) {
  event.preventDefault();
  let citysearch = document.querySelector("#search-location-input").value;
  let apiKey = "44071a77806b1fba507463ba973d6aa5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citysearch}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
function forecast(event) {
  event.preventDefault();
  let citysearch = document.querySelector("#search-location-input").value;
  let apiKey2 = "fd8748cced25dd6fcebad3bad19f0004";
  let apiUrl2 = `https://api.openweathermap.org/data/2.5/forecast?q=${citysearch}&appid={apiKey2}`;
  axios.get(apiUrl2).then(showForecast);
}
let searchCity = document.querySelector("form");
searchCity.addEventListener("submit", showPos);
searchCity.addEventListener("submit", forecast);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#maintemp");
  temperatureElement.innerHTML = 19 + "°";
}
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#maintemp");
  temperatureElement.innerHTML = 54 + "°";
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
