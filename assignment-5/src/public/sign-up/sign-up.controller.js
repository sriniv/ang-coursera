(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);
//

SignUpController.$inject = ['SignUpService', 'DataService'];
function SignUpController(SignUpService, DataService) {

  var signUpCtrl = this;

  signUpCtrl.submit = function () {

    DataService.deleteSavedInfo();

    var promise = SignUpService.getMenuItem(signUpCtrl.user.menuItem);

    promise.then( function (response) {
      signUpCtrl.user.response = response.data;
      signUpCtrl.error = false ;
      signUpCtrl.completed = true;
      DataService.storePreference(signUpCtrl.user);
      signUpCtrl.message = 'Your information has been saved.';
    })
    .catch(function (error) {
      signUpCtrl.completed = true;
      signUpCtrl.message = 'No such menu number exists.';
      signUpCtrl.error = true ;
      console.log('Something went wrong ')
    });
  };

}

})();
