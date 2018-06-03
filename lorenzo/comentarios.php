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

    $comment=$_GET['comentario'];
    $user=$_GET['user'];
    $articulo=$_GET['articulo'];

    $link = mysqli_connect("localhost", "root", "", "proyecto");



      $sql = "INSERT INTO comentarios (username, comentario, fecha, articulo) VALUES
                  ('$user','$comment', NOW(), '$articulo')";

      if(mysqli_query($link, $sql)){
        // sacamos y devolvemos fecha del ultimo comentario
        $sql2="SELECT max(fecha) from comentarios where username='$user'";
        $result=mysqli_query($link,$sql2);
        $row  = mysqli_fetch_array($result,MYSQLI_NUM);
        echo ($row[0]);
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
