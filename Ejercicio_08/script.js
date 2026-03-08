// document.querySelector("#boton")

function dqs(botonf){
    return document.querySelector(botonf)
}

const botoncito=dqs("#boton")
const negrita=dqs("#zona")

dqs("#boton").addEventListener("click", modificar)

function modificar(e){
    e.preventDefault()
    // dqs("#zona").innerHTML="<strong>Contingut nou</strong>"
    negrita.innerHTML="<strong>Contingut nou</strong>"
}




