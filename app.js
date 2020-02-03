const argv = require('./config/yargs').argumentos
const { crearArchivo, listarTabla } = require('./tablas/multiplicar')


//base = process.argv[2].split("=")[1];

console.log(argv);

let comando = argv._[0]

console.log(comando);


switch (comando) {

    case 'Crear':
        crearArchivo(argv.base, argv.limite).then(msj => {
            console.log(msj);
        }).catch(err => {
            console.log(err);
        })

        break;

    case 'Listar':
        console.log('object');

        listarTabla(argv.base, argv.limite)
        break;

    default:
        console.log(`no se encontro ningun comando`);


}


// crearArchivo(base).then(msj => {
//     console.log(msj);
// }).catch(err => {
//     console.log(err);