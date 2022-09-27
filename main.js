//  GET BARCOS

function traerInformacion() {
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat",
        type: "GET",
        datatipe: "JSON",
    success: function (respuesta) {
        console.log(respuesta);
        pintarRespuesta(respuesta.items);
    },
    });
}

function pintarRespuesta(items) {
    let myTable = "<table>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].brand + "</td>";
        myTable += "<td>" + items[i].model + "</td>";
        myTable += "<td>" + items[i].category_id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td> <button onclick='borrarElemento(" +items[i].id +")'>Borrar</button>";
        myTable += "</tr>";
    }
        myTable += "</table>";
    $("#resultado").append(myTable);
}

//  POST BARCOS

function guardarInformacion() {
    let myData = {
        id: $("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val()
    };

    //console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat",
        type: "POST",
        data: dataToSend,
        contentType: "application/JSON",
        dataType: "JSON",
    success: function (respuesta) {
        $("#resultado").empty();
        $("#id").val("");
        $("#brand").val("");
        $("#emodel").val("");
        $("#category_id").val("");
        $("#name").val("");
        traerInformacion();
        window.alert("Se ha guardado la información con éxito");
    },
    });
}

//    PUT BARCOS


function actualizarInformacion() {
    let myData = {
        id: $("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val(),
    };

    //console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        dataType: "JSON",
    success: function (respuesta) {
        $("#resultado").empty();
        $("#id").val("");
        $("#brand").val("");
        $("#emodel").val("");
        $("#category_id").val("");
        $("#name").val("");
        traerInformacion();
        window.alert("Se ha actualizado la información con éxito");
        },
    });
    }

//  DELETE BARCOS

function borrarElemento(idElemento) {
    let myData = {
        id: idElemento,
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        dataType: "JSON",
    success: function (respuesta) {
        $("#resultado").empty();
        traerInformacion();
        window.alert("Se ha borrado la información con éxito")
        },
    });
    }

//  GET CLIENTES

function traerClientes() {
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        dataType: "JSON",
    success: function (respuesta) {
        console.log("respuesta");
        pintarClientes(respuesta.items);
        },
    });
    }

function pintarClientes(items) {
    let myTable = "<table>";
    for (let i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td> <button onclick='borrarClientes(" +items[i].id +")'>Borrar</button>";
    }
    myTable += "</table>";
    $("#resultadoClientes").append(myTable);
}

//  POST CLIENTES

function guardarClientes() {
    let myData = {
        id: $("#idcliente").val(),
        name: $("#namecliente").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    };

    //console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data: dataToSend,
        contentType: "application/JSON",
        dataType: "JSON",
    success: function (respuesta) {
        $("#resultadoMensajes").empty();
        $("#id").val("");
        $("#name").val("");
        $("#email").val("");
        $("#age").val("");
        traerClientes();
        window.alert("Se ha guardado la información con éxito");
        },
    });
}

//  PUT CLIENTES

function actualizarClientes() {
    let myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    };

    //console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        dataType: "JSON",
    success: function (respuesta) {
        $("#resultadoClientes").empty();
        $("#id").val("");
        $("#name").val("");
        $("#email").val("");
        $("#age").val("");
        traerClientes();
        window.alert("Se ha actualizado la información con éxito");
        },
    });
}

//  DELETE CLIENTES

function borrarClientes(idElemento) {
    let myData = {
        id: idElemento,
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/json",
        dataType: "JSON",
    success: function (respuesta) {
        $("#resultado").empty();
        traerInformacion();
        window.alert("Se ha eliminado la información con éxito");
        },
    });
}

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
    let myTable = "<table>";
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