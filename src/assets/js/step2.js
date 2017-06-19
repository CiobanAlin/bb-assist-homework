  /* done */


    /* step2 */

function step2(){

  /* step 1 */
  $('.step1dot2Main:eq(0)').css("display","none");
  $('.area-inputStudio:eq(0)').css("display","none");
  /* step 2 */

  $('.stepTitle').eq(1).css("color","white");
  $('.stepTitle').not('.stepTitle:eq(1)').css("color","black");
  $('.text-base-title:eq(0)').html("Select Your Photo Shoot");
  $('.text-base-paragraph:eq(0)').html("At PixiFoto we pride ourselves in offering a fun and exciting photography experience and with a variety of photo shoots to choose from, there is something for everyone.");
  $('.text-base-paragraph:eq(1)').html("We have the expertise to get the best results so book today and let us capture those magical moments in time, forever.");
  $('.area-select:eq(0)').css("display","block");
  $('.area-select:eq(1)').css("display","block");
  $('.separator-exMain:eq(0)').css("display","block");
  $('.button-back:eq(0)').css("display","block");
  $('.button-back:eq(0)').click(function() { step1(); });
  $('.js-button-step3').click(function() { step3();

    var type=$(this).parent().parent().find('.text-serviceTitle').html();
    $( '.text-target:eq(0)').html(type);

    var description=$(this).parent().parent().find('.text-service').html();
    $( '.text-target:eq(1)').html(description);

    var price=$(this).parent().parent().find('.text-money').html();
    $( '.text-target:eq(2)').html(price);

  });

  /* step 3 */
  $('.text-group:eq(0)').css("display","none");
  $('.text-group:eq(1)').css("display","none");
  $('.text-group:eq(2)').css("display","none");
  $('.text-group:eq(3)').css("display","none");
  $('.text-group:eq(4)').css("display","none");
  $('.text-group:eq(5)').css("display","none");
  $('.separator-inMain:eq(0)').css("display","none");
  $('.js-area-BST:eq(0)').css("display","none");
  $('.text-monthYear:eq(0)').css("display","none");
  $('.js-area-timePicker:eq(0)').css("display","none");
  $('.button-back:eq(1)').css("display","none");
  $('.js-button-resetDate' ).css("display","none");
  /* step 4 */
  $('.area-input-group:eq(0)').css("display","none");
  /* step 5 */
  $('.text-base-title:eq(1)').css("display","none");
  $('.text-group:eq(6)').css("display","none");
  $('.text-group:eq(7)').css("display","none");
  $('.text-group:eq(8)').css("display","none");
  $('.separator-inMain:eq(1)').css("display","none");
  $('.input-mark:eq(0)').css("display","none");
  $('.area-mapSelected:eq(0)').css("display","none");
  /* step 6 */
  $('.text-boldConfirm:eq(0)').css("display","none");
  $('.text-boldConfirm:eq(1)').css("display","none");
  /* default */
  $('html, body').animate({scrollTop : 0},'fast'); /*.scrollTop( 0 )*/
  return false;

}
