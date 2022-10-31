let hora = 0;
let minuto = 0;
let segundo = 0;
let cronometro;

function start() {
    cronometro = setInterval(timer, 1000);
}

function pause() {
    clearInterval(cronometro)
}

function restart() {
    clearInterval(cronometro);
    hora = 0;
    minuto = 0;
    segundo = 0;
    document.querySelector("#number").textContent = "00:00:00";
}

function timer() {
    segundo++;

    if(segundo == 60) {
        segundo = 0;
        minuto++;
    } else if(minuto == 60) {
        minuto = 0;
        hora++;
    }


    format = (hora < 10 ? '0' + hora : hora) + ":" + (minuto < 10 ? '0' + minuto : minuto) + ":" + (segundo < 10 ? '0' + segundo : segundo);
    document.querySelector("#number").textContent = format;
}