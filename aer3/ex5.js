// 5. Crie um programa que registre dois eventos chamados eventoUm e eventoDois. Os eventos devem 
// ser vinculados aos respectivos Handlers e em seguida disparados. Ao serem disparados, os eventos 
// devem respectivamente:
// a. gerar números aleatórios de 1 a 10.
// b. imprimir o dia do mês.

const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('event-one', () => {
    console.log("Número aleatório: " + Math.floor((Math.random() * 10) + 1));
})
eventEmitter.on('event-two', () => {
    console.log("Dia do mês: " + (new Date).getDay());
})

eventEmitter.emit('event-one')
eventEmitter.emit('event-two')