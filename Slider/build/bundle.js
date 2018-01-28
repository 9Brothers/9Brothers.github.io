(function () {
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
(function () {
    angular.module('KiaApp')
        .config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                templateUrl: './build/home.html',
                controller: 'Home',
                controllerAs: "vm"
            });
        }
    ]);
})();
(function () {
    'use strict';
    var Home = function ($scope) {
        var vm = eval('this');
        vm.pictures = [
            {
                main: { "background-image": "url(http://www.kia.com/us/k4/content/media/mediabin/homepage/hero/CMS/non-vehicles/homepage/Carousel/homepage_niro_hero_banner--carousel-mob.jpg)" },
                second: { "background-image": "url(http://www.kia.com/us/k4/content/media/mediabin/homepage/promo/CMS/non-vehicles/homepage/left-promo-1/homepage_trade-in-value_left-promo1--lpromomob.jpg)" },
                third: { "background-image": "url(http://www.kia.com/us/k4/content/media/mediabin/homepage/promo/CMS/non-vehicles/homepage/left-promo-2/homepage_payment-calculator_left-promo1--lpromomob.jpg)" }
            },
            {
                main: { "background-image": "url(http://www.kia.com/us/k4/content/media/mediabin/homepage/hero/CMS/non-vehicles/homepage/Carousel/homepage_niro_hero_banner--carousel-mob.jpg)" },
                second: { "background-image": "url(http://www.kia.com/us/k4/content/media/mediabin/homepage/promo/CMS/non-vehicles/homepage/left-promo-1/homepage_trade-in-value_left-promo1--lpromomob.jpg)" },
                third: { "background-image": "url(http://www.kia.com/us/k4/content/media/mediabin/homepage/promo/CMS/non-vehicles/homepage/left-promo-2/homepage_payment-calculator_left-promo1--lpromomob.jpg)" }
            },
            {
                main: { "background-image": "url(http://www.kia.com/us/k4/content/media/mediabin/homepage/hero/CMS/non-vehicles/homepage/Carousel/homepage_niro_hero_banner--carousel-mob.jpg)" },
                second: { "background-image": "url(http://www.kia.com/us/k4/content/media/mediabin/homepage/promo/CMS/non-vehicles/homepage/left-promo-1/homepage_trade-in-value_left-promo1--lpromomob.jpg)" },
                third: { "background-image": "url(http://www.kia.com/us/k4/content/media/mediabin/homepage/promo/CMS/non-vehicles/homepage/left-promo-2/homepage_payment-calculator_left-promo1--lpromomob.jpg)" }
            },
        ];
    };
    Home.$inject = ["$scope"];
    angular.module('KiaApp.Controllers')
        .controller('Home', Home);
})();
(function () {
    var NbSlider = function () {
        return {
            restrict: 'A',
            templateUrl: './build/nbSlider.html',
            link: function ($scope, elem, attrs) {
                var vm = $scope.vm;
            }
        };
    };
    angular.module('KiaApp.Directives')
        .directive('nbSlider', NbSlider);
})();
(function () {
    'use strict';
    angular.element(document).ready(function () {
        setTimeout(function () {
            var countPixels = 0;
            var actualDirection = 0;
            var lastDirection = 0;
            var hoverOut = function (e) {
                $(e.currentTarget).attr('sliding', 'false');
                var childWidth = $(e.currentTarget).children().first().width();
                if (+childWidth.toFixed(0) > childWidth) {
                    childWidth = +childWidth.toFixed(0) - 1;
                }
                if (countPixels <= (childWidth / 10)) {
                    cancelTravel(e);
                }
                else 
                // verifica para qual lado o slide está indo
                if (checkDirection(e) == 'direita') {
                    completePrevSlide(e);
                }
                else {
                    completeNextSlide(e);
                }
                // reseta o contador de pixels
                countPixels = 0;
                console.log('up');
            };
            var cancelTravel = function (e) {
                var sliderContainer = $('.slider-container');
                var pixelsTraveled = +sliderContainer.css('transform').split(',')[4];
                if (pixelsTraveled < 0) {
                    var positionReset = ($(e.target).parent().attr('index') ? +$(e.target).parent().attr('index') : +$(e.target).parent().parent().attr('index')) * sliderContainer.children().first().width();
                    sliderContainer.css('transform', "translateX(" + -positionReset + "px)");
                }
                else {
                    sliderContainer.css('transform', "translateX(0px)");
                }
            };
            var completeNextSlide = function (e) {
                var sliderContainer = $('.slider-container');
                var childIndex = ($(e.target).parent().attr('index') ? +$(e.target).parent().attr('index') : +$(e.target).parent().parent().attr('index')) + 2;
                var childWidth = sliderContainer.children().first().width();
                var pixelsTraveled = +sliderContainer.css('transform').split(',')[4];
                var formule = (pixelsTraveled + (childWidth * (childIndex) - (childWidth + pixelsTraveled))) * (-1);
                sliderContainer.css('transform', "translateX(" + (formule > 0 ? formule * (-1) : formule) + "px)");
            };
            var completePrevSlide = function (e) {
                var sliderContainer = $('.slider-container');
                var childIndex = ($(e.target).parent().attr('index') ? +$(e.target).parent().attr('index') : +$(e.target).parent().parent().attr('index'));
                var childWidth = sliderContainer.children().first().width();
                var pixelsTraveled = +sliderContainer.css('transform').split(',')[4];
                var formule = (pixelsTraveled + (childWidth * (childIndex) - (childWidth + pixelsTraveled))) * (-1);
                sliderContainer.css('transform', "translateX(" + (formule > 0 ? 0 : formule) + "px)");
            };
            var checkDirection = function (e) {
                var result = 'esquerda';
                if (actualDirection > lastDirection) {
                    result = 'direita';
                }
                return result;
            };
            $('.slider-container')
                .on('mousedown', function (e) {
                e.preventDefault();
                countPixels = 0;
                $(e.currentTarget).attr('sliding', 'true');
                console.log('down');
            })
                .on('mousemove', function (e) {
                console.log('move');
                // descobrir qual direção o cursor está se movendo
                lastDirection = actualDirection;
                actualDirection = e.screenX;
                var direction = checkDirection(e);
                if (lastDirection != actualDirection) {
                    countPixels++;
                }
                // if(direction == "direita") {
                //   countPixels++;
                // } else {
                //   countPixels--;
                // }
                if ($(e.currentTarget).attr('sliding') == "true") {
                    var currentTarget = $(e.currentTarget);
                    var actualOffset = 0;
                    if (currentTarget.css('transform') !== "none") {
                        actualOffset = +currentTarget.css('transform').split(',')[4];
                    }
                    if (direction == 'direita') {
                        $(e.currentTarget).css("transform", "translateX(-" + ((actualOffset * (-1)) - (1)) + "px)");
                    }
                    else {
                        $(e.currentTarget).css("transform", "translateX(-" + ((actualOffset * (-1)) - (-1)) + "px)");
                    }
                }
                console.log(e.screenX);
                console.log(countPixels);
            })
                .on('mouseup', hoverOut);
            // .on('mouseleave', hoverOut);
            $('.slider-container > div').each(function (index, elem) {
                $(elem).attr('index', index);
            });
            var $nbSlider = $('div[nb-slider]');
            var nbSliderWidth = 0;
            resizeChildren();
            $(window).on('resize', function () {
                resizeChildren();
            });
            function resizeChildren() {
                var previousNbSliderWidth = $nbSlider.width();
                nbSliderWidth = $(window).width();
                var $sliderContainer = $nbSlider.find('.slider-container');
                var previousTranslateX = parseInt($sliderContainer.css('transform').split(',')[4]);
                $sliderContainer.css('transform', "translateX(" + (previousTranslateX + (previousNbSliderWidth - nbSliderWidth)) + "px)");
                var qtySlides = $sliderContainer.children().length;
                $sliderContainer.width(nbSliderWidth * qtySlides);
                $nbSlider.find('.slider-container > div').width(nbSliderWidth);
                $nbSlider.width(nbSliderWidth);
            }
        }, 1000);
    });
})();

//# sourceMappingURL=bundle.js.map
