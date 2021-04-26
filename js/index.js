import {listaCoders} from "./data.js"

let randomButton = document.getElementById("buttonRandom")
let killButton = document.getElementById("buttonDrink")
let randomName 

randomButton.addEventListener('click', () => {
    selectRandom() 
    
    })

killButton.addEventListener('click', () => {
    killCoder()
    
    })


function desplegarNombres () {
    let templateHTML = ""
    for(let i=0; i < listaCoders.length; i++) {
    templateHTML += `<li>${listaCoders[i].nombre}</li>` 
    console.log(listaCoders[i].nombre) 
    }
    document.getElementById("listaNombres").innerHTML = templateHTML;
}

            

function selectRandom() {
    randomName = listaCoders [Math.floor(Math.random() * listaCoders.length)]
       
    document.getElementById('printName').innerHTML = randomName.nombre;
}

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