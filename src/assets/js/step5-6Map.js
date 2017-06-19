/* under construction */


/*
* declare map as a global variable
*/
var map;
var nr;

/*
* use google maps api built-in mechanism to attach dom events
*/
google.maps.event.addDomListener(window, "click", function () {

/*
 * create map
 */
var map = new google.maps.Map(document.getElementById("map-areaSelected"), {
  center: new google.maps.LatLng(47.6433993,26.248653999999988),
  zoom: 16,
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

/*
 * create infowindow (which will be used by markers)
 */
var infoWindow = new google.maps.InfoWindow();

/*
 * marker creater function (acts as a closure for map parameter)
 */
function createMarkerSelected(position, map, label) {
  var marker = new google.maps.Marker(position);

      infoWindow.setContent(map);
      infoWindow.open(position.map, marker);

  if (map) {
    google.maps.event.addListener(marker, "click", function () {

      infoWindow.setContent(map);
      infoWindow.open(position.map, this);
    });
  }
  return marker;
}

/*
 * add markers to map
 */
 if($(".accordion-content").first().hasClass('js-activeAdress')){
    var marker0 = createMarkerSelected({
      position: new google.maps.LatLng(47.6433993,26.248653999999988),
      map: map,
    },
    "<h1>Glow Beauty Place</h1><p>0752 566 796</p>",1);
  }

 if($(".accordion-content").eq(1).hasClass('js-activeAdress')){
    var marker1 = createMarkerSelected({
      position: new google.maps.LatLng(47.6425012,26.26066620000006),
      map: map
    }, "<h1>The Makeup Academy</h1><p>0752 422 275</p>",2);
}

 if($(".accordion-content").eq(2).hasClass('js-activeAdress')){
  var marker2 = createMarkerSelected({
    position: new google.maps.LatLng(47.642853,26.248365000000035),
    map: map
  }, "<h1>Michelle Center</h1><p>0752 556 796</p>",3);
}

 if($(".accordion-content").eq(3).hasClass('js-activeAdress')){
  var marker3 = createMarkerSelected({
    position: new google.maps.LatLng(47.6474023,26.247684800000002),
    map: map
  }, "<h1>Carmen Style</h1><p>0230 520 888</p>",4);
}


});
