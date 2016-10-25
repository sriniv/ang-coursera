(function () {
'use strict';

angular.module('data')
.controller('MenuDataController', MenuDataController);

MenuDataController.$inject = ['MenuDataService', 'items'];

function MenuDataController(MenuDataService, items) {
  var catList = this;
  catList.items = items.data;
}

})();
