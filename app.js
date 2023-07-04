// npm init -y  para crear package.json
// Se debe agregar al package.json type module
import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el nombre?\n', (nombre)=>{
    readline.cursorTo(process.stdout, 0, 1); //Posicion del cursor
    readline.clearScreenDown(process.stdout); // Eliminar la linea de comando
    console.log(`Nombre: ${nombre}`);
    rl.close(); //Salir del todo el proceso
});