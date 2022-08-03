let inputSearch = document.querySelector(".search");
let city = document.querySelector(".capital .city");
let country = document.querySelector(".country");
let value = document.querySelector(" .value");
let shortDesc = document.querySelector(".short-desc");
let visibility = document.querySelector(" .visibility span");
let sun = document.querySelector(".sun span");
let wind = document.querySelector(".wind span");
let time = document.querySelector(".time");
let content = document.querySelector(".content");
let body = document.querySelector("body"); 
async function changeWeatherUI(capitalSearch) {
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=3d71a818f5a78cd590dc4715af2d171e`;

  let data = await fetch(apiURL).then((res) => res.json());
  if (data.cod == 200) {
    content.classList.remove("hide");
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + "m";
    wind.innerText = data.wind.speed + "m/s";
    sun.innerText = data.main.humidity + "%";
    let temp = value.innerText = Math.round((data.main.temp - 273.15)) 
    value.innerText = temp;
    shortDesc.innerText = data.weather[0] ? data.weather[0].main : "";
    time.innerText = new Date().toLocaleDateString("vi");

    if(temp <= 18){
        body.setAttribute('class', 'cold')
    }
    if(temp <= 25){
        body.setAttribute('class', 'hot')
    }

  } else {
    content.classList.add("hide");
  }
}

inputSearch.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    let capitalSearch = inputSearch.value.trim();
    changeWeatherUI(capitalSearch);
  }
});

changeWeatherUI('ha noi')
