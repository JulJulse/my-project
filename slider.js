  const slider-container =  $(".slider-container").bxSlider( {
  });

  $('.btn--slider-left').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
  })

  $('.btn--slider-rignt').click(e => {
    e.preventDefault();
    slider.goToNextSlide();