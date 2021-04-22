import {listaCoders} from "./data.js"

let matarBoton = document.getElementById("botonRandom")
let beberBoton = document.getElementById("botonDrink")
let nombreAleatorio 


matarBoton.addEventListener('click', ()=>{
    sacarRandom()
console.log(listaCoders)
})

beberBoton.addEventListener('click', ()=>{
    matarCoder()
    console.log(listaCoders)

    
    })

function sacarRandom() {
   nombreAleatorio = listaCoders[ Math.floor( Math.random() * listaCoders.length)]
    console.log(nombreAleatorio)
    
}

function matarCoder(){
    for (let i = 0; i < listaCoders.length; i++){
        if (listaCoders[i] === nombreAleatorio){
            listaCoders.splice(i, 1)
        }
    }
}

console.log(listaCoders)