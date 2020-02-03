const fs = require('fs')
const colors = require('colors')

var producto;
var data = ''


let listarTabla = (base, limite) => {

    for (let i = 1; i <= limite; i++) {
        producto = base * i;

        console.log(`${base} * ${i} = ${producto} \n`)




    }

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('Input no es numero')
            return;
        }

        for (let i = 1; i <= limite; i++) {
            producto = base * i;

            data += `${base} * ${i} = ${producto} \n`



        }

        fs.writeFile(`tabla${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`Se creo Archivo!  tabla${base}.txt`.rainbow)
            }
        })
    })

}

module.exports = {
    crearArchivo,
    listarTabla

}