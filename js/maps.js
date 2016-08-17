;(function(){
	
	class UserLocation{
		static get(callback){
			if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition((location)=>{
					callback({
						lat: location.coords.latitude,
						lng: location.coords.longitude
					})
				})
			}else{
				alert("No pudimos detectar el lugar en el que te encuentras.")
			}
		}		
	}
	
	google.maps.event.addDomListener(window,"load",()=>{
		const map = new google.maps.Map(
			document.getElementById('map'), {center: {lat: 6.234076, lng: -75.586069}, zoom: 15})
		
		UserLocation.get((coords)=>{
			console.log(coords)
		})
	})
})()