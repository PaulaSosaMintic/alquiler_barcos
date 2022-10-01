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
// PRUEBA 3
//EN PROCESO DE PRUEBAS PORQUE NO FUNCIONA LA FUNCIÓN ACTUALIZAR

function actualizarClientes(quetraigo) {
    let URL = "https://gfa21cdd52e5424-poxlbmbb30t6w5ry.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat";
    let myData;
    let datajson;

    if  (quetraigo -- ) {
        URL = URL_CLIENTES + "/save";

        myData = {
            id: $("#idcliente").val(),
            name: $("#namecliente").val(),
            email: $("#emailcliente").val(),
            age: $("#agecliente").val()
        };
    
        datajson = JSON.parse(myData);
    
    }
    
    $.ajax({
            headers:{ 
                    accept: 'application/json', "Access-Control-Allow-Origin":"*"
            }
        , url: URL
        , type: 'PUT'
        , data:datajson
        , dataType : 'JSON',

        success: function () {
            //console.log(respuesta);
            alert('Agregado');
        },
    error : function(status) {
        alert('ha sucedido un problema');
        console.log(status);
    },
    complete : function(xhr, status) {
        alert('Petición realizada');
        console.log("Todo Ok")
    }
});    
    
}


/* PRUEBA 2
function actualizarClientes(quetraigo) {
    let URL = "";
    let myData;
    let datajson;

    if (quetraigo == 1) {
        URL = URL_CLIENTES + "/save";

        myData = {
            id: $("#id").val(),
            name: $("#name").val(),
            email: $("#email").val(),
            age: $("#age").val(),
        };

        datajson = JSON.stringify(myData);

    }

    $.ajax({
        Headers: {
            accept: "application/JSON", "Access-Control-Allow-Origin":"*"
        }
        , url: URL
        ,type: "PUT"
        ,data: datajson
        ,dataType: "JSON",

        success: function (){
            alert("Agregado!!!!");
        },
        error: function(status) {
            alert("PROBLEMAS!!!");
            console.log(status);
        }
        ,
    complete : function(xhr, status) {
        alert('Petición realizada');
        console.log("TOdo Ok")
    }
    });

}
*/

/* PRUEBA 1
function actualizarClientes() {
    let myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    };

    //console.log(myData);
    let datajson = JSON.stringify(myData);
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data: datajson,
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
*/


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
