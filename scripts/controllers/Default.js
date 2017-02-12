(function () {
  angular.module('cvcApp.controllers')

    .controller('DefaultCtrl', [
      '$scope', 'Commercials', 'Places',
      function ($scope, Commercials, Places) {
        var vm = this;

        vm.itemsPerPage = 1;
        vm.currentPage = 1;
        vm.numberOfPages = function () {
          return Math.ceil10(vm.commercials.length / vm.itemsPerPage, 1)
        }

        vm.defaults = {
          commercials: []
        };

        vm.commercials = [];
        vm.places = [];
        vm.withdrawal = "";
        vm.showWithdrawal = true;

        vm.return = "";

        vm.orderBy = [
          { id: 1, value: "Menor Preço", sign: "" },
          { id: 2, value: "Maior Preço", sign: "-" }
        ];

        vm.moedas = [
          { id: 1, value: "Real" },
          { id: 2, value: "Dolar" }
        ];

        vm.select = {
          order: vm.orderBy[0],
          moeda: vm.moedas[0]
        };

        vm.qtyItems = vm.commercials.length;



        Commercials.get()
          .then(function success(response) {
            vm.commercials = response.data.results;

            vm.defaults.commercials = vm.commercials;
          }, function fail(response) {
            console.log("Commercials deu ruim, em!!");
          });

        Places.get()
          .then(function success(response) {
            vm.places = response.data.results;
          }, function fail(response) {
            console.log("Places deu ruim, em!!");
          });

        vm.setWithdrawal = function (obj) {
          vm.withdrawal = angular.copy(obj.withdrawal);          
          $('#select-local-retirada').hide();
        }

        vm.changeWithdrawal = function () {
          $('#select-local-retirada').show();
        }

        vm.setReturn = function (obj) {
          vm.return = angular.copy(obj.return);
          $('#select-local-devolucao').hide();
        }

        vm.changeReturn = function() {
          $('#select-local-devolucao').show();
        }

        vm.btnSearch = function () {
          if (!vm.withdrawal && !vm.return) vm.commercials = vm.defaults.commercials;

          vm.commercials = angular.copy(vm.defaults.commercials.filter(function (a) {
            if (vm.withdrawal && vm.return) return a.places.withdrawal.indexOf(vm.withdrawal) >= 0 && a.places.return.indexOf(vm.return) >= 0;
            else if (vm.withdrawal || vm.return) return a.places.withdrawal.indexOf(vm.withdrawal) >= 0 || a.places.return.indexOf(vm.return) >= 0;

            return true;
          }));
        }
      }
    ])
})();