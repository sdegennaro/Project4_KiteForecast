$(function() {
  console.log('weather loaded...');
});

// http://api.worldweatheronline.com/premium/v1/marine.ashx
var apiData = {}
var weatherData = {}
function getForecast(long, lat){
  $.ajax({
    dataType: "json",
    url: "/weatherapi?long="+ long+"&lat="+lat,
    type: "GET",
    success: function(data){
      apiData = JSON.parse(data).data;
      weatherData = apiData.weather;
      console.log(weatherData);
    }
  }).done(function(){
    console.log('yo');
    setForecastValues(weatherData)})
}
