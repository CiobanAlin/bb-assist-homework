/* done */

    /* step 3dot2 */

/* get current date */
var date = new Date();

/* when document ready */
$(document).ready(function() {

  /* !! day detect area-timeDay>h1 !! */
  var dayText = date.getDay();
  var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
  var dayNumber = date.getDate();
  /* !! day 1 !! */
  $('.area-timeDay>h1').first().html(weekday[dayText] +" "+ dayNumber);
  /* !! Sunday OFF !! */
  if(dayText == 0)
  {
    $('.js-button-pickTime:eq(0)').html("X").css("background-color","black").css("color","white").click(false);
    $('.js-button-pickTime:eq(1)').html("X").css("background-color","black").css("color","white").click(false);
    $('.js-button-pickTime:eq(2)').html("X").css("background-color","black").css("color","white").click(false);
  }
  /* !! day 2 !! */
  var today = date.getTime();
  var dayNumber2 = new Date(today+86400000);
  var dayText2 = dayNumber2.getDay();
  var dayNumber2 = dayNumber2.getDate();
  $('.area-timeDay>h1:eq(1)').html(weekday[dayText2] +" "+ dayNumber2);
  /* !! Sunday OFF !! */
  if(dayText2 == 0)
  {
    $('.js-button-pickTime:eq(3)').html("X").css("background-color","black").css("color","white").click(false);
    $('.js-button-pickTime:eq(4)').html("X").css("background-color","black").css("color","white").click(false);
    $('.js-button-pickTime:eq(5)').html("X").css("background-color","black").css("color","white").click(false);
  }
  /* !! day 3 !! */
  var today = date.getTime();
  var dayNumber3 = new Date(today+86400000*2);
  var dayText3 = dayNumber3.getDay();
  var dayNumber3 = dayNumber3.getDate();
  $('.area-timeDay>h1:eq(2)').html(weekday[dayText3] +" "+ dayNumber3);
  /* !! Sunday OFF !! */
  if(dayText3 == 0)
  {
    $('.js-button-pickTime:eq(6)').html("X").css("background-color","black").css("color","white").click(false);
    $('.js-button-pickTime:eq(7)').html("X").css("background-color","black").css("color","white").click(false);
    $('.js-button-pickTime:eq(8)').html("X").css("background-color","black").css("color","white").click(false);
  }
  /* !! day 4 !! */
  var today = date.getTime();
  var dayNumber4 = new Date(today+86400000*3);
  var dayText4 = dayNumber4.getDay();
  var dayNumber4 = dayNumber4.getDate();
  $('.area-timeDay>h1:eq(3)').html(weekday[dayText4] +" "+ dayNumber4);
  /* !! Sunday OFF !! */
  if(dayText4 == 0)
  {
    $('.js-button-pickTime:eq(9)').html("X").css("background-color","black").css("color","white").click(false);
    $('.js-button-pickTime:eq(10)').html("X").css("background-color","black").css("color","white").click(false);
    $('.js-button-pickTime:eq(11)').html("X").css("background-color","black").css("color","white").click(false);
  }
  /* !! day 5 !! */
  var today = date.getTime();
  var dayNumber5 = new Date(today+86400000*4);
  var dayText5 = dayNumber5.getDay();
  var dayNumber5 = dayNumber5.getDate();
  $('.area-timeDay>h1:eq(4)').html(weekday[dayText5] +" "+ dayNumber5);
  /* !! Sunday OFF !! */
  if(dayText5 == 0)
  {
    $('.js-button-pickTime:eq(12)').html("X").css("background-color","black").css("color","white").click(false);
    $('.js-button-pickTime:eq(13)').html("X").css("background-color","black").css("color","white").click(false);
    $('.js-button-pickTime:eq(14)').html("X").css("background-color","black").css("color","white").click(false);
  }
  /* !! day 6 !! */
  var today = date.getTime();
  var dayNumber6 = new Date(today+86400000*5);
  var dayText6 = dayNumber6.getDay();
  var dayNumber6 = dayNumber6.getDate();
  $('.area-timeDay>h1:eq(5)').html(weekday[dayText6] +" "+ dayNumber6);
  /* !! Sunday OFF !! */
  if(dayText6 == 0)
  {
    $('.js-button-pickTime:eq(15)').html("X").css("background-color","black").css("color","white").click(false);
    $('.js-button-pickTime:eq(16)').html("X").css("background-color","black").css("color","white").click(false);
    $('.js-button-pickTime:eq(17)').html("X").css("background-color","black").css("color","white").click(false);
  }
  /* !! day 7 !! */
  var today = date.getTime();
  var dayNumber7 = new Date(today+86400000*6);
  var dayText7 = dayNumber7.getDay();
  var dayNumber7 = dayNumber7.getDate();
  $('.area-timeDay>h1:eq(6)').html(weekday[dayText7] +" "+ dayNumber7);
  /* !! Sunday OFF !! */
  if(dayText7 == 0)
  {
    $('.js-button-pickTime:eq(18)').html("X").css("background-color","black").css("color","white").click(false);
    $('.js-button-pickTime:eq(19)').html("X").css("background-color","black").css("color","white").click(false);
    $('.js-button-pickTime:eq(20)').html("X").css("background-color","black").css("color","white").click(false);
  }



  /* !! hour detect (if current time passed avaliable time make it UNAVALIABLE + 1H ) !! */
  var hour = date.getHours();
  if(hour+1 >= 9){
    var hour9 = $(".Time9").first().html("X").css("background-color","black").css("color","white").click(false);
  }
  if(hour+1 >= 10){
    var hour10 = $(".Time10").first().html("X").css("background-color","black").css("color","white").click(false);
  }
  if(hour+1 >= 11){
    var hour11 = $(".Time11").first().html("X").css("background-color","black").css("color","white").click(false);
  }
  if(hour+1 >= 12){
    var hour12 = $(".Time12").first().html("X").css("background-color","black").css("color","white").click(false);
  }
  if(hour+1 >= 13){
    var hour13 = $(".Time13").first().html("X").css("background-color","black").css("color","white").click(false);
  }
  if(hour+1 >= 14){
    var hour14 = $(".Time14").first().html("X").css("background-color","black").css("color","white").click(false);
  }
  if(hour+1 >= 15){
    var hour15 = $(".Time15").first().html("X").css("background-color","black").css("color","white").click(false);
  }
  if(hour+1 >= 16){
    var hour16 = $(".Time16").first().html("X").css("background-color","black").css("color","white").click(false);
  }
  if(hour+1 >= 17){
    var hour17 = $(".Time17").first().html("X").css("background-color","black").css("color","white").click(false);
  }
  if(hour+1 >= 18){
    var hour18 = $(".Time18").first().html("X").css("background-color","black").css("color","white").click(false);
  }



  /* on click put correspondant hour*/

  $('[class^=Time]').not(hour9).not(hour10).not(hour11).not(hour12).not(hour13).not(hour14).not(hour15).not(hour16).not(hour17).not(hour18).click(function() {

  /* keep selected hour */
  var hourPicker = $(this).text();
  /* change colors of button (Time' ') */
  $('.js-button-pickTime').css("background-color","white").css("color","black");
  /* keep columns and arrows (area-timePicker)  */
  var item = $(this).parent().html( );
  /* keep clicked hour (usefull when function is called at least twice) */
  var $not = $(this).parent();
  /* change other hours and make them UNAVALIABLE (usefull when function is called at least twice) */
  $('.js-button-pickTime').not($not).html( "X" ).css("background-color","black").css("color","white");
  /* put selected hour */
  $(this).parent().html( hourPicker ).css("background-color","#E36A63").css("color","white");
  /* make button-resetDate visible */
  $( ".js-button-resetDate" ).css("display","block");
  /* !! make Continue button Clickable when hour is choosen !! */
  $( '.button-back:eq(1)' ).css("background", "#E36A63");
  $( '.button-back:eq(1)' ).prop('disabled', false);

  });



    /* Change Date */

    /* keep columns and arrows (area-timePicker)  */
    var clone = $(".js-area-timePicker").html();

    /* on button click */
    $(".js-button-resetDate").click(function cloneFunction() {

      /* make colums as first time entered the page (paste clone variable) */
      $(".js-area-timePicker").html(clone);

    });

});
