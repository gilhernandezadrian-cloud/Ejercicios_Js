// document.querySelector("#boton")

function dqs(sel){
    return document.querySelector(sel)
}

const boton=dqs("#boton")

boton.addEventListener("click",ponerRojo)

const paragraf=dqs("#paragraf")

// paragraf.classList.add("vermell") 
// esto lo dejo comentado porque si no lo hiciera se añadiría la clase sin darle al botón

function ponerRojo(){
    paragraf.classList.add("vermell")
}