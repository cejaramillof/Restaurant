if(navigator.serviceWorker){
	navigator.serviceWorker.register("/sw.js")
}

;(function(){
	//Si menu esta oculto o no, sticky false = oculto
	let sticky = false
	let currentPosition = 0
	
	const imageCounter = $("[data-name='image-counter']").attr("content")
	const email = "cejaramillof@gmail.com"
	
	$("#contact-form").on("submit",function(ev){
		ev.preventDefault()
				
		sendForm($(this))
		return false
	})
	
	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)
	checkScroll()
	$("#menu-opener").on("click",toggleNav)
	
	$(".menu-link").on("click",toggleNav)
										 
	setInterval(()=>{
		
		if(currentPosition < imageCounter){
			currentPosition++
		}else{
			currentPosition = 0
		}
		
		$("#gallery .inner").css({
			left: "-"+currentPosition*100+"%"
		})
	},4000)
	
	$(window).scroll(checkScroll)
	
	function checkScroll(){
		const inBottom = isInBottom()
		
		if(inBottom && !sticky){
			//Mostrar la navegación sticky
			sticky = true
			stickNavigation()
		}
		if(!inBottom && sticky){
			//Ocultar la navegación sticky
			sticky = false
			unStickNavigation()
		}
	}
	function toggleNav(){
		$("#responsive-nav ul").toggleClass("active")
		$("#menu-opener").toggleClass("glyphicon-menu-hamburger")
	}
	
	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navigation").slideUp()
		$("#sticky-navigation").slideDown("fast")
	}
	
	function unStickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute")
		$("#navigation").slideDown("fast")
		$("#sticky-navigation").slideUp("fast")
	}
	
	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()
	
		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 3)
	}
	
})()