<?php

try{
  require_once 'cfg.php';
  require_once 'libs/ErrorHandler.php';
  require_once 'libs/DB.php';
  require_once 'libs/jwt_helper.php';

  $method = $_SERVER['REQUEST_METHOD'];

  switch($method){
    case 'POST':

    $conn = DB::getDbConn();

    $name=$_POST['nombre'];
    $email=$_POST['email'];
    $pass=$_POST['pass'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE username = '$name';");
    $stmt -> execute();
    $stmt->setFetchMode(PDO::FETCH_OBJ);

    $stmtp = $conn->prepare("SELECT * FROM users WHERE email = '$email';");
    $stmtp -> execute();
    $stmtp->setFetchMode(PDO::FETCH_OBJ);

    $link = mysqli_connect("localhost", "root", "", "proyecto");



    if($stmt->rowcount()==1  || $stmtp->rowcount()==1){

      echo json_encode('false');

    }else{
      $sql = "INSERT INTO users (username, password, email) VALUES
                  ('$name', '$pass', '$email')";

      if(mysqli_query($link, $sql)){};

      echo json_encode('true');
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
