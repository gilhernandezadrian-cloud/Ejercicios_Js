function dqs(sel){
    return document.querySelector(sel)
}

dqs("#tema").addEventListener("change",function(){
    if(dqs("#tema").value === "Fosc") {
        dqs("#contenidor").classList.add("fosc")
    }else{
        dqs("#contenidor").classList.remove("fosc")
    }
})