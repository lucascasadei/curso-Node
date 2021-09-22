const { describe } = require('yargs');

const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption:true,
                describe: 'Es la base de la tabla de multiplicas'
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muesta la tabla en consola'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                demandOption:true,
                describe: 'Determina hasta que número se va a realizar la impresion de la tabla'
            })
            .check((argv, options )=> {
                console.log('yargs',argv)
                if(isNaN(argv.base)){
                    throw 'La base tiene que ser un número'
                }
                return true;
            })
            .argv;

module.exports = argv;