(() => {
  'use strict';
  
  let Home: any = ($scope: any) => {
    let vm: any = eval('this');

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

  }

  Home.$inject = ["$scope"];

  angular.module('KiaApp.Controllers')
    .controller('Home', Home);
})();