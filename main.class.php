<?php
class catalogo{
	var $server = "localhost";
	var $user = "fdvergara";
	var $pass = "Vergarag87@";
	var $bd = "catalogo";
	var $conexion;

	function  conexion(){
		 $this->conexion = mysql_connect($this->server,$this->user,$this->pass)or die("Error al conectar");
	}

	function desconectar(){
	    mysql_close($this->conexion);
	}

	function conectarBd(){
		mysql_select_db($this->bd,$this->conexion);
	}

	function ejecutarConsulta($sql){//or die ("Error al realizar registro del usuario")
	//echo $sql;
		mysql_query($sql,$this->conexion) ;
		//echo mysql_affected_rows();
	}

	function guardar($tabla,$datos){
		$i = 0;
		$nombre = "";
		$contenido = "";
		foreach ($datos as $dato => $value) {
			$i++;
			if($i==1){
				$nombre = $nombre.$dato;
				$contenido =  $contenido."'".$value."'";
			}
			else{
				$nombre = $nombre.','.$dato;
				$contenido =  $contenido.','."'".$value."'";
			}
		}
		$sql = "insert into ".$tabla." (".$nombre.") values (".$contenido.")";
		$this->ejecutarConsulta($sql);

	}
	
}
?>