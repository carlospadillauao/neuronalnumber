function addgraf(xyg){
    xyg.unshift([0,2,2],[0,-2,-2]);
    google.load('visualization','1.0',{'packages':['corechart']});
    google.setOnLoadCallback(dibujar);//al cargar la api ejecutar
    function dibujar(){
      var data = new google.visualization.DataTable();
      data.addColumn('number','Eje X'); 
      data.addColumn('number','Datos de Entrada');  
      data.addColumn('number','Red Neuronal');
      data.addRows(xyg);    
      var configuracion = {'title':'Grafica Datos de entrenamiento y Datos de salidad RN ',
                           'width':800,
                           'height':400};
      var grafica_1 = new google.visualization.ScatterChart(document.getElementById('grafica1'));
      //var grafica_2 = new google.visualization.LineChart(document.getElementById('grafica1'));
      grafica_1.draw(data, configuracion);
      //grafica_2.draw(data, configuracion);

    }
}
addgraf([[0,0,0]]);