//Bienvenida a la pagina 
let nombre = prompt("Ingrese su nombre");
alert ("Hola " + nombre + " bienvenido a nuestra pagina");

//Verificacion de edad para poder ingresar 
let edad = Number(prompt("Ingrese su edad"));

//Mayores a 18 años para entrar
if(edad <18){
    alert("No se permite la venta de alcohol a menores");
}else{
    alert("Disfrute de nuestras promos"); 
};

// Cupon de regalo

let numero = Number(prompt("Tienes un cupon de 25% de regalo, ingrese el total de su compra (mayor a 1500$):"));
if(numero <1500){
    alert("La compra tiene que ser mayor a 1500$")
}else{
    alert(`Total a pagas ${numero} $`);
}

// Solicitar al usuario que ingrese el porcentaje

let porcentaje = prompt("Ingresa el porcentaje del cupon de regalo:");
if(porcentaje != 25){
    alert("No tienes ningun cupon.")
}

// Calcular el porcentaje

let resultado = (numero * porcentaje) / 100;

alert(`Gracias a tu cupon de ${porcentaje}% , a tu total de ${numero} $ se le descuenta ${resultado} $`);

let compra= prompt("Ingrese con que moneda vas a pagar").toUpperCase()

switch(compra){
    case "USD":
        alert(`${nombre} va a pagar con Dolares`);
        break;
    case "ARG":
        alert(`${nombre} quiere pagar con peso Argentino`);
        break;
    case "EUR":
        alert(`${nombre} va a pagar con Euros`);
        break;
    default:
        alert("Moneda no reconocida");
        break;
}

let usuario = prompt("Si pagas el listado prime por favor ingrese el usuario").toUpperCase();

while (usuario != "JUAN"){
    alert("Usuario incorrecto");

    usuario= prompt("Ingrese el usuario").toUpperCase();
}

alert("Bienvenido");


for(let mesa = 1; mesa <= 2; mesa++){
    let nombre= prompt("Al tener prime podes reservar hasta 2 mesas en nuestras instalaciones, por favor ingrese un nombre:");


    alert(`Mesa #${mesa} reservado para ${nombre}`);

};

function calculadora(numUno, numDos, operacion){
    switch (operacion){
        case "+":
            return numUno + numDos;
        case "-":
            return numUno - numDos;
        case "*":
            return numUno * numDos;   
        case "/":
            return numUno / numDos;                             
    }
}

let numeroUno = Number(prompt("Te facilitamos una calculadora para ti, ingrese un numero:"));
let operacion = prompt("Ingrese la operacion a realizar");
let numeroDos = Number(prompt("ingrese otro numero:"));
let total = calculadora (numeroUno, numeroDos, operacion);

alert(`${numeroUno} ${operacion} ${numeroDos} = ${total}`);






















