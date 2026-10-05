const movimientos = [{ tipo: "retiro", monto: -20000 },
    { tipo: "pago", monto: -15000 },
    { tipo: "comercio", monto: -30000 },
    { tipo: "vacio", monto: 0 },
    { tipo: "recarga", monto: 50000 },
    { tipo: "vacio", monto: 0 }
];
for (let i = 0; i < movimientos.length; i++) {

    if (movimientos[i].monto === 0) {
    continue;

   } 
   
   if (movimientos[i].tipo === "comercio") {
    console.log("Pago a comercio encontrado en la posición: " + i);
    break;
   }
}