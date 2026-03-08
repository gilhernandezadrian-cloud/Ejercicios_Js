// document.querySelector("#botonValidar")

function dqs(sel){
    return document.querySelector(sel)
}

const validar=dqs("#botonValidar")
const email=dqs("#email")

validar.addEventListener("click", avisarf)

function avisarf(){
    if(email.value.trim() === ""){
        email.classList.add("error")
    }else{

        email.classList.remove("error")
    }
}
