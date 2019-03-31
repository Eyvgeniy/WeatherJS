// Init stirage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init ui
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  // Change location
  weather.changeLocation(city, country);

  // Set location in LS
  storage.setLocationData(city, country);

  // Get and display new weather
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
});

// weather.changeLocation("Kaliningrad", "ru");

function getWeather() {
  weather
    .getWeather()
    .then(result => {
      ui.paint(result);
    })
    .catch(err => console.log(err));
}
