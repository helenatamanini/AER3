// 6. Crie um programa que grava texto em um arquivo já existente, sem sobrescrever o conteúdo original. 
// Logo em seguida o programa deve ler e imprimir no console (stdout) o conteúdo completo do arquivo.
const fs = require('fs')

const PATH = 'text.txt'
const CONTENT = "NOVO CONTEÚDO COM O SEU ID: " + ((Math.random() * 10) + 1) + '\n'

fs.appendFileSync(PATH, CONTENT);

console.log(fs.readFileSync(PATH).toString())