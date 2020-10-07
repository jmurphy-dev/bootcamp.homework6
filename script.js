let forcast = $.ajax({
  url: `https://api.openweathermap.org/data/2.5/forecast?q=bujumbura&cnt=5&units=imperial&appid=OW_KEY`,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
let fiveDay = $.ajax({
  url: `https://api.openweathermap.org/data/2.5/weather?q=bujumbura&cnt=5&units=imperial&appid=OW_KEY`,
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
