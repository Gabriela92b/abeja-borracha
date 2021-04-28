import {listaCoders} from "./data.js"

// Variables 

let randomButton = document.getElementById("buttonRandom")
let killButton = document.getElementById("buttonDrink")
let randomName 
let resetCoders = document.getElementById('buttonRestart')
let rutaAbeja = document.getElementById('abeja')
let audioAbeja = document.getElementById('sonidoAbeja')

// Eventlistener

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

// Función: desplegar nombres

function desplegarNombres () {
    let templateHTML = ""
    for(let i=0; i < listaCoders.length; i++) {
    templateHTML += `<li>${listaCoders[i].nombre}</li>` 
    }
    document.getElementById("listaNombres").innerHTML = templateHTML;
}

//  Función: selección random de nombres         

function selectRandom() {
    randomName = listaCoders [Math.floor(Math.random() * listaCoders.length)]
    document.getElementById('printName').innerHTML = randomName.nombre;
}

// Función: quitar al nombre de la lista

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



