/* done */


  /* step3dot1 */
  var hour;
  var parentHour;
  /* button-pickTime clicked */
  $(".js-button-ChooseHour").on({
    click:

    function step3ExpandHours(){

      var parent = $(this).parent();
      /* add hover effect in the button pressed one turn forward
      (usefull when function is called at least twice) */
      $(".js-button-pickTime").addClass("step3dot1dot1Hover");
      /* remove hover effect on current button pressed */
      $(this).removeClass("step3dot1dot1Hover");
      /* reset */
      $(".js-button-ChooseHour").not(parent).css("display","block");
      $(parentHour).find('.js-button-ChooseHour').css("display","none");
      $(".js-button-ExpandHours").not(parent).css("display","none");
      /* hide hours in the button pressed one turn forward
      (usefull when function is called at least twice) */
      $(parent).find(".js-button-ChooseHour").css("display","none");
      $(parent).find(".js-button-ExpandHours").css("display","flex");
      $(parent).css("height","auto");

    }
  });

  $(".js-button-TimePicked").on({
    click:

    function step3ExpandHours(){

      var parent = $(this).parent();
      /* add hover effect in the button pressed one turn forward
      (usefull when function is called at least twice) */
      $(".js-button-pickTime").addClass("step3dot1dot1Hover");
      /* remove hover effect on current button pressed */
      $(this).removeClass("step3dot1dot1Hover");
      /* reset */
      $(".js-button-ChooseHour").not(parent).css("display","block");
      $(parentHour).find('.js-button-ChooseHour').css("display","none");
      $(".js-button-ExpandHours").not(parent).css("display","none");
      /* hide hours in the button pressed one turn forward
      (usefull when function is called at least twice) */
      $(parent).find(".js-button-ChooseHour").css("display","none");
      $(parent).find(".js-button-ExpandHours").css("display","flex");
      $(parent).css("height","auto");

    }
  });
