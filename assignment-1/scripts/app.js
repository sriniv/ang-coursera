(function () {
'use-strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope,
                              $filter,
                              $injector) {
  $scope.lunchMenu = '';

  $scope.checkLunchMenu = function() {
    var lunchMenu = $scope.lunchMenu.split(',');
    $scope.message = '';

    if ( lunchMenu[0] == '' ) {
      $scope.message = 'Please enter data first';
    } else if ( lunchMenu.length <= 3 ) {
      $scope.style = {
          "border-color" : "green"
      };
      $scope.message = 'Enjoy!';
    } else {
      $scope.style = {
          "border-color" : "red"
      };
      $scope.message = 'Too much!';
    }

  };

};

})();
