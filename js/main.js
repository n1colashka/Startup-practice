$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 4
  });
});

if($(window).width() < 1150){
  $(".owl-carousel").owlCarousel({
    items: 3
  });
}

if($(window).width() < 850){
  $(".owl-carousel").owlCarousel({
    items: 2
  });
}