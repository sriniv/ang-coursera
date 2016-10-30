(function () {
"use strict";

angular.module('public')
.service('DataService', DataService);

DataService.$inject = ['$localStorage'];
function DataService($localStorage) {
    var service = this;

    service.storePreference = function (signUpData) {
      // $localStorage.preference = signUpData;
      service.preference = signUpData;
      // console.log('Storing', $localStorage.preference);
    };

    service.getSavedInfo = function () {
      // console.log('Fetching', $localStorage.preference);
      // return $localStorage.preference;
      return service.preference;
    };

    service.deleteSavedInfo = function () {
      service.preference = '';
      // delete $localStorage.preference;
      // console.log('Deleting', $localStorage.preference);
    };

};

})();
