
(function () {
var contador =0;

var cargarPagina = function(){
$("#formulario").submit(enviarTweet);
};


var enviarTweet = function(e){
  e.preventDefault();
 /*traemos elementos*/
  var $btnEnviar = $("#btnEnviar");
  var $contenedorTweet = $("#area-escribir");
  var $recipienteTweets = $("#recipiente-tweets");
  /*obtenemos el valor del mensaje ingresado*/
  var $tweet = $contenedorTweet.val();
  
  /*creamos elemento de forma dinamica*/
  var $contenedorTweetNuevo = $("<div/>",{"class": "card-panel"}); 
  var $palomita = $("<input type='checkbox' />");
  var $postTexto = $("<label />");
  var identificador = "marcador-" + contador;	
  $palomita.id = identificador;
	
		contador++;
	};
$(document).ready(cargarPagina);
})();