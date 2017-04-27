<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$empresa = $_POST['empresa'];

$header = 'De: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ", de la empresa " . $empresa . " \r\n";
$mensaje .= "Su e-mail es: " . $email . " \r\n<br>";
$mensaje .= "Su asunto: " . $_POST['asunto'] . " \r\n<br>";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n<br>";
$mensaje .= "Enviado el " . date('d/m/Y', time()) . "<br>";

if($_POST['condiciones']!= NULL){
	$mensaje .= "SI acepta la politica de privacidad de datos.";
}
else{
	$mensaje .= "NO acepta la politica de privacidad de datos.";
}

$para = 'proyectos@decospaces.com';
$asunto = 'Contacto desde WEB Deco Spaces';

mail($para, $asunto, utf8_decode($mensaje), $header);
echo($mensaje);

//Header("Location: index.html"); 
?>