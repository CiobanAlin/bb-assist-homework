  /* done */


    /* step 3 */

function step3(){

  $('html, body').animate({scrollTop : 0},'fast');
  /* step 1*/
  $('.step1dot2Main:eq(0)').css("display","none");
  $('.area-inputStudio:eq(0)').css("display","none");
  /* step 2*/
  $('.area-select:eq(0)').css("display","none");
  $('.area-select:eq(1)').css("display","none");
  /* step 3*/

  $('.stepTitle').eq(2).css("color","white");
  $('.stepTitle').not('.stepTitle:eq(2)').css("color","black");
  $('.text-base-title:eq(0)').html("Select Your Time");
  $('.text-base-paragraph:eq(0)').css("display","none");
  $('.text-base-paragraph:eq(1)').css("display","none");
  $('.text-group:eq(0)').css("display","flex");
  $('.text-group:eq(1)').css("display","flex");
  $('.text-group:eq(2)').css("display","flex");
  $('.text-group:eq(3)').css("display","flex");
  $('.text-group:eq(4)').css("display","flex");
  $('.separator-inMain:eq(0)').css("display","block");
  $('.js-area-BST:eq(0)').css("display","flex");
  $('.text-monthYear:eq(0)').css("display","block");
  $('.js-area-timePicker:eq(0)').css("display","flex");
  $('.button-back:eq(0)').css("display","block");
  $('.button-back:eq(0)').click(function(){ step2(); });
  $('.button-back:eq(1)').css("display","block");
  $('.button-back:eq(1)').click(function(){ step4(); });
  $('.button-back:eq(1)').prop('disabled', true);
  $('.button-back:eq(1)').css("background","pink");
  $('.separator-exMain:eq(0)').css("display","block");
  $('.js-button-resetDate').css("display","none");
  /* step4 */
  $('.text-group:eq(5)').css("display","none");
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
  return false;

}
