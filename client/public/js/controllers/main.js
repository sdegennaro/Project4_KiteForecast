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

      }

}])
