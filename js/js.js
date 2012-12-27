	
		$.webshims.setOptions('forms', { 
			customMessages: true 
		});

		$.webshims.setOptions({
			waitReady: false
		});
		$.webshims.polyfill();
		
		$(function(){
			var showHideFormsExt = function(){
				$('span.forms-ext-feature')[this.checked ? 'show' : 'hide']();
			};
			$('#show-forms-ext')
				.each(showHideFormsExt)
				.click(showHideFormsExt);
		});

function enviar(){

	var a = document.getElementById("nomb").value;

	if(a==""){
		alert("vacio");
	}
	else{
		alert("envialo");
	}

}
	