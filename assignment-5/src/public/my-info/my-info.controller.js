(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController)
.constant('ImageUrl', 'https://sriniv.herokuapp.com/images');

MyInfoController.$inject = ['DataService', 'ImageUrl'];

function MyInfoController(DataService, ImageUrl) {
  var myInfoCtrl = this;
  myInfoCtrl.signUpData = DataService.getSavedInfo();

  myInfoCtrl.getImageUrl = function () {
    return ImageUrl;
  }
}

})();
