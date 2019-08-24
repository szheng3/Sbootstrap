$(document).ready(function() {
    $('section').bootstrapMaterialDesign();
  },
);

// Configure Slider
// $('.carousel').carousel({
//   interval: 6000,
//   pause: 'hover'
// });
$('#year').text(new Date().getFullYear());
$('.slider').slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1
});
// Smooth Scrolling
$('#main-nav a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top,
    }, 800, 'swing', function() {
      // window.location.hash = hash;
    });
  }
});
// Video Play
$(function() {
  // Auto play modal video
  $('.video').click(function() {
    var theModal = $(this).data('target'),
      videoSRC = $(this).attr('data-video'),
      videoSRCauto = videoSRC +
        '?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1';
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function() {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});

