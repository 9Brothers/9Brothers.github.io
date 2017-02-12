(function () {
  'use strict'

  angular.module('cvcApp.factories')

    .factory('Commercials', [
      '$http', 
      function ($http) {
        return {
          get: function () {
            return $http.get('/json/commercials.json');
          }
        }
      }
    ])
})();