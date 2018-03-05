$(function () {
  /*
      https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
      ===========================*/
  $("html").easeScroll({
    frameRate: 60,
    animationTime: 1000,
    stepSize: 90,
    pulseAlgorithm: 1,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: true,
    arrowScroll: 50,
    touchpadSupport: true,
    fixedBackground: true
  });


  /* slider
  ====================================================*/
  $('#js-slider').slick({
      fade: true,
      autoplay: true,
      infinite: true,
      speed: 4000,
      autoplaySpeed: 9000
  });

  $('#js-slider-arrow-left').on('click', function(){
      $('#js-slider').slick('slickPrev');
  });

    $('#js-slider-arrow-right').on('click', function(){
        $('#js-slider').slick('slickNext');
    });


});