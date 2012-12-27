<?php
class catalogo{
	var $server = "localhost";
	var $user = "fdvergara";
	var $pass = "Vergarag87@";
	var $bd = "catalogo";
	var $conexion;

	function  conexion(){
		// $this->conexion = mysql_connect($this->server,$this->user,$this->pass)or die("Error al conectar");
	}

	function desconectar(){
	   // mysql_close($this->conexion);
	}

	function conectarBd(){
	//	mysql_select_db($this->bd,$this->conexion);
	}

	function ejecutarConsulta($sql){
	//	mysql_query($sql,$this->conexion);
	}

	/*function guardar($tabla,$datos){
		$i = 0;
		$nombre = "";
		$contenido = "";

		foreach ($variable as $dato => $value) {
			$i++;
			if($i==1){
				$nombre = $nombre.','.$dato;
				$contenido =  $contenido.','."'".$value."'";
			}
			else{
				$nombre = $nombre.','.$dato;
				$contenido =  $contenido.','."'".$value."'";
			}
		}

		$sql = "INSERT INTO FROM ".$tabla."(".$nombre.").values(".$contenido.")";
		$this->ejecutarConsulta($sql);

	}*/
	
}
?>