$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});


$(function(){
  $('.btn-trigger').on('click', function() {
    $('#Hum').slideToggle();
    return false;
  });
});
