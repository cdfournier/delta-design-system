$('button.menu-toggle').click(function() {
  $('nav').toggleClass('open');
});

$(".show-hide-password").click(function() {
  $(this).toggleClass("show");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

$('.show-error').click( function() {
  $('.alerts .error').addClass('show');
  setTimeout(function() { 
    $('.alerts .error').removeClass('show') }, 10000);
});
$('svg.close').click( function() {
  $('.alerts .error').removeClass('show');
});
$('.show-success').click( function() {
  $('.alerts .success').addClass('show');
  setTimeout(function() { 
    $('.alerts .success').removeClass('show') }, 10000);
});
$('svg.close').click( function() {
  $('.alerts .success').removeClass('show');
});
$('.show-confirm').click( function() {
  $('.alerts .confirm').addClass('show');
});
$('button.no').click( function() {
  $('.alerts .confirm').removeClass('show');
});
$('button.yes').click( function() {
  $('.alerts .confirm').removeClass('show');
});