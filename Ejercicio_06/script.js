const boton= document.querySelector("#boto1")

// console.log("Click rebut!")

// document.querySelector("#boto1").addEventListener("click",boto1)


// boton.addEventListener("click",boto1)
// function boto1(){
//     console.log("Click rebut!")
// }

boton.addEventListener("click",boto1)
function boto1(e){
    console.log("Click rebut!")
    e.preventDefault()
}