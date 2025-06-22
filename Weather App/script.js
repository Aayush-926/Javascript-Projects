const apiKey = "338d87001ad94c0ba0071630252206";
const input = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherResult = document.getElementById("weatherResult");

function fetchWeather() {
  const city = input.value.trim();

  // Reset previous error
  input.classList.remove("error");
  input.placeholder = "Enter city name";

  if (!city) {
    input.classList.add("error");
    input.value = "";
    input.placeholder = "Please enter a city!";
    return;
  }

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        input.classList.add("error");
        input.value = "";
        input.placeholder = "City not found!";
        return;
      }

      // Fill weather info
      document.getElementById("location").textContent = `${data.location.name}, ${data.location.country}`;
      document.getElementById("temp").textContent = data.current.temp_c;
      document.getElementById("condition").textContent = data.current.condition.text;
      document.getElementById("humidity").textContent = data.current.humidity;
      document.getElementById("wind").textContent = data.current.wind_kph;
      document.getElementById("icon").src = "https:" + data.current.condition.icon;

      weatherResult.classList.remove("hidden");
    })
    .catch(err => {
      input.classList.add("error");
      input.value = "";
      input.placeholder = "Network error!";
      console.error("Fetch error:", err);
    });
}

getWeatherBtn.addEventListener("click", fetchWeather);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    fetchWeather();
  }
});
