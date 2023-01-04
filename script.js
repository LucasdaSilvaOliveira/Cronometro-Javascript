let horas = document.querySelector('.horas');
let minuto = document.querySelector('.minutos');
let segundo = document.querySelector('.segundos');
let button = document.querySelector('.btn');
let stop = document.querySelector('.stop');
let temporizadorSeg;
let temporizadorMin;

button.addEventListener('click', Iniciar)

function Iniciar() {
    let contadorSeg = 1
    let contadorMin = 1

    if (segundo.innerHTML > 00) {
        return
    } else {
        temporizadorSeg = setInterval(() => {
            segundo.innerHTML = contadorSeg++
            if (contadorSeg == 60) {
                contadorSeg = 0
            }
        }, 1000)
        temporizadorMin = setInterval(() => {
            minuto.innerHTML = contadorMin++
        }, 60000)
    }
}


stop.addEventListener('click', parar)

function parar() {
    clearInterval(temporizadorSeg)
    clearInterval(temporizadorMin)
    segundo.innerHTML = 00.toFixed(1).replace('.', '')
    minuto.innerHTML = 00.toFixed(1).replace('.', '')
}
