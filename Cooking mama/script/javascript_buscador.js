var buscador = $("#table").DataTable();

$("#input-search").keyup(function(){

    buscador.search($(this).val()).draw();

    if ($("#input-search").val() == ""){
        $(".content-search").fadeOut(300);
    }else{
        $(".content-search").fadeIn(300);
    }
})


function cambio(id){
  var x= document.getElementById(id);

  // highlight the mouseenter target
    x.style.color = "purple";
    // reset the color after a short delay
    setTimeout(function() {
      x.style.color = "";

    }, 2000);


}
