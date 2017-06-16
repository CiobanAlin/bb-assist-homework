  /* done */


    /* step 4 */

function step4(){
  /* step1 */
  $( '.text-base-paragraph:eq(0)').css("display","none");
  $( '.text-base-paragraph:eq(1)').css("display","none");
  $( '.area-inputStudio:eq(0)').css("display","none");
  /* accordion + map*/
  $( '.step1dot2Main:eq(0)').css("display","none");
  /* step2 */
  $( '.area-select:eq(0)').css("display","none");
  $( '.area-select:eq(1)').css("display","none");
  /* step 3 */
  $( '.js-area-BST:eq(0)').css("display","none");
  $( '.text-monthYear:eq(0)').css("display","none");
  $( '.js-area-timePicker:eq(0)').css("display","none");
  /* step 4 */
  $( '.text-base-title:eq(0)').html("Your Details");
  $( '.text-group:eq(0)').css("display","flex");
  var type=$('.js-details-type').html();
  $( '.text-target:eq(0)').css("display","flex").html(type);
  $( '.text-group:eq(1)').css("display","flex");
  var description=$('.js-details-description').html();
  $( '.text-target:eq(1)').css("display","flex").html(description);
  $( '.text-group:eq(2)').css("display","flex");
  var price=$('.js-details-price').html();
  $( '.text-target:eq(2)').css("display","flex").html(price);
  $( '.text-group:eq(3)').css("display","flex");
  var adress=$('.js-details-adress').html();
  $( '.text-target:eq(3)').css("display","flex").html(adress);
  $( '.text-group:eq(4)').css("display","flex");
  var duration=$('.js-details-duration').html();
  $( '.text-target:eq(4)').css("display","flex").html(duration);
  $( '.text-group:eq(5)').css("display","flex");
  hour=$('.js-time-hour').html();
  var day=$('.js-time-day').html();
  $( '.text-target:eq(5)').css("display","flex").html(day +", "+ hour);
  $( '.separator-inMain:eq(0)').css("display","block");
  $( '.area-input-group:eq(0)').css("display","block");
  /* step 4 inputs */

  $( '.separator-exMain:eq(0)').css("display","block");
  $( '.button-back:eq(0)').css("display","block");
  $( '.button-back:eq(0)').click(function(){ step3(); });
  $( '.button-back:eq(1)').css("display","block");
  $( '.button-back:eq(1)').prop('disabled', false);
  $( '.button-back:eq(1)').click(function(){ step4Confirm(); });
  /* step 5 */
  $( '.text-base-title:eq(1)').css("display","none");
  $( '.text-group:eq(6)').css("display","none");
  $( '.text-group:eq(7)').css("display","none");
  $( '.text-group:eq(8)').css("display","none");
  $( '.separator-inMain:eq(1)').css("display","none");
  $( '.input-mark:eq(0)').css("display","none");
  $( '.area-mapSelected:eq(0)').css("display","none");
  /* step 6 */
  $( '.text-boldConfirm:eq(0)').css("display","none");
  $( '.text-boldConfirm:eq(1)').css("display","none");
  /* default */
  $('html, body').animate({scrollTop : 0},'fast'); /*.scrollTop( 0 )*/
  return false;

}
