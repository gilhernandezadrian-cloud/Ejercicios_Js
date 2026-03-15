// document.querySelector("#accepto").checked
// console.log(document.querySelector("#accepto").checked)

document.querySelector("#accepto").addEventListener("change", actualizacion)

function actualizacion(){
    console.log(document.querySelector("#accepto").checked)
}