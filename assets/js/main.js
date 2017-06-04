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
	 
	 var $eliminar = $("<i/>",{"class": "material-icons eliminar pink-text"});
	 /*var $almacenTextoTweet = $("<p/>");*/
	 
	 $eliminar.text("delate");
	/* $almacenTextoTweet.text($tweet);*/
	 $contenedorTweetNuevo.append($imgPajarito);
	 $contenedorTweetNuevo.append($tweet);
     $contenedorTweetNuevo.append($eliminar);
	 $fila.append($contenedorTweetNuevo);
      $recipienteTweets.prepend($fila);
	 
  var eliminarTweet = function (){
    $(this).parent().remove();
  }
  
	  var $btnEliminarTweet = $('.eliminar'); 
	  $btnEliminarTweet.click(eliminarTweet);
};	 
	
 $btnEnviar.click(enviarTweet);

	 
});

