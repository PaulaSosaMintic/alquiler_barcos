
//  GET MENSAJES

function traerMensajes() {
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        dataType: "JSON",
    success: function (respuesta) {
        console.log(respuesta);
        pintarMensaje(respuesta.items);
        },
    });
}

function pintarMensaje(items) {
    let myTable = "<table> <th>ID</th> <th>MENSAJE</th>";
    for (let i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].messagetext + "</td>";
        myTable += "<td> <button onclick='borrarMensajes(" +items[i].id +")'>Borrar</button>";
    }
    myTable += "</table>";
    $("#resultadoMensajes").append(myTable);
}

//  POST MENSAJES

function guardarMensajes() {
    let myData = {
        id: $("#idmenssage").val(),
        messagetext: $("#messagetext").val(),
    };

    //console.log(myData);
    let dataToSend = JSON.stringify(myData);
    console.log(myData);
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data: dataToSend,
        contentType: "application/JSON",
        dataType: "JSON",
    success: function (respuesta) {
        $("#resultadoMensajes").empty();
        $("#idmenssage").val("");
        $("##messagetext").val("");
        traerMensajes();
        window.alert("Se ha guardado el mensaje con éxito");
        },
    });
}

//  PUT MENSAJES

function actualizarMensajes() {
    let myData = {
        id: $("#id").val(),
        messagetext: $("#messagetext").val(),
    };

    //console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        dataType: "JSON",
    success: function (respuesta) {
        $("#resultadoMensajes").empty();
        $("#id").val("");
        $("#messagetext").val("");
        traerMensajes();
        window.alert("Se ha actualizado la información con éxito");
        },
    error : function(status) {
        alert('Sucedió un problema');
        console.log(status);
    },
    });
}

//  DELETE MENSAJES

function borrarMensajes(idElemento) {
    let myData = {
        id: idElemento,
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/json",
        dataType: "JSON",
    success: function (respuesta) {
        $("#resultadoMensajes").empty();
        traerInformacion();
        window.alert("Se ha eliminado el mensaje con éxito");
        },
    });
}