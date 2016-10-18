(function () {
'use strict';

// angular.module('NarrowItDownApp', [])
// .controller('MenuCategoriesController', MenuCategoriesController)
// .service('MenuCategoriesService', MenuCategoriesService)
// .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

// MenuCategoriesController.$inject = ['MenuCategoriesService'];
NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService) {

    var menu = this;
    menu.search = "";

    menu.getMatchingMenuItems = function (searchTerm) {

      menu.found = [];

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
    };

    var promise = MenuSearchService.getMenuItems();
    //
    promise.then(function (response) {
      menu.items = response.data;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });

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

// function MenuCategoriesController(MenuCategoriesService) {
//   var menu = this;
//
//   var promise = MenuCategoriesService.getMenuCategories();
//
//   promise.then(function (response) {
//     menu.categories = response.data;
//   })
//   .catch(function (error) {
//     console.log("Something went terribly wrong.");
//   });
//
//   menu.logMenuItems = function (shortName) {
//     var promise = MenuCategoriesService.getMenuForCategory(shortName);
//
//     promise.then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//   };
//
// }

//
// MenuCategoriesService.$inject = ['$http', 'ApiBasePath']
// function MenuCategoriesService($http, ApiBasePath) {
//   var service = this;
//
//   service.getMenuCategories = function () {
//     var response = $http({
//       method: "GET",
//       url: (ApiBasePath + "/categories.json")
//     });
//
//     return response;
//   };
//
//
//   service.getMenuForCategory = function (shortName) {
//     var response = $http({
//       method: "GET",
//       url: (ApiBasePath + "/menu_items.json"),
//       params: {
//         category: shortName
//       }
//     });
//
//     return response;
//   };
//
// }

})();
