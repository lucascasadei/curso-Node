

const { options, boolean } = require('yargs');
const {CrearArchivo} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js')
const colors = require('colors');


/*const base=3;*/


CrearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
    .catch(err=>console.log(err));
