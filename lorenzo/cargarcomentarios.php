<?php
  $link = mysqli_connect("localhost", "root", "", "proyecto");

  $comments = []; //CREAMOS ARRAY PARA LLENAR DE DATOS
  $articulo=$_GET['articulo'];

  $sql = "SELECT * from comentarios where articulo='$articulo'";
  $RScP = mysqli_query($link, $sql);


  while ($filacomment = mysqli_fetch_assoc($RScP)) {
    $user = $filacomment['username'];
    $comentario = $filacomment['comentario'];
    $fecha = $filacomment['fecha'];


    array_push ( $comments , array($user,$comentario,$fecha));

  }

  echo json_encode($comments);

?>
