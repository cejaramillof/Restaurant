;(function(){
	google.maps.event.addDomListener(window,"load",()=>{
		const map = new google.maps.Map(
			document.getElementById('map'), {center: {lat: 6.234076, lng: -75.586069}, zoom: 16})
	})
})()