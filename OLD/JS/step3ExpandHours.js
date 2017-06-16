  /* done */


    /* step3dot1 */

    /* button-pickTime clicked */
    $(".js-button-pickTime").on({
      click:
      function step3dot1(){

        /* make text visible in the button pressed one turn forward
        (usefull when function is called at least twice) */
        $(".area-avaliable").css("display","flex");
        /* hide text on current button pressed */
        $(this).find(".area-avaliable").css("display","none");
        /* make button exapandable */
        $(this).css("height","auto");
        /* once chosen let button be as in the beginning */
        $(this).css("min-height","70px");
        /* add hover effect in the button pressed one turn forward
        (usefull when function is called at least twice) */
        $(".js-button-pickTime").addClass("step3dot1dot1Hover");
        /* remove hover effect on current button pressed */
        $(this).removeClass("step3dot1dot1Hover");
        /* hide hours in the button pressed one turn forward
        (usefull when function is called at least twice) */
        $("[class^='Time']").css("display","none");
        /* show hours on current button pressed */
        $(this).find("[class^=Time]").css("display","flex");

      }

    });
