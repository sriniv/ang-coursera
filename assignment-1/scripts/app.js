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

    if ( lunchMenu[0] == '' ) {
      alert("Please enter data first");
    } else if ( lunchMenu.length <= 3 ) {
      $scope.style = 'border-color:green';
      alert('Enjoy!');
    } else {
      $scope.style = 'border-color:red';
      alert('Too much!');
    }
  };

};

})();
