(() => {
  let NbSlider = () => {
    return {
      restrict: 'A',
      templateUrl: './build/nbSlider.html',
      link: ($scope: any, elem: any, attrs: any) => {
        let vm = $scope.vm;
      }
    };
  }
  
  angular.module('KiaApp.Directives')
    .directive('nbSlider', NbSlider);
})();