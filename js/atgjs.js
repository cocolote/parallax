// EVENT TITLE ANIMATION =====================================================
$(window).load(function() {
  $('#company-event').animate({ top: 23 + 'vh',
                           opacity: 1.0 }, 1300);
});
  
// BACKGROUND PARALLAX =======================================================
$(document).on('scroll mousewheel', function() {
  bgParallax(document.body)
});

function bgParallax(myPage) {

  var pElements = document.getElementsByClassName('bg-parallax');

  for (var i=0; i<pElements.length; i++) {

    var slope = pElements[i].attributes['data-speed'].value
    var wTop = Math.floor(slope * myPage.scrollTop);

    $('#'+pElements[i].id).animate({ 'background-position-y': wTop }, 0, 'linear');

  }
}
