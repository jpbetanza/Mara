window.saveDataAcrossSessions = true //salva a calibração mesmo se fechar o navegador
//variaveis de tempo necessario para olhar um quadro e tempo olhado
const DELAY = 1500; //tempo olhando para algo para clicar
let tempoOlhando = Number.POSITIVE_INFINITY //variavel do tempo (cronometro)
let olhandoAlgo = false
let rect
let quadro

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
     // Identificação do quadro observado
    
    //trabalhando o tempo olhado
    if(quadro != null && olhandoAlgo == false){
        console.log('olhei pra dentro')
        console.log(document.elementsFromPoint(xprediction, yprediction))
        tempoOlhando = elapsedTime //Se um quadro estiver sendo olhado, "inicia-se a contagem"
        olhandoAlgo = true
        rect = quadro.getBoundingClientRect();
    }
    if(!document.elementsFromPoint(xprediction, yprediction).includes(quadro) && olhandoAlgo == true){
        console.log('olhei pra fora')
        console.log(quadro)
        console.log(document.elementsFromPoint(xprediction, yprediction))

        tempoOlhando = Number.POSITIVE_INFINITY //Se não, reseta-se a contagem
        olhandoAlgo = false
        rect = null
    }
    if ((tempoOlhando + DELAY < elapsedTime)){
        console.log('passei 2 segundos olhando')
        simulateClick((rect['x']+rect['right'])/2,(rect['y']+rect['bottom'])/2) // clica na posição X,Y da bolinha vermelha
        tempoOlhando = Number.POSITIVE_INFINITY //Se não, reseta-se a contagem
        olhandoAlgo = false
        rect = null
    }
    console.log(rect)
    pickup = document.elementsFromPoint(xprediction,yprediction)
    console.log(pickup)

    if (pickup==null || pickup.length < 2){
        quadro = null
    }
    else if(pickup[0]['nodeName']=='IMG'){
        quadro = pickup[0]
    }
    else if(pickup[1]['nodeName']=='IMG'){
        quadro = pickup[1]
    }
    else if(pickup[0]['nodeName']=='TEXTAREA'){
        quadro = pickup[0]
    }
    else if(pickup[1]['nodeName']=='TEXTAREA'){
        quadro = pickup[1]
    }


}).begin();

webgazer.showVideoPreview(false) //substitua por "true" se quiser ver a camera