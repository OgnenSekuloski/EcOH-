var map;

//Adding geoJson data in js variable
var geoJson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.799951553344727,
          41.112583976433264
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.802172422409058,
          41.11345696798641
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.80984354019165,
          41.11193730853908
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.810382664203644,
          41.11004374747908
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.80619305372238,
          41.11507156760562
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.80239236354828,
          41.11682555572975
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.802499651908875,
          41.118947252919156
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.78271299600601,
          41.123350060910624
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.801480412483215,
          41.11278605884391
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.809784531593323,
          41.10594522339876
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.805844366550446,
          41.108657391733345
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.809516310691833,
          41.10710932725588
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.814167261123657,
          41.11787226824777
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.799661874771118,
          41.11798542535806
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.801303386688232,
          41.11586369707809
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.804741978645325,
          41.11433601025081
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.804031193256378,
          41.11435419720785
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.807177424430847,
          41.112511226613165
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.800777673721313,
          41.114574461065374
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.8071506023407,
          41.12370364672002
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.807711184024807,
          41.111541221308336
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.805903375148773,
          41.11079349910424
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.804412066936493,
          41.11172107754093
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.79083740711212,
          41.123624847761754
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад, хартија и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.803690552711487,
          41.118029879883714
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.778579711914062,
          41.12251963188991
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.79337477684021,
          41.11930288307009
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
        "description": "Контејнери за комунален отпад и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.818032324314117,
          41.11209089274072
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "icon": "https://maps.google.com/mapfiles/ms/icons/green.png",
			  "description": "Контејнери за комунален отпад и пластика"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.817286670207977,
          41.112624392965145
        ]
      }
    }
  ]
};

function showMap(coords) {
	var googleLatLong = new google.maps.LatLng(coords.latitude, coords.longitude);
	var mapOptions = {
		zoom: 15,
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
 //GeoJSON
 var markerCollection = map.data.addGeoJson(geoJson);
 for (var i = 0, length = markerCollection.length; i < length; i++) {
	 var feature = markerCollection[i];

	 if (feature.getProperty('icon')) {
		 map.data.setStyle(function(feature) {
			 return {
				 icon: feature.getProperty('icon')
			 };
		 });
	 }
}
	//============================================
	// When the user clicks, open an infowindow
	var infowindow = new google.maps.InfoWindow();
	map.data.addListener('click', function(event) {
	var myHTML = event.feature.getProperty("description");
	infowindow.setContent("<div style='width:150px;'>"+myHTML+"</div>");
	// position the infowindow on the marker
	infowindow.setPosition(event.feature.getGeometry().get());
	// anchor the infowindow on the marker
	infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
	infowindow.open(map);
});
  //Marker clustering
  map.data.loadGeoJson(geoJson, null, function(features) {

    // group items / cluster
    var markers = features.map(function(feature) {
        var g = feature.getGeometry();

        var marker = new google.maps.Marker({
            'position': g.get(0),
            'data' : feature
        });

        return marker;
    });

    // create a new marker cluster
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m',
        gridSize: 15,
        zoomOnClick: false
    });

    // add event listener to the cluster
    google.maps.event.addListener(markerCluster, 'clusterclick', function (cluster) {
     // handle clickevent
    });

});
//=================================
}
//================================================
window.onload = function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation, displayError);
  } else {
    alert("Sorry, this browser doesn't support geolocation!");
  }
};

function displayError(error) {
  var errors = ["Unknown error", "Permission denied by user", "Position not available", "Timeout error"];
  var message = errors[error.code];
  console.warn("Error in getting your location: " + message, error.message);
}


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
