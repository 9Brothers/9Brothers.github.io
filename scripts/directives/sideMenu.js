(function(){
  'use strict'

  angular.module('cvcApp.directives')

  .directive('sideMenu', function() {
    return {
      restric: 'E',
      templateUrl: '/markups/side-menu.html'
    }
  })
})();