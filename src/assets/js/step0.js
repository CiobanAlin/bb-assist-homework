  /* done */


    /* step0 */

    function step0(){

      /* put value of input in a variable */
       var step1Salon = $('.step1Input:eq(0)').val();
       /* verify if variable has no text in it */
       if( step1Salon.length==0 ){
         /* make placeholder text red */
         $('.step1Input').addClass('invalidInput');
         /* put text in placeholder */
         $('.step1Input:eq(0)').attr("placeholder","Invalid Studio");
       return;
       }
    else{
      /* !! target where to put the text taken from imput and make it visible !! */
      var title = $('.step1Salons:eq(0)');
      title.html(step1Salon);
      $('.step1dot2Main:eq(0)').css("display","block");
    }

    }
