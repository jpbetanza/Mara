function printMousePos(event) {
      console.log("clientX: " + event.clientX + " - clientY: " + event.clientY);
  }
  
document.addEventListener("click", printMousePos);

var digitos = [
    ['A', 'B', 'C','','','', 'D', 'E', 'F', ],
    ['G', 'H', 'I','','','', 'J', 'K', 'L', ],
    ['M', 'N', 'O','','','', 'P', 'Q', 'R', ],
    ['', '', '','','','', '', '', '', ],
    ['', '', '','','','', '', '', '', ],
    ['', '', '','','','', '', '', '', ],
    ['S', 'T', 'U','','','', 'V', 'W', 'X', ],
    ['Y', 'Z', '1','','','', '2', '3', '4', ],
    ['5', '6', '7','','','', '8', '9', '0', ]
]

function estadoInicial() {
    for (i = 1; i < 10; i++) {
        if (i == 5) {} else {
            document.getElementById('' + i + '').src = '../src/Quadros/quadro' + i + '.png'
            document.getElementById('' + i + '').setAttribute('onclick', 'selecaoDeQuadro(' + i + ')')
        }
    }
}

function selecaoDeQuadro(a) {
    switch (a) {
        case 1:
            for (i = 1; i < 10; i++) {
                if (i == 4 || i == 6) {
                    document.getElementById('' + i + '').src = '../src/white.png'
                } else if (i == 5) {} else {
                    document.getElementById('' + i + '').src = '../src/LetrasAF/' + i + '.png'
                    document.getElementById('' + i + '').setAttribute('onclick', 'selecaoDeLetra(' + 1 + ',' + i + ')')
                }
            }
            break;
        case 2:
            for (i = 1; i < 10; i++) {
                if (i == 4 || i == 6) {
                    document.getElementById('' + i + '').src = '../src/white.png'
                } else if (i == 5) {} else {
                    document.getElementById('' + i + '').src = '../src/LetrasGL/' + i + '.png'
                    document.getElementById('' + i + '').setAttribute('onclick', 'selecaoDeLetra(' + 2 + ',' + i + ')')
                }
            }
            break;
        case 3:
            for (i = 1; i < 10; i++) {
                if (i == 4 || i == 6) {
                    document.getElementById('' + i + '').src = '../src/white.png'
                } else if (i == 5) {} else {
                    document.getElementById('' + i + '').src = '../src/LetrasMR/' + i + '.png'
                    document.getElementById('' + i + '').setAttribute('onclick', 'selecaoDeLetra(' + 3 + ',' + i + ')')
                }
            }
            break;
            /*case 4:
                for (i = 1; i < 10; i++) {
                    if (i == 4 || i == 6) {
                        break;
                    } else {
                        document.getElementById('' + i + '').src = './src/LetrasSX/' + i + '.png'
                        document.getElementById('' + i + '').setAttribute('onclick',) = 'selecaoDeLetra(' + 4 + ',' + i + ')'
                    }
                }
                break;
            */
            /*case 6:
                
                break;
            */
        case 7:
            for (i = 1; i < 10; i++) {
                if (i == 4 || i == 6) {
                    document.getElementById('' + i + '').src = '../src/white.png'
                } else if (i == 5) {} else {
                    document.getElementById('' + i + '').src = '../src/LetrasSX/' + i + '.png'
                    document.getElementById('' + i + '').setAttribute('onclick', 'selecaoDeLetra(' + 7 + ',' + i + ')')
                }
            }
            break;
        case 8:
            for (i = 1; i < 10; i++) {
                if (i == 4 || i == 6) {
                    document.getElementById('' + i + '').src = '../src/white.png'
                } else if (i == 5) {} else {
                    document.getElementById('' + i + '').src = '../src/LetrasY4/' + i + '.png'
                    document.getElementById('' + i + '').setAttribute('onclick', 'selecaoDeLetra(' + 8 + ',' + i + ')')
                }
            }
            break;
        case 9:
            for (i = 1; i < 10; i++) {
                if (i == 4 || i == 6) {
                    document.getElementById('' + i + '').src = '../src/white.png'
                } else if (i == 5) {} else {
                    document.getElementById('' + i + '').src = '../src/Letras50/' + i + '.png'
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