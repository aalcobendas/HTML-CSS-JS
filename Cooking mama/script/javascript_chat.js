var already_opened = false;

function activateChat(id) {
  var notActive = document.getElementsByClassName("friendsChats");
  for (i = 0; i < notActive.length; i++) {
      notActive[i].className = notActive[i].className.replace(" activeChat", " notActiveChat");
  }
  document.getElementById(id).className = document.getElementById(id).className.replace(" notActiveChat", " activeChat");

  var chat_id = id[id.length-1];
  var not_opened = document.getElementsByClassName("currentOpenedChat");
  for (i = 0; i < not_opened.length; i++) {
      not_opened[i].className = not_opened[i].className.replace(" opened", " notOpened");
  }
  document.getElementById("chat"+chat_id).className = document.getElementById("chat"+chat_id).className.replace(" notOpened", " opened");
}

function openPopUp(id){
  document.getElementById(id).parentNode.style.display = "block";
  document.getElementById(id).style.display = "block";

}

function closePopUp(id){
  document.getElementById(id).parentNode.style.display = "none";
  document.getElementById(id).style.display = "none";
}

function deleteChat(id){
  var delete_chat_id = id[id.length-1];
  document.getElementById(id).parentNode.style.display = "none";
  document.getElementById(id).style.display = "none";

  document.getElementById("friend"+delete_chat_id).style.display = "none";
  document.getElementById("chat"+delete_chat_id).style.display = "none";
}

function sendMessage(input_id){
  if (document.getElementById(input_id).value != ""){
    var id_chat = input_id[input_id.length-1]
     var new_message_sender = document.createElement("div");
     new_message_sender.className = "messages sender";
      var new_msg_text = document.createElement("div");
      new_msg_text.className = "msgText";
        var new_message = document.createElement("p");
        new_message.className = "montserrat";
        new_message.innerHTML = document.getElementById(input_id).value;
      new_msg_text.appendChild(new_message);
        var new_hour = document.createElement("p");
        new_hour.className = "hour montserrat";
        var d = new Date();
        if (d.getMinutes()<10){
          var n = d.getHours() + ".0" + d.getMinutes();
        }else{
          var n = d.getHours() + "." + d.getMinutes();
        }
        new_hour.innerHTML = n;
      new_msg_text.appendChild(new_hour);
    new_message_sender.appendChild(new_msg_text);
    document.getElementById("chatBox"+id_chat).appendChild(new_message_sender);

    //Actualizamos el div correspondiente
    document.getElementById("friend"+id_chat).children[3].children[0].innerHTML = document.getElementById(input_id).value;
    document.getElementById("friend"+id_chat).children[4].children[0].innerHTML = n;

    //Movemos el div del chat abierto correspondiente
    var move_div = document.getElementById("friend"+id_chat);
    document.getElementById("chats").removeChild(move_div);
    document.getElementById("chats").insertBefore(move_div, document.getElementById("chats").children[0]);

    document.getElementById(input_id).value = "";

  }else{

  }
}

