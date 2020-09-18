//Funcion para crear las cookies del formulario
function crearCookie2(){
  //Nombre usuario
  var usuario = document.getElementById("user").value;
  //Contraseña
  var contraseña = document.getElementById("password").value;
  //Nombre
  var nombre = document.getElementById("name").value;
  //Apellido1
  var a1 = document.getElementById("lastname1").value;
  //Apellido2
  var a2 = document.getElementById("apellido").value;
  //Email
  var correo = document.getElementById("email").value;
  //Fecha nacimiento
  var fn = document.getElementById("date").value;

  var año = fn.split("-")[0];
  var mes = fn.split("-")[1];
  var dia = fn.split("-")[2];
  var fn = dia + " / " + mes + " / " + año;


  if (usuario != "" && contraseña != "" && nombre != "" && a1 != "" && a2 != "" && correo != "" && fn != "") {
    //iniciar al usuario que se acaba de registrar
    document.cookie = "usuarioIniciado=" + usuario + "; path=/";

    usuario += "|" + obtenerCookie2("Usuario");
    document.cookie = "Usuario=" + usuario + "; path=/";

    contraseña += "|" + obtenerCookie2("Contraseña");
    document.cookie = "Contraseña=" + contraseña + "; path=/";

    nombre += "|" + obtenerCookie2("Nombre");
    document.cookie = "Nombre=" + nombre + "; path=/";

    a1 += "|" + obtenerCookie2("Lastname1");
    document.cookie = "Lastname1=" + a1 + "; path=/";

    a2 += "|" + obtenerCookie2("Apellido");
    document.cookie = "Apellido=" + a2 + "; path=/";

    correo += "|" + obtenerCookie2("Email");
    document.cookie = "Email=" + correo + "; path=/";

    fn += "|" + obtenerCookie2("Date");
    document.cookie = "Date=" + fn + "; path=/";


    window.location="ayuda.html";

  }
}

//Funcion para obtener una cookie por su nombre de cookie
function obtenerCookie2(nombreCookie) {
  var cookies = document.cookie;
  var partsCookie = cookies.split(nombreCookie + "=");
  if (partsCookie.length != 2) {
    return "";
  }
  var valueCookie = partsCookie[1];
  return valueCookie.split(";")[0];
}

//Funcion para iniciar sesion (previamente te has tenido que registrar)
function iniciarSesion() {
  var user = document.getElementById("usuario").value;
  if (user != "") {

    var pos = buscarCookie("Usuario", user);

    if (pos >= 0) {
      var password = document.getElementById("contrasena").value;
      var c = obtenerValorCookiePorPosicion("Contraseña", pos);
      if (password == c){
        console.log("Correcto");

        document.cookie = "usuarioIniciado=" + user + "; path=/";
        window.location="tableros.html";

      }
      else{
        console.log("Incorrecto");
        mensajeNoUserPas();
      }
    }
    else{
      console.log("ERROR- No encontrado");
      mensajeNoUserPas();
    }
  }
  else {
    console.log("VACIO");
    mensajeNoUserPas();
  }

}

//Funcion para mostrar mensaje de error cuando el usuario o contraseña no son correctos
function mensajeNoUserPas(){
  document.getElementById("mE1").style.display = "block";
}

//Funcion para buscar una cookie por su nombre de cookie y su valor real, devuelve la pos en la que se encuentra
function buscarCookie(nameCookie, valueCookie) {
  var cookies = document.cookie;
  if (cookies != ""){
  var parts = cookies.split(nameCookie + "=");
  var ourCookie = parts[1].split(";")[0];

  var allValues = ourCookie.split("|");

  for (var i = 0; i < allValues.length; i++) {
    if (allValues[i] == valueCookie) {
      return i
    }
  }
}
  return -1
}


