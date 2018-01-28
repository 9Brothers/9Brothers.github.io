(() => {
  'use strict';

  angular.module('KiaApp', [
    'ngRoute',
    'ngTouch',
    'KiaApp.Controllers',
    'KiaApp.Directives',    
  ]);

  angular.module('KiaApp.Controllers', []);
  angular.module('KiaApp.Directives', []);  
})();