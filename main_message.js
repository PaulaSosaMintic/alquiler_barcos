
// BOX MESSAGE

/*

HTML
Agregar     onclick="addInfoMessage()"
Buscar      onclick="getInfoUnMessage()"
Lista       onclick="getInfoMessage()"
Eliminar    onclick="deleteInfoUnMessage()"

JavaScript

AGREGAR
function    addInfoMessage() {
    "PROCESO DE LA FUNCIÓN"
}

BUSCAR
function    getInfoUnMessage() {
    "PROCESO DE LA FUNCIÓN"
}

LISTA
function    getInfoMessage() {
    "PROCESO DE LA FUNCIÓN"
}

ELIMINAR
function    deleteInfoUnMessage() {
    "PROCESO DE LA FUNCIÓN"
}

ORACLE
URL MESSAGE
https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/open-api-catalog/message/

*/

function getInfoMessage() {
    $.ajax({
            headers:{ 
                    accept: 'application/json', "Access-Control-Allow-Origin":"*"
            }
        , url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat"
        , type: 'GET'
        , dataType : 'json',

        success: function (respuesta) {
            console.log(respuesta);
        },
    error : function(xhr, status) {
        alert('Sucedió un problema');
        console.log(status);
    },
    complete : function(xhr, status) {
        alert('Petición realizada');
        console.log("Todo Ok")
    }
});
}


function addInfoMessage() {
    var misdatosentexto = '{"id":' + $("#idmensaje").val() + ',' + '"messagetext":"' + $("#messagetext").val() + '"}';
    var misdatoenformatojson = JSON.parse(misdatosentexto);

    $.ajax({
            headers:{ 
                    accept: 'application/json', "Access-Control-Allow-Origin":"*"
            }
        , url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat"
        , type: 'POST'
        , data:misdatoenformatojson
        , dataType : 'JSON',

        success: function (respuesta) {
            console.log(respuesta);
            alert('Agregado');
        },
    error : function(xhr, status) {
        alert('Sucedió un problema');
        console.log(status);
    },
    complete : function(xhr, status) {
        alert('Petición realizada');
        console.log("Todo Ok")
    }
});    
    
}

function modInfoMessage() {
    var misdatosentexto = '{"id":' + $("#idmensaje").val() + ',' + '"messagetext":"' + $("#messagetext").val() + '"}';
    var misdatoenformatojson = JSON.parse(misdatosentexto);

    $.ajax({
            headers:{ 
                    accept: 'application/json', "Access-Control-Allow-Origin":"*"
            }
        , url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat"
        , type: 'PUT'
        , data:misdatoenformatojson
        , dataType : 'JSON',

        success: function (respuesta) {
            console.log(respuesta);
            alert('Agregado');
        },
    error : function(xhr, status) {
        alert('Sucedió un problema');
        console.log(status);
    },
    complete : function(xhr, status) {
        alert('Petición realizada');
        console.log("Todo Ok")
    }
});    
    
}

function getInfoUnMessage() {
    var misdatosentexto = $("#idmensaje").val();

    $.ajax({
            headers:{ 
                    accept: 'application/json', "Access-Control-Allow-Origin":"*"
            }
        , url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat" + "/" + misdatosentexto
        , type: 'GET'
        , dataType : 'JSON',

        success: function (respuesta) {
            console.log(respuesta);
            alert('Agregado');
        },
    error : function(xhr, status) {
        alert('Sucedió un problema');
        console.log(status);
    },
    complete : function(xhr, status) {
        alert('Petición realizada');
        console.log("Todo Ok")
    }
});    
    
}


function deleteInfoUnMessage() {
    var misdatosentexto = $("#idmensaje").val();

    $.ajax({
            headers:{ 
                    accept: 'application/json', "Access-Control-Allow-Origin":"*"
            }
        , url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat" + "/" + misdatosentexto
        , type: 'DELETE'
        , dataType : 'JSON',

        success: function (respuesta) {
            console.log(respuesta);
            alert('Agregado');
        },
    error : function(xhr, status) {
        alert('Sucedió un problema');
        console.log(status);
    },
    complete : function(xhr, status) {
        alert('Petición realizada');
        console.log("Todo Ok")
    }
});    
    
}
