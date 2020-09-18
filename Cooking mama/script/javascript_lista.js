//pruebasssssssssssssssssssssssssss
function changeToAccount(){
  window.location="miCuenta.html";
}

function changeToList(){
  window.location="ejemploTablero.html";
}


//Funciones para abrir y cerrar el popup de añadir lista
function abrirPopUpAL() {
  var popup = document.getElementById("popupAddList");
  popup.style.display="block";

}

function cerrarPopUpAL() {
  var popup= document.getElementById("popupAddList");
  popup.style.display= "none";
}

//Funcion para añadir una lista nueva
function añadirLista(){
  cerrarPopUpAL();

  //Nuevo div (lista)
  var nuevaLista = document.createElement("div");
  nuevaLista.className = "cajetilla";

  //Tres puntitos
  var tresP = document.createElement("img");
  tresP.className = "tresPuntos";
  tresP.setAttribute("src", "images/trespuntos.png");
  nuevaLista.appendChild(tresP);
  tresP.onclick = function(){dropdown(tp);};

  //Nombre nueva lista
  var nombreLista = document.createElement("h3");
  nombreLista.className = "h3";
  var valorTexto = document.getElementById("textAL").value;
  if (valorTexto == "") {
    nombreLista.innerHTML = "Nombre Lista";
  }
  else{
    nombreLista.innerHTML = valorTexto;
  }
  document.getElementById("textAL").value = "";
  nuevaLista.appendChild(nombreLista);

  //Tick
  var tick = document.createElement("img");
  tick.className = "tick";
  tick.setAttribute("src", "images/tick.png");
  nuevaLista.append(tick);
  tick.onclick = function(){guardarCambioL(nombreLista, tp, tick);};

  //Plus
  var plus = document.createElement("img");
  plus.className = "plus";
  plus.setAttribute("src", "images/plus.png");
  nuevaLista.appendChild(plus);
  plus.onclick = function(){abrirPopUpAR(popupAR, nombreRecetaE, nombreReceta, fotoRecetaE, fotoReceta, botonAdd, botonCancel);};

  //Dropdown de los 3 puntitos
  var tp = document.createElement("div");
  tp.className = "dropdown-content";

  var eliminarL = document.createElement("a");
  eliminarL.innerHTML = "Eliminar";
  tp.append(eliminarL);
  eliminarL.onclick = function(){eliminarLista(nuevaLista, tp);};

  var editarL = document.createElement("a");
  editarL.innerHTML = "Editar";
  tp.append(editarL);
  editarL.onclick = function(){editarLista(nombreLista, tick);};

  nuevaLista.appendChild(tp);

  //POPUP AÑADIR RECETA
  var popupAR = document.createElement("div");
  popupAR.className = "popupA";

  //Nombre receta
  var nombreRecetaE = document.createElement("label");
  nombreRecetaE.className = "textoPopup1A";
  nombreRecetaE.innerHTML = "Introduzca nombre de la receta:";
  popupAR.append(nombreRecetaE);
  var nombreReceta = document.createElement("input");
  nombreReceta.className = "inputPopupA";
  nombreReceta.setAttribute("type", "text");
  popupAR.append(nombreReceta);
  //Foto receta
  var fotoRecetaE = document.createElement("label");
  fotoRecetaE.className = "textoPopup2A";
  fotoRecetaE.innerHTML = "Seleccione imagen:";
  popupAR.append(fotoRecetaE);
  var fotoReceta = document.createElement("input");
  fotoReceta.className = "fotoPopupA";
  fotoReceta.setAttribute("type", "file");
  popupAR.append(fotoReceta);
  fotoReceta.onchange = function(){cargarImagen(event, fotoReceta);};
  //Botones
  var botonAdd = document.createElement("button");
  botonAdd.className = "myBtn";
  botonAdd.innerHTML = "Añadir";
  popupAR.append(botonAdd);
  botonAdd.onclick = function(){añadirReceta(nuevaLista, popupAR, nombreReceta, fotoReceta)};
  var botonCancel = document.createElement("button");
  botonCancel.className = "myBtn2";
  botonCancel.innerHTML = "Cancelar";
  popupAR.append(botonCancel);
  botonCancel.onclick = function(){cerrarPopUpAR(popupAR)};

  nuevaLista.append(popupAR);

  document.getElementById("todasListas").append(nuevaLista)
}



