function printMousePos(event) {
  console.log("clientX: " + event.clientX + " - clientY: " + event.clientY);
}

document.addEventListener("click", printMousePos);
let larg = document.documentElement.scrollWidth
let altu = document.documentElement.scrollHeight

let counter = 0
let positionCounter = 0
let position = [
  [larg/6-25, altu/6-25],
  [larg/2-25, altu/6-25],
  [larg*(5/6)-50, altu/6-25],
  [larg*(5/6)-50, altu/2-25],
  [larg*(5/6)-50, altu*(5/6)-50],
  [larg/2-25, altu*(5/6)-50],
  [larg/6-25, altu*(5/6)-50],
  [larg/6-25, altu/2-25],
  [larg/2-25, altu/2-25],
]

localStorage.setItem('PosY', 25)
localStorage.setItem('PosX', 25)



function cliquei() {
  counter++;
  if (counter == 3) {
    counter = 0;
    if(positionCounter<8){
    positionCounter++;
    }
    else{
      positionCounter=0
    }
    posx = position[positionCounter][0]
    posy = position[positionCounter][1]

    localStorage.setItem('PosX', posx + 25)
    localStorage.setItem('PosY', posy + 25)

    document.getElementById("circle").style.left = posx + 'px'
    document.getElementById("circle").style.top = posy + 'px'
  }
}