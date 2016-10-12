(function () {
'use-strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;

  tobuy.items = ShoppingListCheckOffService.getItemsToBuy();

  tobuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items =
    [
      { "name" : "Carton Cookies", "quantity" : "3"},
      { "name" : "Packets Chips", "quantity" : "4" },
      { "name" : "Boxes Chocolates", "quantity" : "5"},
      { "name" : "Dozen Bananas", "quantity" : "6" },
      { "name" : "Bags Apples", "quantity" : "5" },
   ];

  var bought = [];

  service.getItemsToBuy = function () {
    return items;
  };

  service.buyItem = function (itemIndex) {
    bought.push(items[itemIndex]);
    items.splice(itemIndex,1);
  };

  service.getBoughtItems = function () {
    return bought;
  };

}

})();
