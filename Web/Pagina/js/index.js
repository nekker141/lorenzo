  $(document).ready(function(){




      $("#botonlogin").click(function(){
        $.post("../login.php", {usr:email.value, pass:password.value}, function(data, status){
            var respuesta = JSON.parse(data);
            console.log(respuesta.estatus);
            console.log(status);
            if(respuesta.estatus == true){
              alert("GG!");
                  sessionStorage.setItem("username", email.value);
            }else{
              alert("usuario incorrecto");
            }
        });
      });

});
