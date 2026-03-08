// document.querySelector("#entrada")
// document.querySelector("#sortida")

function dqs(seleccionf){
    return document.querySelector(seleccionf)
}

const entrada=dqs("#entrada")
const sortida=dqs("#sortida")

entrada.addEventListener("input",meterDatos)

function meterDatos(){
    sortida.textContent = entrada.value
}