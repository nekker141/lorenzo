<?php
  $link = mysqli_connect("localhost", "root", "", "proyecto");

  $comments = []; //CREAMOS ARRAY PARA LLENAR DE DATOS
  $articulo=$_GET['articulo'];


  $sql2="SELECT count(*) from comentarios where articulo='$articulo'";
  $result=mysqli_query($link,$sql2);
  $row  = mysqli_fetch_array($result,MYSQLI_NUM);
  echo ($row[0]);

?>
