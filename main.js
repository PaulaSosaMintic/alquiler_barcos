//BOX BARCOS

function getInfoBarcos() {
    $.ajax({
            headers:{ 
                    accept: 'application/json', "Access-Control-Allow-Origin":"*"
            }
        , url: "https://gfa21cdd52e5424-poxlbmbb30t6w5ry.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat"
        , type: 'GET'
        , dataType : 'json',

        success: function (respuesta) {
            console.log(respuesta);
        },
    error : function(xhr, status) {
        alert('ha sucedido un problema');
        console.log(status);
    },
    complete : function(xhr, status) {
        alert('Petición realizada');
        console.log("TOdo Ok")
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
        , url: "https://gfa21cdd52e5424-poxlbmbb30t6w5ry.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat"
        , type: 'POST'
        , data:misdatoenformatojson
        , dataType : 'JSON',

        success: function (respuesta) {
            console.log(respuesta);
            alert('Agregado');
        },
    error : function(xhr, status) {
        alert('ha sucedido un problema');
        console.log(status);
    },
    complete : function(xhr, status) {
        alert('Petición realizada');
        console.log("TOdo Ok")
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
        , url: "https://gfa21cdd52e5424-poxlbmbb30t6w5ry.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat"
        , type: 'PUT'
        , data:misdatoenformatojson
        , dataType : 'JSON',

        success: function (respuesta) {
            console.log(respuesta);
            alert('Agregado');
        },
    error : function(xhr, status) {
        alert('ha sucedido un problema');
        console.log(status);
    },
    complete : function(xhr, status) {
        alert('Petición realizada');
        console.log("TOdo Ok")
    }
});    
    
}

function getInfoUnBarcos() {
    var misdatosentexto = $("#idbarco").val();

    $.ajax({
            headers:{ 
                    accept: 'application/json', "Access-Control-Allow-Origin":"*"
            }
        , url: "https://gfa21cdd52e5424-poxlbmbb30t6w5ry.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat" + "/" + misdatosentexto
        , type: 'GET'
        , dataType : 'JSON',

        success: function (respuesta) {
            console.log(respuesta);
            alert('Agregado');
        },
    error : function(xhr, status) {
        alert('ha sucedido un problema');
        console.log(status);
    },
    complete : function(xhr, status) {
        alert('Petición realizada');
        console.log("TOdo Ok")
    }
});    
    
}


function deleteInfoUnBarcos() {
    var misdatosentexto = $("#idbarco").val();

    $.ajax({
            headers:{ 
                    accept: 'application/json', "Access-Control-Allow-Origin":"*"
            }
        , url: "https://gfa21cdd52e5424-poxlbmbb30t6w5ry.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat" + "/" + misdatosentexto
        , type: 'DELETE'
        , dataType : 'JSON',

        success: function (respuesta) {
            console.log(respuesta);
            alert('Agregado');
        },
    error : function(xhr, status) {
        alert('ha sucedido un problema');
        console.log(status);
    },
    complete : function(xhr, status) {
        alert('Petición realizada');
        console.log("TOdo Ok")
    }
});    
    
}

