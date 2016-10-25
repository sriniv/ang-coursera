(function () {
'use strict';

angular.module('data')
.component('categoryList', {
  templateUrl: 'scripts/menuapp/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
