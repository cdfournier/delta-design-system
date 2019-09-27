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
