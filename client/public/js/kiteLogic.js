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
checkConditions = function(windMPH){
  var windKnots = windMPH*0.868976;
  if (windKnots < 10){
    console.log("sorry, bro, not enough wind");
  }
}

var weatherCodes =
{
  "codes": {
    "condition": [
      {
        "code": "395",
        "description": "Moderate or heavy snow in area with thunder",
        "day_icon": "wsymbol_0012_heavy_snow_showers",
        "night_icon": "wsymbol_0028_heavy_snow_showers_night"
      },
      {
        "code": "392",
        "description": "Patchy light snow in area with thunder",
        "day_icon": "wsymbol_0016_thundery_showers",
        "night_icon": "wsymbol_0032_thundery_showers_night"
      },
      {
        "code": "389",
        "description": "Moderate or heavy rain in area with thunder",
        "day_icon": "wsymbol_0024_thunderstorms",
        "night_icon": "wsymbol_0040_thunderstorms_night"
      },
      {
        "code": "386",
        "description": "Patchy light rain in area with thunder",
        "day_icon": "wsymbol_0016_thundery_showers",
        "night_icon": "wsymbol_0032_thundery_showers_night"
      },
      {
        "code": "377",
        "description": "Moderate or heavy showers of ice pellets",
        "day_icon": "wsymbol_0021_cloudy_with_sleet",
        "night_icon": "wsymbol_0037_cloudy_with_sleet_night"
      },
      {
        "code": "374",
        "description": "Light showers of ice pellets",
        "day_icon": "wsymbol_0013_sleet_showers",
        "night_icon": "wsymbol_0029_sleet_showers_night"
      },
      {
        "code": "371",
        "description": "Moderate or heavy snow showers",
        "day_icon": "wsymbol_0012_heavy_snow_showers",
        "night_icon": "wsymbol_0028_heavy_snow_showers_night"
      },
      {
        "code": "368",
        "description": "Light snow showers",
        "day_icon": "wsymbol_0011_light_snow_showers",
        "night_icon": "wsymbol_0027_light_snow_showers_night"
      },
      {
        "code": "365",
        "description": "Moderate or heavy sleet showers",
        "day_icon": "wsymbol_0013_sleet_showers",
        "night_icon": "wsymbol_0029_sleet_showers_night"
      },
      {
        "code": "362",
        "description": "Light sleet showers",
        "day_icon": "wsymbol_0013_sleet_showers",
        "night_icon": "wsymbol_0029_sleet_showers_night"
      },
      {
        "code": "359",
        "description": "Torrential rain shower",
        "day_icon": "wsymbol_0018_cloudy_with_heavy_rain",
        "night_icon": "wsymbol_0034_cloudy_with_heavy_rain_night"
      },
      {
        "code": "356",
        "description": "Moderate or heavy rain shower",
        "day_icon": "wsymbol_0010_heavy_rain_showers",
        "night_icon": "wsymbol_0026_heavy_rain_showers_night"
      },
      {
        "code": "353",
        "description": "Light rain shower",
        "day_icon": "wsymbol_0009_light_rain_showers",
        "night_icon": "wsymbol_0025_light_rain_showers_night"
      },
      {
        "code": "350",
        "description": "Ice pellets",
        "day_icon": "wsymbol_0021_cloudy_with_sleet",
        "night_icon": "wsymbol_0037_cloudy_with_sleet_night"
      },
      {
        "code": "338",
        "description": "Heavy snow",
        "day_icon": "wsymbol_0020_cloudy_with_heavy_snow",
        "night_icon": "wsymbol_0036_cloudy_with_heavy_snow_night"
      },
      {
        "code": "335",
        "description": "Patchy heavy snow",
        "day_icon": "wsymbol_0012_heavy_snow_showers",
        "night_icon": "wsymbol_0028_heavy_snow_showers_night"
      },
      {
        "code": "332",
        "description": "Moderate snow",
        "day_icon": "wsymbol_0020_cloudy_with_heavy_snow",
        "night_icon": "wsymbol_0036_cloudy_with_heavy_snow_night"
      },
      {
        "code": "329",
        "description": "Patchy moderate snow",
        "day_icon": "wsymbol_0020_cloudy_with_heavy_snow",
        "night_icon": "wsymbol_0036_cloudy_with_heavy_snow_night"
      },
      {
        "code": "326",
        "description": "Light snow",
        "day_icon": "wsymbol_0011_light_snow_showers",
        "night_icon": "wsymbol_0027_light_snow_showers_night"
      },
      {
        "code": "323",
        "description": "Patchy light snow",
        "day_icon": "wsymbol_0011_light_snow_showers",
        "night_icon": "wsymbol_0027_light_snow_showers_night"
      },
      {
        "code": "320",
        "description": "Moderate or heavy sleet",
        "day_icon": "wsymbol_0019_cloudy_with_light_snow",
        "night_icon": "wsymbol_0035_cloudy_with_light_snow_night"
      },
      {
        "code": "317",
        "description": "Light sleet",
        "day_icon": "wsymbol_0021_cloudy_with_sleet",
        "night_icon": "wsymbol_0037_cloudy_with_sleet_night"
      },
      {
        "code": "314",
        "description": "Moderate or Heavy freezing rain",
        "day_icon": "wsymbol_0021_cloudy_with_sleet",
        "night_icon": "wsymbol_0037_cloudy_with_sleet_night"
      },
      {
        "code": "311",
        "description": "Light freezing rain",
        "day_icon": "wsymbol_0021_cloudy_with_sleet",
        "night_icon": "wsymbol_0037_cloudy_with_sleet_night"
      },
      {
        "code": "308",
        "description": "Heavy rain",
        "day_icon": "wsymbol_0018_cloudy_with_heavy_rain",
        "night_icon": "wsymbol_0034_cloudy_with_heavy_rain_night"
      },
      {
        "code": "305",
        "description": "Heavy rain at times",
        "day_icon": "wsymbol_0010_heavy_rain_showers",
        "night_icon": "wsymbol_0026_heavy_rain_showers_night"
      },
      {
        "code": "302",
        "description": "Moderate rain",
        "day_icon": "wsymbol_0018_cloudy_with_heavy_rain",
        "night_icon": "wsymbol_0034_cloudy_with_heavy_rain_night"
      },
      {
        "code": "299",
        "description": "Moderate rain at times",
        "day_icon": "wsymbol_0010_heavy_rain_showers",
        "night_icon": "wsymbol_0026_heavy_rain_showers_night"
      },
      {
        "code": "296",
        "description": "Light rain",
        "day_icon": "wsymbol_0018_cloudy_with_heavy_rain",
        "night_icon": "wsymbol_0034_cloudy_with_heavy_rain_night"
      },
      {
        "code": "293",
        "description": "Patchy light rain",
        "day_icon": "wsymbol_0017_cloudy_with_light_rain",
        "night_icon": "wsymbol_0033_cloudy_with_light_rain_night"
      },
      {
        "code": "284",
        "description": "Heavy freezing drizzle",
        "day_icon": "wsymbol_0021_cloudy_with_sleet",
        "night_icon": "wsymbol_0037_cloudy_with_sleet_night"
      },
      {
        "code": "281",
        "description": "Freezing drizzle",
        "day_icon": "wsymbol_0021_cloudy_with_sleet",
        "night_icon": "wsymbol_0037_cloudy_with_sleet_night"
      },
      {
        "code": "266",
        "description": "Light drizzle",
        "day_icon": "wsymbol_0017_cloudy_with_light_rain",
        "night_icon": "wsymbol_0033_cloudy_with_light_rain_night"
      },
      {
        "code": "263",
        "description": "Patchy light drizzle",
        "day_icon": "wsymbol_0009_light_rain_showers",
        "night_icon": "wsymbol_0025_light_rain_showers_night"
      },
      {
        "code": "260",
        "description": "Freezing fog",
        "day_icon": "wsymbol_0007_fog",
        "night_icon": "wsymbol_0007_fog"
      },
      {
        "code": "248",
        "description": "Fog",
        "day_icon": "wsymbol_0007_fog",
        "night_icon": "wsymbol_0007_fog"
      },
      {
        "code": "230",
        "description": "Blizzard",
        "day_icon": "wsymbol_0020_cloudy_with_heavy_snow",
        "night_icon": "wsymbol_0036_cloudy_with_heavy_snow_night"
      },
      {
        "code": "227",
        "description": "Blowing snow",
        "day_icon": "wsymbol_0019_cloudy_with_light_snow",
        "night_icon": "wsymbol_0035_cloudy_with_light_snow_night"
      },
      {
        "code": "200",
        "description": "Thundery outbreaks in nearby",
        "day_icon": "wsymbol_0016_thundery_showers",
        "night_icon": "wsymbol_0032_thundery_showers_night"
      },
      {
        "code": "185",
        "description": "Patchy freezing drizzle nearby",
        "day_icon": "wsymbol_0021_cloudy_with_sleet",
        "night_icon": "wsymbol_0037_cloudy_with_sleet_night"
      },
      {
        "code": "182",
        "description": "Patchy sleet nearby",
        "day_icon": "wsymbol_0021_cloudy_with_sleet",
        "night_icon": "wsymbol_0037_cloudy_with_sleet_night"
      },
      {
        "code": "179",
        "description": "Patchy snow nearby",
        "day_icon": "wsymbol_0013_sleet_showers",
        "night_icon": "wsymbol_0029_sleet_showers_night"
      },
      {
        "code": "176",
        "description": "Patchy rain nearby",
        "day_icon": "wsymbol_0009_light_rain_showers",
        "night_icon": "wsymbol_0025_light_rain_showers_night"
      },
      {
        "code": "143",
        "description": "Mist",
        "day_icon": "wsymbol_0006_mist",
        "night_icon": "wsymbol_0006_mist"
      },
      {
        "code": "122",
        "description": "Overcast",
        "day_icon": "wsymbol_0004_black_low_cloud",
        "night_icon": "wsymbol_0004_black_low_cloud"
      },
      {
        "code": "119",
        "description": "Cloudy",
        "day_icon": "wsymbol_0003_white_cloud",
        "night_icon": "wsymbol_0004_black_low_cloud"
      },
      {
        "code": "116",
        "description": "Partly Cloudy",
        "day_icon": "wsymbol_0002_sunny_intervals",
        "night_icon": "wsymbol_0008_clear_sky_night"
      },
      {
        "code": "113",
        "description": "Clear/Sunny",
        "day_icon": "wsymbol_0001_sunny",
        "night_icon": "wsymbol_0008_clear_sky_night"
      }
    ]
  }
};

sortConditions = function(){
  var codeArr = weatherCodes.codes.condition
  var okCodes = []
  var notOkCodes = []
  for (var i = 0; i < codeArr.length; i++) {
    var descr = codeArr[i].description.toLowerCase();
    if(descr.search("rain")>=0 || descr.search("snow")>=0 || descr.search("ice")>=0) || descr.search("sleet")>=0){
      notOkCodes.push(codeArr[i]);
    } else{
      okCodes.push(codeArr[i]);
    }
  };
  // console.log("ok weather: " okCodes);
  // console.log("Not Ok Weather: " notOkCodes);
  console.log(okCodes);
  console.log("???????????????????????");
  console.log(notOkCodes);


}
