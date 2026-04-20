const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')
 

// Variables Globales
let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge 
let inputCapipepo
let inputRatigueya 
let inputLangostelvis 
let inputTucapalma 
let inputPydos

let botonFuego 
let botonAgua 
let botonTierra

let indexAtaqueJugador
let indexAtaqueEnemigo 

let victoriasJugador = 0
let victoriasEnemigo = 0

let botones = []

let ataquesMokepon
let ataquesMokeponEnemigo
let mascotaJugador
let mascotaJugadorObjeto
let vidasEnemigo = 3
let vidasJugador = 3

let lienzo = mapa.getContext('2d')
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'

class Mokepon {
    constructor(nombre, foto, vida, x = 10, y = 10){   
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = 20
        this.y = 30
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    } 
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/mokepons_mokepon_hipodoge.png')
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/mokepons_mokepon_capipepo.png')
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/mokepons_mokepon_ratigueya.png')
let langostelvis = new Mokepon('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 5, './assets/mokepons_mokepon_langostelvis.png')
let tucapalma = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 5, './assets/mokepons_mokepon_tucapalma.png')
let pydos = new Mokepon('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 5, './assets/mokepons_mokepon_pydos.png')

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
    {nombre: '🔥', id: 'boton-fuego'},
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},   
    {nombre: '🌱', id: 'boton-tierra'},
)

langostelvis.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

tucapalma.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
)

pydos.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
)

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)   

//Iniciar Juego
function iniciarJuego(){   

    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

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

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

//Funciones para mascotas
function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = 'none'
    //sectionSeleccionarAtaque.style.display = 'flex'


    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }else if(inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    }else if(inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    }else if(inputPydos.checked){
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    }else{
        alert('Selecciona una mascota')
    }

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarmapa()
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}


function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `

        contenedorAtaques.innerHTML += ataquesMokepon
    })
     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     botones = document.querySelectorAll('.BAtaque')

}

function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                 boton.disabled = true
            }else if (e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else{
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
    
}

// Funciones aleoatorios
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('FUEGO')
    }else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('AGUA')
    } else{
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
    //se invoca la función aquí, antes de la de crearMensaje, para que la variable resultado ya tenga un valor establecido
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}   

//Funcion para iniciar pelea
function iniciarPelea(){
    if (ataqueJugador.length === 5){
        combate()
    }
}

//Funcion Combate
function combate(){
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
            
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA'){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = vidasJugador

        } else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO'){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = vidasJugador

        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA'){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = vidasJugador

        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }
    }     //Revisar las vidas
    revisarVidas()
 
}

function revisarVidas(){
    if (victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("Esto fue un empate 😄")
    }else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("FELICITACIONES! Ganaste 😄")
    } else {
        crearMensajeFinal("Lo siento, perdiste 😔")
    }
}

//Funciones para mensajes
function crearMensaje(resultado){
    
    /* let notificacion = document.createElement('p') */
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
}

//Funciones para mensajes
function crearMensajeFinal(resultadoFinal) {
    

    sectionMensajes.innerHTML = resultadoFinal

    
    sectionReiniciar.style.display = 'block'

}
function reiniciarJuego(){
    window.location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas(){

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY   
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0, 
        0, 
        mapa.width,
        mapa.height
    )
    lienzo.drawImage(
        mascotaJugadorObjeto.mapaFoto, 
        mascotaJugadorObjeto.x,
        mascotaJugadorObjeto.y,
        mascotaJugadorObjeto.ancho,
        mascotaJugadorObjeto.alto
    )
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
}

function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5
}

function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}
function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break;
        case 'ArrowDown':
            moverAbajo()
            break;
        case 'ArrowLeft':
            moverIzquierda()
            break;
        case 'ArrowRight':
            moverDerecha()
            break;
        default:
            break;
    }
}

function iniciarmapa(){
    mapa.width = 320
    mapa.height = 240
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)


    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
            return mokepones[i]
        }
    }
}
// NOTA: esta es otra manera de llamar al script despues de que se cargue todo el HTML. La funcion iniciarJuego se carga cuando ya todo el contenido esta cargado.
window.addEventListener('load', iniciarJuego)