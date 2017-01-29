$(document).ready(function() {
	navigator.geolocation.getCurrentPosition(function (position){
                var lat = position.coords.latitude;
                var long = position.coords.longitude;
            });
	var api = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCgIHb-VjWfrR5SMuoNJnPK3CNU9UbDfkA&callback=initMap&&libraries=places"

	var map;
	var service;
	var infowindow;

	function initialize() {
	  var pyrmont = new google.maps.LatLng(lat, long);

	  map = new google.maps.Map(document.getElementById('map'), {
	      center: pyrmont,
	      zoom: 15
	    });

	  var request = {
	    location: pyrmont,
	    radius: '500',
	    types: ['store']
	  };

	  service = new google.maps.places.PlacesService(map);
	  service.nearbySearch(request, callback);
	}

	function callback(results, status) {
	  if (status == google.maps.places.PlacesServiceStatus.OK) {
	    for (var i = 0; i < results.length; i++) {
	      var place = results[i];
	      createMarker(results[i]);
	    }
	  }
	}
});