  /* done */


    /*step 4 Confirm*/

function step4Confirm(){
  /* step 4 inputs CONFIRM */
  var i;
  for (i = 0; i <= 7; i++) {
    var inputStep4 = $(".step4Input").eq('2').val();
    if( inputStep4.val==" " ){
      $('.step1Input').addClass('invalidInput');
      $(".step4Input").eq('2').attr("placeholder","No imput!!!");
    }
    else{
      $('.button-back:eq(1)').css("background","#E36A63");
      $('.button-back:eq(1)').html("Continue");
      $('.button-back:eq(1)').click = function(){ step5(); };
    }
  }
}
