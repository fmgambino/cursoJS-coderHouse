/*
1. Tener el papelito #1.
2. Tener el papelito #2.
3. Tener el papelito #3.
4. Tener el papelito #4.
5. Tener el papelito #5.
*/

//VARIABLES EN JS

//Tipo Var: no se recomienda usar
var papelito1 = "Esta es mi primera nota "; // variable tipo string o texto
console.log(papelito1);

//Tipo let: Variable editable.

let papelito2 = "Papelito #2 ";
papelito2 = "Hola Papelito 2 ";
console.log(papelito2);

//Tipo let: Variable NO editable.

const papelito3 = "Papelito #3 ";
console.log(papelito3);

//Tipo Number: Variable numerica

papelito4 = "10";
console.log(papelito4);

//Tipo String: Variable tipo texto

papelito5 = 'Hola Papelito #5 ';
console.log(papelito5);

//Suma de cadenas

let papelito6 = papelito1 + papelito2;
console.log(papelito6);

//Cadena de texto

cadenita = papelito4 = papelito5;
console.log(cadenita);

//Operaciones numericas

number1=25;
number2=5;

suma = number1 + number2;
console.log(suma);

resta = number1 - number2;
console.log(resta);

producto = number1 * number2;
console.log(producto);

cociente = number1 / number2;
console.log(cociente);

//Concatenacion

let cadenita2 = papelito1 + suma;
console.log(cadenita2);

let cadenita3 = papelito4 - number2; //NO SE PUEDE
console.log(cadenita3);

//Mostrar ventana ingreso de datos enteros
/*
let edad = prompt("Ingrese su Edad Entero: ");
let numero1 = 20;

let resultado = parseInt(edad) + numero1;
alert(resultado);
*/

//Mostrar ventana ingreso de datos Flotantes

let edad2 = prompt("Ingrese su Edad Flotante: ");
let numero3 = 10.5;

let resultado2 = parseFloat(edad2) + numero3;
alert(resultado2);
