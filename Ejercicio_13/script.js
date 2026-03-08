// document.querySelector("#botonCambiar")

function dqs(sel){
    return document.querySelector(sel)
}

const colorChange=dqs("#botonColor")

colorChange.addEventListener("click",colorChangef)

function colorChangef(){
    if(colorChange.classList.contains("vermell")){
        colorChange.classList.remove("vermell")
    }else{
        colorChange.classList.add("vermell")
    }
}


