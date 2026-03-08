function dqs(selection){
    return document.querySelector(selection)
}

const boton=dqs("#boto2").addEventListener("click",seleccionar)

const mensaje=dqs("#missatge")

function seleccionar(){
    // dqs("#mensaje")
    mensaje.textContent="Has fet clic!"
}