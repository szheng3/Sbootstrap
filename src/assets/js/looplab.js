$('#year').text(new Date().getFullYear());
// Smooth Scrolling
$('#main-nav a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top + 30,
    }, 800, function() {

      window.location.hash = hash;
    });
  }
});
