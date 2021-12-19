// OPEN & CLOSE NAV
$('button.menu-toggle').click(function() {
  $('body').toggleClass('open');
  $('header').toggleClass('open');
  $('button.menu-toggle').attr('aria-expanded',true);
  $('nav ul').attr('aria-hidden',false);
});
$('.close').click(function() {
  $('button.menu-toggle').attr('aria-expanded',false);
  $('nav ul').attr('aria-hidden',true);
});

// HEADROOM
var myElement = document.querySelector('header');
var headroom  = new Headroom(myElement);
headroom.init();

// HEADER NAV SWAP > 48rem
window.addEventListener('DOMContentLoaded', function(swapHeaderNav) {
  if($(window).width()>768) {
    $('header nav ul').attr('aria-hidden',false);
  }
});

// APPLY HEADER HEIGHT TO MAIN
var headerHeight = document.querySelector('header').offsetHeight;
$("main").css("padding-top", headerHeight);