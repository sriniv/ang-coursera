(function () {
'use strict';

// angular.module('NarrowItDownApp', [])
// .controller('MenuCategoriesController', MenuCategoriesController)
// .service('MenuCategoriesService', MenuCategoriesService)
// .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

// MenuCategoriesController.$inject = ['MenuCategoriesService'];
NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService) {
    var menu = this;

    var promise = MenuSearchService.getMenuItems();
    //
    promise.then(function (response) {
      menu.items = response.data;
      console.log(menu.items);
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
