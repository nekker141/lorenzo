  $(document).ready(function(){


$("#formulario").submit(function(e){
  e.preventDefault();
    //Impido que se envíe el formulario hasta saber si todo va bien

    var error = document.getElementById('error3');

    //ValOK nos dirá si todo ha ido bien cuando acabe la validación
    var ret = true;

    // validar nombre
    var nombre = document.forms["formulario"]["nombre"].value;
    if ( nombre == null || nombre == "" || nombre.length == 0  || /^\s+$/.test(nombre) || !isNaN(nombre) ) {
        ret = false;
       document.getElementById("nombre").style.border = '1px solid red';
     }else{
       document.getElementById("nombre").style.border = '1px solid lightgray';
     }

     // validar apellidos
     var apellidos = document.forms["formulario"]["apellidos"].value;
     if ( apellidos == null || apellidos == "" || apellidos.length == 0  || /^\s+$/.test(apellidos) || !isNaN(apellidos) ) {
         ret = false;
        document.getElementById("apellidos").style.border = '1px solid red';
      }else{
        document.getElementById("apellidos").style.border = '1px solid lightgray';
      }

      // validar provincia
      var provincia = document.forms["formulario"]["provincia"].value;
      if ( provincia == null || provincia == "" || provincia.length == 0  || /^\s+$/.test(provincia) || !isNaN(provincia) ) {
          ret = false;
         document.getElementById("provincia").style.border = '1px solid red';
       }else{
         document.getElementById("provincia").style.border = '1px solid lightgray';
       }
       // validar ciudad
       var ciudad = document.forms["formulario"]["ciudad"].value;
       if ( ciudad == null || ciudad == "" || ciudad.length == 0  || /^\s+$/.test(ciudad) || !isNaN(ciudad) ) {
           ret = false;
          document.getElementById("ciudad").style.border = '1px solid red';
        }else{
          document.getElementById("ciudad").style.border = '1px solid lightgray';
        }

        // validar motivos cita
        var cita = document.forms["formulario"]["cita"].value;
        if ( cita == null || cita == "" || cita.length == 0  || /^\s+$/.test(cita) || !isNaN(cita) ) {
            ret = false;
           document.getElementById("cita").style.border = '1px solid red';
         }else{
           document.getElementById("cita").style.border = '1px solid lightgray';
         }


      // validar motivos hora
      var hora = document.forms["formulario"]["hora"].value;
      if ( hora == null || hora == "" || hora.length == 0  ||!(/^\d{2}$/.test(hora)) || hora < 8 || hora > 21) {
          ret = false;
         document.getElementById("hora").style.border = '1px solid red';
       }else{
         document.getElementById("hora").style.border = '1px solid lightgray';
       }

       //Validamos fecha
       var date = new Date();
       var dateactual = date.getTime();


       var fecha = document.forms["formulario"]["fecha"].value;
       var d = Date.parse(fecha);

       if ( fecha == "" || d < dateactual) {
           ret = false;
           document.getElementById("fecha").style.border = '1px solid red';
        }else{
          document.getElementById("fecha").style.border = '1px solid lightgray';
        }



    if (ret){
          $.get("../cita.php", {nombre:document.forms["formulario"]["nombre"].value, apellidos:document.forms["formulario"]["apellidos"].value, provincia:document.forms["formulario"]["provincia"].value, ciudad:document.forms["formulario"]["ciudad"].value, fecha:document.forms["formulario"]["fecha"].value, hora:document.forms["formulario"]["hora"].value, cp:document.forms["formulario"]["codigo"].value, motivo:document.forms["formulario"]["cita"].value }, function(data, status){
            var respuesta = JSON.parse(data);
            console.log(respuesta);
            if(respuesta == true){

              alertify.confirm('Muchas Gracias!', 'Su petición de cita se ha registrado correctamente, contactaremos con usted los más pronto posible.', function(){ window.location.href = "index.html"; }
                , function(){ window.location.href = "index.html"; });


            }
          });
    }
});

});
