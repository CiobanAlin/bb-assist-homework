/*jshint esversion: 6 */

(() => {
    'use strict';

/*
 * declare map as a global variable
 */
var map;
var nr;

/*
 * use google maps api built-in mechanism to attach dom events
 */
google.maps.event.addDomListener(window, "load", function step1Map() {

  /*
   * create map
   */
  var map = new google.maps.Map(document.getElementById("map-area"), {
    center: new google.maps.LatLng(47.645404,26.258491999999933),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  /*
   * create infowindow (which will be used by markers)
   */
  var infoWindow = new google.maps.InfoWindow();

  /*
   * marker creater function (acts as a closure for html parameter)
   */
  function createMarker(options, html, nr) {
    var marker = new google.maps.Marker(options);

        infoWindow.setContent(html);
        infoWindow.open(options.map, marker);

    if (html) {
      google.maps.event.addListener(marker, "click", function () {

        infoWindow.setContent(html);
        if(this == marker0)
        {
          $(".accordion-content").eq(0).css('display', 'block').addClass('js-activeAdress');
          $(".accordion-content").not('.accordion-content:eq(0)').css('display', 'none').removeClass('js-activeAdress');
        }

        if(this == marker1)
        {
          $(".accordion-content").eq(1).css('display', 'block').addClass('js-activeAdress');
          $(".accordion-content").not('.accordion-content:eq(1)').css('display', 'none').removeClass('js-activeAdress');
        }

        if(this == marker2)
        {
          $(".accordion-content").eq(2).css('display', 'block').addClass('js-activeAdress');
          $(".accordion-content").not('.accordion-content:eq(2)').css('display', 'none').removeClass('js-activeAdress');
        }

        if(this == marker3)
        {
          $(".accordion-content").eq(3).css('display', 'block').addClass('js-activeAdress');
          $(".accordion-content").not('.accordion-content:eq(3)').css('display', 'none').removeClass('js-activeAdress');
        }
        infoWindow.open(options.map, this);
      });


      // Get all the links.
      var link = $(".accordion-title");

      // On clicking of the links do something.
      link.on('click', function step1Accordion(e) {

          e.preventDefault();

          var a = $(this).attr("href");

          $(a).css('display', 'block').addClass('js-activeAdress');

          //$(a).slideToggle('fast');
          $(".accordion-content").not(a).css('display', 'none').removeClass('js-activeAdress');

          if($('.accordion-content:eq(0)').hasClass('js-activeAdress')){
            infoWindow.setContent("<h1>Glow Beauty Place</h1><p>0752 566 796</p><input type='button' class='button-Step1dot2dot1' value='Select' onclick='step2()'/>");
              infoWindow.open(options.map, marker0);
          }

          if($('.accordion-content:eq(1)').hasClass('js-activeAdress')){
            infoWindow.setContent("<h1>The Makeup Academy</h1><p>0752 422 275</p><input type='button' class='button-Step1dot2dot1' value='Select' onclick='step2()'/>");
              infoWindow.open(options.map, marker1);
          }

          if($('.accordion-content:eq(2)').hasClass('js-activeAdress')){
            infoWindow.setContent("<h1>Michelle Center</h1><p>0752 556 796</p><input type='button' class='button-Step1dot2dot1' value='Select' onclick='step2()'/>");
              infoWindow.open(options.map, marker2);
          }

          if($('.accordion-content:eq(3)').hasClass('js-activeAdress')){
            infoWindow.setContent("<h1>Carmen Style</h1><p>0230 520 888</p><input type='button' class='button-Step1dot2dot1' value='Select' onclick='step2()'/>");
              infoWindow.open(options.map, marker3);
          }


      });

    }
    return marker;
  }

  /*
   * add markers to map
   */

  var marker1 = createMarker({
    position: new google.maps.LatLng(47.6425012,26.26066620000006),
    map: map,
  }, "<h1>The Makeup Academy</h1><p>0752 422 275</p><input type='button' class='button-Step1dot2dot1' value='Select' onclick='step2()'/>",2);

  var marker2 = createMarker({
    position: new google.maps.LatLng(47.642853,26.248365000000035),
    map: map,
  }, "<h1>Michelle Center</h1><p>0752 556 796</p><input type='button' class='button-Step1dot2dot1' value='Select' onclick='step2()'/>",3);

  var marker3 = createMarker({
    position: new google.maps.LatLng(47.6474023,26.247684800000002),
    map: map,
  }, "<h1>Carmen Style</h1><p>0230 520 888</p><input type='button' class='button-Step1dot2dot1' value='Select' onclick='step2()'/>",4);

  var marker0 = createMarker({
    position: new google.maps.LatLng(47.6433993,26.248653999999988),
    map: map,
  }, "<h1>Glow Beauty Place</h1><p>0752 566 796</p><input type='button' class='button-Step1dot2dot1' value='Select' onclick='step2()'/>",1);

});

})();
