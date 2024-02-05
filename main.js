//Bienvenida a la pagina 
let nombres = prompt("Ingrese su nombre");
alert ("Hola " + nombres + " bienvenido a nuestra pagina");

//Verificacion de edad para poder ingresar
while (true) {
    let edad = prompt("Por favor, ingresa tu edad:");

    if (edad >= 18) {
        alert("¡Bienvenido! por favor relajate y elije lo que quieras beber");
        break; 
    } else {
        alert("Lo siento, no se permite la venta de alcohol a menores, anda a jugar a la play.");
    }
}

// fun bebidas
class Bebida {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// bebidas
const listaBebidas = [
    new Bebida('Aperol', 11500),
    new Bebida('Vino', 9000),
    new Bebida('Gancia', 6500),
    new Bebida('Whisky', 25000),
    new Bebida('Fernet', 7500),
    new Bebida('Ron', 12000),
    new Bebida('Cerveza', 2450),
    new Bebida('Tequila', 17000),
    new Bebida('Champagne', 7200),
    new Bebida('Jagger', 15000),
    new Bebida('Gin', 19000),
];

// Carrito 
const carrito = [];

//primera compra true
let primeraCompra = true;

// buscar bebida
function agregarAlCarritoPorNombre(nombreBebida) {
    const bebidaEncontrada = listaBebidas.find(bebida => bebida.nombre.toLowerCase() === nombreBebida.toLowerCase());
    if (bebidaEncontrada) {
        carrito.push(bebidaEncontrada);
        alert(`Se ha agregado ${bebidaEncontrada.nombre} al carrito.`);
    } else {
        alert(`${nombreBebida} no está disponible.`);
    }
}

// fun carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        alert("Contenido del carrito:");
        let total = 0;
        carrito.forEach(bebida => {
            alert(`${bebida.nombre} - Precio: $ ${bebida.precio} `);
            total += bebida.precio;
        });
        
        // descuento en la primera compra
        if (primeraCompra) {
            total *= 0.75; 
            alert("¡Felicidades por tu primera compra! Se aplicó un descuento del 25%.");
            
        }
        
        alert(`Total de la compra: $ ${total}`);

        // tarjeta o efectivo

        let metodoPago = prompt("¿Cómo deseas pagar? Ingresa 'tarjeta' para pagar con tarjeta o 'efectivo' para pagar en efectivo:");
        metodoPago = metodoPago.toLowerCase();
  
        if (metodoPago === 'tarjeta') {
            alert("Se ha seleccionado pago con tarjeta.");
            
        } else if (metodoPago === 'efectivo') {
            alert("Se ha seleccionado pago en efectivo.");
            
        } else {
          alert("Método de pago no válido.");
        }
      }
}

// filtrar 
function filtrarPorPrecioMaximo(precioMaximo) {
    return listaBebidas.filter(bebida => bebida.precio <= precioMaximo);
}

// precio máximo
let precioMaximo = prompt("Ingresa el precio máximo de la bebida que quieras comprar:");
alert("Precio máximo ingresado", precioMaximo);
let bebidasFiltradasPorPrecio = filtrarPorPrecioMaximo(precioMaximo);
if (bebidasFiltradasPorPrecio.length > 0) {
    alert("Bebidas:");
    bebidasFiltradasPorPrecio.forEach(bebida => {
        alert(bebida.nombre);
    });
} else {
    alert("No hay bebidas que cumplan con el precio máximo ingresado.");
}

//  agregar bebidas
let agregarOtraBebida = true;
while (agregarOtraBebida) {
    let nombreBebida = prompt("Ingresa el nombre de la bebida que deseas agregar al carrito:");
    agregarAlCarritoPorNombre(nombreBebida);

    let respuesta = prompt("¿Deseas agregar otra bebida? (si/no)");
    if (respuesta.toLowerCase() !== 'si') {
        agregarOtraBebida = false;
    }
}

// contenido final del carrito y total de compra
mostrarCarrito();

//Listado solo para usuarios prime
let usuario = prompt("Si pagas el listado prime por favor ingrese el usuario").toUpperCase();

while (usuario != "JUAN"){
    alert("Usuario incorrecto");

    usuario= prompt("Ingrese el usuario").toUpperCase();
}

alert("Bienvenido");

//Reservas de mesa solo para usuarios prime
for(let mesa = 1; mesa <= 2; mesa++){
    let nombre= prompt("Al tener prime podes reservar hasta 2 mesas en nuestras instalaciones, por favor ingrese un nombre:");


    alert(`Mesa #${mesa} reservado para ${nombre}`);

};


















