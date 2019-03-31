class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.pressure = document.getElementById("w-pressure");
    this.windDirection = document.getElementById("w-windDirection");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = `${weather.main.temp} C`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure : ${weather.main.pressure} hPa`;
    this.windDirection.textContent = `Wind direction: ${weather.wind.deg} deg`;
    this.wind.textContent = `Wind: ${weather.wind.speed} meter/sec`;
  }
}
