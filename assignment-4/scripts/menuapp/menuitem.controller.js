(function () {
'use strict';

angular.module('data')
.controller('MenuDetailController', MenuDetailController);

MenuDetailController.$inject = ['MenuDataService', 'items'];

function MenuDetailController(MenuDataService, items) {
  var itemsList = this;
  itemsList.items = items.data.menu_items;
}

})();
