// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Nota del creador: Este código se escribió conforme a las especificaciones del Challenge Amigo Secreto, implementando la creación de listas, iteración del ciclo for y arreglos.

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
        document.getElementById('amigo').focus();
    }else{
        amigos.push(nombre);
        recorrerArreglo();
        document.getElementById('amigo').value = "";
        document.getElementById('amigo').focus();

    }
}

// Función para agregar cada nombre ingresado en el input en el array amigos
function recorrerArreglo(){
    
    listaPadre.innerHTML = "";
    
    for (i=0; i<amigos.length; i++){
        nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigos[i];
    
        listaPadre = document.getElementById('listaAmigos');
        listaPadre.appendChild(nuevoElemento);    
    }
    console.log(amigos);
    console.log(amigos.length);
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

        console.log(`Amigo Sorteado: ${sorteo}`);
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