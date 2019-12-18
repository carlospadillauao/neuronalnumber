
var matriz_funciones = ["-", "sin", "cos", "amor", "exp", "ale"];
var matriz_capas = ["-", "1", "2", "3"];
var funcion_lista = "";
var numero_capas = "";
var neuronas1 = "";
var neuronas2 = "";
var neuronas3 = "";
var nc1 = document.getElementById("ncapa1");
var nc2 = document.getElementById("ncapa2");
var nc3 = document.getElementById("ncapa3");
var nc11 = document.getElementById("ncapa11");
var nc22 = document.getElementById("ncapa22");
var nc33 = document.getElementById("ncapa33");
var url = document.getElementById("entrenar");
var campo_n1 = document.getElementById("neuronas1");
var campo_n2 = document.getElementById("neuronas2");
var campo_n3 = document.getElementById("neuronas3");
var epocas = 0;
var optimizador = 0;
var funciona1 = "";
var funciona2 = "";
var funciona3 = "";

var check_entrada_coordenadas = 0;
var check_entrada_funciones = 0;

var check_epocas = 0;

var check_optim = 0;

var check_coordenadas = 0;
var check_funcion = 0;

var check_capas = 0;
var check_capas_n1 = 0;
var check_capas_n2 = 0;
var check_capas_n3 = 0;

var check = 0;

funciona1 = document.activation_n1.avtivation1[document.activation_n1.avtivation1.selectedIndex].value;
funciona2 = document.activation_n2.avtivation2[document.activation_n2.avtivation2.selectedIndex].value;
funciona3 = document.activation_n3.avtivation3[document.activation_n3.avtivation3.selectedIndex].value;

document.getElementById("optim").value = 0.05;

document.funciones_formulario.funciones_f.length = matriz_funciones.length;
for (i = 0; i < matriz_funciones.length; i++) {
    document.funciones_formulario.funciones_f.options[i].value = matriz_funciones[i];
    document.funciones_formulario.funciones_f.options[i].text = matriz_funciones[i];
}

document.capas_formulario.capas_f.length = matriz_capas.length;
for (i = 0; i < matriz_capas.length; i++) {
    document.capas_formulario.capas_f.options[i].value = matriz_capas[i];
    document.capas_formulario.capas_f.options[i].text = matriz_capas[i];
}

function item_lista1() {
    funcion_lista = document.funciones_formulario.funciones_f[document.funciones_formulario.funciones_f.selectedIndex].value;
    if (funcion_lista == "-") {
        check_funcion = 0;
        accion();
    } else if (funcion_lista != "-") {
        console.log(funcion_lista);
        check_funcion = 1;
        accion();
    }

}
function item_lista2() {
    numero_capas = document.capas_formulario.capas_f[document.capas_formulario.capas_f.selectedIndex].value;
    if (numero_capas == "-") {
        console.log(numero_capas);
        campo_n1.value = "";
        campo_n2.value = "";
        campo_n3.value = "";

        nc1.style.display = "none";
        nc2.style.display = "none";
        nc3.style.display = "none";
        nc11.style.display = "none";
        nc22.style.display = "none";
        nc33.style.display = "none";
        campo_n1.style.display = "none";
        campo_n2.style.display = "none";
        campo_n3.style.display = "none";

        check_capas_n1 = 0;
        check_capas_n2 = 0;
        check_capas_n3 = 0;

        accion();
    } else if (numero_capas != "-") {
        console.log(numero_capas);
        campo_n1.value = "";
        campo_n2.value = "";
        campo_n3.value = "";

        check_capas_n1 = 0;
        check_capas_n2 = 0;
        check_capas_n3 = 0;

        accion();
        if (numero_capas == "1") {
            nc1.style.display = "flex";
            nc2.style.display = "none";
            nc3.style.display = "none";
            nc11.style.display = "flex";
            nc22.style.display = "none";
            nc33.style.display = "none";
            campo_n1.style.display = "flex";
            campo_n2.style.display = "none";
            campo_n3.style.display = "none";

            check_capas_n1 = 1;
            check_capas_n2 = 0;
            check_capas_n3 = 0;

            accion();
        }
        if (numero_capas == "2") {
            nc1.style.display = "flex";
            nc2.style.display = "flex";
            nc3.style.display = "none";
            nc11.style.display = "flex";
            nc22.style.display = "flex";
            nc33.style.display = "none";
            campo_n1.style.display = "flex";
            campo_n2.style.display = "flex";
            campo_n3.style.display = "none";

            check_capas_n1 = 1;
            check_capas_n2 = 1;
            check_capas_n3 = 0;

            accion();
        }
        if (numero_capas == "3") {
            nc1.style.display = "flex";
            nc2.style.display = "flex";
            nc3.style.display = "flex";
            nc11.style.display = "flex";
            nc22.style.display = "flex";
            nc33.style.display = "flex";
            campo_n1.style.display = "flex";
            campo_n2.style.display = "flex";
            campo_n3.style.display = "flex";

            check_capas_n1 = 1;
            check_capas_n2 = 1;
            check_capas_n3 = 1;

            accion();

        }
    }
}

