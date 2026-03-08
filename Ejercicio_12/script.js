// document.querySelector("#boton")

function dqs(botonf){
    return document.querySelector(botonf)
}

const botonAdd=dqs("#botonAdd")
const botonRemove=dqs("#botonRemove")

botonAdd.addEventListener("click",ponerRojo)
botonRemove.addEventListener("click",quitarRojo)

const paragraf=dqs("#paragraf")

// paragraf.classList.add("vermell") 
// esto lo dejo comentado porque si no lo hiciera se añadiría la clase sin darle al botón

function ponerRojo(){
    paragraf.classList.add("vermell")
}

function quitarRojo(){
    paragraf.classList.remove("vermell")
}