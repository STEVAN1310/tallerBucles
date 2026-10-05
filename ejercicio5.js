const usuarios = [
    {
        nombre: "Stevan",
        movimientos: [10000, -5000, -20000]
    },
    {
        nombre: "Lina",
        movimientos: [50000, -10000, -15000]
    },
    {
        nombre: "Alvaro",
        movimientos: [20000, -5000, -10000]
    }
];

for (let i = 0; i < usuarios.length; i++) {

    let totalUsuario = 0;

    for (let j = 0; j < usuarios[i].movimientos.length; j++) {

        totalUsuario = totalUsuario + usuarios[i].movimientos[j];

    }

    console.log("Total de movimientos de " + usuarios[i].nombre + ": " + totalUsuario);
}