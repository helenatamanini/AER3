//funcao para mostrar data
function formatInt(value) {
    return value < 10 ? `0${value}` : value
}

module.exports = function getCurrentDatetime() {
    const date = new Date
    return {
        date: formatInt(date.getDay()) + '/' + formatInt(date.getMonth()) + '/' + date.getFullYear(),
        time: formatInt(date.getHours()) + ':' + formatInt(date.getMinutes()) + 'h'
    }
}