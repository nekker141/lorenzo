  $(document).ready(function(){

    //EL logo nos lleva a la pagina principal
    $("#logo").click(function(){
      window.location.href = "index.html";
    });

    // Coger el usuario del sessionStorage// o localstorage

      var nombre = sessionStorage.getItem("username");
      var nombre2 = localStorage.getItem("username");

      //No dejar entrar a blog y asesoramientos

      $("#blog").click(function(){
        var nombre = sessionStorage.getItem("username");
        var nombre2 = localStorage.getItem("username");

        if(nombre != null || nombre2 != null){
          window.location.href = "blog.html";
        }else{
         alertify.alert('Espera!',"Debes estar registrado para acceder.");
        }
      });

      $("#asesoramiento").click(function(){
        var nombre = sessionStorage.getItem("username");
        var nombre2 = localStorage.getItem("username");

        if(nombre != null || nombre2 != null){
          window.location.href = "asesoramiento.html";
        }else{
         alertify.alert('Espera!',"Debes estar registrado para acceder.");
        }
      });


      if(nombre != null){
        botones.innerHTML = "Bienvenido "+nombre+"! <button type='button' class='btn btn-warning' id='cerrarsesion' style='margin-left:30px'>Salir</button>";
        botones.style.color = "white";
      }else if(nombre2 != null){
        botones.innerHTML = "Bienvenido "+nombre2+"! <button type='button' class='btn btn-warning' id='cerrarsesion' style='margin-left:30px'>Salir</button>";
        botones.style.color = "white";
      }

    // Botón cerrar sesión

      $("#cerrarsesion").click(function(){
        sessionStorage.removeItem("username");
        localStorage.removeItem("username");
        window.location.href = "index.html";
      });

          //BOTON LOGIN
      $("#login").submit(function(e){
            e.preventDefault();
            $.post("../login.php", {usr:usuario.value, pass:pass.value}, function(data, status){
                var respuesta = JSON.parse(data);

                if(respuesta.estatus == true){
                  if(recordarme.checked){
                    localStorage.setItem("username", usuario.value);
                  }else{
                    sessionStorage.setItem("username", usuario.value);
                  }

                  var nombre = sessionStorage.getItem("username");
                  var nombre2 = localStorage.getItem("username");

                  if(nombre != null){
                    botones.innerHTML = "Bienvenido "+nombre+"! <button type='button' class='btn btn-warning' id='cerrarsesion' style='margin-left:30px'>Salir</button>";
                    botones.style.color = "white";
                  }else if(nombre2 != null){
                    botones.innerHTML = "Bienvenido "+nombre2+"! <button type='button' class='btn btn-warning' id='cerrarsesion' style='margin-left:30px'>Salir</button>";
                    botones.style.color = "white";
                  }

                  $('#cerrar').click();
                }else{
                  var err = document.getElementsByClassName('errores')[0];
                  err.style.color="red";
                  err.innerHTML = "Usuario incorrecto";
                }

                // Botón cerrar sesión

                $("#cerrarsesion").click(function(){
                  sessionStorage.removeItem("username");
                  localStorage.removeItem("username");
                  window.location.href = "index.html";
                });

            });

      });

      // FORMULARIO REGISTRO VALIDACION y REGISTRARSE

        $("#registro").submit(function(e){
          e.preventDefault();

          var error = document.getElementById('error2');
          var errList ="";
          var ret = true;

        // validar nombre
        var nomForm = document.forms["formulario"]["usu1"].value;
        if ( nomForm == null || nomForm == "" || nomForm.length == 0  || /^\s+$/.test(nomForm) || !isNaN(nomForm) ) {
            ret = false;
           document.getElementById("usuario1").style.border = '1px solid red';
         }else{
           document.getElementById("usuario1").style.border = '1px solid lightgray';
         }


                   /* validar email*/
                   var email = document.forms["formulario"]["email1"].value;
                   if ( ! (/^\w+([\.\-\+]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,4})+$/.test(email)) ){
                     ret = false;
                     document.getElementById("email1").style.border = '1px solid red';

                      }else{
                        document.getElementById("email1").style.border = '1px solid lightgray';
                      }



                        /*Validar contraseñas*/
                        var contra = document.forms["formulario"]["pass1"].value;
                        var contra2 = document.forms["formulario"]["pass2"].value;
                        if (contra != contra2 || contra == "" || contra2 == ""){
                          ret = false;
                          document.getElementById("pass1").style.border = '1px solid red';
                           }else{
                             document.getElementById("pass1").style.border = '1px solid lightgray';
                           }

                           // seleccionar el check acuerdo de licencia

                           if(!condiciones.checked && ret == true){
                             ret = false;
                             alertify.alert('Por favor!',"Acepta los Términos y condiciones.");
                           }

                if (ret == true){

                   $.post("../registro.php",{nombre:nomForm, email:email, pass:contra } ,  function(data, status){
                        var respuesta = JSON.parse(data);
                        console.log(respuesta);
                        if(respuesta == "true"){
                          alertify.alert('Gracias!',"Te has registrado correctamente!");
                          $('#close').click();
                        }else{
                          alertify.alert('Error!',"El usuario o email ya existen!");
                        }
                    });


                 }

              return ret;

            });


});
