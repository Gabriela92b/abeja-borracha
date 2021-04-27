import {listaCoders} from "./data.js"

let randomButton = document.getElementById("buttonRandom")
let killButton = document.getElementById("buttonDrink")
let randomName 
let resetCoders = document.getElementById('buttonRestart')
let rutaAbeja = document.getElementById('abeja')
let audioAbeja = document.getElementById('sonidoAbeja')

randomButton.addEventListener('click', () => {
    selectRandom() 
})

killButton.addEventListener('click', () => {
    killCoder()
})

resetCoders.addEventListener('click', () => {
    location.reload()
})

rutaAbeja.addEventListener('click', ()=>{
    audioAbeja.play()
})

// DESPLEGAR NOMBRES

function desplegarNombres () {
    let templateHTML = ""
    for(let i=0; i < listaCoders.length; i++) {
    templateHTML += `<li>${listaCoders[i].nombre}</li>` 
    }
    document.getElementById("listaNombres").innerHTML = templateHTML;
}

//  SELECCIÓN RANDOM en button        

function selectRandom() {
    randomName = listaCoders [Math.floor(Math.random() * listaCoders.length)]
    document.getElementById('printName').innerHTML = randomName.nombre;
}

// Matar al coder, quitarlo de la lista

function killCoder() {
    for(let i=0; i < listaCoders.length; i++) {
        if (listaCoders [i] === randomName){
            listaCoders.splice(i,1)
        }
    }
    document.getElementById('printName').innerHTML = '';
    desplegarNombres()
}

desplegarNombres()



