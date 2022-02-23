let sensor;
let temperatura;
let x = 0;
let contador = 0;
alert("Ingresá valores de temperaturas medidos: ");
alert("Finaliza cuando agregues un 0");

for (var i = 0; i < 10; i++) {

    sensor = prompt("Ingresar Temperatura Actual");
    if(0 != sensor){
        temperatura = ((sensor * 5000.0) / 1023) / 10;
        promedio = suma(temperatura, sensor);
    }
    else {
        break;
    }
    
 }

 alert("Ingresaste " + i + " datos de Temperatura y el Promedio es " + promedio + " °C");

 function suma(a,b) {    
    return(parseFloat (a) + parseFloat(b));
}
