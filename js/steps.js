;(function(){
	
	//$(".step:nth-child(1)").addClass("active")
	
	const selector = "#contact-form"
	
	$(".path-step").on("click",(ev)=>{
		const $current_circle = $(ev.target)
		
		focus_circle($current_circle)
		
		const posicion = $current_circle.index(".path-step") + 1
		
		let $test = $(".step:nth-child("+posicion+")")
		
		siguiente($test)
	})
	
	$(selector).find(".input").on("change",(ev)=>{
		let $input = $(ev.target)
		
		let $next_step = $input.parent().next(".step")
		
		if($next_step.length > 0 ){
			siguiente($next_step)
		}else{
			validar_formulario()
		}
		
		
	})
	// Helpers
	function validar_formulario(){
		document.querySelector(selector).checkValidity()
	}
	
	function es_valido_formulario(){
		if(es_valido_formulario()){
			
		}else{
			let $fieldset_invalido = $(selector).find(".input:invalid").first().parent
			siguiente($fieldset_invalido)
		}
	}
	
	function siguiente($next_step){
		$(".step.active").removeClass("active")
		$next_step.addClass("active")
		$next_step.find(".input").focus()
		
		// Coordinar los circulos
		const posicion = ($next_step.index(".step") * 2) + 1
		
		const $circle = $(".path-step:nth-child("+posicion+")")
		
		focus_circle($circle)
		
		//$next_step.focus()
	}
	
	function focus_circle($circle){
		$(".path-step.active").removeClass("active")
		$circle.addClass("active")
	}
	
})()