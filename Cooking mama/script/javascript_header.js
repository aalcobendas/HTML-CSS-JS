//Funciones para abrir y cerrar el popup de cerrar sesion
function openPopUp(id){
  document.getElementById(id).parentNode.style.display = "block";
  document.getElementById(id).style.display = "block";

}

function closePopUp(id){
  document.getElementById(id).parentNode.style.display = "none";
  document.getElementById(id).style.display = "none";
}

//Funcion para volver a la pagina principal al hacer click en el nombre (Cooking Mamma)

function irPrincipal(){
  window.location="index_ppal.html";
}
