
//Funciones para eliminar cajas de productos

function Modelbox(n){
  var model= document.getElementById(n);
  model.style.display = "block";
}
function ModelAceptar(id,n){
  var modelclose = document.getElementById(n);
  modelclose.style.display = "none";
  var box= document.getElementById(id);
  box.style.display = "none";
}

function ArchivarLista(id,n){
  var modelclose = document.getElementById(n);
  modelclose.style.display = "none";
  document.getElementById(id).parentNode.style.display = "none";
}

function ModelCancelar(n){
  var modelclose = document.getElementById(n); //n es alert e id es boxiphone
 modelclose.style.display = "none";
}

function Like(id){
  var like = document.getElementById(id);
  like.src = "images/likerelleno.png"
}

//Funciones para aparecer y desaparecer el Pop up de cada productp
//Aparecer cogiendo la imagen del producto del que sale
function openPopUp(id){
  var popup = document.getElementById(id);
  document.getElementById(id).children[1].children[0].children[0].children[0].setAttribute("src", document.getElementById(id).parentNode.parentNode.children[0].getAttribute("src"));
  popup.style.display = "block";
}
//Desaparecer
function closePopUp(id) {
  var popup = document.getElementById(id);
  popup.style.display = "none";
}

function createPopUp(id, columna, description){
  document.getElementById(id).style.display = "block";
  var createUpText = document.getElementById(id);
  var createcolumnId = "columna"+columna;
  //El pop Up se divide en header
  var createUpHeader = document.createElement("div");
  createUpHeader.className ="headerPop";
    //consiste de la imagen de exit con su animación de overlay
    var exitCreateUp = document.createElement("div");
    exitCreateUp.className ="exitPop";
    var imgExitCreateUp = document.createElement("img");
    imgExitCreateUp.setAttribute("src", "images/exit.png");
    var overlayImgCreateUp = document.createElement("div");
    overlayImgCreateUp.className = "overlay";
      var imgOverlayCreateUp = document.createElement("img");
      imgOverlayCreateUp.className = "icon";
      imgOverlayCreateUp.setAttribute("src", "images/exit2.png");
    exitCreateUp.onclick = function(){ closePopUp(createUpText.id);};
    overlayImgCreateUp.appendChild(imgOverlayCreateUp);
    exitCreateUp.appendChild(imgExitCreateUp);
    exitCreateUp.appendChild(overlayImgCreateUp);
    createUpHeader.appendChild(exitCreateUp);
  createUpText.appendChild(createUpHeader);
  //El pop Up se divide en body
  var createUpBody = document.createElement("div");
  createUpBody.className = "bodyPop";
    //El body contiene un primer div con la imagen del movil y la descripcion ampliada
    //de este
    var imgTextCreateUp = document.createElement("div");
    imgTextCreateUp.className= "imgtext";
    imgTextCreateUp.id= "imgtext"+(document.getElementById(createcolumnId).children.length-4)+"C"+columna;
      //La imagen del telefono
      var phoneCreateUp = document.createElement("div");
      phoneCreateUp.className = "phone";
        var mainImgCreateUp = document.createElement("img");
        mainImgCreateUp.className = "imgprincipal";
        mainImgCreateUp.setAttribute("src", document.getElementById(id).parentNode.parentNode.children[0].getAttribute("src"));
        phoneCreateUp.appendChild(mainImgCreateUp);
      imgTextCreateUp.appendChild(phoneCreateUp);
      //la descripcion ampliada del telefono
      var contentCreateUp = document.createElement("div");
      contentCreateUp.className = "contenido";
      contentCreateUp.setAttribute("contenteditable", "true");
        var paragraphCreateUp = document.createElement("p");
        paragraphCreateUp.innerHTML = description;
        contentCreateUp.appendChild(paragraphCreateUp);
      imgTextCreateUp.appendChild(contentCreateUp);
    //se introduce en el pop Up el conjunto de imagen y texto
    createUpBody.appendChild(imgTextCreateUp);
    //Se introducen las posibles acciones
    var actionsCreateUp = document.createElement("div");
    actionsCreateUp.className = "accionesPop";
      //accion de like en el pop up
      var tipToolCreateUp1 = document.createElement("div");
      tipToolCreateUp1.className = "tooltipPop";
        var actionCreateUp1 = document.createElement("img");
        actionCreateUp1.className = "accionPop";
        actionCreateUp1.id = "likePop"+(document.getElementById(createcolumnId).children.length-4)+"C"+columna;
        actionCreateUp1.setAttribute("src", "images/like.png");
        actionCreateUp1.onclick = function(){ Like(actionCreateUp1.id);};
        var tipToolTextCreateUp1 = document.createElement("span");
        tipToolTextCreateUp1.className = "tooltiptextPop";
        tipToolTextCreateUp1.innerHTML = "Me gusta";
        tipToolCreateUp1.appendChild(actionCreateUp1);
        tipToolCreateUp1.appendChild(tipToolTextCreateUp1);
      actionsCreateUp.appendChild(tipToolCreateUp1);
      //accion de comentar en el pop up
      var tipToolCreateUp2 = document.createElement("div");
      tipToolCreateUp2.className = "tooltipPop";
        var actionCreateUp2 = document.createElement("img");
        actionCreateUp2.className = "accionPop";
        actionCreateUp2.id = "commentPop"+(document.getElementById(createcolumnId).children.length-4)+"C"+columna;
        actionCreateUp2.setAttribute("src", "images/comment.png");
        var tipToolTextCreateUp2 = document.createElement("span");
        tipToolTextCreateUp2.className = "tooltiptextPop";
        tipToolTextCreateUp2.innerHTML = "Comentar";
        tipToolCreateUp2.appendChild(actionCreateUp2);
        tipToolCreateUp2.appendChild(tipToolTextCreateUp2);
      actionsCreateUp.appendChild(tipToolCreateUp2);
      //accion de compartir en el pop up
      var tipToolCreateUp3 = document.createElement("div");
      tipToolCreateUp3.className = "tooltipPop";
        var actionCreateUp3 = document.createElement("img");
        actionCreateUp3.className = "accionPop";
        actionCreateUp3.id = "sharePop"+(document.getElementById(createcolumnId).children.length-4)+"C"+columna;
        actionCreateUp3.setAttribute("src", "images/share.png");
        var tipToolTextCreateUp3 = document.createElement("span");
        tipToolTextCreateUp3.className = "tooltiptextPop";
        tipToolTextCreateUp3.innerHTML = "Comentar";
        tipToolCreateUp3.appendChild(actionCreateUp3);
        tipToolCreateUp3.appendChild(tipToolTextCreateUp3);
      actionsCreateUp.appendChild(tipToolCreateUp3);
      createUpBody.appendChild(actionsCreateUp);
      //Añaimos la fecha en el Pop Up
      var dateTimeCreateUp = document.createElement("div");
      dateTimeCreateUp.className = "fechaPop";
      dateTimeCreateUp.id = "fecha"+(document.getElementById(createcolumnId).children.length-4)+"C"+columna;
      dateTimeCreateUp.setAttribute("contenteditable", "true");
        var paragraphTimeCreateUp = document.createElement("p");
        var d = new Date();
        var n = d.getDate() + "/" +d.getMonth() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
        paragraphTimeCreateUp.innerHTML = n;
        dateTimeCreateUp.appendChild(paragraphTimeCreateUp);
      createUpBody.appendChild(dateTimeCreateUp);
      //Añadimos con quien ha compartido el evento
      var eventCreateUp = document.createElement("div");
      eventCreateUp.className="eventoPop";
      eventCreateUp.id = "evento"+(document.getElementById(createcolumnId).children.length-4)+"C"+columna;
        var paragraphEventCreateUp = document.createElement("p");
        paragraphEventCreateUp.innerHTML = "Has compartido el evento con: ";
        eventCreateUp.appendChild(paragraphEventCreateUp);
      createUpBody.appendChild(eventCreateUp);
      //Añadimos los usuarios conectados
      var eventCreateUp = document.createElement("div");
      eventCreateUp.className="usuarioPop";
      eventCreateUp.id = "usuarios"+(document.getElementById(createcolumnId).children.length-4)+"C"+columna;
        //Usuario Arriba Izq
        var userIzqUpCreateUp = document.createElement("div");
        userIzqUpCreateUp.className = "usuarioizq";
          var tipToolUserIzqUpCreateUp = document.createElement("div");
          tipToolUserIzqUpCreateUp.className = "tooltipPop";
            var userLeftUpCreateUp = document.createElement("div");
            userLeftUpCreateUp.className = "user";
              var userLeftUpImgCreateUp= document.createElement("img");
              userLeftUpImgCreateUp.setAttribute("src", "images/online.png");
              userLeftUpCreateUp.appendChild(userLeftUpImgCreateUp);
            tipToolUserIzqUpCreateUp.appendChild(userLeftUpCreateUp);
            var textUserLeftUpCreateUp = document.createElement("div");
            textUserLeftUpCreateUp.className = "textusers";
              var paragraphUserLeftUpCreateUp = document.createElement("p");
              paragraphUserLeftUpCreateUp.innerHTML = "User 1 ";
              textUserLeftUpCreateUp.appendChild(paragraphUserLeftUpCreateUp);
            tipToolUserIzqUpCreateUp.appendChild(textUserLeftUpCreateUp);
            var tipToolTextUserIzqUpCreateUp = document.createElement("span");
            tipToolTextUserIzqUpCreateUp.className = "tooltiptextPop";
            tipToolTextUserIzqUpCreateUp.innerHTML = "Desconectado";
            tipToolUserIzqUpCreateUp.appendChild(tipToolTextUserIzqUpCreateUp);
          userIzqUpCreateUp.appendChild(tipToolUserIzqUpCreateUp);
        eventCreateUp.appendChild(userIzqUpCreateUp);
        //Usuario Arriba Derecha
        var userDerUpCreateUp= document.createElement("div");
        userDerUpCreateUp.className = "usuarioder";
          var tipToolUserDerUpCreateUp = document.createElement("div");
          tipToolUserDerUpCreateUp.className = "tooltipPop";
            var userRightUpCreateUp = document.createElement("div");
            userRightUpCreateUp.className = "user";
              var userRightUpImgCreateUp = document.createElement("img");
              userRightUpImgCreateUp.setAttribute("src", "images/offline.png");
              userRightUpCreateUp.appendChild(userRightUpImgCreateUp);
            tipToolUserDerUpCreateUp.appendChild(userRightUpCreateUp);
            var textUserRightUpCreateUp = document.createElement("div");
            textUserRightUpCreateUp.className = "textusers";
              var paragraphUserRightUpCreateUp = document.createElement("p");
              paragraphUserRightUpCreateUp.innerHTML = "User 3";
              textUserRightUpCreateUp.appendChild(paragraphUserRightUpCreateUp);
            tipToolUserDerUpCreateUp.appendChild(textUserRightUpCreateUp);
            var tipToolTextUserDerUpCreateUp = document.createElement("span");
            tipToolTextUserDerUpCreateUp.className = "tooltiptextPop";
            tipToolTextUserDerUpCreateUp.innerHTML = "Desconectado";
            tipToolUserDerUpCreateUp.appendChild(tipToolTextUserDerUpCreateUp);
          userDerUpCreateUp.appendChild(tipToolUserDerUpCreateUp);
        eventCreateUp.appendChild(userDerUpCreateUp);
        //Usuario Adicion
        var userAddCreateUp = document.createElement("div");
        userAddCreateUp.className = "useradd";
          var tipToolUserAddCreateUp = document.createElement("div");
          tipToolUserAddCreateUp.className = "tooltipPop";
            var userAddImgCreateUp = document.createElement("img");
            userAddImgCreateUp.className = "imgadd";
            userAddImgCreateUp.id = "imgadd"+(document.getElementById(createcolumnId).children.length-4)+"C"+columna;
            userAddImgCreateUp.setAttribute("src", "images/add.png"); 
            tipToolUserAddCreateUp.appendChild(userAddImgCreateUp);
            var tipToolTextUserAddCreateUp = document.createElement("span");
            tipToolTextUserAddCreateUp.className = "tooltiptextPop";
            tipToolTextUserAddCreateUp.innerHTML = "Agregar";
            tipToolUserAddCreateUp.appendChild(tipToolTextUserAddCreateUp);
          userAddCreateUp.appendChild(tipToolUserAddCreateUp);
        eventCreateUp.appendChild(userAddCreateUp);
        //Usuario Abajo Izq
        var userIzqDownCreateUp = document.createElement("div");
        userIzqDownCreateUp.className = "usuarioizq";
          var tipToolUserIzqDownCreateUp = document.createElement("div");
          tipToolUserIzqDownCreateUp.className = "tooltipPop";
            var userLeftDownCreateUp = document.createElement("div");
            userLeftDownCreateUp.className = "user";
              var userLeftDownImgCreateUp = document.createElement("img");
              userLeftDownImgCreateUp.setAttribute("src", "images/online.png");
              userLeftDownCreateUp.appendChild(userLeftDownImgCreateUp);
            tipToolUserIzqDownCreateUp.appendChild(userLeftDownCreateUp);
            var textUserLeftDownCreateUp = document.createElement("div");
            textUserLeftDownCreateUp.className = "textusers";
              var paragraphUserLeftDownCreateUp = document.createElement("p");
              paragraphUserLeftDownCreateUp.innerHTML = "User 2";
              textUserLeftDownCreateUp.appendChild(paragraphUserLeftDownCreateUp);
            tipToolUserIzqDownCreateUp.appendChild(textUserLeftDownCreateUp);
            var tipToolTextUserIzqDownCreateUp = document.createElement("span");
            tipToolTextUserIzqDownCreateUp.className = "tooltiptextPop";
            tipToolTextUserIzqDownCreateUp.innerHTML = "Desconectado";
            tipToolUserIzqDownCreateUp.appendChild(tipToolTextUserIzqDownCreateUp);
          userIzqDownCreateUp.appendChild(tipToolUserIzqDownCreateUp);
        eventCreateUp.appendChild(userIzqDownCreateUp);
        //Usuario Abajo Derecha
        var userDerDownCreateUp = document.createElement("div");
        userDerDownCreateUp.className = "usuarioder";
          var tipToolUserDerDownCreateUp = document.createElement("div");
          tipToolUserDerDownCreateUp.className = "tooltipPop";
            var userRightDownCreateUp = document.createElement("div");
            userRightDownCreateUp.className = "user";
              var userRightDownImgCreateUp = document.createElement("img");
              userRightDownImgCreateUp.setAttribute("src", "images/offline.png");
              userRightDownCreateUp.appendChild(userRightDownImgCreateUp);
            tipToolUserDerDownCreateUp.appendChild(userRightDownCreateUp);
            var textUserRightDownCreateUp = document.createElement("div");
            textUserRightDownCreateUp.className = "textusers";
              var paragraphUserRightDownCreateUp = document.createElement("p");
              paragraphUserRightDownCreateUp.innerHTML = "User 4";
              textUserRightDownCreateUp.appendChild(paragraphUserRightDownCreateUp);
            tipToolUserDerDownCreateUp.appendChild(textUserRightDownCreateUp);
            var tipToolTextUserDerDownCreateUp = document.createElement("span");
            tipToolTextUserDerDownCreateUp.className = "tooltiptextPop";
            tipToolTextUserDerDownCreateUp.innerHTML = "Desconectado";
            tipToolUserDerDownCreateUp.appendChild(tipToolTextUserDerDownCreateUp);
          userDerDownCreateUp.appendChild(tipToolUserDerDownCreateUp);
        eventCreateUp.appendChild(userDerDownCreateUp);
      createUpBody.appendChild(eventCreateUp);
      //Creamos el chat
      var chatCreateUp = document.createElement("div");
      chatCreateUp.className = "chat";
      chatCreateUp.id = "chat"+(document.getElementById(createcolumnId).children.length-4)+"C"+columna;
        var conversationCreateUp = document.createElement("div");
        conversationCreateUp.className = "conversacion";
        conversationCreateUp.id = "conversacion"+(document.getElementById(createcolumnId).children.length-4)+"C"+columna;
          var paragraphUserCreateUp1= document.createElement("p");
          paragraphUserCreateUp1.innerHTML = "User 1: Me lo compré hace varios dias y la bateria dura mucho más que los anteriores. Lo recomiendo.";
          conversationCreateUp.appendChild(paragraphUserCreateUp1);
          var paragraphUserCreateUp2= document.createElement("p");
          paragraphUserCreateUp2.innerHTML = "User 4: Tiene un gran cambio respecto a los anteriores teléfonos. La calidad de fotos y vídeos es increíble.";
          conversationCreateUp.appendChild(paragraphUserCreateUp2);
        chatCreateUp.appendChild(conversationCreateUp);
      createUpBody.appendChild(chatCreateUp);
      var boxcommentCreateUp = document.createElement("div");
      boxcommentCreateUp.className = "boxcomment";
      boxcommentCreateUp.id = "boxcomment"+(document.getElementById(createcolumnId).children.length-4)+"C"+columna;
      boxcommentCreateUp.innerHTML = "Escribir en el chat";
      createUpBody.appendChild(boxcommentCreateUp);
      var boxsendCreateUp = document.createElement("div");
      boxsendCreateUp.className = "boxsend";
      boxsendCreateUp.id = "boxsend"+(document.getElementById(createcolumnId).children.length-4)+"C"+columna;
        var tipToolSendCreateUp = document.createElement("div");
        tipToolSendCreateUp.className = "tooltipPop";
          var sendImgCreateUp = document.createElement("img");
          sendImgCreateUp.className = "send";
          sendImgCreateUp.setAttribute("src", "images/send.png");
          tipToolSendCreateUp.appendChild(sendImgCreateUp);
          var tipToolTextSendCreateUp = document.createElement("span");
          tipToolTextSendCreateUp.className = "tooltiptextPop";
          tipToolTextSendCreateUp.innerHTML= "Enviar";
          tipToolSendCreateUp.appendChild(tipToolTextSendCreateUp);
        boxsendCreateUp.appendChild(tipToolSendCreateUp);
      createUpBody.appendChild(boxsendCreateUp);
    createUpText.appendChild(createUpBody);      

}

