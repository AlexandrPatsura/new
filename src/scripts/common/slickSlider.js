export const slickSlider = function() {

  $('.alternatives-choose').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // arrows: false,
    // dots: true,
    // dotsClass: 'button-slider-left',
    variableWidth: true,
    centerMode: true,
    prevArrow: '<a class="button-slider-left" href="#"><img src="assets/img/back.png" alt=""></a>',
    nextArrow: '<a class="button-slider-right" href="#"><img src="assets/img/forward.png" alt=""></a>',
    responsive: [
      {
        breakpoint: 425,
        settings: {
          // arrows: false,
          centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
}