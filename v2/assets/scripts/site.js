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
  $('.messages .error').addClass('show');
  setTimeout(function() { 
    $('.messages .error').removeClass('show') }, 10000);
});
$('svg.close').click( function() {
  $('.messages .error').removeClass('show');
});
$('.show-success').click( function() {
  $('.messages .success').addClass('show');
  setTimeout(function() { 
    $('.messages .success').removeClass('show') }, 10000);
});
$('svg.close').click( function() {
  $('.messages .success').removeClass('show');
});
$('.show-confirm').click( function() {
  $('.messages .confirm').addClass('show');
});
$('button.no').click( function() {
  $('.messages .confirm').removeClass('show');
});
$('button.yes').click( function() {
  $('.messages .confirm').removeClass('show');
});

$('ul.chips li.option-1').click( function() {
  $('ul.chips li.option-1 svg.check').toggleClass('show');
});
$('ul.chips li.option-2').click( function() {
  $('ul.chips li.option-2 svg.check').toggleClass('show');
});
$('ul.chips li.option-3').click( function() {
  $('ul.chips li.option-3 svg.check').toggleClass('show');
});
$('ul.chips li.option-4').click( function() {
  $('ul.chips li.option-4 svg.check').toggleClass('show');
});

$('ul.chips li.dismiss-1 svg.close').click( function() {
  $('ul.chips li.dismiss-1').addClass('dismissed');
});
$('ul.chips li.dismiss-2 svg.close').click( function() {
  $('ul.chips li.dismiss-2').addClass('dismissed');
});
$('ul.chips li.dismiss-3 svg.close').click( function() {
  $('ul.chips li.dismiss-3').addClass('dismissed');
});
$('ul.chips li.dismiss-4 svg.close').click( function() {
  $('ul.chips li.dismiss-4').addClass('dismissed');
});
$('ul.chips li.dismiss-reset').click( function() {
  $('ul.chips li').removeClass('dismissed');
});

$('.tab-a').click(function() {
  $('.tab.a').addClass('active');
  $('.tab.b').removeClass('active');
  $('.tab.c').removeClass('active');
  $('.tab-a').addClass('active');
  $('.tab-b').removeClass('active');
  $('.tab-c').removeClass('active');
});
$('.tab-b').click(function() {
  $('.tab.a').removeClass('active');
  $('.tab.b').addClass('active');
  $('.tab.c').removeClass('active');
  $('.tab-a').removeClass('active');
  $('.tab-b').addClass('active');
  $('.tab-c').removeClass('active');
});
$('.tab-c').click(function() {
  $('.tab.a').removeClass('active');
  $('.tab.b').removeClass('active');
  $('.tab.c').addClass('active');
  $('.tab-a').removeClass('active');
  $('.tab-b').removeClass('active');
  $('.tab-c').addClass('active');
});
$('.tab-d').click(function() {
  $('.tab.a').removeClass('active');
  $('.tab.b').removeClass('active');
  $('.tab.c').removeClass('active');
  $('.tab-a').removeClass('active');
  $('.tab-b').removeClass('active');
  $('.tab-c').removeClass('active');
});

$('nav .search span.trigger').click(function() {
  $('nav .search span.trigger').addClass('open');
  $('nav .search fieldset').addClass('open');
  $('nav .search button[type="submit"]').addClass('open');
});
$('nav .search fieldset .input-icon.close').click(function() {
  $('nav .search span.trigger').removeClass('open');
  $('nav .search fieldset').removeClass('open');
  $('nav .search button[type="submit"]').removeClass('open');
});