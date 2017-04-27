function myfullscreen(pagina){

if(pagina =='1')
{
    pagina = 'index.htm';
}
else
{
    pagina = 'index_en.htm';
}
	var ancho=screen.availWidth;
	var alto=screen.availHeight;
	var ventana = window.open(pagina,'danielalberdi', 'width='+ancho+',height='+alto+',fullscreen=0,menubar=0,toolbar=0,scrollbars=0,status=0,left='+(0)+',top='+(0));
    ventana.focus();
}
function embedFlash(ubicacion,pelicula,ancho,alto){ 
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+ancho+'" height="'+alto+'" title=""><param name="menu" value="false" /><param name="movie" value="'+ubicacion+pelicula+'.swf" /><param name="quality" value="high" /><param name="wmode" value="transparent" />'); document.write(''); document.write(''); document.write(''); document.write('<embed src="'+ubicacion+pelicula+'.swf" width="'+ancho+'" height="'+alto+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" wmode="transparent">'); 
document.write('</object>'); 
}
