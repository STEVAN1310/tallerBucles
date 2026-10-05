const movimientos = [50000, -20000, 30000, -10000, 15000, -5000];

let total = 0;
let cantidadRetiros = 0;            

for (let i = 0; i < movimientos.length; i++) {
    total = total + movimientos[i];

    if (movimientos [i] < 0){
    cantidadRetiros++;
}

}

console.log("Total: " , total);
console.log("Cantidad de restiros: " , cantidadRetiros);