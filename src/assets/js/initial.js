  /* done */


    /* initial */

    /* show html just after all changes are done */
    $(document).ready(function() {
      $("html").css("display","block");
    });
    /* top menu */
    $(".js-step1").click(function(){ step1() });
    $(".js-step2").click(function(){ step2() });
    $(".js-step3").click(function(){ step3() });
    $(".js-step4").click(function(){ step4() });
    $(".js-step5").click(function(){ step5() });
    /* step1 */
    $('.stepTitle').eq(0).css("color","white");
    $('.stepTitle').not('.stepTitle:eq(0)').css("color","black");
    /* step3 */
    $(".js-button-resetDate").css("display","none");
    $(".js-text-baseTitle").css("display","none");
    $(".js-button-ExpandHours").css("display","none");
    $(".js-button-TimePicked").css("display","none");
    $(".js-button-ChooseHour").css("background-color","white");
    $('.area-pickTime').css("min-height","70px");
    $('.js-button-ChooseHour').css("height","70px");
    /* step2  */
    function step2Map() {
        step2();
        var i;
        for(i=0;i<=4;i++)
        if($('.accordion-content').eq(i).hasClass('js-activeAdress')){
          var adressTitle=$('.js-accordion-title').eq(i).html();
          var adressDescription=$('.js-accordion-description').eq(i).html();
          $( '.text-target:eq(3)').html(adressTitle +" "+ adressDescription);
    }


    };

    $('.js-button-step2').click(function() { step2();

      var adressTitle=$(this).parent().parent().find('.js-accordion-title').html();
      var adressDescription=$(this).parent().find('.js-accordion-description').html();
      $( '.text-target:eq(3)').html(adressTitle +" "+ adressDescription);

    });
