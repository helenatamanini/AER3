// escreve um programa que aceita um ou mais números como argumentos de linha de comando
const sum = process.argv.slice(2, process.argv.length).reduce((acc, value) => {
    return acc + parseFloat(value)
}, 0)
console.log(sum)