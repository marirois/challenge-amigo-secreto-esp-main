/*
El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
*
- Nota del creador: Este código se escribió conforme a las especificaciones del Challenge Amigo Secreto, 
con la excepción que no se utilizó el ciclo for para mostrar la lista de nombres ingresados. Fuera de eso, 
se implementaron todas las especificaciones restantes.
*/

//Declaración de variables
let amigos = [];
let nombre = "";
let nuevoElemento = "";
let listaPadre = "";
let listaResultado = "";
let sorteo = 0;


// Función para agregar el año actual en el aviso de Copyright
function setAnio() {
    let anio = new Date().getFullYear();
    document.getElementById('anio-actual').textContent = anio;
}
document.addEventListener('DOMContentLoaded', setAnio);

// Función para agregar un nombre a la lista
function agregarAmigo() {

    nombre = document.getElementById('amigo').value;

    if(nombre == ""){
        alert("Ingresa un nombre válido");
    }else{
        amigos.push(nombre);
        actualizarLista();
        document.getElementById('amigo').value = "";
        document.getElementById('amigo').focus();
    }
}

// Función para agregar cada nombre ingresado en el input en el array amigos
function actualizarLista(){
    
    nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = document.getElementById('amigo').value;

    // console.log(amigos);
    // console.log(amigos.length);
    
    listaPadre = document.getElementById('listaAmigos');
    listaPadre.appendChild(nuevoElemento);
}

function sortearAmigo() {
    
    if (amigos.length == 0) {
        alert("No hay nombres para sortear");
        return;
    } else {
        sorteo = Math.floor(Math.random() * amigos.length);
        let amigoSecreto = document.createElement('li');
        amigoSecreto.textContent = `¡El nombre ganador es ${amigos[sorteo]}!`;
        listaResultado = document.getElementById('resultado');
        listaResultado.appendChild(amigoSecreto);

        console.log(`Amigo sorteado: ${sorteo}`);
    }

    amigos.length = 0;
    console.log(amigos);
    listaPadre.innerHTML = "";
    document.getElementById('agregar').setAttribute('disabled', true);
    document.getElementById('sortear').setAttribute('disabled', true);
    document.getElementById('reiniciar').removeAttribute('disabled');

}

function reiniciarJuego(){
    listaResultado.innerHTML = "";
    listaPadre.innerHTML = "";
    document.getElementById('agregar').removeAttribute('disabled');
    document.getElementById('sortear').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}