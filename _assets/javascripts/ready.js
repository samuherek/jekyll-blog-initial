$(document).ready(function() {

  // $('#menuTriggerButton').on('mouseup', function() {
  //   $(this).blur();
  // });

  $('#menuTriggerButton').on( 'click', function() {
    $(this).blur();
    $(this).toggleClass('is-open');
    $('body').toggleClass('no-scroll');
    $('#overflowWrapper').toggleClass('no-scroll');
    $('#menuWrapper').toggleClass('is-open');
  });

});
