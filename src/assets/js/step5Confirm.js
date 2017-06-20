  /* done */


    /* step 5 Continue */

$(document).ready(function () {
  $('.step5Continue').on({
    click:

    function (){
    if ($('.step5Continue').is(':checked')) {
      $('.button-back:eq(1)').prop('disabled', false);
      $('.button-back:eq(1)').css("background-color","darkgreen");
      $('.button-back:eq(1)').click = function(){ step6(); };

    } else {
      $('.button-back:eq(1)').prop('disabled', true);
      $('.button-back:eq(1)').css("background-color","lightgreen");
    }
    }
  });
});
