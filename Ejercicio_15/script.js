function dqs(sel){
    return document.querySelector(sel)
}

dqs("#botoMostrar").addEventListener("click", function(){
    dqs("#panell").classList.remove("amagat")
})

dqs("#botoAmagar").addEventListener("click", function(){
    dqs("#panell").classList.add("amagat")
})