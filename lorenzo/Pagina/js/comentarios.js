  $(document).ready(function(){

    var usuario = sessionStorage.getItem("username");
    if(usuario = null){
      var usuario = localStorage.getItem("username");
    }
    var n = $("#num").attr("name");

    $("#addcomentario").click(function(){
      if(comentario.value != ""){

        $.get("../comentarios.php", {user:sessionStorage.getItem("username"), comentario:comentario.value, articulo:n}, function(data, status){
          $("#alerta").html("<div class='alert alert-success' role='alert' style='margin-top: 10px;'>Comentario publicado!</div>");
          document.getElementById('divcomentarios').innerHTML += "<ul class='media-list'><li class='media'><a href='#' class='pull-left'><img src='https://bootdey.com/img/Content/user_1.jpg' class='img-circle' style='margin-right: 10px;'></a><div class='media-body'><span class='text-muted pull-right'><small class='text-muted'>"+data+"</small></span><strong class='text-success'>@"+usuario+"</strong><p>"+comentario.value+"</p></div></li></ul>";
          comentario.value = "";
        });
      }else{
        alertify.alert('Espera!',"No puede publicar un comentario vacio.");
      }
    });

    $.get("../cargarcomentarios.php", {articulo:n}, function(data, status){
     var respuesta = JSON.parse(data);

     for (var i = 0; i < respuesta.length; i++) {
       var random = (Math.floor(Math.random() * 3)+1);
       document.getElementById('divcomentarios').innerHTML += "<ul class='media-list'><li class='media'><a href='#' class='pull-left'><img src='https://bootdey.com/img/Content/user_"+random+".jpg' class='img-circle' style='margin-right: 10px;'></a><div class='media-body'><span class='text-muted pull-right'><small class='text-muted'>"+respuesta[i][2]+"</small></span><strong class='text-success'>@"+respuesta[i][0]+"</strong><p>"+respuesta[i][1]+"</p></div></li></ul>";
     }

    });



  });
