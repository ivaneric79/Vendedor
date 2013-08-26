function getAgentes () {

$.ajax({
type: "POST",
url: "http://10.32.127.5/thmovil/com/getagente.asp"
//url: "http://intranet.xube.com.mx/thmovil/com/getagente.asp"
}).done(function(respuesta) {
	var parsed = JSON.parse(respuesta);

   $.each(parsed, function(i, val) {
	$('#agente').append('<option value="'+val.CLV_VEND+'">'+val.NOMBRE+'</option>');


   });

	var myselect = $( "#agente" );

    myselect.selectmenu( "refresh" );
    

});
}




function getclientes () {
	//obtiene lista de clientes
	
	$.ajax({
type: "POST",
//url: "http://intranet.xube.com.mx/thmovil/com/getclientes.asp"
url: "http://10.32.127.5/thmovil/com/getclientes.asp"
}).done(function(respuesta) {
	var clientes = JSON.parse(respuesta);
	
   $.each(clientes, function(i, val) {
	$('#clientes').append('<li data-icon="plus" data-iconpos="right"><a id="'+$.trim(val.CCLIE)+'" href="#" credito="'+val.DIASCRED+'" precios="'+val.LISTA_PREC+'" nombre="'+val.NOMBRE+'" onclick="clickCliente(this);">'+$.trim(val.CCLIE)+' - '+val.NOMBRE+'</a></li>');


   });

	//var myselect = $( "#clientes" );

   // myselect.selectmenu( "refresh" );
    

});

}

function clickCliente (elemento) {
	console.log(elemento);
	var cid = $(elemento).attr('id');
	var ccredito = parseInt($(elemento).attr('credito'));
	var cnombre = $(elemento).attr('nombre');
	var cprecios = $(elemento).attr('precios');

	console.log(cid,' - ',cnombre);

	$('.clienterow h2').text(cnombre);
	if (ccredito > 0) {
	$('.clienterow .ccpago').text('Credito');
	}else{
	$('.clienterow .ccpago').text('Contado');
	}

	$('.clienterow .ccclave').text(cid);

	$('.clienterow').removeClass('hidden');

	$('#page2 .ui-listview-filter .ui-icon-delete').click();

return false;

	// body...
}


$(document).ready(function() {



	getAgentes();
	getclientes();


	$('#iniciar').click(function(){
		var agenteid = $("#agente option:selected").val();
		var anip = $("#anip").val();
//funcion de login
//guardar agenteid y anip




		$.mobile.changePage( "#page2", {
			transition: "slide"
		});
	});

	$('#bpedido').click(function(){
		//obtener folio pedido
		// guardar variable

		$.mobile.changePage( "#page3", {
			transition: "slide"
		});
	});

	$('#bdevolucion').click(function(){
		//obtener folio devolucion
		//guardar variable

		$.mobile.changePage( "#page3", {
			transition: "slide"
		});
	});

	$('#irpedido').click(function(){
		var clienteid = $("#agente option:selected").val();
		//obtener lista de precios
		//guardar variable

		$.mobile.changePage( "#page4", {
			transition: "slide"
		});
	});


$('.mas').click(function() {
	var valor = parseInt($('.cant').val());
	$('.cant').val(valor + 1);

	// body...
});

$('.menos').click(function() {
	var valor = parseInt($('.cant').val());
	if (valor > 1){
	$('.cant').val(valor - 1);
      }
	// body...
});

$('#bcantok').click(function() {

	var c = $('.cant').val();
	
	$('.cantidad').text(c);
	$('.popcant').popup('close');
	// body...
});







});