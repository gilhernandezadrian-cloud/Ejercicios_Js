document.querySelector("#camp")
document.querySelector("#boton")

function dqs(sel){
    return document.querySelector(sel)
}

const camp=dqs("#camp")
const boton=dqs("#boton")

boton.addEventListener("click",cambiarTexto)

function cambiarTexto(){
    camp.value="Text introduït per JS"
}