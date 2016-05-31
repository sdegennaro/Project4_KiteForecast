$(function() {
  console.log('weather loaded...');
});

// http://api.worldweatheronline.com/premium/v1/marine.ashx

function getForecast(long, lat){
  $.ajax({
    url: "/weatherapi?long="+ long+"&lat="+lat,
    type: "GET",
    success: function(data){
      console.log(data);
    }
  })
}
