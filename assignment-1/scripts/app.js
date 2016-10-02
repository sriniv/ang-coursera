(function () {
'use-strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

function LunchCheckController($scope, $filter, $injector) {
  $scope.lunchMenu = '';

  $scope.checkLunchMenu = function() {
    var lunchMenuLength = $scope.lunchMenu.split(',');

    if ( lunchMenuLength.length > 3 ) {
      $scope.style = 'border-color:red';
      alert('Too much!');
    }
    else {
      $scope.style = 'border-color:green';
      alert('Enjoy!');
    }
  };

};

})();
