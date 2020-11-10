// date and time //

let now = new Date();
let dateElement = document.querySelector("#date");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Decemeber"
];
let month = months[now.getMonth()];

dateElement.innerHTML = `${day} ${month} ${date}, ${year} <br> ${hours}:${minutes}`;

/// Weather and Temperature ///
function showWeather(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${response.data.name}`;
  let h2 = document.querySelector(".currentTemp");
  let temperature = Math.round(response.data.main.temp);
  h2.innerHTML = `${temperature}°F`;
  let currentCity = document.querySelector("#currentCity");
}

function handlePosition(position) {
  let apiKey = "431be991dd8c3478feb5f5569d2c8887";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "imperial";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(handlePosition);

//Search Button Weather and Temperature//

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search").value;
  searchCity(city);
}
function searchCity(city) {
  let apiKey = "431be991dd8c3478feb5f5569d2c8887";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showWeather);
}

let searchedCity = document.querySelector("#search-form");
searchedCity.addEventListener("submit", showCity);
//current location button
let button = document.querySelector("#currentLocation");
button.addEventListener("click", handlePosition);
