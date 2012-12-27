<?php
	include("main.class.php");
	$catalogo = new catalogo;
	$op = $_GET["op"];
	$nomb = $_GET["nomb"];
	$apell = $_GET["apell"];
	$fecha = $_GET["fecha"];
	$email = $_GET["email"];
	$user = $_GET["user"];
	$pass = $_GET["pass"];
	$pais = $_GET["pais"];
	$prov = $_GET["prov"];

	$datos = array(
		"nombre" => $nomb,
		"apellido" => $apell,
		"fnacimiento" => $fecha,
		"email" => $email,
		"user" => $user,
		"pass" => $pass,
		"pais" => $pais,
		"ciudad" => $prov
	);			    
				 

	if($op == "guardar"){		
	$catalogo->conexion();
	$catalogo->conectarBd();
	//echo "datos aca:".$datos;
	$catalogo->guardar("usuarios",$datos);
	 $data["aviso"]="Sus datos ha sido registrados correctamente";
	 $dato_json=json_encode($data);
	 echo $dato_json;
		//$catalogo->guardar("personas",$datos);hola
	}
?>