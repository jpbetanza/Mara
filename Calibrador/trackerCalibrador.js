window.saveDataAcrossSessions = true //salva a calibração mesmo se fechar o navegador

const DELAY = 500; //tempo olhando para algo para clicar
let tempoOlhando = Number.POSITIVE_INFINITY //variavel do tempo (cronometro)
let start = true

// Função para clicar em um ponto X,Y da tela
function simulateClick(x, y) {
    var clickEvent= document.createEvent('MouseEvents');
    clickEvent.initMouseEvent(
    'click', true, true, window, 0,
    0, 0, x, y, false, false,
    false, false, 0, null
    );
    document.elementFromPoint(x, y).dispatchEvent(clickEvent);
}



//Funcionamento do webgazer.js
webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) { return; } // Se não houver dados, não faça nada
    var xprediction = data.x; //these x coordinates are relative to the viewport
    var yprediction = data.y; //these y coordinates are relative to the viewport

    PosX = localStorage.getItem('PosX')
    PosY = localStorage.getItem('PosY')

    if(start){
        tempoOlhando=elapsedTime;
        start = false;
    }
    if ((tempoOlhando + DELAY < elapsedTime)){
        simulateClick(PosX,PosY); // clica na posição X,Y da bolinha vermelha
        tempoOlhando = Number.POSITIVE_INFINITY; //Se não, reseta-se a contagem
        start = true;
    }
}).begin();

webgazer.showVideoPreview(false) //substitua por "true" se quiser ver a camera