

const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const gggg = document.querySelector("form");
const search = document.querySelector("#search");
const wheater = document.querySelector("#wheater");

const getWeather = async (city) => {
  wheater.innerHTML = `<p> Loading please wait ....</p>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showWeather(data);
};

const showWeather = (data) => {
  if (data.cod == "404") {
    wheater.innerHTML = `<p> 🚫 City not Found</p>`;
  }
  console.log(data);
  wheater.innerHTML = `  <div>
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" />
</div>
<div>
  <h2>${data.main.temp} ℃</h2>
  <h4>${data.weather[0].main}</h4>
</div>
`;
};

gggg.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});


