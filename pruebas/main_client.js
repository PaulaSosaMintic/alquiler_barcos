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

https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client


*/


function getInfoClient() {
    $.ajax({
            headers:{ 
                    accept: 'application/json', "Access-Control-Allow-Origin":"*"
            }
        , url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client"
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


function addInfoClient() {
    var misdatosentexto = '{"id":' + $("#idcliente").val() + ',' + '"name":"' + $("#namecliente").val() + '",' + '"email":' + $("#emailcliente").val() + ',' + '"age":' + $("#agecliente").val() + '"}';
    var misdatoenformatojson = JSON.parse(misdatosentexto);

    $.ajax({
            headers:{ 
                    accept: 'application/json', "Access-Control-Allow-Origin":"*"
            }
        , url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client"
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

function modInfoClient() {
    var misdatosentexto = '{"id":' + $("#idcliente").val() + ',' + '"name":"' + $("#namecliente").val() + '",' + '"email":' + $("#emailcliente").val() + ',' + '"age":' + $("#agecliente").val() + '"}';
    var misdatoenformatojson = JSON.parse(misdatosentexto);

    $.ajax({
            headers:{ 
                    accept: 'application/json', "Access-Control-Allow-Origin":"*"
            }
        , url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client"
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

function getInfoUnClient() {
    var misdatosentexto = $("#idcliente").val();

    $.ajax({
            headers:{ 
                    accept: 'application/json', "Access-Control-Allow-Origin":"*"
            }
        , url: "https://g597b3e253f7383-vxwukxbb0ai8lta7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client" + "/" + misdatosentexto
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
