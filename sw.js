const CACHE_NAME = "restaurantefacilito"
const cache_urls = ["/offline/view.html","/offline/style.css","/offline/map.png"]
self.addEventListener("install",function(ev){
	caches.open(CACHE_NAME)
				.then(function(cache){
					console.log("Cache opened")
					return cache.addAll(cache_urls)
				})
})