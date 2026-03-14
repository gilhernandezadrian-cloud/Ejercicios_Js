function dqs(sel){
    document.querySelector(sel)
}

dqs("#botMostrar").addEventListener("click", function(){
    dqs("#panell").classList.remove("amagat")
})

dqs("#botoAmagar").addEventListener("click", function(){
    dqs("#panell").classList.add("amagat")
})