function item_lista_a1() {
    funciona1 = document.activation_n1.avtivation1[document.activation_n1.avtivation1.selectedIndex].value;
    console.log(funciona1);
}
function item_lista_a2() {
    funciona2 = document.activation_n2.avtivation2[document.activation_n2.avtivation2.selectedIndex].value;
    console.log(funciona2);
}
function item_lista_a3() {
    funciona3 = document.activation_n3.avtivation3[document.activation_n3.avtivation3.selectedIndex].value;
    console.log(funciona3);
}
function CLICK() {
    $("#entrenar_btton").attr("href", "#app1");
    breakk = 0;
    if (check == 1) {
        $("#entrenar_btton").attr("href", "#app2");
        neuronas1 = parseInt($("#neuronas1").val());
        neuronas2 = parseInt($("#neuronas2").val());
        neuronas3 = parseInt($("#neuronas3").val());
        epocas = parseInt($("#epocas").val());
        optimizador = parseFloat($("#optim").val());

        console.log(neuronas1);

        console.log("graficando");

        datos();
        console.log(datosx);
        console.log(datosy);

        $("#graficas_btton").css("opacity", 1);
        $("#graficas_btton").attr("href", "#app2")

        app();
    } else { $("#entrenar_btton").attr("href", "#app1"); }

}
var Dato_Ejex = [];
var Dato_Ejey = [];
$("#boton_agregar").click(function (event) {

    if ($("#ejex").val().length != 0) {
        if ($("#ejey").val().length != 0) {
            Dato_Ejex.push(parseInt($("#ejex").val()));
            Dato_Ejey.push(parseInt($("#ejey").val()));
            console.log(Dato_Ejex.length);
            $("#lista").append("x :" + parseInt($("#ejex").val()) + " // " + "y :" + parseInt($("#ejey").val()) + "<br>");
            check_coordenadas = 1;
            accion();
        }
    }
})
$("#boton_borrar").click(function (event) {
    Dato_Ejex = [];
    Dato_Ejey = [];
    console.log(Dato_Ejex.length);
    var list = document.getElementById("lista");   // Get the <ul> element with id="myList"
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    check_coordenadas = 0;
    accion();
    //falta borrar div con la lista de lo agregado
})
var breakk = 0;
$("#break_btton").click(function (event) {
    epocas = 0;
    breakk = 1;
})

function action1() {
    entrada_Datos = "action1";
    console.log(entrada_Datos);
    document.getElementById("coordenado").style.display = "flex";
    document.getElementById("function").style.display = "none";

    check_entrada_coordenadas = 1;
    check_entrada_funciones = 0;
    accion();
}

function accion() {

    //console.log("epocas");
    if ($("#epocas").val().length != 0) {
        check_epocas = 1;
    } else { check_epocas = 0; }

    //console.log("optimis");
    if ($("#optim").val().length != 0) {
        check_optim = 1;
    } else { check_optim = 0; }

    //console.log("numero capas");
    if (check_capas_n1 == 1 && check_capas_n2 == 0 && check_capas_n3 == 0) {
        if ($("#neuronas1").val().length != 0) {
            check_capas = 1;
        } else { check_capas = 0; }
    }
    if (check_capas_n1 == 1 && check_capas_n2 == 1 && check_capas_n3 == 0) {
        if ($("#neuronas1").val().length != 0 && $("#neuronas2").val().length != 0) {
            check_capas = 1;
        } else { check_capas = 0; }
    }
    if (check_capas_n1 == 1 && check_capas_n2 == 1 && check_capas_n3 == 1) {
        if ($("#neuronas1").val().length != 0 && $("#neuronas2").val().length != 0 && $("#neuronas3").val().length != 0) {
            check_capas = 1;
        } else { check_capas = 0; }
    }

    //console.log("validar global");
    if (check_epocas == 1 && check_capas == 1 && check_optim == 1 && ((check_entrada_funciones == 1 && check_funcion == 1) || (check_entrada_coordenadas == 1 && check_coordenadas == 1))) {
        $("#entrenar_btton").css("opacity", 1);
        check = 1;
    } else { $("#entrenar_btton").css("opacity", 0.2); check = 0; }
}
function action2() {
    entrada_Datos = "action2";

    Dato_Ejex = [];
    Dato_Ejey = [];
    var list = document.getElementById("lista");   // Get the <ul> element with id="myList"
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    console.log(entrada_Datos);
    document.getElementById("coordenado").style.display = "none";
    document.getElementById("function").style.display = "flex";

    check_entrada_funciones = 1;
    check_entrada_coordenadas = 0;
    accion();
}



