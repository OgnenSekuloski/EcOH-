var map;

function displayLocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

  showMap(position.coords);
}

function showMap(coords) {
	var googleLatLong = new google.maps.LatLng(coords.latitude, coords.longitude);
	var mapOptions = {
		zoom: 12,
		center: googleLatLong,
		mapTypeId: google.maps.MapTypeId.ROADMAP,mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
  };

var mapDiv = document.getElementById("map");
map = new google.maps.Map(mapDiv, mapOptions);

//Hiding features=============================
// Add controls to the map, allowing users to hide/show features.
 var styleControl = document.getElementById('style-selector-control');
 map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

 // Apply new JSON when the user chooses to hide/show features.
 document.getElementById('hide-poi').addEventListener('click', function() {
   map.setOptions({styles: styles['hide']});
 });
 document.getElementById('show-poi').addEventListener('click', function() {
   map.setOptions({styles: styles['default']});
 });
}

//================================================

function displayError(error) {
  var errors = ["Unknown error", "Permission denied by user", "Position not available", "Timeout error"];
  var message = errors[error.code];
  console.warn("Error in getting your location: " + message, error.message);
}

window.onload = function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation, displayError);
  } else {
    alert("Sorry, this browser doesn't support geolocation!");
  }
};


//==================================================
var styles = {
  default: null,
  hide: [
    {
      featureType: 'poi.business',
      stylers: [{visibility: 'off'}]
    },
    {
      featureType: 'transit',
      elementType: 'labels.icon',
      stylers: [{visibility: 'off'}]
    }
  ]
};
