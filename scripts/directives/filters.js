(function(){
  'use strict'

  angular.module('cvcApp.directives')

  .directive('filters', function() {
    return {
      restrict: 'E',
      templateUrl: '/markups/filters.html'
    }
  })
})();