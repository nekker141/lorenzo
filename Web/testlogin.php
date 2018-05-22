<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->


<html>
<head>
  <meta charset="UTF-8">
  <title>Login page</title>
  <script type="text/javascript">
  onload = function(){
  var xhr = new XMLHttpRequest();

  document.forms[0].onsubmit = function(e){
    e.preventDefault();
    var url = "login.php";
    xhr.open("POST",url,true);
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        var respuesta = JSON.parse(xhr.responseText);
        console.log(respuesta);

        if (respuesta.estatus == true){
              alert("logueado");
        }else{
          alert("usuario incorrecto");
        }
      }
    }

    var formulario = document.forms[0];
    var objFD = new FormData(formulario);
    xhr.send(objFD);
  }
}
  </script>
</head>
<body>
  <form action="login.php" method="POST">
  Nombre de usuario: <input type="text" name="usr"><br>
  Contraseña: <input type="password" name="pass"><br>
  <input type="submit" id="login" name="login" value="Enviar">
  </form>
</body>
</html>
