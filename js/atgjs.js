$(document).on('scroll mousewheel',  function(e) {
  myParallax(document.body);
});

function myParallax(element) {
  console.log(element.scrollTop);

  var slope = $('.my-parallax')[0].attributes['data-speed'].value
  var wTop = Math.floor(slope * element.scrollTop);

  $('.my-parallax').animate({ 'top': wTop }, 0, 'linear');

}
