//header
function openPopUp(id){
  document.getElementById(id).parentNode.style.display = "block";
  document.getElementById(id).style.display = "block";

}

function closePopUp(id){
  document.getElementById(id).parentNode.style.display = "none";
  document.getElementById(id).style.display = "none";
}

function myFunctionOpen(id){
    var popup = document.getElementById(id);
    popup.style.display = "block";
  }
  function myFunctionClose(){
    var popup = document.getElementById("AdicionTablero");
    popup.style.display = "none";
  }
  function Cerrar(id){
    var popup = document.getElementById(id);
    popup.style.display = "none";
  }


  function añadirTablero(id,tableroA){
    myFunctionClose();
    //Añadir div del tablero
    var nuevoTablero = document.createElement("div");
    nuevoTablero.className="caja";
    nuevoTablero.id="caja";
    document.getElementById("todosTableros").append(nuevoTablero);




      //Tres puntitos
  var tresP = document.createElement("img");
  tresP.className = "tresPuntos";
  tresP.setAttribute("src", "images/trespuntos.png");
  nuevoTablero.appendChild(tresP);

  tresP.onclick = function(){abrirPopUpPuntos(drop);};

      //Nombre tablero
    var nombreTablero = document.createElement("h3");
    nombreTablero.className = "h3";
    nombreTablero.id = "h3";
    var valorTexto = document.getElementById("adicionNombre").value;
    if (valorTexto == "") {
      nombreTablero.innerHTML = "Nombre Tablero";
    }
    else{
      nombreTablero.innerHTML = valorTexto;
    }
    document.getElementById("adicionNombre").value = "";
    nuevoTablero.appendChild(nombreTablero);
    nombreTablero.onclick  = function(){ChangeToList();};

    //Imagen tablero
    var imagenTablero = document.createElement("img");
    imagenTablero.className = "imgTablero"
    var valorImagen = document.getElementById("adicionImagen").src;
    if(valorImagen==""){
      imagenTablero.src="";
    }else{
      imagenTablero.src = valorImagen;
    }
      document.getElementById("adicionImagen").src="";
      document.getElementById("adicionImagen").value="";
      nuevoTablero.appendChild(imagenTablero);
      //Texto tablero

      var textoTablero = document.createElement("div");
      textoTablero.className = "textoTablerodiv";
      var paragraph = document.createElement("p");
      paragraph.className = "paragraph";
      paragraph.id = "paragraph";
      var valorTexto = document.getElementById("adicionTexto").value;

      if (valorTexto == "") {
        paragraph.innerHTML = "Texto Tablero";
      }
      else{
        paragraph.innerHTML = valorTexto;
      }
      document.getElementById("adicionTexto").value = "";
      textoTablero.appendChild(paragraph);
      nuevoTablero.appendChild(textoTablero);
      /* archivados*/




      /* dropdown de los 3 puntitos*/

      var drop = document.createElement("div");
      drop.className = "contPuntos";



     var eliminarT = document.createElement("a");
      eliminarT.innerHTML = "Eliminar";
      drop.append(eliminarT);

      eliminarT.onclick = function(){cerrarPopUpPuntos(nuevoTablero, drop);};

      var archivarT = document.createElement("a");
      archivarT.innerHTML = "Archivar";
      drop.append(archivarT);
      /* funcion archivar */
      archivarT.onclick = function(){archivar(drop,tablerosArchivados,nuevoTablero); myFunctionOpen(tableroA);};



      var compartirT = document.createElement("a");
      compartirT.innerHTML = "Compartir";
      drop.append(compartirT);
      compartirT.onclick = function(){compartir(drop,nuevoTablero);};


      var editarT = document.createElement("a");
      editarT.innerHTML = "Editar";
      drop.append(editarT);
      editarT.onclick = function(){editar(drop);};


      nuevoTablero.appendChild(drop);
      document.getElementById("todosTableros").appendChild(nuevoTablero);

  }


  var cargarImagenTablero = function(event){
    var imagen = document.getElementById("adicionImagen");
    imagen.src = URL.createObjectURL(event.target.files[0]);
  }


  function abrirPopUpPuntos(id){
    if (id.style.display == "block") {
      id.style.display = "none";
    } else {
      id.style.display = "block";
    }
  }
  function cerrarPopUpPuntos(nuevoTablero, drop){
    drop.style.display = "none";
    if (confirm("¿Estás seguro de que quieres eliminar el tablero?")) {
        nuevoTablero.remove();
    }
  }
  function compartir(drop, nuevoTablero){
    drop.style.display = "none";
    var clon = nuevoTablero.cloneNode(true);
    document.getElementById("tablerosCompartidos").appendChild(clon);
  }
  function editar(drop){
    drop.style.display = "none";
    document.getElementById("paragraph").contentEditable = "true";
    document.getElementById("h3").contentEditable = "true";
  }
  function archivar(drop,tableroA, nuevoTablero){
    drop.style.display = "none";
    if (confirm("¿Estás seguro de que quieres archivar el tablero?")) {
      var clon = nuevoTablero.cloneNode(true);
      tableroA.appendChild(clon);
      nuevoTablero.remove();
    }
  }


  function ChangeToList(){
    window.location="ejemploTablero.html";
  }
