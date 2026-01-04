const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const sectionMensajes = document.getElementById('resultado')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

// Variables Globales
let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge 
let inputCapipepo
let inputRatigueya 
let inputLangostelvis 
let inputTucapalma 
let inputPydos
let vidasEnemigo = 3
let vidasJugador = 3

class Mokepon {
    constructor(nombre, foto, vida){   
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []

    } 
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)

let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

let langostelvis = new Mokepon('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 5)

let tucapalma = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 5)

let pydos = new Mokepon('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 5)



hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'}
)

capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'}
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},   
    {nombre: '🌱', id: 'boton-tierra'}
)

langostelvis.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'}
)

tucapalma.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'}
)

pydos.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'}
)

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)   
//Iniciar Juego
function iniciarJuego(){   
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'


    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')
    inputLangostelvis = document.getElementById('Langostelvis')
    inputTucapalma = document.getElementById('Tucapalma')
    inputPydos = document.getElementById('Pydos')
    })


    

    //Variables
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    //Eventos
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

//Funciones para mascotas
function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
    }else if(inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
    }else if(inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id
    }else if(inputPydos.checked){
        spanMascotaJugador.innerHTML = inputPydos.id
    }else{
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

// Funciones aleoatorios
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
}
// Funciones de ataque
function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    } else if (ataqueAleatorio == 3){
        ataqueEnemigo = 'TIERRA'
    }
    combate()
    //se invoca la función aquí, antes de la de crearMensaje, para que la variable resultado ya tenga un valor establecido
}

//Funcion Combate
function combate(){
    

    if (ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE")
    }else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("GANASTES")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("GANASTES")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("GANASTES")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("PERDISTES")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador

        
    }
    //Revisar las vidas
    revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES! Ganaste 😄")
    }else if (vidasJugador == 0){
        crearMensajeFinal("Lo siento, perdiste 😔")
    }
}

//Funciones para mensajes
function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('resultado')
    

    /* let notificacion = document.createElement('p') */
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
}

//Funciones para mensajes
function crearMensajeFinal(resultadoFinal) {
    

    sectionMensajes.innerHTML = resultadoFinal

    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true

    
    sectionReiniciar.style.display = 'block'

}
function reiniciarJuego(){
    window.location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// NOTA: esta es otra manera de llamar al script despues de que se cargue todo el HTML. La funcion iniciarJuego se carga cuando ya todo el contenido esta cargado.

window.addEventListener('load', iniciarJuego)