(function(){
  angular.module('cvcApp.controllers')

  .controller('DefaultCtrl', [
    '$scope', 'Commercials',
    function($scope, Commercials) {
      var vm = this;

      vm.itemsPerPage = 1;
      vm.currentPage = 1;
      vm.numberOfPages = function() {
        return Math.ceil10(vm.commercials.length / vm.itemsPerPage, 1)
      }

      vm.orderBy = [
        { id: 1, value: "Menor Preço", sign: "" },
        { id: 2, value: "Maior Preço", sign: "-" }
      ];

      vm.moedas = [
        { id: 1, value: "Real"},
        { id: 2, value: "Dolar"}
      ];

      vm.select = {
        order: vm.orderBy[0],
        moeda: vm.moedas[0]
      };

      vm.commercials = Commercials.get();

      vm.qtyItems = vm.commercials.length;
    }
  ])
})();