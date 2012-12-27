$(document).ready(function(){
	var bot;
	bot = $("#bot");
	bot.click(ventanaNueva);
$("#mensaje").hide();	
   var w = $(this).width();
   var h = $(this).height();
   
   //Centra el popup   
   w = (w/2);
   h = (h/2);
   $("#mensaje").css("left",w + "px");
   $("#mensaje").css("top",h + "px");

});

function enviar(){
	if($("#url").val() == ""){
		if(validarInputSelect() & validarRadio()){
		 registrar();
	}
	}
	else{
		if(validarInputSelect() & validarRadio() & validarUrl()){
		 registrar();
	}		
	}
}

function validarInputSelect(){//validar si los datos son vacios
	if($("#nomb").val()=="" || $("#apell").val()=="" || $("#fecha").val()=="" 
	   || $("#email").val()=="" || $("#user").val()=="" || $("#pass").val()==""
	   ||  $("#select").val()=="" ||  $("#prov").val()==""){	   	
	   	//alert("validando select input");
		return false;	
	}
	else{		
		//alert("validando select  true");
		return true;
	}	
}

function validarRadio(){//validar qu eradio se haya seleccionado
	if(!$("#si").is(':checked') & !$("#no").is(':checked')){
		return false;
	}
	else{
		return true;
	}
}

function validarUrl(){
var url = $("#url").val();
if(/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url)) {
  return true;
} else {
  return false;
}	
}

function registrar(){//registrar datos
	var datos = "nomb="+$("#nomb").val()+"&apell="+$("#apell").val()+"&fecha="+$("#fecha").val()+
				 "&email="+ $("#email").val()+"&user="+$("#user").val()+"&pass="+$("#pass").val()+
				 "&pais="+$("#select").val()+"&prov="+$("#prov").val();//datos a enviar por metodo get
			
	$.ajax({
		async:true,
		type:"GET",
		datetype:"html",
		url:"mvc.php?op=guardar&"+datos,
		success:borrar,
		error:problemas				
	});
}

function antesdeEnviar(){
	var x=$("#form");
	x.html('Cargando');
}

function problemas(){
	$("#form").text('Problemas en el servidor.');
}


function  formulario(){
		
	form = '<fieldset><legend>Datos Personales</legend><div class="campos"><label >Nombres*</label><input name="nomb" id="nomb" required  form="form" type="text"/></div>';
	form+='<div class="campos"><label>Apellidos*</label><input name="apell"  id="apell" required type="text"  form="form" /></div>';
	form+='<div class="campos"><label>Nacimiento*</label><input name="fecha" id="fecha"   required type="date"  form="form" /></div><div class="campos"><label >E-mail*</label>';
	form+='<input name="email" id="email"  required type="email"  form="form" /></div><div class="campos"><label>Pais*</label><select required="required" name="select" id="select">';
	form+='<option value="">Escoje opcion</option><option>Colombia</option><option>Venezuela</option><option>Ecuador</option><option>Chile</option>';
	form+='<option>Bolivia</option><option>Argentina</option></select></div><div class="campos"><label>Ciudad/provincia*</label><input  type="text" required="required" name="prov" id="prov">';
	form+='</div></fieldset><fieldset><legend>Datos de usuario</legend><div class="campos"><label >Usuario* </label><input name="user" id="user"  required type="text"  form="form" /></div>	';
	form+='<div class="campos"><label >Password* </label><input name="pass" id="pass" required type="password"  form="form" title="Por favor digite carateres letras y numeros"/></div>'								;
	form+='<div class="campos"><label >Pagina web </label><input name="url"  id="url" type="url"  form="form" /></div><div class="campos"><label >Desea recibir notificaciones en su correo?*</label>';						
	form+='<input type="radio" id="si" name="preg" value="0" required /><label>Si</label><input type="radio" id="no" name="preg" value="1"required /><label>No</label>';								
	form+='<div></fieldset><div id="botones"><input  type="submit" id="bot"  required form="form" value="Registrar" /><input  type="button" required form="form" value="Cancelar"/></div>'	;

	document.getElementById("form").innerHTML= form;			
}

function borrar(data){
	//alert(data);
	var json = eval("(" + data + ")");
	//alert(json.aviso);
	$("#mensaje").html("Sus sus datos han sido registrados satisfactoriamente");


	$("#nomb").attr("value","");
	$("#apell").attr("value","");
	$("#fecha").attr("value","");
	$("#email").attr("value","");
	$("#user").attr("value","");
	$("#email").attr("value","");
	$("#pass").attr("value","");
	$("#select").attr("value","");
	$("#url").attr("value","");
	$("#prov").attr("value","");
	//$("#si").attr("checked","false");
	//$("#no").attr("checked","false");

}

function ventanaNueva(){


     //temporizador, para que no aparezca de golpe
   setTimeout("mostrar()",150);   
$("#mensaje").click(function (){
      $(this).fadeOut('slow');
   }); 
}
function mostrar() {
   $("#mensaje").fadeIn('slow');
}