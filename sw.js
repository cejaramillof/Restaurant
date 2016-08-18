const CACHE_NAME = "restaurantefacilito"
const cache_urls = ["/offline/view.html","/offline/style.css","/offline/map.png"]
self.addEventListener("install",function(ev){
	caches.open(CACHE_NAME)
				.then(function(cache){
					console.log("Cache opened")
					return cache.addAll(cache_urls)
				})
})

self.addEventListener("fetch",function(ev){
	ev.respondWith(
		caches.match(ev.request)
					.then(function(response){
						if(response){
							return response
						}
						return fetch(ev.request)
					})
	)
})