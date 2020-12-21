// 7. Crie um programa que delete o arquivo criado no exemplo anterior. 
// O programa também deve ler o diretório atual e imprimir seu conteúdo no console (stdout).
const fs = require('fs')
const PATH = 'text.txt'

fs.unlinkSync(PATH)