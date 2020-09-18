//pruebaaaaaaaaaaaaaaaaaaaaaaaaaaaa

function changeToList(){
  window.location="ejemploTablero.html";
}

function changeToTablero(){
  window.location="tableros.html";
}


 //cargar inicio de sesion
function desaparecer(){
  var elements = document.getElementsByClassName("cajetilla");  //OCUULATAR CAJETILLAS
    for(var i = 0, length = elements.length; i < length; i++) {
          elements[i].style.display = 'none';
    }
  var ini = document.getElementById("iniciar"); //MOSTRAR PANEL DE INICIO DE SESION
  ini.style.display = "block";

}

//guardar cookies
function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";" + "expires=31 Dec 2020 23:59:59 GMT"+";path=/";
}

//obtener valor de una cookie
function obtenerCookie(clave) {
    var name = clave + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0){
          return c.substring(name.length,c.length);
        }
    }
    return "";
}

//comprobar si la cookie ya existe
function comprobarCookie(clave) {
    var resultado = obtenerCookie(clave);
    if (resultado == document.getElementById("email").value) {
        alert('El correo electronico introducido ya exite.');
    }else{ //la coockie no existe, se crea
      setCookie("emailC", clave);
    }
}


//al dar al boton de crear en el formulario de registro se cran las cookies
function guardaValor(){
  //guardamos los valores escritos en el formulario
  var usuario = document.getElementById("userr").value;
  var contraseña= document.getElementById("password").value;
  var nombre= document.getElementById("name").value;
  var ap1= document.getElementById("lastname1").value;
  var ap2= document.getElementById("apellido").value;
  var email1= document.getElementById("email").value;
  var fecha= document.getElementById("date").value;
  var gustos= document.getElementById("likes").value;
  var idioma= document.getElementById("language").value;
  var uso= document.getElementById("usage").value;




    setCookie("userC", usuario);
    setCookie("contraseñaC", contraseña);
    setCookie("ap1C", ap1);
    setCookie("ap2C", ap2);
    setCookie("nom", nombre);
    comprobarCookie(email1);
    setCookie("fechaC", fecha);
    setCookie("gustosC", gustos);
    setCookie("idiomaC", idioma);
    setCookie("usoC", uso);
    setCookie("checkCookie", document.getElementById('condiciones'));


}

