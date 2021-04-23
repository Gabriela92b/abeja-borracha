import {listaCoders} from "./data.js"

let randomButton = document.getElementById("buttonRandom")
let killButton = document.getElementById("buttonDrink")
let randomName 

randomButton.addEventListener('click', () => {
    selectRandom() 
    console.log(listaCoders)
    })

killButton.addEventListener('click', () => {
    killCoder()
    console.log(listaCoders)
    })

function selectRandom() {
    randomName = listaCoders [Math.floor(Math.random() * listaCoders.length)]
    console.log(randomName)
}

function killCoder() {
    for(let i=0; i < listaCoders.length; i++) {
        if (listaCoders [i] === randomName){
            listaCoders.splice(i,1) 
        }
    }
}
console.log(listaCoders)

