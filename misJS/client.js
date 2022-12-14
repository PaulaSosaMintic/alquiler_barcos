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
    let myTable = "<table> <th>ID</th> <th>NOMBRE</th> <th>EMAIL</th> <th>EDAD</th>";
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
    let datajson = JSON.stringify(myData);
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data: datajson,
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
    id: $("#idcliente").val(),
    name: $("#namecliente").val(),
    email: $("#email").val(),
    age: $("#age").val()
}

let dataJson = JSON.stringify(myData);

$.ajax(
    {
        headers: {
            accept: 'application/json', "Access-Control-Allow-Origin": "*", "Content-Type": 'application/json'
        },
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data: dataJson,
        dataType:"JSON",
        success: function (respuesta) {
            getClientes();
        },
        error: function (xhr, status) {
            console.log(status);
        },
        complete: function (xhr, status) {
            getClientes();
        }
    }
);
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

//TRAER UN ELEMENTO
//FUNCION EN PRUEBAS 

// Aun NO funciona traer solo 1 elemento

function traerInformacionUnCliente() {
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatipe: "JSON",
    success: function (respuesta) {
        console.log(respuesta);
        pintarUnCliente(respuesta.items);
    },
    });
    
}

function pintarUnCliente(items) {
    let myTable = "<table> <th>ID</th> <th>NOMBRE</th> <th>EMAIL</th> <th>EDAD</th>";
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