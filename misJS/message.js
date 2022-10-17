
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
        id: $("#idmessage").val(),
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
        $("#idmessage").val("");
        $("##messagetext").val("");
        traerMensajes();
        window.alert("Se ha guardado el mensaje con éxito");
        },
    });
}

//  PUT MENSAJES

function actualizarMensajes() {
    
    let myData = {
        id: $("#idmessage").val(),
        messagetext: $("#messagetext").val(),
}

let dataJson = JSON.stringify(myData);

$.ajax(
    {
        headers: {
            accept: 'application/json', "Access-Control-Allow-Origin": "*", "Content-Type": 'application/json'
        },
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data: dataJson,
        dataType:"JSON",
        success: function (respuesta) {
            getMensajes();
        },
        error: function (xhr, status) {
            console.log(status);
        },
        complete: function (xhr, status) {
            getMensajes();
        }
    }
);
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

//TRAER UN ELEMENTO
//FUNCION EN PRUEBAS 

// Aun NO funciona traer solo 1 elemento

function traerInformacionUnMensaje() {
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        datatipe: "JSON",
    success: function (respuesta) {
        console.log(respuesta);
        traerInformacion();
        pintarUnMensaje(respuesta.items);
    },
    });
}

function pintarUnMensaje(items) {
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