function eliminar(key) { //FECHA EXPIRACION ANTERIOR A LA ACTUAL
  document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

/*boton limpiar*/
function borrar(){
    /*eliminar cookies*/
    eliminar("userC");
    eliminar("contraseñaC");
    eliminar("ap1C");
    eliminar("ap2C");
    eliminar("emailC");
    eliminar("fechaC");
    eliminar("gustosC");
    eliminar("idiomaC");
    eliminar("usoC");
    eliminar("checkCookie");
    /*ELIMINAR LOS CAMPOS ESCRITOS EN EL FORMULARIO*/
    var activo = document.activeElement.id;
    activo.innerHTML = "";
}


//si eres un usuario registrado inicias sesion en tu pagina
function tupagina(){

  //se comprueba si el susuario y contraseña introducidos coinciden con las cookies guardadas
  var correo= document.getElementById("correo").value;
  var contrasena= document.getElementById("contrasena").value;
  var igualU= obtenerCookie("emailC");
  var igualC= obtenerCookie("contraseñaC");

  if(igualU==correo && igualC==contrasena){
    var u= obtenerCookie("userC");
    document.getElementById('username').innerHTML = u; //cambiar el nombre de usuario

    var a = document.getElementById("us"); //mostrar nombre y foto
    a.style.display = "block";

    var ini = document.getElementById("iniciar"); //ocultar inicio de sesion
    ini.style.display = "none";

    var elements = document.getElementsByClassName("cajetilla"); //mostrar cajetillas
      for(var i = 0, length = elements.length; i < length; i++) {
            elements[i].style.display = 'block';
      }
  }else{
    alert('Correo o contraseña incorrectos. No existe la cookie.');
  }

}

//cargar el formulario de registro.
function nuevo() {
  var formulario= document.getElementById("contenedor-form"); //OCULTAR FORMUALRIO
  formulario.style.display="block";

  var iniciar= document.getElementById("iniciar"); //MOSTRAR INICIO DE SESION
  iniciar.style.display="none";
}


/* EJER 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */

//CAJETILLAS
//Funciones para abrir el menu de los tres puntitos de cada cajetilla(columna)
function dropdown() {
  var x = document.getElementById("myDropdown");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function dropdown2() {
  var x = document.getElementById("myDropdown2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function dropdown3() {
  var x = document.getElementById("myDropdown3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//Funcion para archivar una cajetilla(columna)
function archivarCaja(id) {
  console.log(id.parentNode.parentNode);
  if (confirm("¿Estás seguro de que quieres archivar la lista?")) {
    id.parentNode.style.display = "none";
    id.parentNode.parentNode.remove();
  }
}


//POPUP
//Funcion para abrir el popup de cada globo(evento)
function abrirPopUp(id) {
  var mypopup = document.getElementById("popupMod");
  mypopup.style.display="block";

  document.getElementById("imgpop").src = id.previousElementSibling.src;
  document.getElementById("textoPopupMod").innerHTML = id.nextElementSibling.innerHTML;
}

//Funcion para cerrar el popup de cada globo(evento)
function cerrarPopUp(){
  var popup= document.getElementById("popupMod");
  popup.style.display= "none";
}


//GLOBO
//Funcion para eliminar un globo al hacer click en la equis del globo(evento)
function alerta(id) {
  if (confirm("¿Estás seguro de que quieres borrar la caja?")) {
    id.parentNode.remove();
  }
}

//Funcion para rellenar el corazon cuando se le da click a me gusta
function cambiarCorazon(id){
  id.firstElementChild.src = "images/like+.png";
}

//Compartir
//Funcion para mostrar las redes sociales al hacer click a compartir
function redesSociales(id) {
  var popupC = document.getElementById("popupRedes");
  popupC.style.display="block";

  var aux = id.parentNode.parentNode.parentNode;
  var aux2 = aux.previousElementSibling;
  var final = aux2.previousElementSibling;
  document.getElementById("textoPopupC").innerHTML = final.innerHTML;
}

//Funcion para cerrar el popup de redes sociales al hacer click en cualquier lugar del popup
function cerrarRedes(){
  var popup= document.getElementById("popupRedes");
  popup.style.display= "none";
}

//AÑADIR GLOBOS
//Funciones para mostrar popup de añadir al hacer click al plus de cada una de las cajetillas
function abrirPopUpA() {
  var popupC = document.getElementById("popupAñadir");
  popupC.style.display="block";
}

function abrirPopUpA2() {
  var popupC = document.getElementById("popupAñadir2");
  popupC.style.display="block";
}

function abrirPopUpA3() {
  var popupC = document.getElementById("popupAñadir3");
  popupC.style.display="block";
}

//Funcion para cerrar el popup de añadir si le das a cancelar de cada una de las cajetillas
function cerrarPopUpA() {
  var popup= document.getElementById("popupAñadir");
  popup.style.display= "none";
}

function cerrarPopUpA2() {
  var popup= document.getElementById("popupAñadir2");
  popup.style.display= "none";
}

function cerrarPopUpA3() {
  var popup= document.getElementById("popupAñadir3");
  popup.style.display= "none";
}

//Funcion que cierra el popup de añadir y AÑADE UN NUEVO GLOBO en la primera cajetilla
function añadirGlobo(id){
  cerrarPopUpA();

  //Nuevo div (globo)
  var globo = document.createElement("div");
  globo.className = "globo";

  //Nueva equis del globo
  var x = document.createElement("img");
  x.className = "x";
  x.setAttribute("src", "images/x.png");
  globo.appendChild(x);
  x.onclick = function(){alerta(this);};

  //Nueva imagen del globo
  var comida = document.createElement("img");
  comida.className = "comida";
  var valorFoto = document.getElementById("picture1").src;

  if(valorFoto == ""){
    comida.src = "";
  }
  else{
    comida.src = valorFoto;
  }
  document.getElementById("picture1").src = "";
  document.getElementById("picture1").value = "";
  globo.appendChild(comida);

  //Nuevo texto del globo
  var texto = document.createElement("p");
  texto.className = "p";
  var valorTexto = document.getElementById("text1").value;
  if (valorTexto == "") {
    texto.innerHTML = "Receta";
  }
  else{
    texto.innerHTML = valorTexto;
  }
  document.getElementById("text1").value = "";
  globo.appendChild(texto);
  texto.onclick = function(){abrirPopUp(this);};

  //Nuevo texto del popup del globo
  var sec = document.createElement("section");
  sec.className = "textoOculto";
  sec.contenteditable = "true";
  var node = document.createTextNode("Para un chef es sumamente importante contar con buenos utensilios de cocina ya que estos son su herramienta de trabajo por esta razón, no es recomendable usar artículos de mala calidad o antihigiénicos lo más recomendables es que los utensilios sean de acero inoxidable.No solo necesitan un buen set de ollas, sartenes tablas y cuchillos también son indispensables otros artículos que facilitan y hacen más fácil a la hora de preparar un platillo en general. Por este motivo te daremos a conocer algunos utensilios que no pueden faltan en la cocina del chef.");
  sec.appendChild(node);
  globo.appendChild(sec);

  //Nuevos emojis del globo (imagenes y tooltips)
  var emojis = document.createElement("div");
  emojis.className = "emojis";
  globo.appendChild(emojis);

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

  //Nueva fecha del globo
  var fecha = document.createElement("div");
  fecha.className = "fecha";
  globo.appendChild(fecha);

  var tipof = document.createElement("p");
  tipof.className = "tipof";
  var node = document.createTextNode(fechaActual());
  tipof.appendChild(node);
  fecha.appendChild(tipof);

  //Añadimos el globo al final de la cajetilla pero encima del plus
  var padre = id.parentNode.parentNode.parentNode;
  var plus = id.parentNode.parentNode.previousElementSibling;
  padre.insertBefore(globo,plus);
}

//Funcion para cargar la imagen del input
var cargarImagen1 = function(event){
  var imagen = document.getElementById("picture1");
  imagen.src = URL.createObjectURL(event.target.files[0]);
}

var cargarImagen2 = function(event){
  var imagen = document.getElementById("picture2");
  imagen.src = URL.createObjectURL(event.target.files[0]);
}

var cargarImagen3 = function(event){
  var imagen = document.getElementById("picture3");
  imagen.src = URL.createObjectURL(event.target.files[0]);
}

//Funcion para coger la fecha justa del momento en que se crea el nuevo globo
function fechaActual(){
  var hoy = new Date();
  var fecha = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
  var hora = addZero(hoy.getHours()) + ':' + addZero(hoy.getMinutes());
  var fechaHora = fecha + ' ' + hora;
  return fechaHora;
  console.log(fechaHora);
}

//Funcion para ajustar el formato de la fecha
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}



//Funcion que cierra el popup de añadir y AÑADE UN NUEVO GLOBO en la segunda cajetilla
function añadirGlobo2(id){
  cerrarPopUpA2();

  //Nuevo div (globo)
  var globo = document.createElement("div");
  globo.className = "globo";

  //Nueva equis del globo
  var x = document.createElement("img");
  x.className = "x";
  x.setAttribute("src", "images/x.png");
  globo.appendChild(x);
  x.onclick = function(){alerta(this);};

  //Nueva imagen del globo
  var comida = document.createElement("img");
  comida.className = "comida";
  var valorFoto = document.getElementById("picture2").src;
  if(valorFoto == ""){
    comida.src = "";
  }
  else{
    comida.src = valorFoto;
  }
  document.getElementById("picture2").src = "";
  document.getElementById("picture2").value = "";
  globo.appendChild(comida);

  //Nuevo texto del globo
  var texto = document.createElement("p");
  texto.className = "p";
  var valorTexto = document.getElementById("text2").value;
  if (valorTexto == "") {
    texto.innerHTML = "Receta";
  }
  else{
    texto.innerHTML = valorTexto;
  }
  document.getElementById("text2").value = "";
  globo.appendChild(texto);
  texto.onclick = function(){abrirPopUp(this);};

  //Nuevo texto del popup del globo
  var sec = document.createElement("section");
  sec.className = "textoOculto";
  sec.contenteditable = "true";
  var node = document.createTextNode("Para un chef es sumamente importante contar con buenos utensilios de cocina ya que estos son su herramienta de trabajo por esta razón, no es recomendable usar artículos de mala calidad o antihigiénicos lo más recomendables es que los utensilios sean de acero inoxidable.No solo necesitan un buen set de ollas, sartenes tablas y cuchillos también son indispensables otros artículos que facilitan y hacen más fácil a la hora de preparar un platillo en general. Por este motivo te daremos a conocer algunos utensilios que no pueden faltan en la cocina del chef.");
  sec.appendChild(node);
  globo.appendChild(sec);

  //Nuevos emojis del globo (imagenes y tooltips)
  var emojis = document.createElement("div");
  emojis.className = "emojis";
  globo.appendChild(emojis);

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

  //Nueva fecha del globo
  var fecha = document.createElement("div");
  fecha.className = "fecha";
  globo.appendChild(fecha);

  var tipof = document.createElement("p");
  tipof.className = "tipof";
  var node = document.createTextNode(fechaActual());
  tipof.appendChild(node);
  fecha.appendChild(tipof);

  //Añadimos el globo al final de la cajetilla pero encima del plus
  var padre = id.parentNode.parentNode.parentNode;
  var plus = id.parentNode.parentNode.previousElementSibling;
  padre.insertBefore(globo,plus);
}


//Funcion que cierra el popup de añadir y AÑADE UN NUEVO GLOBO en la tercera cajetilla
function añadirGlobo3(id){
  cerrarPopUpA3();

  //Nuevo div (globo)
  var globo = document.createElement("div");
  globo.className = "globo";

  //Nueva equis del globo
  var x = document.createElement("img");
  x.className = "x";
  x.setAttribute("src", "images/x.png");
  globo.appendChild(x);
  x.onclick = function(){alerta(this);};

  //Nueva imagen del globo
  var comida = document.createElement("img");
  comida.className = "comida";
  var valorFoto = document.getElementById("picture3").src;
  if(valorFoto == ""){
    comida.src = "";
  }
  else{
    comida.src = valorFoto;
  }
  document.getElementById("picture3").src = "";
  document.getElementById("picture3").value = "";
  globo.appendChild(comida);

  //Nuevo texto del globo
  var texto = document.createElement("p");
  texto.className = "p";
  var valorTexto = document.getElementById("text3").value;
  if (valorTexto == "") {
    texto.innerHTML = "Receta";
  }
  else{
    texto.innerHTML = valorTexto;
    console.log(texto.className);
  }
  document.getElementById("text3").value = "";
  globo.appendChild(texto);
  texto.onclick = function(){abrirPopUp(this);};

  //Nuevo texto del popup del globo
  var sec = document.createElement("section");
  sec.className = "textoOculto";
  sec.contenteditable = "true";
  var node = document.createTextNode("Para un chef es sumamente importante contar con buenos utensilios de cocina ya que estos son su herramienta de trabajo por esta razón, no es recomendable usar artículos de mala calidad o antihigiénicos lo más recomendables es que los utensilios sean de acero inoxidable.No solo necesitan un buen set de ollas, sartenes tablas y cuchillos también son indispensables otros artículos que facilitan y hacen más fácil a la hora de preparar un platillo en general. Por este motivo te daremos a conocer algunos utensilios que no pueden faltan en la cocina del chef.");
  sec.appendChild(node);
  globo.appendChild(sec);

  //Nuevos emojis del globo (imagenes y tooltips)
  var emojis = document.createElement("div");
  emojis.className = "emojis";
  globo.appendChild(emojis);

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

  //Nueva fecha del globo
  var fecha = document.createElement("div");
  fecha.className = "fecha";
  globo.appendChild(fecha);

  var tipof = document.createElement("p");
  tipof.className = "tipof";
  var node = document.createTextNode(fechaActual());
  tipof.appendChild(node);
  fecha.appendChild(tipof);

  //Añadimos el globo al final de la cajetilla pero encima del plus
  var padre = id.parentNode.parentNode.parentNode;
  var plus = id.parentNode.parentNode.previousElementSibling;
  padre.insertBefore(globo,plus);
}
