$(document).ready(function(){

  $.get("../contarcomentarios.php", {articulo:1}, function(data, status){
   var respuesta = JSON.parse(data);
   console.log(respuesta);
   document.getElementsByClassName('com')[0].innerHTML = respuesta;
  });


  $.get("../contarcomentarios.php", {articulo:2}, function(data, status){
   var respuesta = JSON.parse(data);
   console.log(respuesta);
   document.getElementsByClassName('com')[1].innerHTML = respuesta;
  });

});
