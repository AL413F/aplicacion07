// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	var basedatos=window.sqliteplugin.openDatabase({name: "ColoresBD.db",createFromLocation:1});
	cargarnombrejugador();
	
	function cargarnombrejugador()
		{
			basedetos.transaction(function(ejecutar){
				var sql="SELECT NombreUsuario FROM Usuario";
				ejecutar.executeSql(sql,undefined,function(ejecutar,resultado){
					var datosjugador=resultado.rows.item(0);
					$('#jugador').text(datosjugador.NombreUsuario);	
			});
		});}
		
	$('#btnjugar').on('tap',function(){
		
		
		var pantalla=$.mobile.getScreenHeight();
		var encabezado=$('.ui-header').outerHeight();
		var pie=$('.ui-footer').outerHeight();
		var contenido=$('.ui-content').outerHeight();
		var alto=(pantalla - encabezado - pie)/2
		//alert('pantalla  '+ pantalla)
		//alert('encabezado  '+ encabezado)
		//alert('pie  '+ pie)
		//alert('contenido  '+ contenido)
		//alert('alto ' + alto)
		$('.cuadro').height(alto);
		
	});
	
	$('.cuadro').on('vmousedown',function(){
			$(this).addClass('pulsado');
		});
		//$('.cuadro').on('vmouseup',function(){
			$(this).removeClass('pulsado');
		});
		function quien(q)
		{
			return q.substring(1);
		}
		$('.cuadro').on('vmousedown',function(){
			$('#pantalla').append(quien($(this).attr('id')));
			$(this).addClass('pulsado');
			
		});
		$('#btnCONFIGURAR').on('tap',function (){
			$('#txtnombre').val($('#jugador').text());
		});
		$('#btnGUARDAR').on('tap',function(){
			var nuevonombre =$('#txtnombre').var();
			basedatos.transaction(function(consulta){
				consulta.executeSql("UPDATE Usuario SET NombreUsuario=? WHERE claveUsuario='1';",[nuevonombre]);
			});
			cargarnombrejugador();
			});
			function flash(boton)
			{
				boton.stop().animate({opacity:'0.5'},{
					duration:80,
					complete:function(){
						boton.stop().animate({opacity:'1'},
						200);
						}
						
			});

}
$('.cuadro').on('tap',function(){
							flash($this);
							audio.play($this).attr('id');
						});
		
}); 


