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
