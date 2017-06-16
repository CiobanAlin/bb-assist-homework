

var count = 0;

$('.js-button-arrow').eq(0).click(function step3ArrowBack(){
  count -= 1;
  step3Arrow();
});

$('.js-button-arrow').eq(1).click(function step3ArrowNext(){
  count += 1;
  step3Arrow();
});

function step3Arrow(){
var i;
var n=7;
var x=0;
for(i=0;i<n;i++){
  if($('.area-timeDay').eq(i).css("display")!="none"){
      x++;
    }
  }
  if(count==-1)
    count=0;

x=x*count;

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
    /* !! day detect area-timeDay>h1 !! */
    var today = date.getTime();
    var dayNumber = new Date(today+(86400000*x));
    var dayText = dayNumber.getDay();
    var dayNumber = dayNumber.getDate();
    var weekday = new Array(7);
      weekday[0] = "Sun";
      weekday[1] = "Mon";
      weekday[2] = "Tue";
      weekday[3] = "Wed";
      weekday[4] = "Thu";
      weekday[5] = "Fri";
      weekday[6] = "Sat";
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
    var dayNumber2 = new Date(today+(86400000*(1+x)));
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
    var dayNumber3 = new Date(today+86400000*(2+x));
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
    var dayNumber4 = new Date(today+86400000*(3+x));
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
    var dayNumber5 = new Date(today+86400000*(4+x));
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
    var dayNumber6 = new Date(today+86400000*(5+x));
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
    var dayNumber7 = new Date(today+86400000*(6+x));
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
};
