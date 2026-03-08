// document.querySelector("#boton")

function dqs(botonf){
    return document.querySelector(botonf)
}

const boton=dqs("#boton")

boton.addEventListener("click",ponerRojo)

const paragraf=dqs("#paragraf")

// paragraf.classList.add("vermell") 
// esto lo dejo comentado porque si no lo hiciera se añadiría la clase sin darle al botón

function ponerRojo(){
    paragraf.classList.add("vermell")
}