function dqs(sel){
    return document.querySelector(sel)
}

const nom = dqs("#nom")

dqs("#boto").addEventListener("click", function(){
    if(nom.value.trim()!==""){
        dqs("#benvinguda").textContent = "Hola, " + nom.value + "!"
    }else {
        dqs("#benvinguda").textContent = `Escriu el teu nom.`
    }

})


// nom.value.trim()

// benvinguda.innerHTML = "Hola, " + nom.value + "!"
// `Hola, ${nom.value} !`

// nom.value.trim()"

// benvinguda.textContent = "Escriu el teu nom."