<?php

try{
  require_once 'cfg.php';
  require_once 'libs/ErrorHandler.php';
  require_once 'libs/DB.php';
  require_once 'libs/jwt_helper.php';

  $method = $_SERVER['REQUEST_METHOD'];

  switch($method){
    case 'GET':

    $conn = DB::getDbConn();

    $nombre=$_GET['nombre'];
    $apellidos=$_GET['apellidos'];
    $provincia=$_GET['provincia'];
    $ciudad=$_GET['ciudad'];
    $fecha=$_GET['fecha'];
    $hora=$_GET['hora'];
    $cp=$_GET['cp'];
    $motivo=$_GET['motivo'];

    $link = mysqli_connect("localhost", "root", "", "proyecto");

      $sql = "INSERT INTO cita (nombre, apellidos, provincia, ciudad, dia, hora, cp, motivos) VALUES
                  ('$nombre','$apellidos', '$provincia', '$ciudad', '$fecha', '$hora', '$cp', '$motivo')";

      if(mysqli_query($link, $sql)){

        echo json_encode(true);
      }


    break;

    default:
      //Método no soportado
      http_response_code(405);
      header('Allow: POST');
    break;
  }

} catch (PDOException $e) {
  echo "Error: " . $e->getMessage();
}


// Close connection
mysqli_close($link);

?>
