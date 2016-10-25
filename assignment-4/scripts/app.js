(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundList.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'foundList',
    bindToController: true
  };

  return ddo;
};

function FoundItemsDirectiveController() {
  var list = this;

  list.emptySearchTerm = function() {
    if ( list.items != undefined)
      return list.items.length == 0;
  }
}

NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService) {

    var menu = this;
    menu.search = "";

    menu.getMatchingMenuItems = function (searchTerm) {

      menu.found = [];

      if ( searchTerm !== undefined)
      {
        for(var i=0; i < menu.items.menu_items.length; i++){
          if (menu.items.menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
            var item =
            {
                "short_name" : menu.items.menu_items[i].short_name,
                "name" : menu.items.menu_items[i].name,
                "description" : menu.items.menu_items[i].description
            };
            menu.found.push(item);
          }
        }
      }
    };

    var promise = MenuSearchService.getMenuItems();
    //
    promise.then(function (response) {
      menu.items = response.data;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });

    menu.removeItem = function (itemIndex) {
      this.found.splice(itemIndex, 1);
    };

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMenuItems = function () {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      });

      return response;
    };
}
})();
