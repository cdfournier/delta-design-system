// SHOW BACKGROUND GRID AND SPACING
window.addEventListener('DOMContentLoaded', function(showGrid) {
  if(sessionStorage.getItem('showGrid') === 'true') {
    $('.responsive-grid').addClass('show-grid');
    $('input#show-grid').prop('checked',true);
  }
  else {
    sessionStorage.setItem('showGrid',false);
  }
});
$('#show-grid').click(function() {
  $('.responsive-grid').toggleClass('show-grid');
  if(sessionStorage.getItem('showGrid') === 'true') {
    $('input#show-grid').prop('checked',false);
    sessionStorage.setItem('showGrid',false);
  }
  else {
    $('input#show-grid').prop('checked',true);
    sessionStorage.setItem('showGrid',true);
  }
});