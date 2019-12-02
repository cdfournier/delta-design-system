// MOBILE NAVIGATION TOGGLES
$('button.menu-toggle svg.menu-toggle-open').click(function() {
  $('nav').addClass('open');
  $('body').addClass('open');
  $('header .logo').addClass('open');
  $('button.menu-toggle').attr('aria-expanded',true);
  $('nav ul').attr('aria-hidden',false);
});
$('button.menu-toggle svg.menu-toggle-close').click(function() {
  $('nav').removeClass('open');
  $('body').removeClass('open');
  $('header .logo').removeClass('open');
  $('button.menu-toggle').attr('aria-expanded',false);
  $('nav ul').attr('aria-hidden',true);
});
window.onload = function() {
  if($(window).width()>768) {
    $('nav ul').attr('aria-hidden',false);
  }
};

// WIDESCREEN SEARCH TOGGLES
$('button.search-toggle svg.search-toggle-open').click(function() {
  $('nav .search').addClass('open').attr('aria-hidden',false);
  $('button.search-toggle').addClass('open').attr('aria-expanded',true);
});
$('button.search-toggle svg.search-toggle-close').click(function() {
  $('nav .search').removeClass('open').attr('aria-hidden',true);
  $('button.search-toggle').removeClass('open').attr('aria-expanded',false);
});

// SHOW/HIDE PASSWORD
$(".show-hide-password").click(function() {
  $(this).toggleClass("show");
  var input = $($(this).attr("id"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// SHOW MESSAGES
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

// CHIP CHECK TOGGLES
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

// DISMISS CHIPS
$('ul.chips li.dismiss-1 button').click( function() {
  $('ul.chips li.dismiss-1').addClass('dismissed');
});
$('ul.chips li.dismiss-2 button').click( function() {
  $('ul.chips li.dismiss-2').addClass('dismissed');
});
$('ul.chips li.dismiss-3 button').click( function() {
  $('ul.chips li.dismiss-3').addClass('dismissed');
});
$('ul.chips li.dismiss-4 button').click( function() {
  $('ul.chips li.dismiss-4').addClass('dismissed');
});
$('ul.chips li.dismiss-5 button').click( function() {
  $('ul.chips li.dismiss-5').addClass('dismissed');
});
$('ul.chips li.dismiss-6 button').click( function() {
  $('ul.chips li.dismiss-6').addClass('dismissed');
});
$('ul.chips li.dismiss-7 button').click( function() {
  $('ul.chips li.dismiss-7').addClass('dismissed');
});
$('ul.chips li.dismiss-reset').click( function() {
  $('ul.chips li').removeClass('dismissed');
});

// TABS
$('li.tab-item button#tab-label-1').click(function() {
  $('li.tab-item button.is-active').removeClass('is-active').attr('aria-selected', false);
  $('li.tab-item button#tab-label-1').addClass('is-active').attr('aria-selected', true);
  $('.panels .panel.is-current').removeClass('is-current').attr('aria-hidden', true);
  $('.panels .panel#tab-panel-1').addClass('is-current').attr('aria-hidden', false);
});
$('li.tab-item button#tab-label-2').click(function() {
  $('li.tab-item button.is-active').removeClass('is-active').attr('aria-selected', false);
  $('li.tab-item button#tab-label-2').addClass('is-active').attr('aria-selected', true);
  $('.panels .panel.is-current').removeClass('is-current').attr('aria-hidden', true);
  $('.panels .panel#tab-panel-2').addClass('is-current').attr('aria-hidden', false);
});
$('li.tab-item button#tab-label-3').click(function() {
  $('li.tab-item button.is-active').removeClass('is-active').attr('aria-selected', false);
  $('li.tab-item button#tab-label-3').addClass('is-active').attr('aria-selected', true);
  $('.panels .panel.is-current').removeClass('is-current').attr('aria-hidden', true);
  $('.panels .panel#tab-panel-3').addClass('is-current').attr('aria-hidden', false);
});

$('button#start-loading').click(function() {
  var val = 0;
  var interval = setInterval(function() {
    $('progress#loading').attr('aria-valuenow', val++).attr('value', val++);
    if (val > 100) {
      clearInterval(interval);
      $('progress#loading').addClass('complete');
    }
  }, 100);
});
$('button#reset-loading').click( function() {
  $('progress#loading').removeClass('complete').attr('aria-valuenow', 0).attr('value', 0);
});