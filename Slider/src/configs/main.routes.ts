(() => {
  angular.module('KiaApp')
    .config([
      '$routeProvider',
      ($routeProvider: any) => {
        $routeProvider
          .when('/', {
            templateUrl: './build/home.html',
            controller: 'Home',
            controllerAs: "vm"       
          });
      }
    ]);
})();