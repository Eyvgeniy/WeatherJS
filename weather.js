class Weather {
  constructor(city, country) {
    this.apiKey = "4b3ffae7b007d4b9f69b088f0bae0f56";
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const responce = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&APPID=${this.apiKey}&units=metric`
    );

    const responceData = await responce.json();
    return responceData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
