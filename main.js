
//BOX BARCOS

function getInfoBarcos() {
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


function addInfoBarcos() {
    var misdatosentexto = '{"id":' + $("#idbarco").val() + ',' + '"brand":"' + $("#brandbarco").val() + '",' + '"model":' + $("#modelbarco").val() + ',' + '"category_id":' + $("#categorybarco").val() + ',' + '"name":"' + $("#namebarco").val() + '"}';
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

function modInfoBarcos() {
    var misdatosentexto = '{"id":' + $("#idbarco").val() + ',' + '"brand":"' + $("#brandbarco").val() + '",' + '"model":' + $("#modelbarco").val() + ',' + '"category_id":' + $("#categorybarco").val() + ',' + '"name":"' + $("#namebarco").val() + '"}';
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

function getInfoUnBarcos() {
    var misdatosentexto = $("#idbarco").val();

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


function deleteInfoUnBarcos() {
    var misdatosentexto = $("#idbarco").val();

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

// BOX CLIENT

/*
HTML (Button)
Agregar     onclick="addInfoClient()"
Buscar      onclick="getInfoUnClient()"
Lista       onclick="getInfoClient()"

JavaScript

AGREGAR
function    addInfoClient() {
    "PROCESO DE LA FUNCIÓN"
}

BUSCAR
function    getInfoUnClient() {
    "PROCESO DE LA FUNCIÓN"
}

LISTA
function    getInfoClient() {
    "PROCESO DE LA FUNCIÓN"
}

ORACLE
URL CLIENT
https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/open-api-catalog/client/


*/



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