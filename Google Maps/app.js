function initMap() {

	var center = {
		lat: 28.5383,
		lng: -81.3792
	};

	var map = new google.maps.Map(document.getElementById('map'), {
		center: center,
		zoom: 14,
		disableDefaultUI: true
	});

	var marker = new google.maps.Marker({
		position: center,
		map: map,
	});

	var geocoder = new google.maps.Geocoder();

	if (!navigator.geolocation) {

		return;
	}

	navigator.geolocation.getCurrentPosition(function(position) {

		var pos = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		};

		map.setCenter(pos);



	}, function() {

	});

	var timer;

	map.addListener('center_changed', function(test) {

		marker.setPosition(map.center);

		try {
			clearTimeout(timer);
		} catch (e) {

		}

		timer = setTimeout(function() {

			geocoder.geocode({
				'location': map.center
			}, function(results, status) {

				if (status !== 'OK') {
					return;
				}

				console.log(results)

				document.getElementById('address').value = results[0].formatted_address;

			});

		}, 2000);

	});

}