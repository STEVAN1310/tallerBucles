const prompt = require('prompt-sync')();

let opcion;

do {
    console.log("Menú de opciones:");
    console.log("1. Ver saldo");
    console.log("2. Enviar dinero");
    console.log("3. Recargar");
    console.log("4. Salir");

     if (opcion === "1") {
        console.log("Tu saldo es: $1000");
    }

    if (opcion === "2") {
        let monto = prompt("Ingresa el monto a enviar: ");
        console.log(`Has enviado $${monto}`);
    }

    if (opcion === "3") {
        let monto = prompt("Ingresa el monto a recargar: ");
        console.log(`Has recargado $${monto}`);
    }
    
    opcion = prompt("Selecciona una opción: ");
}
    while (opcion !== "4");