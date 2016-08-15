;(function(){
	const selector = "#contact-form"
	
	$(selector).find(".input").on("change",(ev)=>{
		let $input = $(ev.target)
		
		let $next_input = $input.next()
		
		enfocar_siguiente_input($next_input)
		
	})
	// Helpers
	function validar_formulario(){
		
	}
	
	function es_valido_formulario(){
		
	}
	
	function enfocar_siguiente_input($next_input){
		$next_input.focus()
	}
	
})()