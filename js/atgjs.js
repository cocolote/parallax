$(document).scroll(function() {
  myParallax(document.body);
});

function myParallax(element) {
  console.log(element.scrollTop);

  var wTop = element.scrollTop;

  $('.my-parallax').animate({ 'top': wTop.toString()+'px' }, 0);

}
