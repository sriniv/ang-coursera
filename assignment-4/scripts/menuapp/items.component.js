(function () {
'use strict';

angular.module('data')
.component('itemsList', {
  templateUrl: 'scripts/menuapp/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
