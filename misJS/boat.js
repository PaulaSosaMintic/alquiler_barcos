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
    let myTable = "<table><th>ID</th> <th>MARCA</th> <th>MODELO</th> <th>CATEGORIA</th> <th>NOMBRE</th> ";
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


//TRAER UN ELEMENTO
//FUNCION EN PRUEBAS 

// Aun NO funciona traer solo 1 elemento

function traerInformacionUnBarco() {
    $.ajax({
        url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat",
        type: "GET",
        datatipe: "JSON",
    success: function (respuesta) {
        console.log(respuesta);
        pintarUnBarco(respuesta.items);
    },
    });
    
    /* 
    let misdatos = {
        id: $("#id").val()
    }

    let dataJson = JSON.stringify(misdatos);

    $.ajax({
            headers:{ 
                    accept: 'application/json', "Access-Control-Allow-Origin":"*", "Content-Type": 'application/json'
            }
        , url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat"
        , type: 'GET'
        , data: dataJson
        , dataType : 'JSON',

        success: function (respuesta) {
            pintarRespuestaUno(respuesta.items);
        }
});    */

}

function pintarUnBarco(items) {
    let myTable = "<table><th>ID</th> <th>MARCA</th> <th>MODELO</th> <th>CATEGORIA</th> <th>NOMBRE</th> ";
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