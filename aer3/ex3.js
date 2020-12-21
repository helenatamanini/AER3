
// exibe a hora atual através do console (stdout).
const currentDatetime = require('./data')()
const message = "A data atual é " + currentDatetime.date + " e a hora é " + currentDatetime.time
console.log(message)