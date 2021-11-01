function printMousePos(event) {
      console.log("clientX: " + event.clientX + " - clientY: " + event.clientY);
  }
document.addEventListener("click", printMousePos);
let counter = 0


localStorage.setItem('PosY', 25)
localStorage.setItem('PosX', 25)



function cliquei(){
  counter++;
  if(counter==3){
    counter=0;

    posy = (Math.random() * document.documentElement.scrollHeight*0.9)
    posx = (Math.random() * document.documentElement.scrollWidth*0.9)

    localStorage.setItem('PosX',posx+25)
    localStorage.setItem('PosY',posy+25)
    
    document.getElementById("circle").style.left = posx+'px'
    document.getElementById("circle").style.top = posy+'px'
  }
}
