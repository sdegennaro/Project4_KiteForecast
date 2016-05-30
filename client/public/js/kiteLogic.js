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

}
