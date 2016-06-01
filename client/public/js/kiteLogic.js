$(function() {
  console.log('Kite loaded...');

});

chooseKite = function(weightLb, windKnots){
  // values from Surfer Today chart: http://www.surfertoday.com/board-size-chart/kiteboard
  var weightArray = [95,110,125,140,155,170,185,200,215,230,245,260]
  var windArray = [34,28,24,21,19,17,15,14,13,12,11,10]
  var kiteArray = [[3,3,4,4,5,5,5,6,6,7,7,8],[3,4,4,5,5,6,7,7,8,8,9,9],[4,5,5,6,6,7,8,8,9,8,10,11],[4,5,6,7,7,8,9,9,10,11,12,12],
    [5,6,7,7,8,9,10,11,11,12,13,14],[6,6,7,8,9,10,11,12,13,14,14,15],[6,7,8,9,10,11,12,13,14,15,16,17],[7,8,9,10,11,12,13,14,15,16,17,18],
    [7,8,10,11,12,13,14,15,16,18,19,20],[8,9,10,12,13,14,15,16,18,19,20,21],[8,10,11,12,14,15,16,18,19,20,22,23],[9,10,12,13,15,16,17,19,20,22,23,24]]
  var colIndex
  var rowIndex
  for (var i = 0; i < weightArray.length; i++) {
    if(weightLb <= weightArray[i]){
      colIndex = i;
      i=weightArray.length;
    }
  };
  for (var j = 0; j < windArray.length; j++) {
    if(windKnots >= windArray[j]){
      rowIndex = j;
      j=windArray.length;
    }
  };
  console.log(kiteArray[rowIndex][colIndex]);
  return kiteArray[rowIndex][colIndex]
}
// find weather code descriptions at http://www.worldweatheronline.com/feed/wwoConditionCodes.xml
checkWindConditions = function(windMPH,windGusts){
  var windKnots = windMPH*0.868976;
  var gustKnots = windGusts*0.868976;
  if (windKnots < 10){
    console.log("sorry, bro, not enough wind");
    return false;
  }
  if (windKnots > 34){
    console.log("whooaaa, way too much wind man");
    return false;
  } else{
    return true;
    console.log("thank the wind gods, wind's up!");
  }

}

checkWeatherConditions = function(weatherCode){
  if(weatherCode == 113){
    console.log("sunny and clear, have a great day on the water");
  } else if (weatherCode == 119 || weatherCode == 116 || weatherCode == 122 || weatherCode == 248) {
    console.log("cloudy skies but you can give it a try");
  } else if (weatherCode == 293 || weatherCode == 263 || weatherCode == 143) {
    console.log("chance of some rain");
  } else{
    console.log("sorry man, sky's falling. no surf today");
  };
};

makeKiteArr = function(weightLb, arrOfForecasts){
  var kiteRecArr = []
  for (var i = 0; i < arrOfForecasts.length; i++) {
    console.log(arrOfForecasts[i].windspeedMiles);
    console.log(weightLb);
    chooseKite(weightLb, arrOfForecasts[i].windspeedMiles)
  }
  console.log(kiteRecArr);
}
