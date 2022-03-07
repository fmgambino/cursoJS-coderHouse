//constructor
function Dolarito(marca , saldito, tipo) 
{
    this.marca = marca;
    this.saldito = saldito;
    this.tipo = tipo; 
}
//cotizarDolarito
Dolarito.prototype.cotizarDolarito = function () {
    /*
        1 = brubank 1.15
        2 = mercadopago 1.05
        3 = rebank 1.35        
    */ 

    let cantidad;  

    const base = 113;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.;
            break;
        case '2':
            cantidad = base * 1;
            break;
        case '3':
            cantidad = base * 1;
            break;
    }

    /*
        Si el Dolarito es Oficial * 0% más
        Si el Dolarito es Paralelo 35% más
    */
   if (this.tipo === 'oficial') {
       cantidad *= 1;
   } else {
       cantidad *= 1.35; // IMPUESTO PAIS + GANANCIAS
   }
    return cantidad;
}

//parte visual HTML
function Interfaz(){}

//Mensaje en HTml
Interfaz.prototype.mostarMensaje = function(mensaje, tipo) {
  const div = document.createElement("div");

  if (tipo === 'error') {
    div.classList.add('mensaje', 'error');
  } else {
    div.classList.add("mensaje", "correcto");
  }

  div.innerHTML = `${mensaje}`;
  formulario.insertBefore(div, document.querySelector(".form-group"));

  setTimeout(function() {
      document.querySelector('.mensaje').remove();
  }, 2000);
};

//imprime resultado de cotización
Interfaz.prototype.mostrarResultado = function (Dolarito, total) {
    const resultado = document.getElementById('resultado');
    let marca;

    switch (Dolarito.marca) {
        case '1':
            marca = 'Brubank';            
            break;
        case '2':
            marca = 'MercadoPago';
            break;
        case '3':
            marca = 'ReBank';
            break;    
    }

    //crear un div
    const div = document.createElement('div');
    //insertar la información
    div.innerHTML = `
       <p class="header">Tu resumen:</p>
       <p>Marca: ${marca}</p>
       <p>Tipo: ${Dolarito.tipo}</p>
       <p>Total: $ ${total}</p>   
    `;
    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';
    
    setTimeout(function(){
        spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 500);   
    
}

//capturar datops del formulario
const formulario = document.getElementById('cotizar-dolar');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    //leer la marca seleccionada
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    //leer dato del input dolares
    const saldito = document.getElementById("saldito").value;
    //leer dato del radio Button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    //crear instancia de interfaz
    const interfaz = new Interfaz();
    //revisamos que los campos no estén vacíos

    if (marcaSeleccionada === '' || saldito === '' || tipo === '') {
        //interfaz imprimiendo error
        interfaz.mostarMensaje('Faltan Datos, revisa e intenta de nuevo', 'error');
    } else {
        //limpiar resultados anteriores
        const resultados = document.querySelector('#resultado div');
        if (resultados != null) {
            resultados.remove();
        }

        const Dolarito = new Dolarito(marcaSeleccionada, saldito, tipo);
        //Cotizar el Dolarito
        const cantidad = Dolarito.cotizarDolarito(Dolarito);
        //mostrar resultado
        interfaz.mostrarResultado(Dolarito, cantidad);
        interfaz.mostarMensaje('Cotizando', 'correcto');

    }

});
