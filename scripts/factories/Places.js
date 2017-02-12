(function() {
'use strict';

  angular
    .module('cvcApp.factories')
    .factory('Places', Places);

  Places.inject = ['$http'];
  function Places($http) {
    var service = {
      get:get
    };
    
    return service;

    ////////////////
    function get() { 
      return $http.get('/json/places.json');
    }
  }
})();