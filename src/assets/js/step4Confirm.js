  /* done */


    /*step 4 Confirm*/

function step4Confirm(){
  /* step 4 inputs CONFIRM */
  var i;
  for (i = 0; i <= 7; i++) {
    var inputStep4 = $(".step4Input").eq(i);
    if( $(inputStep4).val()=="" ){
      $('.step4Input').addClass('invalidInput');
      $(".step4Input").eq(i).attr("placeholder","No imput!!!");
      $('.button-back:eq(1)').css("background","pink");
    }
    else{
      $('.button-back:eq(1)').css("background","#E36A63");
      $('.button-back:eq(1)').html("Continue");
      $('.button-back:eq(1)').click(function() {  step5();


        var firstName=$('.js-input-step4:eq(0) ').val();
        var lastName=$('.js-input-step4:eq(1) ').val();
        $( '.text-target:eq(6)').html(firstName +" "+ lastName);


        var email=$('.js-input-step4:eq(2) ').val();
        $( '.text-target:eq(7)').html(email);


        var mobile=$('.js-input-step4:eq(3) ').val();
        $( '.text-target:eq(8)').html(mobile);

      } );
    }
  }
}
