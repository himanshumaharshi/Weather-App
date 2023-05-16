console.log("logged");
// API call means network call

// api key
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

function renderWeatherInfo(data) {
  let newPara = document.createElement("p");
  newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
  document.body.appendChild(newPara);
}

async function fetchWeatherDetail() {
  try {
    let city = "goa";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    console.log("Weather data -> ", data);

    renderWeatherInfo(data);
  } catch (error) {
    console.log("error found ", err);
  }
}

async function getCustomWeatherDetails() {
  try {
    let latitude = 15.6333;
    let longitude = 18.333;

    let result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    let data = await result.json();
    console.log(data);

    renderWeatherInfo(data);
  } catch (error) {
    console.log("error found ", err);
  }
}

// function switchTab(clickedTab) {
//   apiErrorContainer.classList.remove("active");
//   if (clickedTab !== currentTab) {
//     currentTab.classList.remove("current-tab");
//   }
// }

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("No geoLocation support");
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  console.log(lat);
  console.log(lon);
}
