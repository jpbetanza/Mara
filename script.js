let msg = new SpeechSynthesisUtterance();
let voices = window.speechSynthesis.getVoices();
msg.voice = voices[10];
msg.voiceURI = "native";
msg.volume = 1;
msg.rate = 1;
msg.pitch = 0.8;
msg.lang = 'pt-BR';

function printMousePos(event) {
      console.log("clientX: " + event.clientX + " - clientY: " + event.clientY);
  }
  
document.addEventListener("click", printMousePos);

var digitos = [
    ['A', 'B', 'C','','','', 'D', 'E', 'F', ],
    ['G', 'H', 'I','','','', 'J', 'K', 'L', ],
    ['M', 'N', 'O','','','', 'P', 'Q', 'R', ],
    ['DOR', 'DESCONFORTO', 'POSIÇÃO','','','', 'MEDO', 'MÉDICO', 'LIGAR', ],
    ['', '', '','','','', '', '', '', ],
    ['', '', '','','','', '', '', '', ],
    ['S', 'T', 'U','','','', 'V', 'X', 'Ç', ],
    ['Y', 'Z', '1','','','', '2', '3', '4', ],
    ['5', '6', '7','','','', '8', '9', '0', ]
]

function estadoInicial() {
    for (i = 1; i < 10; i++) {
        if (i == 5) {} else {
            document.getElementById('' + i + '').src = '../src/Quadros/board' + i + '.png'
            if(i==6){}
            else{
                document.getElementById('' + i + '').setAttribute('onclick', 'selecaoDeQuadro(' + i + ')')
            }
        }
    }
}

function say() {
    msg.text = document.getElementById('textbox').value;
    speechSynthesis.speak(msg);
  }

function selecaoDeQuadro(a) {
    document.getElementById('4').src = '../src/voltar.png'
    document.getElementById('4').setAttribute('onclick','estadoInicial()')
    document.getElementById('6').src = '../src/apagar.png'
    switch (a) {
        case 1:
            for (i = 1; i < 10; i++) {
                if (i == 4 || i == 6 || i==5) {}
                else {
                    document.getElementById('' + i + '').src = '../src/LetrasAF/' + i + '' +i+ '.png'
                    document.getElementById('' + i + '').setAttribute('onclick', 'selecaoDeLetra(' + 1 + ',' + i + ')')
                }
            }
            break;
        case 2:
            for (i = 1; i < 10; i++) {
                if (i == 4 || i == 6 || i==5) {} else {
                    document.getElementById('' + i + '').src = '../src/LetrasGL/' + i + '' +i+ '.png'
                    document.getElementById('' + i + '').setAttribute('onclick', 'selecaoDeLetra(' + 2 + ',' + i + ')')
                }
            }
            break;
        case 3:
            for (i = 1; i < 10; i++) {
                if (i == 4 || i == 6 || i==5) {} else {
                    document.getElementById('' + i + '').src = '../src/LetrasMR/' + i + '' +i+ '.png'
                    document.getElementById('' + i + '').setAttribute('onclick', 'selecaoDeLetra(' + 3 + ',' + i + ')')
                }
            }
            break;
        case 4:
            for (i = 1; i < 10; i++) {
                if (i == 4 || i == 6 || i==5) {} else {
                    document.getElementById('' + i + '').src = '../src/emergencia/' + i +'.png'
                    document.getElementById('' + i + '').setAttribute('onclick', 'selecaoDeLetra(' + 4 + ',' + i + ')')
                }
            }
            break;
        case 7:
            for (i = 1; i < 10; i++) {
                if (i == 4 || i == 6 || i==5) {} else {
                    document.getElementById('' + i + '').src = '../src/LetrasSX/' + i + '' +i+ '.png'
                    document.getElementById('' + i + '').setAttribute('onclick', 'selecaoDeLetra(' + 7 + ',' + i + ')')
                }
            }
            break;
        case 8:
            texto = document.getElementById('textbox').value
            document.getElementById('textbox').value = texto+' '
            estadoInicial()
            break;
        case 9:
            for (i = 1; i < 10; i++) {
                if (i == 4 || i == 6 || i==5) {}else {
                    document.getElementById('' + i + '').src = '../src/Letras50/' + i + '' +i+ '.png'
                    document.getElementById('' + i + '').setAttribute('onclick', 'selecaoDeLetra(' + 9 + ',' + i + ')')
                }
            }
            break;

    }
}

function selecaoDeLetra(a, b) {
    texto = document.getElementById('textbox').value
    document.getElementById('textbox').value = texto+digitos[a-1][b-1]
    estadoInicial()
}