
$(document).ready(function() {
	
	$('#Overview').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

	$('#Visits').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

	$('#Bills').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

	$('#Export').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})



	var api = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCgIHb-VjWfrR5SMuoNJnPK3CNU9UbDfkA&callback=initMap";

	$("#Caregivers").on("click", function() {
	  var scriptTag = "<div id = \"map\"></div>"
      var initMap = "<script> function initMap() {\n alert('sup');\n \nvar bish = {lat: -25.363, lng: 131.044};\n "
		+ "var map = new google.maps.Map(document.getElementById('map'),"+
		" {\nzoom: 4, \ncenter: bish\n });\nvar marker = new google.maps.Marker({\nposition: bish, \nmap: map\n});}\n</script>\n";
	  var mapApi = "<script async defer\n src=\""+ api +"\"></script>";
	  var html = scriptTag + initMap + mapApi;
	  $(".map-section").html(html);

/*<script>
            function initMap() {
              var uluru = {lat: -25.363, lng: 131.044};
              var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: uluru
              });
              var marker = new google.maps.Marker({
                position: uluru,
                map: map
              });
            }
          </script>
          <script async defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCgIHb-VjWfrR5SMuoNJnPK3CNU9UbDfkA&callback=initMap&&libraries=places">
          </script>*/
    });
});