function dqs(sel){
    return document.querySelector(sel)
}

const estat = dqs("#estat")
const check = dqs("#check")

// dqs("#estat").textContent

check.addEventListener("change", function(){
    if(check.checked){
        estat.textContent="Actiu"
    }else{
        estat.textContent="Inactiu"
    }
})
