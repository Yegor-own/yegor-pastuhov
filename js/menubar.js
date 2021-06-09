$(document).ready(function() {
  $('.menubar__burger').click(function(event) {
    $('.menubar__burger,.menubar__menu').toggleClass('active');
    $('body').toggleClass('lock')
  });
});