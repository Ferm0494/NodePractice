const opt = {
    base: {
        alias: 'b',
        demand: true,

    },

    limite: {
        alias: 'l',
        default: 10

    }


}


const argumentos = require('yargs').command('Listar', 'Lista la tablas en consola', opt).
command('Crear', 'Crear archivo con tablas de Multiplicacion', opt).help().argv


module.exports = {
    argumentos,

}