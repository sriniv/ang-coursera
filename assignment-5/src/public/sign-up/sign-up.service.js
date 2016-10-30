(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService)
.constant('APIUrl', 'https://sriniv.herokuapp.com/menu_items');

SignUpService.$inject = ['$http','APIUrl'];
function SignUpService($http, APIUrl) {
  var service = this;

  service.getMenuItem = function (menuItem) {

    var response = $http({
      method: "GET",
      url: (APIUrl + "/" + menuItem + ".json")
    });
    return response;
  };

};

})();
