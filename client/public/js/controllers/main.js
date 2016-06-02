angular
  .module('mainController', [])
  .controller('MainController', ['$scope', '$http',
    function( $scope, $http ) {

      $scope.updateAccount = function(long,lat,weight,brand){
        console.log(long,lat, weight,brand);
      }

      $scope.clearAccountForm = function(){
        $scope.longitude = "";
        $scope.latitude = "";
        $scope.weight = "";
        $scope.kiteBrand = "";
      }

      $scope.renderForecast = function(){
        getForecast($scope.longitude,$scope.latitude)
        // ($scope.dayTwoForecast = weatherData[1])
        // $scope.dayOneForecast = "word";
        // $scope.dayTwoForecast = weatherData[1];
        // $scope.dayThreeForecast = weatherData[2];
        // $scope.dayFourForecast = weatherData[3];
        // $scope.dayFiveForecast = weatherData[4];
        // console.log($scope.dayTwoForecast)
      }

      setForecastValues = function(weatherData){
        var fiveDayForecast = [weatherData[0],weatherData[1],weatherData[2],weatherData[3],weatherData[4]];
        $scope.goodForecasts = []
        for (var i = 0; i < fiveDayForecast.length; i++) {
          if(checkWindConditions(fiveDayForecast[i])){
            $scope.goodForecasts.push(fiveDayForecast[i])
          }
        }
        console.log($scope.goodForecasts);
        $scope.dailyForecasts = [weatherData[0],weatherData[1],weatherData[2],weatherData[3],weatherData[4]];
        $scope.forecast = chooseKite($scope.weight, 15);
        // makeKiteArr($scope.weight, $scope.dailyForecasts)
        $scope.$apply();
      }

      $scope.chooseKite = function(weightLb, windMph){
        var windKnots = windMph * 0.868976;
        if(!checkWindConditions(windMph)){
          return "Can't kite today";
        }
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

      $scope.formatTime = function(inputTime){
        militaryTime = parseInt(inputTime)
        if (militaryTime < 1200){
          
        }
      }
}])