//funciones para aprecer y desaparecer un Pop Up
//Aparecer
function myFunctionOpen(id){
  var popup = document.getElementById(id);
  popup.style.display = "block";
}
//Desaparecer
function myFunctionClose(id) {
  var popup = document.getElementById(id);
  popup.style.display = "none";
}

function Compartir(id){
  var compartir = document.getElementById(id);
  compartir.style.display = "block";
}

//FUNCIÓN PARA AÑADIR NUEVAS CAJAS DE PRODUCTOS 
//SE CIERRA EL POP UP ABIERTO
//
//
function CloseAddProduct(columna, popUp, description, imagen, texto){
  //HACEMOS VISIBLE EL POP UP DE CREAR UN NUEVO PRODUCTO
  //
  if (document.getElementById(description).value != ""){
    var popup = document.getElementById(popUp);
    popup.style.display = "none";

    //CREAMOS UN NUEVO PRODUCTO Y LO INTRODUCIMOS DEBAJO DEL ULTIMO PRODUCTO DE
    //ESA COLUMNA
    //
    var nuevoElementoLista = document.createElement("li");
    nuevoElementoLista.className = "ui-state-default";
    var columnId = "columna"+columna;
    var nuevoProducto = document.createElement("div");
    nuevoProducto.className = "producto";
    nuevoProducto.id= "producto"+((document.getElementById(columnId).children.length)-4)+"C"+columna;
    //CREAMOS UNA NUEVA IMAGEN
    //
    var telfImg = document.createElement("img");
    telfImg.className = "moviles";
    var tamImg = document.getElementById(imagen).value.length; 
    var archivo = "";
    var inverso = "";
    var i;
    var j;
    if (document.getElementById(imagen).value == ""){
      //Si no se selecciona foto se introducira una por defecto
      archivo = "telfdefecto.png";
    }else{
      j = 0;
      //Para poder introducir una foto esta debe de estar en la carpeta de images
      for(i=tamImg-1; i>(-1); i--) {
        if(document.getElementById(imagen).value[i] == "\\" || document.getElementById(imagen).value[i] == "/" ){
          i = -1;
        }else{
          inverso += document.getElementById(imagen).value[i];
          j++;
        }
      }
      j=inverso.length-1;
      for(i=0; i<inverso.length; i++) {
        archivo += inverso[j];
        j--;
      }
    }
    telfImg.setAttribute("src", "images/"+archivo);
    nuevoProducto.appendChild(telfImg);
    
    //NUEVO POP UP PARA CADA PRODUCTO ENLAZADO CON EL NOMBRE
    //
    //
    var popcorn = document.createElement("div");
    popcorn.className = "popup";
      //CREAMOS EL POPUP TEXT CON SU IDENTIFICADOR
      //
      //INTRODUCCION DEL NUEVO TEXTO DEL PRODUCTO
      //El nombre que se encuentra en la caja de producto
      var telfNombre = document.createElement("div");
      telfNombre.className = "tipo-movil";
        var nombre = document.createElement("p");
        nombre.className= "manjari";
        nombre.innerHTML = document.getElementById(description).value;
        telfNombre.appendChild(nombre);
      //El pop Up como tal
      var popcornText = document.createElement("span");
      popcornText.className = "popuptext";
      //El id del nuevo Pop Up
      popcornText.id = "myPopup"+(document.getElementById(columnId).children.length-4)+"C"+columna;
      //El nombre se enlazará con el PopUp
      if (document.getElementById(texto).value == ""){
        telfNombre.onclick = function(){createPopUp(popcornText.id, columna, 'NO SE HA INTRODUCIDO NINGUNA DESCRIPCION CORRESPONDIENTE CON ESTE PRODUCTO');};
      }else{
        var des = document.getElementById(texto).value;
        telfNombre.onclick = function(){createPopUp(popcornText.id, columna, des);};
      }
      popcorn.appendChild(telfNombre);
      popcorn.appendChild(popcornText);
    nuevoProducto.appendChild(popcorn);        

    //ELIMINAR EL NUEVO PRODUCTO
    //
    var exit = document.createElement("div");
    exit.className ="img-exit";
      var imgExit = document.createElement("img");
      imgExit.setAttribute("src", "images/exit.png");
      exit.appendChild(imgExit);
      var overlayImg = document.createElement("div");
      overlayImg.className = "overlay";
        var imgOverlay = document.createElement("img");
        imgOverlay.className = "icon";
        imgOverlay.setAttribute("src", "images/exit2.png");
        overlayImg.appendChild(imgOverlay);
      exit.appendChild(overlayImg);
      exit.onclick = function(){ Modelbox(exitAlert.id);};
    nuevoProducto.appendChild(exit);

    //POP UP DE ALERTA DE CADA PRODUCTO
    //
    //Con las funciones que se realizan dentro del popUp
    var exitAlert = document.createElement("div");
    exitAlert.className =  "w3-modal";
    exitAlert.id = "alert"+(document.getElementById(columnId).children.length-4)+"C"+columna;
      var animate = document.createElement("div");
      animate.className = "w3-modal-content w3-card-4 w3-animate-opacity";
        var textModel = document.createElement("div");
        textModel.className = "w3-container";
        textModel.id = "textmodel"+(document.getElementById(columnId).children.length-4)+"C"+columna;
          var paragraphAlert =  document.createElement("p");
          paragraphAlert.innerHTML = "¿Desea borrar la caja?";
          textModel.appendChild(paragraphAlert);
          var exitCancelar = document.createElement("button");
          exitCancelar.className = "w3-button w3-right w3-white w3-border";
          exitCancelar.innerHTML = "Calcelar";
          exitCancelar.onclick = function(){ ModelCancelar(exitAlert.id);};
          textModel.appendChild(exitCancelar);
          var exitAceptar = document.createElement("button");
          exitAceptar.className = "w3-button w3-right w3-white w3-border";
          exitAceptar.innerHTML= "Aceptar";
          exitAceptar.onclick = function(){ ModelAceptar(nuevoProducto.id, exitAlert.id);};
          textModel.appendChild(exitAceptar);
        animate.appendChild(textModel);
      exitAlert.appendChild(animate);
    nuevoProducto.appendChild(exitAlert);

    //CREAMOS LAS ACCIONES DE CADA PRODUCTO
    //
    var actionsProduct = document.createElement("div");
    actionsProduct.className = "acciones";

      //ACCION ME GUSTA
      var actionTool1 = document.createElement("div");
      actionTool1.className = "accion-tool";
        var tiptool1 = document.createElement("div");
        tiptool1.className ="tooltip";
          var actionLike = document.createElement("img");
          actionLike.className = "accion";
          actionLike.id = "like"+(document.getElementById(columnId).children.length-4)+"C"+columna;
          actionLike.setAttribute("src", "images/like.png");
          actionLike.onclick = function(){ Like(actionLike.id);};
          var textTiptool1 = document.createElement("span");
          textTiptool1.className = "tooltiptext";
          textTiptool1.innerHTML = "Me gusta";
          //jerarquizamos la accion de me gusta dentro del nuevo producto
          tiptool1.appendChild(actionLike);
          tiptool1.appendChild(textTiptool1);
        actionTool1.appendChild(tiptool1);
      actionsProduct.appendChild(actionTool1);

      //ACCION COMENTAR
      var actionTool2 = document.createElement("div");
      actionTool2.className = "accion-tool";
        var tiptool2 = document.createElement("div");
        tiptool2.className ="tooltip";
          var actionComment = document.createElement("img");
          actionComment.className = "accion";
          actionComment.setAttribute("src", "images/comment.png");
          var textTiptool2 = document.createElement("span");
          textTiptool2.className = "tooltiptext";
          textTiptool2.innerHTML = "Comentar";
          //jerarquizamos la accion de comentar dentro del nuevo producto
          tiptool2.appendChild(actionComment);
          tiptool2.appendChild(textTiptool2);
        actionTool2.appendChild(tiptool2);
      actionsProduct.appendChild(actionTool2);

      //ACCION COMPARTIR
      var actionTool3 = document.createElement("div");
      actionTool3.className = "accion-tool";
        var tiptool3 = document.createElement("div");
        tiptool3.className ="tooltip";
          var actionShare = document.createElement("img");
          actionShare.className = "accion";
          actionShare.setAttribute("src", "images/share.png");
          var textTiptool3 = document.createElement("span");
          textTiptool3.className = "tooltiptext";
          textTiptool3.innerHTML = "Compartir";


      //POP UP COMPARTIR
      var popShare = document.createElement("div");
      popShare.className = "Popcompartir";
        var popUpShare = document.createElement("span");
        popUpShare.className = "PopupCompartir";
        popUpShare.id = "compartir"+(document.getElementById(columnId).children.length-4)+"C"+columna;

          //accion de compartir
          actionShare.onclick = function(){ Compartir(popUpShare.id);};
          //jerarquizamos la accion de compartir dentro del nuevo producto
          tiptool3.appendChild(actionShare);
          tiptool3.appendChild(textTiptool3);
        actionTool3.appendChild(tiptool3);
      actionsProduct.appendChild(actionTool3);

      //fecha
      var dateTime = document.createElement("div");
      dateTime.className = "fecha";
        var tiempo = document.createElement("p");
        tiempo.className = "manjari";
        //Cogemos la fecha actual
        var d = new Date();
        var n = d.getDate() + "/" +d.getMonth() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
        tiempo.innerHTML = n;
        dateTime.appendChild(tiempo);
      //añadimos la fecha al div de acciones
      actionsProduct.appendChild(dateTime);

          //boton de exit del popUp de compartir con overlay
          var exitShare = document.createElement("div");
          exitShare.className = "exitComp";
          exitShare.onclick = function(){ closePopUp(popUpShare.id);};
            var exitImgShare = document.createElement("img");
            exitImgShare.setAttribute("src", "images/exit.png");
            var overlayImgShare= document.createElement("div");
            overlayImgShare.className = "overlay";
              var imgOverlayShare = document.createElement("img");
              imgOverlayShare.className = "icon";
              imgOverlayShare.setAttribute("src", "images/exit2.png");
              //overlay del exit jerarquizado
              overlayImgShare.appendChild(imgOverlayShare);
            exitShare.appendChild(exitImgShare);
            exitShare.appendChild(overlayImgShare);
          popUpShare.appendChild(exitShare);
          //Otro elementos internos dentro del popup de compartir
          var paragraphShare = document.createElement("p");
          paragraphShare.innerHTML = "Compartir evento " + document.getElementById(description).value + " en: ";
          var twitterShare = document.createElement("img");
          twitterShare.className = "img-compop" ;
          twitterShare.setAttribute("src", "images/twitter.png");
          var instagramShare = document.createElement("img");
          instagramShare.className = "img-compop" ;
          instagramShare.setAttribute("src", "images/insta.png");
          var facebookShare = document.createElement("img");
          facebookShare.className = "img-compop" ;
          facebookShare.setAttribute("src", "images/facebook.png");
          //jerarquizamos los elementros dentro del popUp de compartir del producto
          popUpShare.appendChild(paragraphShare);
          popUpShare.appendChild(twitterShare);
          popUpShare.appendChild(instagramShare);
          popUpShare.appendChild(facebookShare);
        popShare.appendChild(popUpShare);

      //añadimos el pop up de compartir dentro del div acciones
      actionsProduct.appendChild(popShare);

    nuevoProducto.appendChild(actionsProduct);
    nuevoElementoLista.appendChild(nuevoProducto);

    var longitud = document.getElementById(columnId).children.length;
    var idUltimo = document.getElementById(columnId).children[longitud-3];
    document.getElementById(columnId).children[longitud-3].appendChild(nuevoElementoLista);
    document.getElementById(description).value = "";
    document.getElementById(imagen).value = "";
    document.getElementById(texto).value = "";
  }else{
    alert("Introduzca un nombre de descripción");
  }
}
$(function() {
  $("#sortable").sortable({ axis: "x", opacity: 0.8});

} );

$( function() {
  $( "#sortableC1, #sortableC2, #sortableC3" ).sortable({
    connectWith: ".connectedSortable"
  }).disableSelection();
} );


