$('button.menu-toggle svg.menu-toggle-open').click(function() {
  $('nav').addClass('open');
});
$('button.menu-toggle svg.menu-toggle-close').click(function() {
  $('nav').removeClass('open');
});