  /* done */


  /* step1 */
$(".js-step1").click(function(){ step1() });
function step1(){

  /* step1 */
  $('.stepTitle').eq(0).css("color","white");
  $('.stepTitle').not('.stepTitle:eq(0)').css("color","black");
  $('.text-base-paragraph:eq(0)').css("display","block");
  $('.text-base-paragraph:eq(1)').css("display","block");
  $('.text-base-title:eq(0)').html("Select Your Studio");
  $('.text-base-paragraph:eq(0)').html("PixiFoto are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.");
  $('.text-base-paragraph:eq(1)').html("Booking your photo shoot is very simple. To start, please enter your location below so that we can find your nearest PixiFoto studio. We can’t wait to give you a photo shoot experience to remember.");
  $('.area-inputStudio:eq(0)').css("display","flex");
  /* accordion + map*/
  $('.step1dot2Main:eq(0)').css("display","block");
  /* step2 */
  $('.area-select:eq(0)').css("display","none");
  $('.area-select:eq(1)').css("display","none");
  $('.separator-exMain:eq(0)').css("display","none");
  $('.button-back:eq(0)').css("display","none");
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
  $('.button-back:eq(0)').css("display","none");
  $('.js-button-resetDate').css("display","none");
  /* step4 */
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
