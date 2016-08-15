;(function(){
	
	let sticky = false
	console.log($(window).height())
	$(window).scroll(()=>{
		console.log(isInBottom())
	})
	
	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()
	
		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 1.5)
	}
	
})()