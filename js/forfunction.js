var datosx = [];
var datosy = [];
var entrada_Datos = "";
function datos() {
    if (entrada_Datos == "action1") {
        datosx = Dato_Ejex;
        datosy = Dato_Ejey;
    }
    if (entrada_Datos == "action2") {
        datosx = [];
        datosy = [];
        if (funcion_lista == "sin") {
            for (i = 0; i <= 1.05 * 2 * Math.PI; i = i + (0.05 * 2 * Math.PI)) {
                datosx.push(i);
                datosy.push(Math.sin(i));
            }
            console.log(datosx);
            console.log(datosy);
        }
        if (funcion_lista == "cos") {
            for (i = 0; i <= 1.05 * 2 * Math.PI; i = i + (0.05 * 2 * Math.PI)) {
                datosx.push(i);
                datosy.push(Math.cos(i));
            }
            console.log(datosx);
            console.log(datosy);
        }
        if (funcion_lista == "amor") {
            for (i = 0; i <= 3.05 * 2 * Math.PI; i = i + (0.05 * 2 * Math.PI)) {
                datosx.push(i);
                datosy.push(Math.cos(i)*Math.exp(-0.1*i));
            }
            console.log(datosx);
            console.log(datosy);
        }
        if (funcion_lista == "exp") {
            for (i = 0; i <= 8.05 * 2 * Math.PI; i = i + (0.25 * 2 * Math.PI)) {
                datosx.push(i);
                datosy.push(Math.exp(-0.1*i));
            }
            console.log(datosx);
            console.log(datosy);
        }
        if (funcion_lista == "ale") {
            for (i = 0; i <= 2.05 * 2 * Math.PI; i = i + (0.05 * 2 * Math.PI)) {
                datosx.push(i);
                datosy.push(i*2);
            }
            console.log(datosx);
            console.log(datosy);
        }
    }


}