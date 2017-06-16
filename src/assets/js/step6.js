  /* done */


      /* step 6 */

function step6(){

  /* step1 */
  $('.text-base-paragraph:eq(0)').css("display","none");
  $('.text-base-paragraph:eq(1)').css("display","none");
  $('.area-inputStudio:eq(0)').css("display","none");
  /* accordion + map*/
  $('.step1dot2Main:eq(0)').css("display","none");
  /* step2 */
  $('.area-select:eq(0)').css("display","none");
  $('.area-select:eq(1)').css("display","none");
  /* step 3 */
  $('.js-area-BST:eq(0)').css("display","none");
  $('.text-monthYear:eq(0)').css("display","none");
  $('.js-area-timePicker:eq(0)').css("display","none");
  /* step 4 */
  $('.area-input-group:eq(0)').css("display","none");
  $('.separator-exMain:eq(1)').css("display","none");
  $('.button-back:eq(1)').css("display","none");
  /* step 5 */
  $('.separator-exMain:eq(0)').css("display","none");
  $('.input-mark:eq(0)').css("display","none");
  $('.button-back:eq(0)').css("display","none");
  /* step 6 */
  $('.text-base-title:eq(0)').html("Booking Complete");
  $('.text-boldConfirm:eq(0)').css("display","block");
  $('.text-boldConfirm:eq(1)').css("display","block");
  $('.text-group:eq(0)').css("display","flex");
  $('.text-group:eq(1)').css("display","flex");
  $('.text-group:eq(2)').css("display","flex");
  $('.text-group:eq(3)').css("display","flex");
  $('.text-group:eq(4)').css("display","flex");
  $('.text-group:eq(5)').css("display","flex");
  $('.separator-inMain:eq(0)').css("display","block");
  $('.text-base-title:eq(1)').css("display","block");
  $('.text-group:eq(6)').css("display","flex");
  $('.text-group:eq(7)').css("display","flex");
  $('.text-group:eq(8)').css("display","flex");
  $('.separator-inMain:eq(1)').css("display","block");
  $('.area-mapSelected:eq(0)').css("display","block");
  /* default */
  $('html, body').animate({scrollTop : 0},'fast'); /*.scrollTop( 0 )*/
  return false;

}
