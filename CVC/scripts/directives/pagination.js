(function(){
  'use strict'

  angular.module('cvcApp.directives')

  .directive('pagination', function(){
    return {
      restrict: 'E',
      templateUrl: '/markups/pagination.html'
    }
  })
})();