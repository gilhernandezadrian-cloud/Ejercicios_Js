// document.querySelector("#nom").value
console.log(document.querySelector("#nom").value)

document.querySelector("#nom").addEventListener("change", actualizacion)

function actualizacion(){
    console.log(document.querySelector("#nom").value)
}