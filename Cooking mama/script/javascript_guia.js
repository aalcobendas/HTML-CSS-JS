var contador=0;
var contador2=0;

function aparecer(){
  contador+=1;

  if(contador==1){
    var x = document.getElementById("uno");
    x.style.display = "none";
    var y= document.getElementById("dos");
    var j= document.getElementById("texto_ayuda1");
    y.style.display= "block";
    j.style.display= "none";

   var k=  document.getElementById("a");
    k.style.backgroundColor= "grey";

    var h=  document.getElementById("b");
    h.style.backgroundColor= "black";

    var i= document.getElementById("texto_ayuda2");
    i.style.display= "block";


  }else if (contador==2) {

    var t= document.getElementById("dos");
    var u= document.getElementById("tres");
    t.style.display= "none";
    u.style.display= "block";

    var k=  document.getElementById("b");
     k.style.backgroundColor= "grey";

     var h=  document.getElementById("c");
     h.style.backgroundColor= "black";
     var i= document.getElementById("texto_ayuda2");
     i.style.display= "none";

     var g= document.getElementById("texto_ayuda3");
     g.style.display= "block";
  }else if (contador==3) {
    window.location="tableros.html";


  }

}
