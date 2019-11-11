$('button.menu-toggle').click(function() {
  $('nav').toggleClass('open');
  $('body').toggleClass('open');
  $('header .logo').toggleClass('open');
});

$(".show-hide-password").click(function() {
  $(this).toggleClass("show");
  var input = $($(this).attr("id"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

$('.show-error').click( function() {
  $('.messaging .error').addClass('show');
  setTimeout(function() { 
    $('.messaging .error').removeClass('show') }, 10000);
});
$('svg.close').click( function() {
  $('.messaging .error').removeClass('show');
});
$('.show-success').click( function() {
  $('.messaging .success').addClass('show');
  setTimeout(function() { 
    $('.messaging .success').removeClass('show') }, 10000);
});
$('svg.close').click( function() {
  $('.messaging .success').removeClass('show');
});
$('.show-confirm').click( function() {
  $('.messaging .confirm').addClass('show');
});
$('button.no').click( function() {
  $('.messaging .confirm').removeClass('show');
});
$('button.yes').click( function() {
  $('.messaging .confirm').removeClass('show');
});