function openNewChat(){
  //Creamos un nuevo chat, si se introduce nombre
  if (document.getElementById("newFriendChat").value != ""){
    //Cogemos el nuevo numero de identidad que tendra el nuevo chat
    var num_new_children = 0;
    var highest_id = 0;
    for(i=0; i< document.getElementById("chats").children.length; i++){
      highest_id = document.getElementById("chats").children[document.getElementById("chats").children.length-1].id;
      highest_id = highest_id[highest_id.length-1];
      if (highest_id>num_new_children){
        num_new_children = highest_id;
      }
    }
    num_new_children++;
    //Creamos el div de nuevo chat
    var new_friends_chat = document.createElement("div");
    new_friends_chat.className = "friendsChats notActiveChat";
    new_friends_chat.id = "friend"+num_new_children;
      //Tendrá una foto de perfil por defecto, ya que no hay base de datos
      var new_photo_friend = document.createElement("div");
      new_photo_friend.className = "photoFriend";
        var new_photo_friend_img = document.createElement("img");
        new_photo_friend_img.setAttribute("src", "images/defaultPerson.png");
      new_photo_friend.appendChild(new_photo_friend_img);
    new_friends_chat.appendChild(new_photo_friend);
      //Tendrá un nombre de amigo
      var new_name_friend = document.createElement("div");
      new_name_friend.className = "nameFriend";
        var new_name_friend_text = document.createElement("p");
        new_name_friend_text.className = "montserrat";
        //Con nombre el introducido
        new_name_friend_text.innerHTML = document.getElementById("newFriendChat").value;
      new_name_friend.appendChild(new_name_friend_text);
      new_name_friend.onclick = function(){ activateChat(new_friends_chat.id);};
    new_friends_chat.appendChild(new_name_friend);
      //Tendrá un boton de eliminar chat
      var new_close_chat = document.createElement("div");
      new_close_chat.className = "closeChat";
        var new_not_overlay = document.createElement("img");
        new_not_overlay.className = "notOverlay";
        new_not_overlay.setAttribute("src", "images/error2.png");
      new_close_chat.appendChild(new_not_overlay);
        //Con hover
        var new_overlay = document.createElement("div");
        new_overlay.className = "overlay";
          var new_overlay_img = document.createElement("img");
          new_overlay_img.className = "icon";
          new_overlay_img.setAttribute("src", "images/error.png");
        new_overlay.appendChild(new_overlay_img);
      new_close_chat.appendChild(new_overlay);
      new_close_chat.onclick = function(){ openPopUp("popUpCloseChat"+num_new_children);};
    new_friends_chat.appendChild(new_close_chat);
      //Tendrá un último mensaje visible
      var new_last_message = document.createElement("div");
      new_last_message.className = "lastMessage";
        var new_last_message_text = document.createElement("p");
        new_last_message_text.className = "montserrat";
        new_last_message_text.innerHTML = "Inicia el chat...";
      new_last_message.appendChild(new_last_message_text);
    new_friends_chat.appendChild(new_last_message);
      //Tendrá una última hora visible
      var new_time_friend = document.createElement("div");
      new_time_friend.className = "timeFriend";
        var new_time_friend_text = document.createElement("p");
        new_time_friend_text.className = "montserrat";
        new_time_friend_text.innerHTML = "...";
      new_time_friend.appendChild(new_time_friend_text);
    new_friends_chat.appendChild(new_time_friend);

      //Tendrá un popUp de cierre
      var new_pop_close_chat = document.createElement("div");
      new_pop_close_chat.className = "popCloseChat";
        var new_pop_up_close_chat = document.createElement("span");
        new_pop_up_close_chat.className = "popUpCloseChat";
        new_pop_up_close_chat.id = "popUpCloseChat"+num_new_children;
          //Con un mensaje de advertencia
          var new_close_chat_msg = document.createElement("div");
          new_close_chat_msg.className = "closeChatMsg";
            var new_close_chat_msg_text = document.createElement("p");
            new_close_chat_msg_text.className = "ptSans";
            new_close_chat_msg_text.innerHTML = "¿Seguro que desea cerrar el chat?";
          new_close_chat_msg.appendChild(new_close_chat_msg_text);
            var new_br = document.createElement("br");
          new_close_chat_msg.appendChild(new_br);
        new_pop_up_close_chat.appendChild(new_close_chat_msg);
          //Con unos botones
          var new_options_close = document.createElement("div");
          new_options_close.className = "optionsClose";
            var new_button_1 = document.createElement("button");
            new_button_1.className = "bottons ptSans";
            new_button_1.innerHTML = "Cancelar";
            new_button_1.onclick = function(){ closePopUp("popUpCloseChat"+num_new_children);};
          new_options_close.appendChild(new_button_1);
            var new_button_2 = document.createElement("button");
            new_button_2.className = "bottons ptSans";
            new_button_2.innerHTML = "Aceptar";
            new_button_2.onclick = function(){ closePopUp("popUpCloseChat"+num_new_children);};
            new_button_2.onclick = function(){ deleteChat("popUpCloseChat"+num_new_children);};
          new_options_close.appendChild(new_button_2);
        new_pop_up_close_chat.appendChild(new_options_close);
      new_pop_close_chat.appendChild(new_pop_up_close_chat);
    new_friends_chat.appendChild(new_pop_close_chat);
    document.getElementById("chats").appendChild(new_friends_chat);


    //Creamos una nueva ventana de chat para hablar
    var new_current_opened_chat = document.createElement("div");
    new_current_opened_chat.className = "currentOpenedChat notOpened";
    new_current_opened_chat.id = "chat"+num_new_children;
      var new_current_chatter = document.createElement("div");
      new_current_chatter.className = "currentChatter montserrat";
        var new_current_chatter_name = document.createElement("p");
        new_current_chatter_name.innerHTML = document.getElementById("newFriendChat").value;
      new_current_chatter.appendChild(new_current_chatter_name);
    new_current_opened_chat.appendChild(new_current_chatter);
      var new_chat_box = document.createElement("div");
      new_chat_box.className = "chatBox";
      new_chat_box.id = "chatBox"+num_new_children;
    new_current_opened_chat.appendChild(new_chat_box);
      var new_write_new_message = document.createElement("div");
      new_write_new_message.className = "writeNewMessage";
        var new_typed_new_message = document.createElement("div");
        new_typed_new_message.className = "typedNewMessage";
          var new_new_msg = document.createElement("input");
          new_new_msg.className = "newMsg";
          new_new_msg.id = "newMsg"+num_new_children;
          new_new_msg.onfocus = "this.value=''";
          new_new_msg.type = "text";
          new_new_msg.placeholder = "Escribe un nuevo mensaje...";
        new_typed_new_message.appendChild(new_new_msg);
      new_write_new_message.appendChild(new_typed_new_message);
        var new_send_new_message = document.createElement("div");
        new_send_new_message.className = "sendNewMessage";
          var new_img_not_overlay = document.createElement("img");
          new_img_not_overlay.className = "notOverlay"
          new_img_not_overlay.setAttribute("src", "images/send2.png");
        new_send_new_message.appendChild(new_img_not_overlay);
          var new_overlay_send = document.createElement("div");
          new_overlay_send.className = "overlay";
            var new_overlay_send_img = document.createElement("img");
            new_overlay_send_img.className = "icon"
            new_overlay_send_img.setAttribute("src", "images/send.png");
          new_overlay_send.appendChild(new_overlay_send_img);
        new_send_new_message.appendChild(new_overlay_send);
        new_send_new_message.onclick = function(){ sendMessage("newMsg"+num_new_children);};
      new_write_new_message.appendChild(new_send_new_message);
    new_current_opened_chat.appendChild(new_write_new_message);
    document.getElementById("currentChat").appendChild(new_current_opened_chat);

    document.getElementById("newFriendChat").value = "";

  }else{
    alert("Introduzca un nombre de amigo");
  }
}
