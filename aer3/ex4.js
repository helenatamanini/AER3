// Crie um programa contendo uma função assíncrona que leia o 
// conteúdo de um arquivo texto.txt(utilize o módulo “fs”).
// O programa deve imprimir uma mensagem informando que o arquivo 
// está sendo lido e em seguida apresentar o conteúdo do arquivo 
// texto através do console(stdout).

const fs = require('fs')

async function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

function printFile() {
    console.log("Iniciando leitura do arquivo !")
    readFile(process.argv[2])
        .then(file => {
            console.log("Arquivo lido com sucesso, vejo o conteúdo abaixo:")
            console.log(file.toString())
        })
        .catch(err => {
            console.error("Algo deu errado: \n", err)
        })
}

printFile()