//Funciones dropdown de los tres puntitos
function dropdown(id) {
  var x = id;
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function eliminarLista(lista, tp){
  if (confirm("¿Estás seguro de que quieres archivar la lista?")) {
    tp.style.display = "none";
    lista.remove();
  }
}


function editarLista(nombreLista, tick){
  nombreLista.contentEditable = "true";
  tick.style.display = "block";
}

function guardarCambioL(nombreLista, tp, tick){
  nombreLista.contentEditable = "false";
  tp.style.display = "none";
  tick.style.display = "none";
}



//Funcion para mostrar popup de añadir receta al hacer click al plus de la lista
function abrirPopUpAR(popupAR, nombreRecetaE, nombreReceta, fotoRecetaE, fotoReceta, botonAdd, botonCancel) {
  popupAR.style.display = "block";
  nombreRecetaE.style.display = "block";
  nombreReceta.style.display = "block";
  fotoReceta.style.display = "block";
  fotoRecetaE.style.display = "block";
  botonAdd.style.display = "block";
  botonCancel.style.display = "block";
}


//Funcion para cerrar popup de añadir si le das a cancelar
function cerrarPopUpAR(popupAR) {
  popupAR.style.display= "none";
}

//Funcion para cargar la imagen del input
var cargarImagen = function(event, fotoReceta){
  fotoReceta.src = URL.createObjectURL(event.target.files[0]);
}



//Funcion que cierra popup de añadir y AÑADE UNA NUEVA RECETA
function añadirReceta(nuevaLista, popupAR, nombreReceta, fotoReceta){
  cerrarPopUpAR(popupAR);

  //Nuevo div (receta)
  var receta = document.createElement("div");
  receta.className = "receta";

  //Equis de la receta
  var x = document.createElement("img");
  x.className = "x";
  x.setAttribute("src", "images/x.png");
  receta.appendChild(x);
  x.onclick = function(){eliminarReceta(receta);};

  //Imagen de la receta
  var comida = document.createElement("img");
  comida.className = "comida";
  var valorFoto = fotoReceta.src;

  if(valorFoto == ""){
    comida.src = "";
  }
  else{
    comida.src = valorFoto;
  }
  fotoReceta.src = "";
  fotoReceta.value = "";
  receta.appendChild(comida);

  //Texto de la receta
  var texto = document.createElement("p");
  texto.className = "p";
  texto.className = "tituloR";
  var valorTexto = nombreReceta.value;
  console.log(valorTexto);
  if (valorTexto == "") {
    texto.innerHTML = "Receta";
  }
  else{
    texto.innerHTML = valorTexto;
  }
  nombreReceta.value = "";
  receta.appendChild(texto);
  texto.onclick = function(){abrirPopUpReceta(popupReceta);};

  //Emojis de la receta (imagenes y tooltips)
  var emojis = document.createElement("div");
  emojis.className = "emojis";
  receta.appendChild(emojis);

  var tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  emojis.appendChild(tooltip);

  var megusta = document.createElement("div");
  megusta.className = "megusta";
  tooltip.appendChild(megusta);
  megusta.onclick = function(){cambiarCorazon(this);};

  var like = document.createElement("img");
  like.className = "like";
  like.setAttribute("src", "images/like.png");
  megusta.appendChild(like);

  var tiptext = document.createElement("span");
  tiptext.className = "tiptext";
  var node = document.createTextNode("Me gusta");
  tiptext.appendChild(node);
  megusta.appendChild(tiptext);

  var tooltip2 = document.createElement("div");
  tooltip2.className = "tooltip";
  emojis.appendChild(tooltip2);

  var comentario = document.createElement("div");
  comentario.className = "comentario";
  tooltip2.appendChild(comentario);

  var comment = document.createElement("img");
  comment.className = "like";
  comment.setAttribute("src", "images/comment.png");
  comentario.appendChild(comment);

  var tiptext2 = document.createElement("span");
  tiptext2.className = "tiptext";
  var node = document.createTextNode("Comentario");
  tiptext2.appendChild(node);
  comentario.appendChild(tiptext2);

  var tooltip3 = document.createElement("div");
  tooltip3.className = "tooltip";
  emojis.appendChild(tooltip3);

  var compartir = document.createElement("div");
  compartir.className = "compartir";
  tooltip3.appendChild(compartir);

  var share = document.createElement("img");
  share.className = "like";
  share.setAttribute("src", "images/share.png");
  compartir.appendChild(share);
  share.onclick = function(){redesSociales(this);};

  var tiptext3 = document.createElement("span");
  tiptext3.className = "tiptext";
  var node = document.createTextNode("Compartir");
  tiptext3.appendChild(node);
  compartir.appendChild(tiptext3);

  //Fecha de la receta
  var fecha = document.createElement("div");
  fecha.className = "fecha";
  receta.appendChild(fecha);

  var tipof = document.createElement("p");
  tipof.className = "tipof";
  var node = document.createTextNode(fechaActual());
  tipof.appendChild(node);
  fecha.appendChild(tipof);

  //POPUP RECETA
  var popupReceta = document.createElement("div");
  popupReceta.className = "popupReceta";

  //Nombre receta
  var nReceta = document.createElement("p");
  nReceta.className = "nReceta";
  nReceta.innerHTML = texto.innerHTML;
  popupReceta.append(nReceta);
  //Foto comida
  var fotoComida = document.createElement("img");
  fotoComida.className = "fotoComida";
  fotoComida.src = comida.src;
  popupReceta.append(fotoComida);
  //Elaboracion
  var elaboracion = document.createElement("p");
  elaboracion.className = "elaboracion";
  elaboracion.innerHTML = "ELABORACIÓN";
  popupReceta.append(elaboracion);
  var textoElaboracion = document.createElement("p");
  textoElaboracion.innerHTML = "1.<br>2.<br>3.<br>4.<br>5.<br>6.<br>7.<br>";
  elaboracion.append(textoElaboracion);
  //Equis del popup de la receta
  var x1 = document.createElement("img");
  x1.className = "x1";
  x1.setAttribute("src", "images/x.png");
  popupReceta.appendChild(x1);
  x1.onclick = function(){cerrarPopUpReceta(popupReceta);};
  //Ingredientes
  var ingredientes = document.createElement("p");
  ingredientes.className = "ingredientes";
  ingredientes.innerHTML = "INGREDIENTES";
  popupReceta.append(ingredientes);
  var textoIngredientes = document.createElement("p");
  textoIngredientes.innerHTML = "-<br>-<br>-<br>-<br>-<br>";
  ingredientes.append(textoIngredientes);
  //Boton editar
  var botonEditar = document.createElement("button");
  botonEditar.className = "bt";
  botonEditar.innerHTML = "Editar";
  popupReceta.append(botonEditar);
  botonEditar.onclick = function(){editarDatosReceta(textoElaboracion, textoIngredientes, botonEditar, botonGuardar)};
  //Boton guardar
  var botonGuardar = document.createElement("button");
  botonGuardar.className = "bt2";
  botonGuardar.innerHTML = "Guardar";
  popupReceta.append(botonGuardar);
  botonGuardar.onclick = function(){guardarDatosReceta(textoElaboracion, textoIngredientes, botonEditar, botonGuardar)};

  receta.append(popupReceta);


  //Añadimos la receta
  nuevaLista.append(receta);
}


//Funcion para coger la fecha justa del momento en que se crea el nuevo globo
function fechaActual(){
  var hoy = new Date();
  var fecha = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
  var hora = addZero(hoy.getHours()) + ':' + addZero(hoy.getMinutes());
  var fechaHora = fecha + ' ' + hora;
  return fechaHora;
}

//Funcion para ajustar el formato de la fecha
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}



function abrirPopUpReceta(popupReceta){
  popupReceta.style.display = "block";

}

function cerrarPopUpReceta(popupReceta){
  popupReceta.style.display = "none";

}

function eliminarReceta(receta) {
  if (confirm("¿Estás seguro de que quieres borrar la caja?")) {
    receta.remove();
  }
}

function editarDatosReceta(textoElaboracion, textoIngredientes, botonEditar, botonGuardar){
    botonEditar.style.display = "none";
    botonGuardar.style.display = "block";

    textoElaboracion.contentEditable = "true";
    textoIngredientes.contentEditable = "true";
}

function guardarDatosReceta(textoElaboracion, textoIngredientes, botonEditar, botonGuardar){
  botonEditar.style.display = "block";
  botonGuardar.style.display = "none";

  textoElaboracion.contentEditable = "false";
  textoIngredientes.contentEditable = "false";
}
