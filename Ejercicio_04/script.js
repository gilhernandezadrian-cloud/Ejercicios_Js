// document.querySelector("#ciutat")
console.log(document.querySelector("#ciutat").value)

document.querySelector("#ciutat").addEventListener("change", actualizacion)
function actualizacion(){
    console.log(document.querySelector("#ciutat").value)
}