//Funcion para cargar los datos de la cuenta
function cargarDatos() {
  var userIniciado = obtenerCookie2("usuarioIniciado");
  var posicionValores = buscarCookie("Usuario", userIniciado);

  var usuario = obtenerValorCookiePorPosicion("Usuario", posicionValores);
  var nombre = obtenerValorCookiePorPosicion("Nombre", posicionValores);
  var a1 = obtenerValorCookiePorPosicion("Lastname1", posicionValores);
  var a2 = obtenerValorCookiePorPosicion("Apellido", posicionValores);
  var correo = obtenerValorCookiePorPosicion("Email", posicionValores);
  var fnac = obtenerValorCookiePorPosicion("Date", posicionValores);

  document.getElementById("userData").innerHTML = usuario;
  document.getElementById("nameData").innerHTML = nombre;
  document.getElementById("surname1Data").innerHTML = a1;
  document.getElementById("surname2Data").innerHTML = a2;
  document.getElementById("emailData").innerHTML = correo;
  document.getElementById("birthdayData").innerHTML = fnac;

  document.getElementById("actual_user_name").innerHTML = usuario;

}


  //Funcion para obtener el valor de una cookie dentro de el nombre de la cookie y sabiendo su pos
  function obtenerValorCookiePorPosicion(nameCookie, position) {
    var cookies = document.cookie;
    var parts = cookies.split(nameCookie + "=");
    var ourCookie = parts[1].split(";")[0];

    var allValues = ourCookie.split("|");

    return allValues[position]
  }


  //Funcion para que los datos se puedan editar
  function editarDatos(){
    document.getElementById("userData").contentEditable = "true";
    document.getElementById("emailData").contentEditable = "true";
    document.getElementById("nameData").contentEditable = "true";
    document.getElementById("surname1Data").contentEditable = "true";
    document.getElementById("surname2Data").contentEditable = "true";
    document.getElementById("birthdayData").contentEditable = "true";

    document.getElementById("editar").style.display = "none";
    document.getElementById("guardar").style.display = "block";

  }



  //Funcion para guardar los datos nuevos que se han cambiado
  function guardarDatos(){
    document.getElementById("editar").style.display = "block";
    document.getElementById("guardar").style.display = "none";

    document.getElementById("userData").contentEditable = "false";
    document.getElementById("emailData").contentEditable = "false";
    document.getElementById("nameData").contentEditable = "false";
    document.getElementById("surname1Data").contentEditable = "false";
    document.getElementById("surname2Data").contentEditable = "false";
    document.getElementById("birthdayData").contentEditable = "false";

    var userIniciado = obtenerCookie2("usuarioIniciado");
    var posicionValores = buscarCookie("Usuario", userIniciado);
    var valueCookieU = obtenerValorCookiePorPosicion("Usuario", posicionValores);
    var valueCookieN = obtenerValorCookiePorPosicion("Nombre", posicionValores);
    var valueCookieL = obtenerValorCookiePorPosicion("Lastname1", posicionValores);
    var valueCookieA = obtenerValorCookiePorPosicion("Apellido", posicionValores);
    var valueCookieE = obtenerValorCookiePorPosicion("Email", posicionValores);
    var valueCookieD = obtenerValorCookiePorPosicion("Date", posicionValores);

    //Nuevos valores
    var newUserData =  document.getElementById("userData").textContent;
    var newNameData =  document.getElementById("nameData").textContent;
    var newAp1Data =  document.getElementById("surname1Data").textContent;
    var newAp2Data =  document.getElementById("surname2Data").textContent;
    var newEmailData =  document.getElementById("emailData").textContent;
    var newDateData =  document.getElementById("birthdayData").textContent;

    cambiarValorUsuario(valueCookieU, newUserData);
    cambiarValorCookie("Nombre", valueCookieN, newNameData);
    cambiarValorCookie("Lastname1", valueCookieL, newAp1Data);
    cambiarValorCookie("Apellido", valueCookieA, newAp2Data);
    cambiarValorCookie("Email", valueCookieE, newEmailData);
    cambiarValorCookie("Date", valueCookieD, newDateData);
  }

  function cambiarValorCookie(nameCookie, valueCookie, newData){
    var cookies = document.cookie;
    var parts = cookies.split(nameCookie + "=");
    var ourCookie = parts[1].split(";")[0];

    var cookieSplitBefore = ourCookie.split(valueCookie)[0];
    var cookieSplitAfter = ourCookie.split(valueCookie)[1];

    document.cookie = nameCookie + "=" + cookieSplitBefore + newData + cookieSplitBefore + "; path=/";
  }

  function cambiarValorUsuario(valueCookie, newData){
    var cookies = document.cookie;
    var parts = cookies.split("Usuario" + "=");
    var ourCookie = parts[1].split(";")[0];

    var cookieSplitBefore = ourCookie.split(valueCookie)[0];
    var cookieSplitAfter = ourCookie.split(valueCookie)[1];

    document.cookie = "usuarioIniciado=" + newData + "; path=/";
    document.cookie = "Usuario=" + cookieSplitBefore + newData + cookieSplitBefore + "; path=/";
  }



//Funcion para cargar el nombre de usuario de la esquina superior derecha
function cargarNombre(){
  var userIniciado = obtenerCookie2("usuarioIniciado");
  var posicionValores = buscarCookie("Usuario", userIniciado);

  var usuario = obtenerValorCookiePorPosicion("Usuario", posicionValores);
  document.getElementById("actual_user_name").innerHTML = usuario;
}

function nombreUsuario(){ /* funcion para cambiar el nombre en la guia de uso */
  var userIniciado = obtenerCookie2("usuarioIniciado");
  var posicionValores = buscarCookie("Usuario", userIniciado);
  var usuario = obtenerValorCookiePorPosicion("Usuario", posicionValores);
  document.getElementById("actual_user_name").innerHTML = usuario;
  document.getElementById("nom").innerHTML = usuario;

}
