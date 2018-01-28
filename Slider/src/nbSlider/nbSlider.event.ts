(()=>{
  'use strict';

  angular.element(document).ready(() => {
    setTimeout(function() {
      let countPixels: number = 0;
      let actualDirection: number = 0;
      let lastDirection: number = 0;
      let hoverOut = (e: JQueryEventObject) => {          
        $(e.currentTarget).attr('sliding', 'false');
        
        let childWidth: number = $(e.currentTarget).children().first().width();
        if(+childWidth.toFixed(0) > childWidth) {
          childWidth = +childWidth.toFixed(0) - 1;
        }

        if(countPixels <= (childWidth / 10)) { 
          cancelTravel(e);
        } else 

        // verifica para qual lado o slide está indo
        if(checkDirection(e) == 'direita') {
          completePrevSlide(e);
        } else {
          completeNextSlide(e);
        }

        // reseta o contador de pixels
        countPixels = 0;
        console.log('up');
      }

      let cancelTravel = (e: JQueryEventObject) => {
        let sliderContainer: JQuery = $('.slider-container');
        
        let pixelsTraveled = +sliderContainer.css('transform').split(',')[4];

        if(pixelsTraveled < 0) {
          let positionReset: number = ($(e.target).parent().attr('index') ? +$(e.target).parent().attr('index') : +$(e.target).parent().parent().attr('index')) * sliderContainer.children().first().width(); 

          sliderContainer.css('transform', `translateX(${-positionReset}px)`);
        } else {
          sliderContainer.css('transform', `translateX(0px)`);
        }
      }

      let completeNextSlide = (e: JQueryEventObject) => {
        let sliderContainer: JQuery = $('.slider-container');
        let childIndex: number = ($(e.target).parent().attr('index') ? +$(e.target).parent().attr('index') : +$(e.target).parent().parent().attr('index')) + 2;

        let childWidth: number = sliderContainer.children().first().width();

        let pixelsTraveled = +sliderContainer.css('transform').split(',')[4];
        let formule: number = (pixelsTraveled + (childWidth * (childIndex) - (childWidth + pixelsTraveled))) * (-1);

        sliderContainer.css('transform', `translateX(${formule > 0 ? formule * (-1) : formule }px)`);
      }

      let completePrevSlide = (e: JQueryEventObject) => {
        let sliderContainer: JQuery = $('.slider-container');
        let childIndex: number = ($(e.target).parent().attr('index') ? +$(e.target).parent().attr('index') : +$(e.target).parent().parent().attr('index'));

        let childWidth: number = sliderContainer.children().first().width();

        let pixelsTraveled = +sliderContainer.css('transform').split(',')[4];
        let formule: number = (pixelsTraveled + (childWidth * (childIndex) - (childWidth + pixelsTraveled))) * (-1);

        sliderContainer.css('transform', `translateX(${formule > 0 ? 0 : formule }px)`);
      }

      let checkDirection = (e: JQueryEventObject) => {        
        let result: string = 'esquerda';
        if(actualDirection > lastDirection) {
          result = 'direita'
        } 

        return result;
      }

      $('.slider-container')
        .on('mousedown', (e: JQueryEventObject) => {
          e.preventDefault();
          
          countPixels = 0;

          $(e.currentTarget).attr('sliding', 'true');

          console.log('down');
        })
        .on('mousemove', (e: JQueryEventObject) => {
          console.log('move');

          // descobrir qual direção o cursor está se movendo
          lastDirection = actualDirection;
          actualDirection = e.screenX;

          let direction = checkDirection(e);
          
          if(lastDirection != actualDirection) {
            countPixels++;
          }
          
          if($(e.currentTarget).attr('sliding') == "true") {
            let currentTarget: JQuery = $(e.currentTarget);
            let actualOffset: number = 0;

            if(currentTarget.css('transform') !== "none") {
              actualOffset = +currentTarget.css('transform').split(',')[4];
            }

            if(direction == 'direita') {              
              $(e.currentTarget).css("transform", `translateX(-${(actualOffset * (-1)) - (1)}px)`); 
            } else {
              $(e.currentTarget).css("transform", `translateX(-${(actualOffset * (-1)) - (-1)}px)`);
            }
          }

          console.log(e.screenX);
          console.log(countPixels);
        })
        .on('mouseup', hoverOut)        

      $('.slider-container > div').each((index: number, elem: Element) => {
        
        $(elem).attr('index', index);
      });

      let $nbSlider:JQuery = $('div[nb-slider]');
      let nbSliderWidth: number = 0;
      
      resizeChildren();

      $(window).on('resize', () => {
        resizeChildren();
      })

      function resizeChildren() {
        let previousNbSliderWidth = $nbSlider.width();
        nbSliderWidth = $(window).width();

        let $sliderContainer = $nbSlider.find('.slider-container');
        
        let previousTranslateX = parseInt($sliderContainer.css('transform').split(',')[4]);

        $sliderContainer.css('transform', `translateX(${previousTranslateX + (previousNbSliderWidth - nbSliderWidth)}px)`);  

        let qtySlides = $sliderContainer.children().length;

        $sliderContainer.width(nbSliderWidth * qtySlides);

        $nbSlider.find('.slider-container > div').width(nbSliderWidth);
        $nbSlider.width(nbSliderWidth)
      }
  }, 1000);    
  });
})();