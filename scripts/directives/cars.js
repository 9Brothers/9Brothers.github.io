(function() {
  'use strict'

  angular.module('cvcApp.directives')

  .directive('cars', function() {
    return {
      restrict: 'E',
      templateUrl: '/markups/cars.html'
    }
  })
})();