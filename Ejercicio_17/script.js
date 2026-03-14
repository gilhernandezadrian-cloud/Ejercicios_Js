function dqs(sel){
    return document.querySelector(sel)
}

const llista = dqs("#llista")
const valor = dqs("#item")

dqs("#botoAfegir").addEventListener("click",function(){
    if(dqs("#item").value.trim()!==""){
        llista.innerHTML += "<li>" + valor.value + "</li>"
        valor.value = ""
    }
})





// llista.innerHTML

// (pots fer llista.innerHTML += "<li>" + valor + "</li>" o acumular en variable). 

// netejar l’input després d’afegir.