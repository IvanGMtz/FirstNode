// escribe en la consola
console.log("hello world");
// muestra un objeto vacio ya que node es orientado de esta forma 
console.log(this);
// muestra la configuracion de node y es manipulable
console.log(global);
// variables de entorno configuracion ruta etc
console.log(process);
// ES UN TIPO DE COMANDO QUE PERMITEN MODIFICAR LAS CREDENCIALES DEL SISTEMA CMO UN OBJETO
console.log(process.env.PROCESSOR_LEVEL)
// global es una configuracion que le dice que muestre que tiene instalado el node para trabajar con el js
console.log(global)


// para solicitar datos por medio de la consola con el metodo stdin
// process.stdin.setEncording('utf8');// es para decirle a la consola que sean en utf8 
process.stdin.on("data", (input)=>{
    console.clear();// limpia la consola
    console.log(`data resivida ${input}`);
    process.exit();// rompe el proceso de forma singular
})
// otra forma de hacerlo
let input = process.stdin;// esta dejando el process 
input.setEncording('utf8');
input.on("data", (chuck)=>{
    console.clear();
    console.log(`data resivida ${chuck}`);
    process.exit();
})


// obtener los datos en linea usando las promesas de node
const readline = require('node:readline/promises');// require: obtiene los datos importandolos del modulo


//requerir modulo en node exportado por default
const config = require('./modulo')


//requerir un dato json
const json = require('./data.json')


// requerimiento de node para traer el modulo nativo de node basado en bash y C 