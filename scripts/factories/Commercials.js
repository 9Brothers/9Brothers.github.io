(function () {
  'use strict'

  angular.module('cvcApp.factories')

    .factory('Commercials', [
      function () {
        return {
          get: function () {
            return [
              {
                carPicture: {
                  src: "http://bit.ly/2leZHVc",
                  alt: "Gol G5"
                },
                brandImage: {
                  src: "http://bit.ly/2lf7SRg",
                  alt: "Hertz"
                },
                title: "Carro Econômico com Ar",
                marked: true,
                impostCode: "IFMR",
                availableCars: "Chevrolet Celta, Ford Fiesta, VW Gol, Fiat Palio ou similar",
                details: [
                  "Quilometragem livre",
                  "Seguro total do veículo",
                  "Seguro a terceiros",
                  "Taxas de serviços inclusas"
                ],
                comment: "Super inclusive promocional - Km livre, seguro total do veículo (LDW), seguro a terceiros (SLI), taxas de serviços inclusas e 1 motorista adicional.",
                additionals: [
                  {
                    title: "Adicional 1",
                    icon: "glyphicon glyphicon-asterisk"
                  },
                  {
                    title: "Adicional 2",
                    icon: "glyphicon glyphicon-plus"
                  },
                  {
                    title: "Adicional 3",
                    icon: "glyphicon glyphicon-euro"
                  },
                  {
                    title: "Adicional 4",
                    icon: "glyphicon glyphicon-eur"
                  },
                  {
                    title: "Adicional 5",
                    icon: "glyphicon glyphicon-minus"
                  },
                  {
                    title: "Adicional 6",
                    icon: "glyphicon glyphicon-cloud"
                  },
                  {
                    title: "Adicional 7",
                    icon: "glyphicon glyphicon-envelope"
                  },
                  {
                    title: "Adicional 8",
                    icon: "glyphicon glyphicon-pencil"
                  },
                  {
                    title: "Adicional 9",
                    icon: "glyphicon glyphicon-glass"
                  },
                ],
                discount: {
                  have: true,
                  percent: 20
                },
                rent: {
                  total: 1025.6,
                  plots: 9
                }
              },
              {
                carPicture: {
                  src: "http://bit.ly/2kioWBT",
                  alt: "Sandero"
                },
                brandImage: {
                  src: "http://bit.ly/2kOKCsj",
                  alt: "Budget"
                },
                title: "Carro Econômico com Ar",
                marked: false,
                impostCode: "IFMR",
                availableCars: "Chevrolet Celta, Ford Fiesta, VW Gol, Fiat Palio ou similar",
                details: [
                  "Quilometragem livre",
                  "Seguro total do veículo",
                  "Seguro a terceiros",
                  "Taxas de serviços inclusas"
                ],
                comment: "",
                additionals: [
                  {
                    title: "Adicional 2",
                    icon: "glyphicon glyphicon-plus"
                  },
                  {
                    title: "Adicional 3",
                    icon: "glyphicon glyphicon-euro"
                  },
                  {
                    title: "Adicional 6",
                    icon: "glyphicon glyphicon-cloud"
                  },
                  {
                    title: "Adicional 7",
                    icon: "glyphicon glyphicon-envelope"
                  },
                  {
                    title: "Adicional 9",
                    icon: "glyphicon glyphicon-glass"
                  },
                ],
                discount: {
                  have: false,
                },
                rent: {
                  total: 1005.6,
                  plots: 10
                }
              },
              {
                carPicture: {
                  src: "http://bit.ly/2lgyEsp",
                  alt: "Corolla 2017"
                },
                brandImage: {
                  src: "http://bit.ly/2kOKCsj",
                  alt: "Budget"
                },
                title: "Carro de Luxo Completo",
                marked: true,
                impostCode: "IFMR",
                availableCars: "Corolla 2017",
                details: [
                  "Quilometragem livre",
                  "Seguro total do veículo",
                  "Seguro a terceiros",
                  "Taxas de serviços inclusas"
                ],
                comment: "",
                additionals: [
                  {
                    title: "Adicional 2",
                    icon: "glyphicon glyphicon-plus"
                  },
                  {
                    title: "Adicional 3",
                    icon: "glyphicon glyphicon-euro"
                  },
                  {
                    title: "Adicional 6",
                    icon: "glyphicon glyphicon-cloud"
                  },
                  {
                    title: "Adicional 7",
                    icon: "glyphicon glyphicon-envelope"
                  },
                  {
                    title: "Adicional 9",
                    icon: "glyphicon glyphicon-glass"
                  },
                ],
                discount: {
                  have: false,
                },
                rent: {
                  total: 2005.6,
                  plots: 10
                }
              }
            ];
          }
        }
      }
    ])
})();