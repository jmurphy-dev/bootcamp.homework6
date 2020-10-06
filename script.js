let forcast = $.ajax({
  url: `https://api.openweathermap.org/data/2.5/forecast?q=bujumbura&cnt=5&units=imperial&appid=07163d7898c795d26765947e0a7370f8`,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
let fiveDay = $.ajax({
  url: `https://api.openweathermap.org/data/2.5/weather?q=bujumbura&cnt=5&units=imperial&appid=07163d7898c795d26765947e0a7370f8`,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
// Search bar

// List of places

// Date
// Temp
// Humidity
// Wind speed
// UV index

// 5 Day forcast
