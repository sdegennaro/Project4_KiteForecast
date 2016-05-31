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
        $scope.forecast = chooseKite($scope.weight, 15);
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
        $scope.dayOneForecast = weatherData[0];
        console.log($scope.dayOneForecast);
        $scope.dayTwoForecast = weatherData[1];
        $scope.dayThreeForecast = weatherData[2];
        $scope.dayFourForecast = weatherData[3];
        $scope.dayFiveForecast = weatherData[4];
        $scope.$apply();
      }
}])
