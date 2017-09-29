function contServicios(data) {
	var tipoServicio="";
	tipoServicio=$(data).attr('class');
  var hijos=$('.servicios-lista > li').size();
  console.log(hijos);
  for(var i=0;i<=hijos;i++){
    if(i==tipoServicio){
      $(".contenido"+i).css("display","block");
			$("."+i).css("color","#c19f56");
    }
    else{
        $(".contenido"+i).css("display", "none");
				$("."+i).css("color","");
    }
  }
}
