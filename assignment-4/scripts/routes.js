(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'scripts/menuapp/templates/home.template.html'
  })

  // category page
  .state('categories', {
    url: '/categories',
    templateUrl: 'scripts/menuapp/templates/category-list.template.html',
    controller: 'MenuDataController as catList',
    resolve:  {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categories.itemDetail', {
    url: '/item-detail/{categoryShortName}',
    templateUrl: 'scripts/menuapp/templates/item-detail.template.html',
    controller: "MenuDetailController as itemsList",
    resolve:  {
      items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });

}

})();
