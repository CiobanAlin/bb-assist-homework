/* done */

    /* step 3dot2 */

/* get current date */
var date = new Date();
var CurrentYear = date.getFullYear();
var CurrentMonth = date.getMonth();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
$('.js-text-monthYear').eq(0).html(month[CurrentMonth] +" "+ CurrentYear);

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
    $('.js-button-ChooseHour:eq(0)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
    $('.js-button-ChooseHour:eq(1)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
    $('.js-button-ChooseHour:eq(2)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
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
    $('.js-button-ChooseHour:eq(3)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
    $('.js-button-ChooseHour:eq(4)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
    $('.js-button-ChooseHour:eq(5)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
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
    $('.js-button-ChooseHour:eq(6)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
    $('.js-button-ChooseHour:eq(7)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
    $('.js-button-ChooseHour:eq(8)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
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
    $('.js-button-ChooseHour:eq(9)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
    $('.js-button-ChooseHour:eq(10)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
    $('.js-button-ChooseHour:eq(11)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
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
    $('.js-button-ChooseHour:eq(12)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
    $('.js-button-ChooseHour:eq(13)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
    $('.js-button-ChooseHour:eq(14)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
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
    $('.js-button-ChooseHour:eq(15)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
    $('.js-button-ChooseHour:eq(16)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
    $('.js-button-ChooseHour:eq(17)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
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
    $('.js-button-ChooseHour:eq(18)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
    $('.js-button-ChooseHour:eq(19)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
    $('.js-button-ChooseHour:eq(20)').html("X").css("background-color","black").css("color","white").prop('disabled', true);
  }

  /* !! hour detect (if current time passed avaliable time make it UNAVALIABLE + 1H ) !! */
  var hour = date.getHours();
  if(hour+1 >= 9){
    var hour9 = $(".Time9").first().html("X").css("background-color","black").css("color","white").prop('disabled', true);
  }
  if(hour+1 >= 10){
    var hour10 = $(".Time10").first().html("X").css("background-color","black").css("color","white").prop('disabled', true);
  }
  if(hour+1 >= 11){
    var hour11 = $(".Time11").first().html("X").css("background-color","black").css("color","white").prop('disabled', true);
  }
  if(hour+1 >= 12){
    var hour12 = $(".Time12").first().html("X").css("background-color","black").css("color","white").prop('disabled', true);
  }
  if(hour+1 >= 13){
    var hour13 = $(".Time13").first().html("X").css("background-color","black").css("color","white").prop('disabled', true);
  }
  if(hour+1 >= 14){
    var hour14 = $(".Time14").first().html("X").css("background-color","black").css("color","white").prop('disabled', true);
  }
  if(hour+1 >= 15){
    var hour15 = $(".Time15").first().html("X").css("background-color","black").css("color","white").prop('disabled', true);
  }
  if(hour+1 >= 16){
    var hour16 = $(".Time16").first().html("X").css("background-color","black").css("color","white").prop('disabled', true);
  }
  if(hour+1 >= 17){
    var hour17 = $(".Time17").first().html("X").css("background-color","black").css("color","white").prop('disabled', true);
  }
  if(hour+1 >= 18){
    var hour18 = $(".Time18").first().html("X").css("background-color","black").css("color","white").prop('disabled', true);
  }



  /* on click put correspondant hour*/

  $('[class^=Time]').not(hour9).not(hour10).not(hour11).not(hour12).not(hour13).not(hour14).not(hour15).not(hour16).not(hour17).not(hour18).click(function step3ChooseHour() {

  /* keep selected hour */
  var hourPicker = $(this).text();
  /* change colors of button (Time' ') */
  $('.js-button-ChooseHour').css("background-color","white").css("color","black");
  /* keep clicked hour (usefull when function is called at least twice) */
  parentHour = $(this).parent().parent();
  /* put selected hour */
  hour = $(this).html();
  /* reset */
  $(".js-button-TimePicked").not(parentHour).css("display","none");
  /* make button-resetDate visible */
  $(parentHour).find('.js-button-TimePicked').css("display","block");
  $(parentHour).find('.js-button-ExpandHours').css("display","none");
  $(parentHour).find('.js-button-TimePicked').css("height","70px");
  $(parentHour).find('.js-button-TimePicked').html(hour).addClass('js-time-hour');
  $(parentHour).parent().find('h1').addClass('js-time-day');
  $(parentHour).css("height","70px");
  $(".js-button-ChooseHour").not(parentHour).css("display","block");
  $(parentHour).find('.js-button-ChooseHour').css("display","none");
  /* !! make Continue button Clickable when hour is choosen !! */
  $( '.button-back:eq(1)' ).css("background", "#E36A63");
  $( '.button-back:eq(1)' ).prop('disabled', false);

  });

});
