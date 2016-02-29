// EVENT TITLE ANIMATION =====================================================
$(window).load(function() {
  $('#company-event').animate({ top: 23 + 'vh',
                           opacity: 1.0 }, 1300);
});
  
// BACKGROUND PARALLAX =======================================================
$(document).on('scroll mousewheel', function() {
  bgParallax();
});

function bgParallax() {

  var pElements = document.getElementsByClassName('bg-parallax');

  for (var i=0; i<pElements.length; i++) {

    var slope = pElements[i].attributes['data-speed'].value;
    // document.documentElement.scrollTop for IE
    // document.body.scrollTop for the rest of the browsers
    var wTop = Math.floor(slope * (document.body.scrollTop || document.documentElement.scrollTop));

    $('#'+pElements[i].id).animate({ 'background-position-y': wTop }, 0, 'linear');

  }
}
