$(document).ready(function(){
 var contador = 0;
 var $btnEnviar = $("#btnEnviar");
	
 var enviarTweet = function(){
  /*traemos elementos*/
  
   var $contenedorTweet = $("#area-escribir");
   var $recipienteTweets = $("#recipiente-tweets");
	
   /*obtenemos el valor del mensaje ingresado*/
   var $tweet = $contenedorTweet.val();
  
   /*creamos elemento de forma dinamica*/
   var $contenedorTweetNuevo = $("<div/>",{ "class": "card-panel col s4 offset-s4 teal-text text-lighten-2"});
   
     var $fila = $("<div/>", { "class": "row"});
	 var $imgPajarito = $('<img>',{'class': 'responsive-img pajarito'});
	 $imgPajarito.attr('src', 'assets/img/logo2.png'); 
	 var $eliminar = $("<i/>",{"class":"material-icons eliminar teal-text"});
	 $eliminar.text("delete");
	 $contenedorTweetNuevo.append($imgPajarito);
	 $contenedorTweetNuevo.append($tweet);
     $contenedorTweetNuevo.append($eliminar); 
	 $fila.append($contenedorTweetNuevo);
     $recipienteTweets.prepend($fila);
	 $contenedorTweet.val("");
	
  /*funcion que elimina tweets*/
  var eliminarTweet = function (){
    $(this).parent().remove();
	    
  };
   var $btnEliminarTweet = $('.eliminar'); 
   $btnEliminarTweet.click(eliminarTweet);

	
	 
};	 
	
  var contadorPalabras = function(){
	  var $contenedorTweet = $("#area-escribir");
	  var $contador = $contenedorTweet.val().length;
	  var $contenedorContador = $("#contador-contenedor");
	  $contenedorContador.text($contador +"/140 caracteres");
	  
	  if ($contador <= 119){
			$contenedorContador.addClass("green");
	  }
	  if ($contador >= 120){
			$contenedorContador.removeClass("green").addClass("yellow lighten-2");
	  }
	  
	  if ($contador >= 130){
		  $contenedorContador.removeClass("yellow lighten-2").addClass("amber");
	       }
	  
		   if ($contador >= 140){
			$contenedorContador.removeClass("amber").addClass("red darken-1");
		   }
		
	};
	
	  var $contenedorTweet = $("#area-escribir");
	  $contenedorTweet.keyup(contadorPalabras);
	
 $btnEnviar.click(enviarTweet);
	
 /*funcion contador*/

	 
});

